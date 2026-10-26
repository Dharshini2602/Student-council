export type FeedbackCategory =
  | 'Campus Facilities'
  | 'Academic Experience'
  | 'Events and Activities'
  | 'Student Wellbeing'
  | 'Suggestions'
  | 'Other';

export interface FeedbackSubmission {
  category: FeedbackCategory;
  subject: string;
  message: string;
  isAnonymous: boolean;
  name?: string;
  email?: string;
}

export interface FeedbackState {
  status: 'idle' | 'submitting' | 'success' | 'error';
  errorMessage?: string;
  referenceId?: string;
}
