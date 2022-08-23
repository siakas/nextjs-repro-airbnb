import styles from '@/styles/top/Explore.module.scss'

export default function Explore({ data }) {
  return (
    <section className={styles.container}>
      <h2>Explore nearby</h2>
      <div className={styles.items}>
        {data.map(({ name, time }, index) => (
          <div className={styles.item} key={index}>
            <div className={styles.img}>
              <img src={`/assets/img/explore/${index + 1}.jpg`} alt="" className="shadow" />
              <img src={`/assets/img/explore/${index + 1}.jpg`} alt="" />
            </div>
            <span>
              <h3 className={styles.name}>{name}</h3>
              <p className={styles.time}>{time}-hour drive</p>
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
