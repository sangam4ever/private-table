'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MagneticButton } from '@/components/ui/MagneticButton';

// Form validation schema
const inquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  eventDate: z.string().min(1, 'Please select an event date'),
  guestCount: z.string().min(1, 'Please select number of guests'),
  experienceType: z.string().min(1, 'Please select an experience type'),
  additionalNotes: z.string().optional(),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

const STEPS = [
  { id: 1, title: 'Contact Info', description: 'Let us know how to reach you' },
  { id: 2, title: 'Event Details', description: 'When and how many guests?' },
  { id: 3, title: 'Experience', description: 'Choose your experience' },
];

export function InquiryForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: InquiryFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit inquiry');
      }

      console.log('Form submitted:', data);
      setSubmitSuccess(true);
      reset();
      setCurrentStep(1);

      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = async () => {
    const fieldsMap = {
      1: ['name', 'email'],
      2: ['eventDate', 'guestCount'],
      3: ['experienceType'],
    } as const;

    const fieldsToValidate = fieldsMap[currentStep as keyof typeof fieldsMap];

    const isValid = await trigger(fieldsToValidate);
    if (isValid && currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progressPercentage = (currentStep / STEPS.length) * 100;

  return (
    <section id="inquiry" className="py-20 md:py-32 px-6 md:px-8 bg-obsidian">
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <SectionHeader
          eyebrow="BEGIN YOUR JOURNEY"
          title="Private Inquiry"
          alignment="center"
          subtitle="Tell us about your vision. We'll create something extraordinary."
          className="mb-16"
        />

        {/* Success Message */}
        {submitSuccess && (
          <motion.div
            className="mb-8 p-6 bg-gold/10 border border-gold text-gold rounded-lg text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            Thank you for your inquiry. We&apos;ll be in touch within 24 hours.
          </motion.div>
        )}

        {/* Progress Bar */}
        <motion.div className="mb-12">
          {/* Progress Line */}
          <div className="relative h-1 bg-ivory/10 rounded-full overflow-hidden mb-8">
            <motion.div
              className="h-full bg-gold"
              initial={{ width: '0%' }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Step Indicators */}
          <div className="flex justify-between">
            {STEPS.map((step) => (
              <motion.div
                key={step.id}
                className="flex flex-col items-center cursor-pointer group"
                onClick={() => {
                  if (step.id < currentStep) {
                    setCurrentStep(step.id);
                  }
                }}
              >
                {/* Circle */}
                <motion.div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 transition-all ${
                    currentStep === step.id
                      ? 'bg-gold text-obsidian'
                      : currentStep > step.id
                      ? 'bg-gold/40 text-ivory'
                      : 'bg-ivory/10 text-ivory'
                  }`}
                  animate={
                    currentStep === step.id
                      ? { boxShadow: '0 0 20px rgba(201, 168, 76, 0.6)' }
                      : { boxShadow: '0 0 0px rgba(201, 168, 76, 0)' }
                  }
                >
                  {currentStep > step.id ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <span className="font-display font-light">{step.id}</span>
                  )}
                </motion.div>

                {/* Label */}
                <p className={`text-xs uppercase tracking-wider font-light text-center ${
                  currentStep === step.id ? 'gold-text' : 'text-ivory-60'
                }`}>
                  {step.title}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <AnimatePresence mode="wait">
            {/* Step 1: Contact Info */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <p className="text-ivory-60 font-light">{STEPS[0].description}</p>

                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-xs uppercase tracking-widest gold-text font-light mb-3">
                    Name *
                  </label>
                  <input
                    type="text"
                    {...register('name')}
                    className={`w-full bg-transparent border-b ${
                      errors.name ? 'border-red-500' : 'border-ivory/20'
                    } text-ivory placeholder-ivory/30 pb-3 focus:outline-none focus:border-gold transition-colors font-light`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-2">{errors.name.message}</p>}
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-xs uppercase tracking-widest gold-text font-light mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    className={`w-full bg-transparent border-b ${
                      errors.email ? 'border-red-500' : 'border-ivory/20'
                    } text-ivory placeholder-ivory/30 pb-3 focus:outline-none focus:border-gold transition-colors font-light`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-2">{errors.email.message}</p>}
                </motion.div>

                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-xs uppercase tracking-widest gold-text font-light mb-3">
                    Phone
                  </label>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="w-full bg-transparent border-b border-ivory/20 text-ivory placeholder-ivory/30 pb-3 focus:outline-none focus:border-gold transition-colors font-light"
                    placeholder="+61 (0)..."
                  />
                </motion.div>
              </motion.div>
            )}

            {/* Step 2: Event Details */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <p className="text-ivory-60 font-light">{STEPS[1].description}</p>

                {/* Event Date */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-xs uppercase tracking-widest gold-text font-light mb-3">
                    Preferred Event Date *
                  </label>
                  <input
                    type="date"
                    {...register('eventDate')}
                    className={`w-full bg-transparent border-b ${
                      errors.eventDate ? 'border-red-500' : 'border-ivory/20'
                    } text-ivory pb-3 focus:outline-none focus:border-gold transition-colors font-light`}
                  />
                  {errors.eventDate && <p className="text-red-400 text-xs mt-2">{errors.eventDate.message}</p>}
                </motion.div>

                {/* Guest Count */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-xs uppercase tracking-widest gold-text font-light mb-3">
                    Number of Guests *
                  </label>
                  <select
                    {...register('guestCount')}
                    className={`w-full bg-obsidian-100 border-b ${
                      errors.guestCount ? 'border-red-500' : 'border-ivory/20'
                    } text-ivory pb-3 focus:outline-none focus:border-gold transition-colors font-light cursor-pointer`}
                  >
                    <option value="">Select number of guests</option>
                    <option value="2-4">2-4 Guests</option>
                    <option value="6-12">6-12 Guests</option>
                    <option value="12-30">12-30 Guests</option>
                    <option value="30+">30+ Guests</option>
                  </select>
                  {errors.guestCount && <p className="text-red-400 text-xs mt-2">{errors.guestCount.message}</p>}
                </motion.div>
              </motion.div>
            )}

            {/* Step 3: Experience & Notes */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <p className="text-ivory-60 font-light">{STEPS[2].description}</p>

                {/* Experience Type */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-xs uppercase tracking-widest gold-text font-light mb-3">
                    Experience Type *
                  </label>
                  <select
                    {...register('experienceType')}
                    className={`w-full bg-obsidian-100 border-b ${
                      errors.experienceType ? 'border-red-500' : 'border-ivory/20'
                    } text-ivory pb-3 focus:outline-none focus:border-gold transition-colors font-light cursor-pointer`}
                  >
                    <option value="">Select experience</option>
                    <option value="intimate">The Intimate Table</option>
                    <option value="soiree">The Private Soirée</option>
                    <option value="grand">The Grand Event</option>
                    <option value="bespoke">Bespoke Experience</option>
                  </select>
                  {errors.experienceType && <p className="text-red-400 text-xs mt-2">{errors.experienceType.message}</p>}
                </motion.div>

                {/* Additional Notes */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-xs uppercase tracking-widest gold-text font-light mb-3">
                    Additional Notes
                  </label>
                  <textarea
                    {...register('additionalNotes')}
                    className="w-full bg-transparent border-b border-ivory/20 text-ivory placeholder-ivory/30 pb-3 focus:outline-none focus:border-gold transition-colors font-light resize-none"
                    rows={4}
                    placeholder="Dietary restrictions, cuisine preferences, special occasions..."
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Privacy Note */}
          <motion.p className="text-center text-xs text-ivory-60 font-light">
            We respect your privacy. Your information will only be used to contact you about your inquiry.
          </motion.p>

          {/* Navigation Buttons */}
          <motion.div className="flex gap-4 pt-8">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="flex-1 py-3 border border-gold/40 text-gold hover:border-gold transition-colors font-light rounded-full"
              >
                Back
              </button>
            )}

            {currentStep < STEPS.length ? (
              <MagneticButton
                variant="primary"
                onClick={handleNext}
                className={`flex-1 text-center ${currentStep === 1 ? 'flex-none w-full' : ''}`}
              >
                Next Step
              </MagneticButton>
            ) : (
              <MagneticButton
                variant="primary"
                className="flex-1 text-center"
                onClick={() => {}}
              >
                {isSubmitting ? 'Submitting...' : 'Send Inquiry'}
              </MagneticButton>
            )}
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}
