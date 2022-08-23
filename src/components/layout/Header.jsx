import styles from '@/styles/layout/Header.module.scss'
import HeaderLogo from '@/components/layout/HeaderLogo'
import HeaderNav from '@/components/layout/HeaderNav'
import MobileNav from '@/components/layout/MobileNav'
import HeaderForm from '@/components/layout/HeaderForm'
import HeaderProfile from '@/components/layout/HeaderProfile'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`${scrolled || router.pathname !== '/' ? 'scrolled' : ''} ${styles.header}`}
      >
        <div className={styles.inner}>
          <HeaderLogo />
          <HeaderNav />
          <MobileNav />
          <HeaderForm />
          <HeaderProfile />
        </div>
      </header>
    </>
  )
}
