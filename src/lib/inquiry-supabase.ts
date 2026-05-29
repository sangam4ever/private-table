import { supabase } from './supabase-client';

interface StoredInquiry {
  name: string;
  email: string;
  phone?: string;
  eventDate: string;
  guestCount: string;
  experienceType: string;
  additionalNotes?: string;
}

function generateReferenceNumber(): string {
  const date = new Date();
  const dateStr = date.toISOString().split('T')[0].replace(/-/g, '');
  const randomNum = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, '0');
  return `PT-${dateStr}-${randomNum}`;
}

export async function saveInquiry(inquiryData: StoredInquiry): Promise<string> {
  try {
    const referenceNumber = generateReferenceNumber();

    console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
    console.log('Supabase Key exists:', !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

    const insertData = {
      reference_number: referenceNumber,
      name: inquiryData.name,
      email: inquiryData.email,
      phone: inquiryData.phone || null,
      event_date: inquiryData.eventDate,
      guest_count: inquiryData.guestCount,
      experience_type: inquiryData.experienceType,
      additional_notes: inquiryData.additionalNotes || null,
    };

    console.log('Attempting to insert:', { reference_number: referenceNumber, email: inquiryData.email });

    const { data, error } = await supabase.from('inquiries').insert([insertData]).select();

    if (error) {
      console.error('Supabase insert error code:', error.code);
      console.error('Supabase insert error message:', error.message);
      console.error('Supabase insert error details:', error);
      throw new Error(`Failed to save inquiry: ${error.message}`);
    }

    console.log('Insert successful:', data);
    return referenceNumber;
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    console.error('Error saving inquiry to Supabase:', errorMsg);
    throw error;
  }
}

export async function getInquiries(limit: number = 100) {
  try {
    const { data, error } = await supabase
      .from('inquiries')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Supabase query error:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    return [];
  }
}

export async function getInquiryByReference(referenceNumber: string) {
  try {
    const { data, error } = await supabase
      .from('inquiries')
      .select('*')
      .eq('reference_number', referenceNumber)
      .single();

    if (error && error.code !== 'PGRST116') {
      console.error('Supabase query error:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error fetching inquiry:', error);
    return null;
  }
}
