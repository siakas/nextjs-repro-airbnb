import styles from '@/styles/layout/Header.module.scss'
import HeaderLogo from '@/components/layout/HeaderLogo'
import HeaderNav from '@/components/layout/HeaderNav'
import MobileNav from '@/components/layout/MobileNav'
import HeaderForm from '@/components/layout/HeaderForm'
import HeaderProfile from '@/components/layout/HeaderProfile'

export default function Header() {
  return (
    <>
      <header className={styles.header}>
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
