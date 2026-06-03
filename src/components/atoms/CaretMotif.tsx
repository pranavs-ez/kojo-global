'use client'

interface CaretMotifProps {
  size?: 'desktop' | 'mobile'
  className?: string
  /** stopped = static (output delivered). blinking = live (default). */
  state?: 'blinking' | 'stopped'
}

export default function CaretMotif({
  size = 'desktop',
  className = '',
  state = 'blinking',
}: CaretMotifProps) {
  const w = size === 'desktop' ? 24 : 20
  const h = size === 'desktop' ? 5  : 4

  return (
    <span
      className={[
        'inline-block bg-kj-lime rounded-[1px] ml-1 align-baseline',
        state === 'blinking'
          ? '[animation:kj-blink_1.1s_step-end_infinite]'
          : '',
        className,
      ].join(' ')}
      style={{ width: w, height: h }}
      aria-hidden="true"
    />
  )
}
