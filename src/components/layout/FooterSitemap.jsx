import styles from '@/styles/layout/FooterSitemap.module.scss'

export default function FooterSitemap() {
  return (
    <div className={styles.sitemap}>
      <div className={styles.column}>
        <h2>About</h2>
        <ul className={styles.list}>
          <li>
            <a href="#">How Airbnb works</a>
          </li>
          <li>
            <a href="#">Newsroom</a>
          </li>
          <li>
            <a href="#">Airbnb 2021</a>
          </li>
          <li>
            <a href="#">Investors</a>
          </li>
          <li>
            <a href="#">Airbnb Plus</a>
          </li>
          <li>
            <a href="#">Airbnb Luxe</a>
          </li>
          <li className="lg-hidden">
            <a href="#">HotelTonight</a>
          </li>
          <li className="lg-hidden">
            <a href="#">Airbnb for Work</a>
          </li>
          <li className="lg-hidden">
            <a href="#">Made possible by Hosts</a>
          </li>
          <li className="lg-hidden">
            <a href="#">Careers</a>
          </li>
          <li className="lg-hidden">
            <a href="#">Founders&apos; Letter</a>
          </li>
        </ul>
      </div>
      <div className={styles.column}>
        <h2>Community</h2>
        <ul className={styles.list}>
          <li>
            <a href="#">Diversity & Belonging</a>
          </li>
          <li>
            <a href="#">Accessibility</a>
          </li>
          <li>
            <a href="#">Airbnb Associates</a>
          </li>
          <li>
            <a href="#">Frontline Stays</a>
          </li>
          <li>
            <a href="#">Guest Referrals</a>
          </li>
          <li>
            <a href="#">Airbnb.org</a>
          </li>
        </ul>
      </div>
      <div className={styles.column}>
        <h2>Host</h2>
        <ul className={styles.list}>
          <li>
            <a href="#">Host your home</a>
          </li>
          <li>
            <a href="#">Host an Online Experience</a>
          </li>
          <li>
            <a href="#">Host an Experience</a>
          </li>
          <li>
            <a href="#">Responsible hosting</a>
          </li>
          <li>
            <a href="#">Resource Centre</a>
          </li>
          <li>
            <a href="#">Community Centre</a>
          </li>
        </ul>
      </div>
      <div className={styles.column}>
        <h2>Support</h2>
        <ul className={styles.list}>
          <li>
            <a href="#">Our COVID-19 Response</a>
          </li>
          <li>
            <a href="#">Help Centre</a>
          </li>
          <li>
            <a href="#">Cancellation options</a>
          </li>
          <li>
            <a href="#">Neighbourhood Support</a>
          </li>
          <li>
            <a href="#">Trust & Safety</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
