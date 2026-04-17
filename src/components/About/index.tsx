import styles from './About.module.css';
import { useLanguage } from '../../contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img src="/diretor.jpg" alt="Director" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{t.about.title}</h2>
          <p className={styles.text}>{t.about.text}</p>
          <div className={styles.statsRow}>
            <div className={styles.statItem}><h4>+20</h4><p>{t.about.stats.years}</p></div>
            <div className={styles.statItem}><h4>  $  </h4><p>{t.about.stats.economy}</p></div>
            <div className={styles.statItem}><h4>100%</h4><p>{t.about.stats.security}</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}