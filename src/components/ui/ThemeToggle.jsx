import { useEffect, useState } from 'react'
import { Sun, Moon } from 'react-feather'
import styles from '@/styles/ui/ThemeToggle.module.scss'

export default function ThemeToggle({ text, icon }) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(document.body.classList.contains('dark'))
  }, [])

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark')
      window.localStorage.setItem('airbnbTheme', 'dark')
    } else {
      document.body.classList.remove('dark')
      window.localStorage.setItem('airbnbTheme', 'light')
    }
  }, [isDark])

  return (
    <div className={styles.toggle} onClick={() => setIsDark(!isDark)}>
      {icon && <>{isDark ? <Sun className="sun" /> : <Moon className="moon" />}</>}
      {text && 'Switch Theme'}
    </div>
  )
}
