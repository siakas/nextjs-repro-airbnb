import styles from '@/styles/layout/HeaderProfile.module.scss'
import { Globe, Menu, User } from 'react-feather'
import ThemeToggle from '@/components/ui/ThemeToggle'

export default function HeaderProfile() {
  return (
    <div className={styles.profile}>
      <a href="#">Become a host</a>
      <ThemeToggle icon />
      <a href="#" className={styles.globe}>
        <Globe />
      </a>
      <div className={styles.user}>
        <Menu className="menu" />
        <User className="userIcon" />
      </div>
    </div>
  )
}
