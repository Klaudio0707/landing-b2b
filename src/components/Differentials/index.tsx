import { 
  DollarSign,   
  Lock,         
  FileText,     
  BrainCircuit, 
  LineChart,    
  ShieldCheck,  
  Target        
} from 'lucide-react';
import styles from './Differentials.module.css';
import { useLanguage } from '../../contexts/LanguageContext';

export function Differentials() {
  const { t } = useLanguage();

  const icons = [
    <DollarSign size={32} />,      
    <Lock size={32} />,          
    <FileText size={32} />,      
    <BrainCircuit size={32} />,  
    <LineChart size={32} />,     
    <ShieldCheck size={32} />,   
    <Target size={32} />         
  ];

  const phoneNumber = "5541995467999"; 
  const rawMessage = "Olá! Gostaria de solicitar um estudo de redução de custos na minha operação de Global.";
  const encodedMessage = encodeURIComponent(rawMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <section id="differentials" className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.textBox}>
          <h2 className={styles.title}>
            {t.differentials.title} <br /><span>TheGlobal</span>
          </h2>
          <p className={styles.description}></p>
          
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.ctaButton}
          >
            {t.differentials.cta}
          </a>
        </div>

      < div className={styles.grid}>
          {t.differentials.items.map((item: any, index: number) => (
            <div 
              key={index} 
              className={`${styles.card} ${index === 0 ? styles.cardHighlight : ''}`}
            >
              {/* Ícone na Esquerda */}
              <div className={styles.iconBox}>
                {icons[index] || <ShieldCheck size={24} />} 
              </div>
              
              {/* Texto na Direita (Agrupado) */}
              <div className={styles.cardContent}> 
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

    </div>
    </section>
  );
}