'use client'

import { memo, useMemo } from 'react'
import { Link } from 'react-router'
import clsx from 'clsx'
import Loader from '~/components/ui/Loader'
import Icon from '~/components/ui/Icon'
import './button.scss'

type Props = {
  model: string
  type?: 'button' | 'submit'
  color?: string
  href?: string
  target?: string
  title?: string
  name?: string
  loading?: boolean
  disabled?: boolean
  icon?: string
  className?: string
  children?: React.ReactNode
  onClick?: (event?: React.MouseEvent) => void
}

const Button = ({
  type = 'button',
  model,
  color = 'body',
  title,
  name,
  href,
  target,
  loading,
  disabled,
  icon,
  className,
  children,
  onClick,
}: Props) => {
  const componentHeight = useMemo<string>(() => {
    if (model.includes('lg')) {
      return 'var(--component-height-lg)'
    } else if (model.includes('sm')) {
      return 'var(--component-height-sm)'
    } else {
      return 'var(--component-height-md)'
    }
  }, [model])

  const iconSize = useMemo<string>(() => {
    if (model?.includes('sm')) return '18'
    return '24'
  }, [model])

  const loaderColor = useMemo<string>(() => {
    if (model?.includes('dark')) return color === 'white' ? 'primary' : 'white'
    if (model?.includes('light')) return color === 'white' ? 'primary' : color
    if (model?.includes('border')) return color || 'white'
    return 'white'
  }, [model, color])

  const textColor = useMemo<string>(() => {
    if (model?.includes('dark')) return `var(--color-${color === 'white' ? 'body-700' : 'white'})`
    if (model?.includes('light')) return `var(--color-${color}-700)`
    if (model?.includes('border')) return `var(--color-${color}-700)`
    return 'var(--color-white)'
  }, [model, color])

  const bgColor = useMemo<string>(() => {
    if (model?.includes('light')) return `var(--color-${color}-50)`
    if (model?.includes('border')) return `var(--color-${color}-50)`
    return `var(--color-${color}-700)`
  }, [model, color])

  const borderColor = useMemo<string>(() => {
    if (model?.includes('border')) return `var(--color-${color}-700)`
    return 'transparent'
  }, [model, color])

  const hoverColor = useMemo<string>(() => {
    if (model?.includes('light')) return `var(--color-${color}-100)`
    return `var(--color-${color}-600)`
  }, [model, color])

  const submittingClass = useMemo<string | undefined>(() => {
    if (loading && icon) return 'submitting-icon'
    else if (loading) return 'submitting-overlay'
    return undefined
  }, [loading, icon])

  const buttonStyle: { [key: string]: string } = {
    '--component-height': componentHeight,
    '--text-color': textColor,
    '--bg-color': bgColor,
    '--border-color': borderColor,
    '--hover-color': hoverColor,
  }

  const contents = (
    <>
      {loading && <Loader model="clock" color={loaderColor} />}

      {icon && (
        <span className="icon">
          <Icon value={icon} size={iconSize} />
        </span>
      )}

      {(children || title) && <span className="text">{children || title}</span>}
    </>
  )

  if (href) {
    return (
      <Link
        to={href}
        target={target}
        className={clsx('btn', model, className, { disabled })}
        style={buttonStyle}
        title={title}
        tabIndex={disabled ? -1 : undefined}
        onClick={onClick}
      >
        {contents}
      </Link>
    )
  } else {
    return (
      <button
        type={type}
        className={clsx('btn', model, className, submittingClass, { disabled })}
        style={buttonStyle}
        name={name}
        aria-label={title}
        tabIndex={disabled || loading ? -1 : undefined}
        disabled={disabled}
        onClick={onClick}
      >
        {contents}
      </button>
    )
  }
}

export default memo(Button)
