import React from 'react';
import { cn } from '@/utils/classname';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button variants for different visual styles */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  /** Button sizes */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Whether the button should take full width */
  fullWidth?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Icon to display before the text */
  startIcon?: React.ReactNode;
  /** Icon to display after the text */
  endIcon?: React.ReactNode;
  /** Children content */
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      startIcon,
      endIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = [
      'inline-flex items-center justify-center gap-2',
      'font-medium rounded-lg',
      'transition-all duration-200',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer',
      'active:scale-[0.98]'
    ];

    const variants = {
      primary: [
        'bg-foreground text-background',
        'hover:bg-foreground/90',
        'focus-visible:ring-foreground/50',
        'shadow-sm hover:shadow-md'
      ],
      secondary: [
        'bg-background border border-foreground/20 text-foreground',
        'hover:bg-foreground/5',
        'focus-visible:ring-foreground/50'
      ],
      outline: [
        'border-2 border-foreground text-foreground bg-transparent',
        'hover:bg-foreground hover:text-background',
        'focus-visible:ring-foreground/50'
      ],
      ghost: [
        'text-foreground bg-transparent',
        'hover:bg-foreground/10',
        'focus-visible:ring-foreground/50'
      ],
      danger: [
        'bg-red-600 text-white',
        'hover:bg-red-700',
        'focus-visible:ring-red-500/50',
        'shadow-sm hover:shadow-md'
      ]
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm min-h-[32px]',
      md: 'px-4 py-2 text-sm min-h-[40px]',
      lg: 'px-6 py-3 text-base min-h-[48px]',
      xl: 'px-8 py-4 text-lg min-h-[56px]'
    };

    const iconSizes = {
      sm: 'w-4 h-4',
      md: 'w-4 h-4',
      lg: 'w-5 h-5',
      xl: 'w-6 h-6'
    };

    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className
        )}
        disabled={isDisabled}
        {...props}
      >
        {loading ? (
          <>
            <div
              className={cn(
                'animate-spin border-2 border-current border-t-transparent rounded-full',
                iconSizes[size]
              )}
            />
            {children && <span className="opacity-70">Loading...</span>}
          </>
        ) : (
          <>
            {startIcon && (
              <span className={cn('flex-shrink-0', iconSizes[size])}>
                {startIcon}
              </span>
            )}
            {children}
            {endIcon && (
              <span className={cn('flex-shrink-0', iconSizes[size])}>
                {endIcon}
              </span>
            )}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
