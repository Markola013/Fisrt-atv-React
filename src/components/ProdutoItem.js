
import styles from '../styles/ProdutoItem.module.css';

export default function ProdutoItem() {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>
        Teclado Mecânico Customizado
      </h2>
      
      <p className={styles.description}>
        Teclado mecânico com switches lineares, iluminação RGB e design ergonômico para maior conforto durante o uso.
      </p>
      
      <span className={styles.price}>
        R$ 349,90
      </span>
    </div>
  );
}