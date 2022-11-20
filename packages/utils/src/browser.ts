export const isFirefox = (): boolean => /firefox/i.test(window.navigator.userAgent)
export const isMobile = (): boolean =>
  /(iPhone|iPod|iPad|Android|BlackBerry)/i.test(window.navigator.userAgent)
