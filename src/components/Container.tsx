import { cn } from '@/lib/utils';
import { type HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The maximum width of the container
   * @default "max-w-7xl"
   */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full' | 'screen';
  /**
   * Whether to center the container horizontally
   * @default true
   */
  center?: boolean;
  /**
   * Custom padding classes
   * @default "px-4 sm:px-6 lg:px-8"
   */
  padding?: string;
  /**
   * Whether to apply default responsive padding
   * @default true
   */
  withPadding?: boolean;
}

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
  full: 'max-w-full',
  screen: 'max-w-screen',
};

export function Container({
  children,
  className,
  maxWidth = '7xl',
  center = true,
  padding,
  withPadding = true,
  ...props
}: ContainerProps) {
  const maxWidthClass = maxWidthClasses[maxWidth];
  const defaultPadding = 'px-4 sm:px-6 lg:px-8';
  const paddingClass = padding || (withPadding ? defaultPadding : '');

  return (
    <div
      className={cn(
        maxWidthClass,
        center && 'mx-auto',
        paddingClass,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
