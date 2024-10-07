import styles from './links.module.css';
import Logo from '@/components/atoms/logo';

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.content}>
        <Logo url="/images/logo_text.svg" width={200} height={140}></Logo>
      </section>
    </main>
  );
}
