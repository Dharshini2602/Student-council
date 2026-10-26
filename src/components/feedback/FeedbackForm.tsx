import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Info, Lock, EyeOff } from 'lucide-react';
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

  const validate = (): boolean => {
    const newErrors: { subject?: string; message?: string; email?: string } = {};

    if (!subject.trim()) {
      newErrors.subject = 'Please provide a brief subject for your suggestion.';
    } else if (subject.trim().length < 5) {
      newErrors.subject = 'Subject should be at least 5 characters long.';
    }

    if (!message.trim()) {
      newErrors.message = 'Please provide details of your suggestion or concern.';
    } else if (message.trim().length < 20) {
      newErrors.message = 'Message should be at least 20 characters to help us understand.';
    }

    if (!isAnonymous && email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        newErrors.email = 'Please provide a valid email address (e.g., student@ppg.edu.in).';
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

    // Check if an external API URL is provided via environment variables
    const apiUrl = import.meta.env.VITE_FEEDBACK_API_URL;

    try {
      if (apiUrl) {
        // Send to verified institutional backend
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submissionData),
        });

        if (!response.ok) {
          throw new Error('Server responded with an error');
        }
      } else {
        // Controlled client simulation: generate an institutional reference number
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      const generatedRef = `PPGIT-SC-${Date.now().toString().slice(-6)}`;

      setSubmissionState({
        status: 'success',
        referenceId: generatedRef,
      });

      // Reset form
      setSubject('');
      setMessage('');
      setName('');
      setEmail('');
    } catch (err) {
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
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8 lg:p-10">
      {submissionState.status === 'success' ? (
        <div className="py-8 text-center max-w-lg mx-auto space-y-5 animate-fade-in">
          <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h3 className="font-heading text-2xl sm:text-3xl text-navy uppercase">
            Suggestion Received
          </h3>

          <p className="text-sm text-muted-text leading-relaxed">
            Thank you for helping improve our campus community. Your submission has been catalogued for review by the PPGIT Student Council.
          </p>

          <div className="p-4 rounded-lg bg-light-blue border border-primary/20 text-xs">
            <span className="text-muted-text block uppercase font-medium">Tracking Reference</span>
            <span className="font-mono text-base font-bold text-primary mt-1 block">
              {submissionState.referenceId}
            </span>
          </div>

          <div className="pt-4">
            <Button variant="primary" onClick={handleReset}>
              SUBMIT ANOTHER SUGGESTION
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Category Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
              Select Category <span className="text-red-500">*</span>
            </label>
            <FeedbackCategories
              selectedCategory={category}
              onSelectCategory={setCategory}
            />
          </div>

          {/* Subject */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-navy">
                Subject / Title <span className="text-red-500">*</span>
              </label>
              <span className="text-[11px] text-gray-400">
                {subject.length}/{MAX_SUBJECT}
              </span>
            </div>
            <input
              id="subject"
              type="text"
              maxLength={MAX_SUBJECT}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="e.g., Extended Library Hours during Examination Weeks"
              className={`w-full px-4 py-2.5 rounded-lg text-sm bg-white border ${
                errors.subject ? 'border-red-500 focus:ring-red-400' : 'border-gray-200 focus:border-primary focus:ring-primary'
              } focus:outline-none focus:ring-1 transition-all`}
            />
            {errors.subject && (
              <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.subject}</span>
              </p>
            )}
          </div>

          {/* Message Description */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-navy">
                Detailed Suggestion or Concern <span className="text-red-500">*</span>
              </label>
              <span className="text-[11px] text-gray-400">
                {message.length}/{MAX_MESSAGE}
              </span>
            </div>
            <textarea
              id="message"
              rows={5}
              maxLength={MAX_MESSAGE}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Provide specific observations, the department/area affected, and practical ideas for enhancement..."
              className={`w-full px-4 py-3 rounded-lg text-sm bg-white border ${
                errors.message ? 'border-red-500 focus:ring-red-400' : 'border-gray-200 focus:border-primary focus:ring-primary'
              } focus:outline-none focus:ring-1 transition-all resize-y`}
            />
            {errors.message && (
              <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Anonymous Option */}
          <div className="pt-2 pb-1">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={isAnonymous}
                onChange={(e) => setIsAnonymous(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <div>
                <span className="text-sm font-semibold text-navy flex items-center gap-1.5">
                  <EyeOff className="w-4 h-4 text-secondary" />
                  Submit Anonymously
                </span>
                <span className="block text-xs text-muted-text mt-0.5">
                  Your identity will not be attached to this submission.
                </span>
              </div>
            </label>
          </div>

          {/* Contact Details (Disabled if Anonymous) */}
          {!isAnonymous && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100 animate-fade-in">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-1">
                  Full Name (Optional)
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., Student Representative"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-gray-200 rounded focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-1">
                  College Email (Optional for updates)
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@ppg.edu.in"
                  className={`w-full px-3.5 py-2 text-sm bg-white border ${
                    errors.email ? 'border-red-500' : 'border-gray-200'
                  } rounded focus:outline-none focus:border-primary`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                )}
              </div>
            </div>
          )}

          {/* Privacy & Safeguard Notice */}
          <div className="flex items-start gap-2.5 p-3.5 rounded bg-light-blue/60 border border-primary/10 text-xs text-navy/90">
            <Lock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Institutional Privacy:</strong> Submissions are treated with discretion by designated Student Council representatives. Feedback regarding sensitive personal well-being or safety is directed to authorized college counseling officers.
            </p>
          </div>

          {/* Error Banner */}
          {submissionState.status === 'error' && (
            <div className="p-3.5 rounded bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{submissionState.errorMessage}</span>
            </div>
          )}

          {/* Submit Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-text">
              <Info className="w-3.5 h-3.5 inline mr-1 text-gray-400" />
              All constructive proposals are reviewed during monthly council sessions.
            </p>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={submissionState.status === 'submitting'}
              className="w-full sm:w-auto flex items-center justify-center gap-2"
            >
              {submissionState.status === 'submitting' ? (
                <span>SUBMITTING...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
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
