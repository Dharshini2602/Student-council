import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Info, Loader2, EyeOff } from 'lucide-react';
import { FeedbackCategory, FeedbackSubmission, FeedbackState } from '../../types/feedback';
import { FeedbackCategories } from './FeedbackCategories';
import { Button } from '../common/Button';

export const FeedbackForm: React.FC = () => {
  const [category, setCategory] = useState<FeedbackCategory>('Campus Facilities');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Validation errors
  const [errors, setErrors] = useState<{ subject?: string; message?: string; email?: string }>({});

  // Submission state
  const [submissionState, setSubmissionState] = useState<FeedbackState>({
    status: 'idle',
  });

  const MAX_SUBJECT = 120;
  const MAX_MESSAGE = 1000;

  const apiUrl = import.meta.env.VITE_FEEDBACK_API_URL;
  const isDemoMode = !apiUrl;

  const validate = (): boolean => {
    const newErrors: { subject?: string; message?: string; email?: string } = {};

    if (!subject.trim()) {
      newErrors.subject = 'Please provide a subject for your suggestion.';
    } else if (subject.trim().length < 5) {
      newErrors.subject = 'Subject should be at least 5 characters long.';
    }

    if (!message.trim()) {
      newErrors.message = 'Please provide details of your suggestion or concern.';
    } else if (message.trim().length < 20) {
      newErrors.message = 'Message should be at least 20 characters to provide sufficient context.';
    }

    if (!isAnonymous && email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        newErrors.email = 'Please provide a valid college email address (e.g. student@ppg.edu.in).';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setSubmissionState({ status: 'submitting' });

    const submissionData: FeedbackSubmission = {
      category,
      subject: subject.trim(),
      message: message.trim(),
      isAnonymous,
      name: isAnonymous ? undefined : name.trim() || undefined,
      email: isAnonymous ? undefined : email.trim() || undefined,
    };

    try {
      if (apiUrl) {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submissionData),
        });

        if (!response.ok) {
          throw new Error('Server responded with an error');
        }
      } else {
        // Controlled client simulation: 800ms delay
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      const generatedRef = `PPGIT-SC-${Date.now().toString().slice(-6)}`;

      setSubmissionState({
        status: 'success',
        referenceId: generatedRef,
      });

      // Reset fields
      setSubject('');
      setMessage('');
      setName('');
      setEmail('');
    } catch {
      setSubmissionState({
        status: 'error',
        errorMessage: 'Unable to deliver your feedback at this moment. Please try again or email studentcouncil@ppg.edu.in directly.',
      });
    }
  };

  const handleReset = () => {
    setSubmissionState({ status: 'idle' });
  };

  return (
    <div className="bg-white rounded-md border border-border p-6 sm:p-8 lg:p-10">
      {/* Success State Full-width Inline Banner */}
      {submissionState.status === 'success' ? (
        <div className="p-6 rounded-sm bg-accent-100 border border-accent-600 space-y-4" role="alert">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-accent-700 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-display-sm text-primary-700">
                SUGGESTION RECEIVED
              </h3>
              <p className="mt-1 font-body text-text-base leading-relaxed">
                Thank you for helping improve our campus community. Your submission has been catalogued for review by the PPGIT Student Council.
              </p>
              <div className="mt-3 p-3 bg-white rounded-sm border border-border font-mono text-sm">
                <span className="font-label text-xs text-text-muted block">Tracking Reference:</span>
                <span className="font-bold text-primary-700">{submissionState.referenceId}</span>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <Button variant="primary" size="md" onClick={handleReset}>
              SUBMIT ANOTHER SUGGESTION
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Failure State Full-width Inline Banner */}
          {submissionState.status === 'error' && (
            <div className="p-4 rounded-sm bg-feedback-error/10 border border-feedback-error text-feedback-error flex items-start gap-3" role="alert">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <p className="font-body-sm leading-relaxed">{submissionState.errorMessage}</p>
            </div>
          )}

          {/* Category Selection */}
          <div>
            <label className="block font-body-sm font-semibold text-text-base mb-2">
              Category <span className="text-accent-700" aria-hidden="true">*</span>
              <span className="sr-only"> (required)</span>
            </label>
            <FeedbackCategories
              selectedCategory={category}
              onSelectCategory={setCategory}
            />
          </div>

          {/* Subject Field */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label htmlFor="feedback-subject" className="block font-body-sm font-semibold text-text-base">
                Subject <span className="text-accent-700" aria-hidden="true">*</span>
                <span className="sr-only"> (required)</span>
              </label>
              <span
                className={`font-body-sm text-xs ${
                  subject.length >= MAX_SUBJECT * 0.9 ? 'text-feedback-warning font-semibold' : 'text-text-muted'
                }`}
              >
                {subject.length}/{MAX_SUBJECT}
              </span>
            </div>
            <input
              id="feedback-subject"
              type="text"
              maxLength={MAX_SUBJECT}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              aria-describedby={errors.subject ? 'subject-error' : undefined}
              placeholder="e.g. Extended Library Hours during Examination Weeks"
              className={`w-full h-[48px] px-4 rounded-sm bg-white border ${
                errors.subject ? 'border-feedback-error' : 'border-border-strong'
              } text-text-base font-body-sm focus:outline-none focus:border-primary-700 focus:ring-3 focus:ring-accent-600/30 transition-all`}
            />
            {errors.subject && (
              <p id="subject-error" className="mt-1.5 font-body-sm text-xs text-feedback-error flex items-center gap-1.5" role="alert">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.subject}</span>
              </p>
            )}
          </div>

          {/* Message Description */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label htmlFor="feedback-message" className="block font-body-sm font-semibold text-text-base">
                Message <span className="text-accent-700" aria-hidden="true">*</span>
                <span className="sr-only"> (required)</span>
              </label>
              <span
                className={`font-body-sm text-xs ${
                  message.length >= MAX_MESSAGE * 0.9 ? 'text-feedback-warning font-semibold' : 'text-text-muted'
                }`}
              >
                {message.length}/{MAX_MESSAGE}
              </span>
            </div>
            <textarea
              id="feedback-message"
              rows={5}
              maxLength={MAX_MESSAGE}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              placeholder="Provide specific observations, the department or facility affected, and practical ideas for enhancement..."
              className={`w-full p-4 rounded-sm bg-white border ${
                errors.message ? 'border-feedback-error' : 'border-border-strong'
              } text-text-base font-body-sm focus:outline-none focus:border-primary-700 focus:ring-3 focus:ring-accent-600/30 transition-all resize-y`}
            />
            {errors.message && (
              <p id="message-error" className="mt-1.5 font-body-sm text-xs text-feedback-error flex items-center gap-1.5" role="alert">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Anonymous Option */}
          <div className="pt-1">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={isAnonymous}
                onChange={(e) => setIsAnonymous(e.target.checked)}
                className="mt-1 h-4 w-4 rounded-sm border-border-strong text-primary-700 focus:ring-accent-600"
              />
              <div>
                <span className="font-body-sm font-semibold text-text-base flex items-center gap-1.5">
                  <EyeOff className="w-4 h-4 text-accent-700" />
                  Submit Anonymously
                </span>
                <span className="block font-body-sm text-xs text-text-muted mt-0.5">
                  Your identity will not be attached to this suggestion.
                </span>
              </div>
            </label>
          </div>

          {/* Contact Details (Optional if not anonymous) */}
          {!isAnonymous && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-sm bg-surface border border-border">
              <div>
                <label htmlFor="feedback-name" className="block font-body-sm font-semibold text-text-base mb-1">
                  Full Name (Optional)
                </label>
                <input
                  id="feedback-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Student Name"
                  className="w-full h-[48px] px-3.5 rounded-sm bg-white border border-border-strong font-body-sm focus:outline-none focus:border-primary-700 focus:ring-3 focus:ring-accent-600/30"
                />
              </div>

              <div>
                <label htmlFor="feedback-email" className="block font-body-sm font-semibold text-text-base mb-1">
                  College Email (Optional for updates)
                </label>
                <input
                  id="feedback-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  placeholder="student@ppg.edu.in"
                  className={`w-full h-[48px] px-3.5 rounded-sm bg-white border ${
                    errors.email ? 'border-feedback-error' : 'border-border-strong'
                  } font-body-sm focus:outline-none focus:border-primary-700 focus:ring-3 focus:ring-accent-600/30`}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 font-body-sm text-xs text-feedback-error" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Submit Action */}
          <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body-sm text-xs text-text-muted">
              Submissions are reviewed monthly by the council secretariat.
            </p>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={submissionState.status === 'submitting'}
              className="w-full sm:w-auto"
            >
              {submissionState.status === 'submitting' ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  <span>SENDING...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  <span>SUBMIT SUGGESTION</span>
                </>
              )}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};
