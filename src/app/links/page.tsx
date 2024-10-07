import Link from '@/components/atoms/link';
import styles from './links.module.css';
import Images from '@/components/atoms/images';
import Content from '@/components/atoms/content';
import HeroLinks from '@/components/molecules/hero_links';
import FooterLinks from '@/components/molecules/footer_links';

export default function Home() {
  const web = [
    'Aplicação web',
    'Landing page',
    'Site',
    'E-commerce',
    'Automações'
  ];

  return (
    <main className={styles.wrapper}>
      <section className={styles.grid}>
        <section className={styles.content}>
          <Images url="/images/logo_white.svg" width={60} height={60} />
          <HeroLinks />
        </section>
        <section className={styles.links}>
          <Link list={web} />
          <Content
            url="/images/youtube.webp"
            icon="/images/yt.svg"
            name="Youtube"
            text="Tecnologia, marketing e negócios."
          />
          <Content
            url="/images/insta.webp"
            icon="/images/insta.svg"
            name="Instagram"
            text="Conteúdos diários sobre tecnologia."
          />
        </section>
        <FooterLinks />
      </section>
    </main>
  );
}
