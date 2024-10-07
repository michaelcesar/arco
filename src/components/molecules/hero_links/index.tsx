import styles from './hero_links.module.css';

export default function HeroLinks() {
  return (
    <aside className={styles.wrapper}>
      <div className={styles.box}>
        <span className={styles.title}>
          Produtos<span className={styles.highlighted}> digitais</span> que
          mudam <span className={styles.highlighted}> negócios</span>
        </span>
        <p className={styles.text}>
          Transforme sua presença na internet e potencialize seu negócio com
          soluções digitais sob medida.
        </p>
      </div>
    </aside>
  );
}
