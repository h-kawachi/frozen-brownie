export type ColorType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'error'
  | 'body'
  | 'white'
  | undefined

export const textColor = (model: string, color: ColorType = 'body'): string => {
  switch (model) {
    case 'dark':
      return color === 'white' ? `var(--color-body-700)` : `var(--color-white-700)`

    case 'sidebar':
      return `var(--color-${color}-700)`

    default:
      return `var(--color-${color}-700)`
  }
}

export const bgColor = (model: string, color: ColorType = 'body'): string => {
  switch (model) {
    case 'dark':
      return `var(--color-${color}-700)`

    case 'status':
      return `var(--color-${color}-100)`

    case 'input':
      return `var(--color-white-700)`

    default:
      return `var(--color-${color}-50)`
  }
}

export const borderColor = (model: string, color: ColorType = 'body'): string => {
  switch (model) {
    case 'border':
      return `var(--color-${color}-700)`

    case 'input':
      return `var(--color-body-300)`

    default:
      return 'transparent'
  }
}

export const hoverColor = (model: string, color: ColorType = 'body'): string => {
  switch (model) {
    case 'light':
      return `var(--color-${color}-100)`

    case 'input':
      return `var(--color-white-700)`

    default:
      return `var(--color-${color}-600)`
  }
}
