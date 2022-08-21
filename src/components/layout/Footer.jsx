import styles from '@/styles/layout/Footer.module.scss'
import FooterSitemap from '@/components/layout/FooterSitemap'
import FooterBottom from '@/components/layout/FooterBottom'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <FooterSitemap />
        <FooterBottom />
      </div>
    </footer>
  )
}
