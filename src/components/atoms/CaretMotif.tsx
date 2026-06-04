'use client'

interface CaretMotifProps {
  className?: string
  state?: 'blinking' | 'stopped'
}

// Single caret — no dual desktop/mobile variants to avoid display class conflicts.
// 24×5px matches Figma 167:2328. Caller must include display class if needed.
export default function CaretMotif({
  className = '',
  state = 'blinking',
}: CaretMotifProps) {
  return (
    <span
      className={[
        'bg-kj-lime rounded-[1px] ml-2 align-baseline',
        state === 'blinking'
          ? '[animation:kj-blink_1.2s_ease-in-out_infinite]'
          : 'opacity-100',
        className,
      ].join(' ')}
      style={{ display: 'inline-block', width: 24, height: 5 }}
      aria-hidden="true"
    />
  )
}
