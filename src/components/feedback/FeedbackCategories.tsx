import React from 'react';
import { Building2, BookOpen, Sparkles, HeartPulse, Lightbulb, HelpCircle } from 'lucide-react';
import { FeedbackCategory } from '../../types/feedback';

interface FeedbackCategoriesProps {
  selectedCategory: FeedbackCategory;
  onSelectCategory: (cat: FeedbackCategory) => void;
}

export const FEEDBACK_CATEGORY_OPTIONS: {
  category: FeedbackCategory;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  {
    category: 'Campus Facilities',
    description: 'Classrooms, labs, library, campus amenities, canteen & Wi-Fi',
    icon: Building2,
  },
  {
    category: 'Academic Experience',
    description: 'Curriculum support, schedules, guest lectures, technical clubs',
    icon: BookOpen,
  },
  {
    category: 'Events and Activities',
    description: 'Cultural fests, symposiums, sports competitions, workshops',
    icon: Sparkles,
  },
  {
    category: 'Student Wellbeing',
    description: 'Peer support, guidance, campus inclusion, student welfare',
    icon: HeartPulse,
  },
  {
    category: 'Suggestions',
    description: 'New initiatives, student club ideas, campus improvements',
    icon: Lightbulb,
  },
  {
    category: 'Other',
    description: 'General student inquiries and feedback',
    icon: HelpCircle,
  },
];

export const FeedbackCategories: React.FC<FeedbackCategoriesProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6" role="radiogroup" aria-label="Select Feedback Category">
      {FEEDBACK_CATEGORY_OPTIONS.map((item) => {
        const Icon = item.icon;
        const isSelected = selectedCategory === item.category;

        return (
          <button
            type="button"
            key={item.category}
            role="radio"
            aria-checked={isSelected}
            onClick={() => onSelectCategory(item.category)}
            className={`p-4 rounded-sm text-left transition-colors border flex items-start gap-3 focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent-600 ${
              isSelected
                ? 'bg-primary-100 border-primary-700 text-primary-900 shadow-1'
                : 'bg-white border-border hover:border-primary-600 text-text-base'
            }`}
          >
            <div
              className={`p-2 rounded-sm shrink-0 ${
                isSelected ? 'bg-primary-700 text-white' : 'bg-primary-50 text-primary-700'
              }`}
              aria-hidden="true"
            >
              <Icon className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-label text-xs text-primary-700">
                {item.category}
              </span>
              <span className="block font-body-sm text-xs text-text-muted mt-1 leading-snug">
                {item.description}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
};
