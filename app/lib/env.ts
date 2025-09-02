const breakpoint = 1024

const viewport = () => {
  return window?.innerWidth < 390
    ? 'width=390, viewport-fit=cover'
    : 'width=device-width, initial-scale=1.0, minimum-scale=1.0'
}

const mediaquery = () => {
  return window.matchMedia(`(min-width: ${breakpoint}px)`)
}

const isMobile = () => {
  return !window.matchMedia(`(min-width: ${breakpoint}px)`).matches
}

const isTouch = () => {
  return 'ontouchstart' in window
}

const isPWA = () => {
  return window.matchMedia('(display-mode: standalone)').matches
}

export default {
  breakpoint,
  isMobile,
  mediaquery,
  viewport,
  isTouch,
  isPWA,
}
