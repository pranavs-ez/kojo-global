type DividerType = 'section-top' | 'row' | 'row-inner' | 'faq-item' | 'footer-rule'

interface DividerProps {
  type?: DividerType
  className?: string
}

const dividerStyles: Record<DividerType, string> = {
  'section-top': 'border-[rgba(248,248,242,0.08)]',
  'row':         'border-[rgba(80,80,96,0.35)]',
  'row-inner':   'border-[rgba(80,80,96,0.14)]',
  'faq-item':    'border-[rgba(80,80,96,0.30)]',
  'footer-rule': 'border-[rgba(248,248,242,0.08)]',
}

export default function Divider({ type = 'section-top', className = '' }: DividerProps) {
  return (
    <hr
      className={[
        'w-full border-t border-0 m-0',
        dividerStyles[type],
        className,
      ].join(' ')}
    />
  )
}
