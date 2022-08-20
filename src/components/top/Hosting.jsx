import styles from '@/styles/top/Hosting.module.scss'

export default function Hosting() {
  return (
    <section className={styles.container}>
      <div>
        <h2>Try hosting</h2>
        <p>Earn extra income and unlock new oppurtunities by sharing your space.</p>
        <a href="http://www.ekzm.co.jp/" target="_blank" rel="noopener noreferrer" className="btn btn-light">
          Learn more
        </a>
      </div>
    </section>
  )
}
