import styles from "./ModalWindow.module.css";

export const ModalWindow = ({ children, onClose, isVisible }) => {
  return isVisible ? (
    <>
      <div className={styles.container}>
        <div className={styles.background} onClick={onClose} />
        <div className={styles.content}>
          <button onClick={onClose}>close</button>
          {children}
        </div>
      </div>
    </>
  ) : null;
};
