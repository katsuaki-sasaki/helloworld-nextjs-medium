import styles from '../styles/components/Button.module.css'; // コンポーネントごとのスタイルをインポート

export default function Button({ label, onClick }) {
    return (
        <button className={styles.button} onClick={onClick}>
            {label}
        </button>
    );
}
