import React from 'react';
import { cn } from '../../lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
  displaySize?: 'lg' | 'md' | 'sm';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
  displaySize = 'lg',
  className,
}) => {
  const isDark = theme === 'dark';

  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  const displayFontClasses = {
    lg: 'font-display-lg',
    md: 'font-display-md',
    sm: 'font-display-sm',
  };

  return (
    <div className={cn('flex flex-col max-w-[720px] mb-12 sm:mb-16', alignmentClasses[align], className)}>
      {eyebrow && (
        <div className="flex items-center gap-3 mb-3">
          {/* 24px x 2px green rule */}
          <span
            className={cn(
              'w-6 h-[2px] inline-block shrink-0',
              isDark ? 'bg-accent-600' : 'bg-accent-700'
            )}
            aria-hidden="true"
          />
          <span
            className={cn(
              'font-label',
              isDark ? 'text-accent-600' : 'text-accent-700'
            )}
          >
            {eyebrow}
          </span>
        </div>
      )}

      <h2
        className={cn(
          displayFontClasses[displaySize],
          isDark ? 'text-white' : 'text-primary-700'
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            'mt-4 font-body-lg',
            isDark ? 'text-text-on-dark-muted' : 'text-text-muted'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
