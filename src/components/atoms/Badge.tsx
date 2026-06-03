type BadgeVariant = 'brand' | 'success' | 'danger' | 'warning' | 'neutral' | 'subtle'

interface BadgeProps {
  variant?: BadgeVariant
  children: React.ReactNode
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  brand:   'bg-kj-lime text-kj-dark',
  success: 'bg-kj-success/20 text-kj-success border border-kj-success/40',
  danger:  'bg-kj-danger/20 text-kj-danger border border-kj-danger/40',
  warning: 'bg-kj-warning/20 text-kj-warning border border-kj-warning/40',
  neutral: 'bg-kj-light/10 text-kj-light/75',
  subtle:  'bg-kj-slate/20 text-kj-light/60',
}

export default function Badge({ variant = 'brand', children, className = '' }: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center',
        'font-mono font-medium text-[10px] tracking-[3px] uppercase',
        'px-2.5 py-[4.5px] rounded-[1.25px]',
        variantStyles[variant],
        className,
      ].join(' ')}
    >
      {children}
    </span>
  )
}
