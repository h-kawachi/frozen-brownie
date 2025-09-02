export const scrollElement = () => {
  return document.scrollingElement!
}

// ページトップ (スムーズスクロール)
export const pagetop = () => {
  scrollElement().scrollTo({ top: 0, behavior: 'smooth' })
}

// ページトップ (即座)
export const pagetopNoScroll = () => {
  scrollElement().scrollTo({ top: 0 })
}

// アンカーリンク (スムーズスクロール)
export const anchor = (e: Event) => {
  const link = e.currentTarget ? (e.currentTarget as HTMLElement) : (e.target as HTMLElement)
  const url = link.getAttribute('href')

  if (url) {
    const hash = url.split('/').slice(-1)[0]

    if (hash && hash.charAt(0) === '#' && document.querySelector(hash)) {
      e.preventDefault()
      link.blur()

      const header = document.querySelector<HTMLElement>('#header')
      const buffer = header ? header.offsetHeight : 0
      let top: number = 0

      if (hash !== 'pagetop') {
        const target = document.querySelector<HTMLElement>(hash)
        if (target) top = target.getBoundingClientRect().top + scrollElement().scrollTop - buffer
      }

      scrollElement().scrollTo({ top, behavior: 'smooth' })
    }
  }
}

// ポインタ一の取得
export const getTouchPosition = (event: TouchEvent | MouseEvent, direction: string) => {
  if ('ontouchstart' in window) {
    const e = event as TouchEvent

    switch (direction) {
      case 'X':
        return e.changedTouches[0]?.pageX ?? 0

      case 'Y':
        return e.changedTouches[0]?.pageY ?? 0

      default:
        return 0
    }
  } else {
    const e = event as MouseEvent

    switch (direction) {
      case 'X':
        return e.pageX ?? 0

      case 'Y':
        return e.pageY ?? 0

      default:
        return 0
    }
  }
}

// スクロールバーの表示切り替え
export const toggleScrollbarSpacer = async (value: boolean): Promise<boolean> => {
  const body = document.body
  const barW = 'ontouchstart' in window ? 0 : window.innerWidth - body.clientWidth

  return new Promise((resolve) => {
    if (value) {
      body.classList.add('hide_scrollbar')
      body.style.paddingRight = barW + 'px'
      resolve(true)
    } else {
      window.setTimeout(() => {
        body.classList.remove('hide_scrollbar')
        body.style.paddingRight = ''
        resolve(true)
      }, 300)
    }
  })
}
