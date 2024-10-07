import Link from '@/components/atoms/link';
import styles from './links.module.css';
import Images from '@/components/atoms/images';
import Content from '@/components/atoms/content';

export default function Home() {
  const texts = [
    'Landing page',
    'E-commerce',
    'Site institucional',
    'TECNOLOGIA'
  ];

  return (
    <main className={styles.wrapper}>
      <section className={styles.grid}>
        <section className={styles.content}>
          <Images url="/images/arco.webp" width={314} height={208} />
        </section>
        <section className={styles.links}>
          <Link list={texts}></Link>
          <Content
            url="/images/youtube.webp"
            icon="/images/yt.svg"
            name="Youtube"
            text="Tecnologia, marketing e negócios."
          />
          <Content
            url="/images/youtube.webp"
            icon="/images/insta.svg"
            name="Instagram"
            text="Conteúdos diários sobre tecnologia."
          />
        </section>
      </section>
    </main>
  );
}
