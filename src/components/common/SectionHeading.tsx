import React from 'react';
import { cn } from '../../lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
  className,
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  const isDark = theme === 'dark';

  return (
    <div className={cn('flex flex-col max-w-3xl mb-10 md:mb-14', alignmentClasses[align], className)}>
      {eyebrow && (
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-[2px] bg-secondary inline-block" />
          <span
            className={cn(
              'text-xs md:text-sm font-semibold tracking-widest uppercase',
              isDark ? 'text-secondary-light' : 'text-secondary'
            )}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={cn(
          'text-3xl sm:text-4xl lg:text-5xl font-heading tracking-wide leading-tight uppercase',
          isDark ? 'text-white' : 'text-navy'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-base sm:text-lg leading-relaxed font-normal',
            isDark ? 'text-gray-300' : 'text-muted-text'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
