import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  href,
  isExternal = false,
  className,
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded select-none cursor-pointer';

  const variantStyles = {
    primary:
      'bg-primary text-white hover:bg-primary-dark focus-visible:ring-primary shadow-sm hover:shadow active:scale-[0.98]',
    secondary:
      'bg-secondary text-white hover:bg-secondary-dark focus-visible:ring-secondary shadow-sm hover:shadow active:scale-[0.98]',
    outline:
      'border-2 border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary active:scale-[0.98]',
    dark:
      'bg-navy text-white hover:bg-navy-light focus-visible:ring-navy border border-white/10 active:scale-[0.98]',
    ghost:
      'text-body-text hover:bg-light-blue hover:text-primary focus-visible:ring-primary',
  };

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 uppercase tracking-wider font-semibold',
    md: 'text-sm px-5 py-2.5 uppercase tracking-wider font-semibold',
    lg: 'text-base px-7 py-3.5 uppercase tracking-widest font-semibold',
  };

  const combinedClasses = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
