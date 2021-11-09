import styles from "./ModalWindow.module.css";

export const ModalWindow = ({ children, onClose, isVisible, className }) => {
	return isVisible ? (
		<>
			<div className={styles.container}>
				<div className={styles.background} onClick={onClose} />
				<div className={styles.content}>
					<button className={styles.close} onClick={onClose}>
						close
					</button>
					{children}
				</div>
			</div>
		</>
	) : null;
};
