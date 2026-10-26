import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'primary-on-dark' | 'secondary' | 'secondary-on-dark' | 'outline-accent' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  isExternal?: boolean;
  withArrow?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  href,
  isExternal = false,
  withArrow = false,
  className,
  children,
  disabled,
  ...props
}) => {
  const baseStyles =
    'group inline-flex items-center justify-center font-button rounded-md transition-colors duration-150 select-none cursor-pointer focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none min-h-[44px] whitespace-nowrap';

  const sizeStyles = {
    sm: 'h-[36px] px-4 text-xs tracking-[0.08em]',
    md: 'h-[44px] px-6 text-sm tracking-[0.08em]',
    lg: 'h-[52px] px-8 text-sm tracking-[0.08em]',
  };

  const variantStyles = {
    primary:
      'bg-primary-700 text-white hover:bg-primary-900 border border-transparent focus-visible:outline-accent-600',
    'primary-on-dark':
      'bg-accent-600 text-primary-900 hover:bg-accent-700 hover:text-white border border-transparent focus-visible:outline-white font-bold',
    secondary:
      'bg-transparent text-primary-700 border-[1.5px] border-primary-700 hover:bg-primary-700 hover:text-white focus-visible:outline-accent-600',
    'secondary-on-dark':
      'bg-transparent text-white border-[1.5px] border-white/60 hover:border-white hover:bg-white hover:text-primary-900 focus-visible:outline-white',
    'outline-accent':
      'bg-transparent text-accent-600 border-[1.5px] border-accent-600 hover:bg-accent-600 hover:text-primary-900 focus-visible:outline-accent-600',
    ghost:
      'bg-transparent text-primary-700 hover:bg-primary-100 hover:text-primary-900 focus-visible:outline-accent-600 border border-transparent',
    link:
      'bg-transparent text-primary-700 hover:text-accent-700 p-0 h-auto min-h-0 underline-offset-4 hover:underline focus-visible:outline-accent-600',
  };

  const content = (
    <span className="inline-flex items-center justify-center leading-none">
      {children}
      {withArrow && (
        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-150 ease-out group-hover:translate-x-1 shrink-0" />
      )}
    </span>
  );

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (to && !disabled) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  if (href && !disabled) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {content}
    </button>
  );
};
