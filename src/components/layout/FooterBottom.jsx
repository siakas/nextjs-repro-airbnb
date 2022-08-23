import styles from '@/styles/layout/FooterBottom.module.scss'
import { Globe, DollarSign, Facebook, Twitter, Instagram } from 'react-feather'
import ThemeToggle from '@/components/ui/ThemeToggle'

export default function FooterBottom() {
  return (
    <div className={styles.bottom}>
      <ThemeToggle text />

      <p className={styles.utility}>
        <span>
          <Globe className="globe" />
          English
        </span>
        <span>
          <DollarSign className="doller" />
          USD
        </span>
        <span>
          <Facebook />
        </span>
        <span>
          <Twitter />
        </span>
        <span>
          <Instagram />
        </span>
      </p>

      <p className={styles.copyright}>
        &copy; 2021 <a href="#">Fugiat Molestias</a>
      </p>
    </div>
  )
}
