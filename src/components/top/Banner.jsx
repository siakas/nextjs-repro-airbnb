import styles from '@/styles/top/banner.module.scss'

export default function Banner() {
  return (
    <section className={styles.container}>
      <div>
        <h2 className={styles.hdg}>Not sure where to go? Perfect.</h2>
        <a href="https://www.ekzm.co.jp/" target="_blank" rel="noopener noreferrer" className="btn btn-dark">
          {"I'm flexible"}
        </a>
      </div>
    </section>
  )
}
