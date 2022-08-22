import styles from '@/styles/layout/HeaderNav.module.scss'

export default function HeaderNav() {
  return (
    <nav className={styles.nav}>
      <a href="#" className="active">
        Places to stay
      </a>
      <a href="#">Experiences</a>
      <a href="#">Online Experiences</a>
    </nav>
  )
}
