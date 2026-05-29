import fs from 'fs/promises';
import path from 'path';

interface StoredInquiry {
  referenceNumber: string;
  timestamp: string;
  name: string;
  email: string;
  phone?: string;
  eventDate: string;
  guestCount: string;
  experienceType: string;
  additionalNotes?: string;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');

async function ensureDataDir() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch (error) {
    console.error('Error creating data directory:', error);
  }
}

function generateReferenceNumber(): string {
  const date = new Date();
  const dateStr = date.toISOString().split('T')[0].replace(/-/g, '');
  const randomNum = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, '0');
  return `PT-${dateStr}-${randomNum}`;
}

export async function saveInquiry(inquiryData: Omit<StoredInquiry, 'referenceNumber' | 'timestamp'>): Promise<string> {
  try {
    await ensureDataDir();

    const referenceNumber = generateReferenceNumber();
    const newInquiry: StoredInquiry = {
      referenceNumber,
      timestamp: new Date().toISOString(),
      ...inquiryData,
    };

    let inquiries: StoredInquiry[] = [];
    try {
      const fileContent = await fs.readFile(INQUIRIES_FILE, 'utf-8');
      inquiries = JSON.parse(fileContent);
    } catch (error) {
      // File doesn't exist yet, start with empty array
      inquiries = [];
    }

    inquiries.push(newInquiry);
    await fs.writeFile(INQUIRIES_FILE, JSON.stringify(inquiries, null, 2));

    return referenceNumber;
  } catch (error) {
    console.error('Error saving inquiry:', error);
    throw new Error('Failed to save inquiry');
  }
}

export async function getInquiries(): Promise<StoredInquiry[]> {
  try {
    const fileContent = await fs.readFile(INQUIRIES_FILE, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    return [];
  }
}
