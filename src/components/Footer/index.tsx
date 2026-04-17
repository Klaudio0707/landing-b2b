import { MapPin, Mail, Phone, Linkedin } from 'lucide-react';
import styles from './Footer.module.css';
import { useLanguage } from '../../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brandColumn}>
          <div className={styles.logo}>The<span className={styles.textOrange}>Global</span></div>
          <p className={styles.desc}>{t.footer.desc}</p>
          <a 
            href="https://www.linkedin.com/in/claudio-robertofilho/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.iconBtn}
            aria-label="Visite nosso LinkedIn"
          >
            <Linkedin size={25} />
          </a>
        </div>
        <div className={styles.contactColumn}>
          <h3 className={styles.columnTitle}>{t.footer.contactTitle}</h3>
          <div className={styles.contactItem}><MapPin size={20} className={styles.icon} /><p>Rua - Antonio<br/>Curitiba - PR</p></div>
          <div className={styles.contactItem}><Mail size={20} className={styles.icon} /><p>comercial@empresa.com.br</p></div>
          <div className={styles.contactItem}><Phone size={20} className={styles.icon} /><p>+55 (41) 99605-3055</p></div>
        </div>
      </div>
   <div className={styles.copyRow}>
        <p>© {currentYear} TheGlobal. {t.footer.rights}</p>
        <p className={styles.developerSignature}>
          {t.footer.developedBy}{" "}
          <a className={styles.linkLinkedin} href="https://www.linkedin.com/in/claudio-robertofilho/" target="_blank" rel="noopener noreferrer">
            Cláudio
          </a>
        </p>
      </div>
    </footer>
  );
}