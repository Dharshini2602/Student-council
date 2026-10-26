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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-8">
      {FEEDBACK_CATEGORY_OPTIONS.map((item) => {
        const Icon = item.icon;
        const isSelected = selectedCategory === item.category;

        return (
          <button
            type="button"
            key={item.category}
            onClick={() => onSelectCategory(item.category)}
            className={`p-4 rounded-lg text-left transition-all duration-200 border flex items-start gap-3.5 ${
              isSelected
                ? 'bg-light-blue/70 border-primary shadow-sm text-navy ring-1 ring-primary'
                : 'bg-white border-gray-200 hover:border-gray-300 text-gray-700'
            }`}
          >
            <div
              className={`p-2 rounded-md shrink-0 ${
                isSelected ? 'bg-primary text-white' : 'bg-gray-100 text-primary'
              }`}
            >
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-sm font-bold tracking-wide uppercase text-navy">
                {item.category}
              </span>
              <span className="block text-xs text-muted-text mt-1 leading-snug">
                {item.description}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
};
