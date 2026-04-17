import { Globe, Menu, X } from "lucide-react"; 
import styles from "./Header.module.css";
import { useLanguage } from '../../contexts/LanguageContext';
import { useState } from "react";

export function Header() {
  const { lang, setLang, t } = useLanguage();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        <div className={styles.logo}>
         <a href="/"> the<span className={styles.textOrange}>global</span> </a>
        </div>

        <nav className={styles.nav}>
          <a href="/" className={styles.navLink}>{t.header.home}</a>
          <a href="#services" className={styles.navLink}>{t.header.services}</a>
          <a href="#about" className={styles.navLink}>{t.header.about}</a>
          <a href="#contact" className={styles.navLink}>{t.header.contact}</a>
          
          {/* Seletor Desktop */}
          <div className={styles.langSelector}>
            <Globe size={16} color="#F27A21" />
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as 'pt' | 'en' | 'es' | 'zh')}
              aria-label="Selecionar idioma"
            >
              <option value="pt">PT</option>
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="zh">ZH</option> 
            </select>
          </div>
        </nav>

        {/* --- Botão Mobile (Toggle) --- */}
        <button 
          className={styles.mobileBtn} 
          onClick={toggleMenu} 
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X size={28} color="white"/> : <Menu size={28} color="white"/>}
        </button>

      </div>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenuDropdown}>
          <a href="/" onClick={closeMenu}>{t.header.home}</a>
          <a href="#services" onClick={closeMenu}>{t.header.services}</a>
          <a href="#about" onClick={closeMenu}>{t.header.about}</a>
          <a href="#contact" onClick={closeMenu}>{t.header.contact}</a>
          
          <div className={styles.mobileLangWrapper}>
             <span style={{color: '#888', fontSize: '0.9rem', marginRight: '10px'}}>{t.header.language}</span>
             <select
              value={lang}
              onChange={(e) => setLang(e.target.value as 'pt' | 'en' | 'es' | 'zh')}
              className={styles.mobileSelect}
            >
              <option value="pt">Português</option>
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="zh">中文 (Mandarim)</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
}