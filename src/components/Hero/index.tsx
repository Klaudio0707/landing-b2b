import styles from './Hero.module.css';
import { useLanguage } from '../../contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bg}></div>
      <div className={styles.container}>
        <div className={styles.textBlock}>
          <span className={styles.preTitle}>{t.hero.preTitle}</span>
          <h1 className={styles.title}>
            {t.hero.title}<span className={styles.textOrange}>global</span>.
          </h1>
          <h2 className={styles.subHeadline}>
            {t.hero.subtitle}
          </h2>
          {/* <button className={styles.btnPrimary}>
            {t.hero.cta} <ArrowRight size={20}/>
          </button> */}
        </div>
      </div>
    </section>
  );
}