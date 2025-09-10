'use client'

import { memo, useMemo } from 'react'
import { type ColorType, textColor, bgColor, borderColor, hoverColor } from '~/lib/color-helper'
import { Link } from 'react-router'
import clsx from 'clsx'
import Loader from '~/components/ui/Loader'
import Icon from '~/components/ui/Icon'
import './button.scss'

type Props = {
  model: string
  type?: 'button' | 'submit'
  color?: ColorType
  href?: string
  target?: string
  title?: string
  name?: string
  loading?: boolean
  disabled?: boolean
  icon?: string
  className?: string
  children?: React.ReactNode
  onClick?: (event: React.MouseEvent) => void
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

  const colorModel = useMemo<string>(() => {
    if (model?.includes('dark')) return 'dark'
    if (model?.includes('light')) return 'light'
    if (model?.includes('border')) return 'border'
    if (model?.includes('sidebar')) return 'sidebar'
    if (model?.includes('input')) return 'input'
    return 'default'
  }, [model])

  const loaderColor = useMemo<string>(() => {
    if (model?.includes('dark')) return color === 'white' ? 'primary' : 'white'
    if (model?.includes('light')) return color === 'white' ? 'primary' : color
    if (model?.includes('border')) return color || 'white'
    return 'white'
  }, [model, color])

  const submittingClass = useMemo<string | undefined>(() => {
    if (loading && icon) return 'submitting-icon'
    else if (loading) return 'submitting-overlay'
    return undefined
  }, [loading, icon])

  const buttonStyle: { [key: string]: string } = {
    '--component-height': componentHeight,
    '--text-color': textColor(colorModel, color),
    '--bg-color': bgColor(colorModel, color),
    '--border-color': borderColor(colorModel, color),
    '--hover-color': hoverColor(colorModel, color),
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
        tabIndex={disabled || loading ? -1 : undefined}
        onClick={disabled ? undefined : onClick}
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
        onClick={disabled ? undefined : onClick}
      >
        {contents}
      </button>
    )
  }
}

export default memo(Button)
