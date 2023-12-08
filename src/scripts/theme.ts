document.addEventListener('astro:page-load', () => {
  function theme() {
    const localStorageSupported = typeof localStorage !== 'undefined'
    const storedTheme = localStorageSupported
      ? localStorage.getItem('theme')
      : null

    return (
      storedTheme ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light')
    )
  }

  function setTheme(theme: string) {
    const element = document.documentElement
    element.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }

  const currentTheme = theme()
  setTheme(currentTheme)

  function handleThemeChange() {
    const newTheme = document.documentElement.classList.contains('dark')
      ? 'light'
      : 'dark'
    setTheme(newTheme)
  }

  const themeToggleButton = document.getElementById('ThemeToggle')
  themeToggleButton?.addEventListener('click', handleThemeChange)
})
