import Images from '../images';
import Words from '../words';
import styles from './link.module.css';

interface LinkProps {
  list: string[];
}

export default function Link({ list }: LinkProps) {
  return (
    <aside className={styles.wrapper}>
      <Images url="/images/whatsapp.svg" width={72} height={72}></Images>
      <div className={styles.content}>
        <div className={styles.box}>
          <Words texts={list}></Words>
          <p>Solicite agora seu orçamento.</p>
        </div>
        <Images url="/images/arrow_right.svg" width={50} height={50}></Images>
      </div>
    </aside>
  );
}
