import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'solid' | 'outline';
type ButtonSize = 'sm' | 'md';

type ButtonProps = {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  solid: 'bg-primary text-white hover:bg-primary-dark',
  outline:
    'border border-primary text-primary hover:bg-primary hover:text-white',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'text-xs font-semibold tracking-widest px-6 py-3',
  md: 'text-sm font-semibold px-7 py-3',
};

const Button = ({
  href,
  variant = 'solid',
  size = 'md',
  className = '',
  children,
}: ButtonProps) => {
  const classes = `inline-block rounded-full transition-colors ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`;

  const isSamePageAnchor = href.startsWith('#');

  if (isSamePageAnchor) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={classes}>
      {children}
    </Link>
  );
};

export default Button;
