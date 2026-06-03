import { forwardRef } from 'react'
import type { ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'ghost' | 'text'
type ButtonSize    = 'hero' | 'nav' | 'cta' | 'section'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  as?: 'button' | 'a'
  href?: string
}

const styles: Record<ButtonVariant, Record<ButtonSize | 'base', string>> = {
  primary: {
    base: [
      'inline-flex items-center justify-center gap-1.5',
      'bg-kj-lime text-kj-dark font-mono font-medium',
      'rounded-[2px] border-[1.5px] border-kj-lime',
      'transition-all duration-200 ease-out',
      'hover:bg-[#C8CC00] hover:shadow-cta-hover',
      'focus-visible:outline-none focus-visible:shadow-focus',
      'disabled:opacity-40 disabled:cursor-not-allowed',
    ].join(' '),
    hero:    'text-[14px] px-6 h-[52px]',
    nav:     'text-[13px] w-[136px] h-[38px]',
    cta:     'text-[15px] font-sans font-semibold w-[200px] h-[48px]',
    section: 'text-[14px] px-5 h-[44px]',
  },
  ghost: {
    base: [
      'inline-flex items-center justify-center gap-1.5',
      'bg-transparent text-kj-primary font-medium',
      'border border-kj-primary rounded-[2px]',
      'transition-all duration-200 ease-out',
      'hover:bg-[rgba(164,72,250,0.08)]',
      'focus-visible:outline-none focus-visible:shadow-focus',
    ].join(' '),
    hero:    'text-[14px] px-6 h-[52px]',
    nav:     'text-[13px] px-4 h-[38px]',
    cta:     'text-[15px] px-6 h-[48px]',
    section: 'text-[14px] px-5 h-[44px]',
  },
  text: {
    base: [
      'inline-flex items-center gap-1',
      'bg-transparent border-none',
      'font-mono font-medium text-kj-lime',
      'transition-opacity duration-200',
      'hover:opacity-70',
      'focus-visible:outline-none focus-visible:shadow-focus',
    ].join(' '),
    hero:    'text-[13px] opacity-[0.22] text-kj-light font-regular',
    nav:     'text-[13px]',
    cta:     'text-[14px]',
    section: 'text-[13px]',
  },
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'section', className = '', children, as, href, ...props }, ref) => {
    const cls = `${styles[variant].base} ${styles[variant][size]} ${className}`

    if (as === 'a' && href) {
      return (
        <a href={href} className={cls}>
          {children}
        </a>
      )
    }

    return (
      <button ref={ref} className={cls} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
