import styles from '../../styles/Spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles['spinner-box']}>
        <div className={styles['spinner']}></div>
    </div>
  )
}

export default Spinner;
