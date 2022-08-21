import styles from '@/styles/top/Hero.module.scss'

export default function Hero() {
  return (
    <section className={`${styles.hero} light hero`}>
      <div className={styles.inner}>
        <div>
          <h1>Olympian & Paralympian Online Experiences</h1>
          <a href="#" className="btn btn-light">
            Explore Now
          </a>
        </div>
      </div>
    </section>
  )
}
