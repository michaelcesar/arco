import styles from './footer.module.css';

export default function FooterLinks() {
  return (
    <footer className={styles.footer}>
      <div className={styles.hr}></div>
      <section className={styles.wrapper}>
        <div className={styles.boxTop}>
          <ul className={styles.ulStyle}>
            <li>
              <p>
                <a>Termos de Uso</a>
              </p>
            </li>
            <div className={styles.divLine}></div>
            <li>
              <p>
                <a>Políticas de Privacidade</a>
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.boxBottom}>
          <p>© Todos os direitos reservados, Arco Content, 2024.</p>
        </div>
      </section>
    </footer>
  );
}
