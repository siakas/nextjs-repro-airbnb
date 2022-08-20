import styles from '@/styles/top/Cards.module.scss'

export default function Cards({ title, items, urlPrefix }) {
  return (
    <section className={styles.container}>
      <h2>{title}</h2>

      <div className={styles.cards}>
        {items.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.img}>
              <img src={urlPrefix + item.img} alt="" className="shadow" />
              <img src={urlPrefix + item.img} alt="" />
            </div>
            <span>
              <h3>{item.title}</h3>
              {item.p && <p>{item.p}</p>}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
