import React from 'react';
import { cn } from '../../lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'reading' | 'narrow' | 'wide' | 'full';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  size = 'default',
  ...props
}) => {
  const sizeClasses = {
    reading: 'max-w-[720px]',
    narrow: 'max-w-4xl',
    default: 'max-w-[1280px]',
    wide: 'max-w-[1440px]',
    full: 'max-w-full',
  };

  return (
    <div
      className={cn('mx-auto px-5 sm:px-6 lg:px-8 w-full', sizeClasses[size], className)}
      {...props}
    >
      {children}
    </div>
  );
};
