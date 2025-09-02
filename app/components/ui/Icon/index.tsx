'use client'

import { memo } from 'react'
import clsx from 'clsx'
import './icon.scss'

type Props = {
  value: string
  size?: string
  className?: string
}

const Icon = ({ value, size = '24', className }: Props) => {
  const iconStyle: { [key: string]: string } = {
    width: size + 'px',
    height: size + 'px',
    fontSize: size + 'px',
  }

  return (
    <span className={clsx('font-icon', className)} style={iconStyle}>
      {value}
    </span>
  )
}

export default memo(Icon)
