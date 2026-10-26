export type EventCategory = 
  | 'All' 
  | 'Cultural' 
  | 'Technical' 
  | 'Symposium' 
  | 'Sports' 
  | 'Celebration' 
  | 'Other';

export interface Event {
  id: string;
  slug: string;
  title: string;
  category: EventCategory;
  description: string;
  longDescription?: string;
  date?: string;
  time?: string;
  venue?: string;
  image?: string;
  status: 'upcoming' | 'completed' | 'draft';
  registrationUrl?: string;
  isVerified?: boolean;
  coordinator?: {
    name: string;
    contact?: string;
  };
  highlights?: string[];
}
