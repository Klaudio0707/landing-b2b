// import { TrendingUp, Clock, ShieldCheck, Target } from 'lucide-react';
// import styles from './Benefits.module.css';
// import { useLanguage } from '../../contexts/LanguageContext';

// export function Benefits() {
//   const { t } = useLanguage();

//   const benefitsList = [
//     {
//       icon: <TrendingUp size={24} />,
//       title: t.benefits.items[0].title,
//       desc: t.benefits.items[0].desc
//     },
//     {
//       icon: <Clock size={24} />,
//       title: t.benefits.items[1].title,
//       desc: t.benefits.items[1].desc
//     },
//     {
//       icon: <ShieldCheck size={24} />,
//       title: t.benefits.items[2].title,
//       desc: t.benefits.items[2].desc
//     },
//     {
//       icon: <Target size={24} />,
//       title: t.benefits.items[3].title,
//       desc: t.benefits.items[3].desc
//     }
//   ];

//   return (
//     <section className={styles.section}>
//       <div className={styles.container}>

//         {/* Esquerda */}
//         <div className={styles.headerBox}>
//           <h2 className={styles.title}>
//             {t.benefits.title} <span>TheGlobal</span>
//           </h2>

//           <p className={styles.subtitle}>
//             {t.benefits.subtitle}
//           </p>
//         </div>
//         {/* Direita */}
//         <div className={styles.listContainer}>
//           {benefitsList.map((item, index) => (
//             <div key={index} className={styles.item}>
//               <div className={styles.iconBox}>
//                 {item.icon}
//               </div>
//               <div className={styles.content}>
//                 <h3>{item.title}</h3>
//                 <p>{item.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }