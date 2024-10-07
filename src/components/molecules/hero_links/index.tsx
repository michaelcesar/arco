import styles from './hero_links.module.css';

export default function HeroLinks() {
  return (
    <aside className={styles.wrapper}>
      <div className={styles.box}>
        <h1>
          <span className={styles.span}>Produtos</span>&nbsp;digitais que&nbsp;
          <span className={styles.span}>mudam</span>&nbsp;negócios
        </h1>
        <p className={styles.text}>
          Transforme sua presença na internet e potencialize seu negócio com
          soluções digitais sob medida.
        </p>
      </div>
    </aside>
  );
}
