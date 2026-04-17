import { Package, BrainCircuit, Globe2, Ship, Calculator, BadgeDollarSign } from 'lucide-react';
import styles from './Services.module.css';
import { useLanguage } from '../../contexts/LanguageContext';

export function Services() {
  const { t } = useLanguage();

  const icons = [
    <Package size={32} />,
    <BrainCircuit size={32} />,
    <Globe2 size={32} />,
    <Ship size={32} />,
    <Calculator size={32} />,
    <BadgeDollarSign size={32} />
  ];

  const totalItems = icons.length;

  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <h2 className={styles.title}>
            {t.services.title} <span className={styles.highlight}>{t.services.highlight}</span>
          </h2>
          <p className={styles.subtitle}>
            {t.services.subtitle}
          </p>
        </div>

        <div className={styles.circleWrapper}>

          <div className={styles.centerLogo}>
            <h2 className={styles.logoText}>
              The<br /><h2 className={styles.highlight}>Global</h2>
            </h2>
          </div>

          {t.services.items.map((item: any, index: number) => {
            const angle = -90 + (index * (360 / totalItems));

            const colorClass = index % 2 === 0 ? styles.orange : styles.blue;

            return (
              <div
                key={index}
                className={`${styles.itemNode} ${colorClass}`}
                style={{ '--angle': `${angle}deg` } as any}
              >
                <div className={styles.iconCircle}>
                  {icons[index]}
                </div>

                <div className={styles.textBlock}>
                  <h3>{item.title}</h3>
                  <p className={styles.description}>{item.desc}</p>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}