import { memo, useMemo } from 'react'
import clsx from 'clsx'
import './loader.scss'

type Props = {
  model: string
  color?: string
  rounded?: boolean
  progress?: number
}

const Loader = ({ model = 'spin', color = 'primary', rounded, progress = 0 }: Props) => {
  const colorVariant = useMemo<string>(() => {
    if (color === 'white') return color
    return `var(--color-${color}-700)`
  }, [color])

  const radius = model === 'circle' ? 48 / 2 - 2 * 2 : 24 / 2 - 2 * 2
  const array = radius * 2 * Math.PI

  const loaderStyle: { [key: string]: string } = {
    '--color-variant': colorVariant,
    '--progress-variant': progress + '%',
  }

  switch (model) {
    case 'dot':
      return (
        <div className={clsx('loader', model, { rounded })} style={loaderStyle}>
          <span />
          <span />
          <span />
        </div>
      )

    case 'line':
      return (
        <div className={clsx('loader', model, { rounded })} style={loaderStyle}>
          <span />
        </div>
      )

    case 'clock':
      return (
        <div className={clsx('loader', model, { rounded })} style={loaderStyle}>
          {[...Array(12)].map((_, index) => (
            <i key={index} />
          ))}
        </div>
      )

    case 'bar':
      return (
        <div className={clsx('loader', model, { rounded, animate: progress })} style={loaderStyle}>
          <span />
        </div>
      )

    case 'circle':
      return (
        <div className={clsx('loader', model, { animate: progress })} style={loaderStyle}>
          <svg viewBox="0 0 48 48">
            <circle cx="24" cy="24" r={radius} strokeWidth="4" fill="transparent" />
          </svg>
          <svg viewBox="0 0 48 48">
            <circle
              cx="24"
              cy="24"
              r={radius}
              strokeDasharray={array}
              strokeDashoffset={array - (progress / 100) * array}
              strokeWidth="4"
              fill="transparent"
            />
          </svg>
          <span className="count">{progress}</span>
        </div>
      )

    default:
      return (
        <svg className={clsx('loader', model)} style={loaderStyle} viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="20" strokeWidth="6" fill="none" />
        </svg>
      )
  }
}

export default memo(Loader)
