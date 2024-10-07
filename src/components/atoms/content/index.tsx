import Images from '../images';
import styles from './content.module.css';

interface ContentProps {
  url: string;
  icon: string;
  name: string;
  text: string;
}

export default function Content({ url, icon, name, text }: ContentProps) {
  return (
    <aside className={styles.wrapper}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${url})` }}
      />
      <div className={styles.content}>
        <Images url={icon} width={72} height={72} />
        <div className={styles.box}>
          <h1>{name}</h1>
          <p>{text}</p>
        </div>
      </div>
    </aside>
  );
}
