import styles from "./ModalWindow.module.css";

export const ModalWindow = ({
	title,
	children,
	onClose,
	isVisible,
	onClickAdd,
}) => {
	return isVisible ? (
		<>
			<div className={styles.container}>
				<div className={styles.background} onClick={onClose} />
				<div className={styles.content}>
					<button onClick={onClose} onClickAdd={onClickAdd}>
						close
					</button>
					<h2>{title}</h2>
					{children}
					<h2>{title}</h2>
				</div>
			</div>
		</>
	) : null;
};

export const ModalWindowPhoto = ({
	children,
	onClose,
	isShown,
	onClickAdd,
}) => {
	return isShown ? (
		<>
			<div className={styles.container}>
				<div className={styles.background} onClick={onClose} />
				<div className={styles.content}>
					<button onClick={onClose} onClickAdd={onClickAdd}>
						close
					</button>
					{children}
				</div>
			</div>
		</>
	) : null;
};

export const ModalWindowQuota = ({
	title,
	children,
	onClose,
	isOn,
	onClickAdd,
}) => {
	return isOn ? (
		<>
			<div className={styles.container}>
				<div className={styles.background} onClick={onClose} />
				<div className={styles.content}>
					<button onClick={onClose} onClickAdd={onClickAdd}>
						close
					</button>
					<h2>{title}</h2>
					{children}
				</div>
			</div>
		</>
	) : null;
};

export const ModalWindowLink = ({
	children,
	onClose,
	isVisibleLink,
	onClickAdd,
}) => {
	return isVisibleLink ? (
		<>
			<div className={styles.container}>
				<div className={styles.background} onClick={onClose} />
				<div className={styles.content}>
					<button onClick={onClose} onClickAdd={onClickAdd}>
						close
					</button>
					{children}
				</div>
			</div>
		</>
	) : null;
};

export const ModalWindowAudio = ({
	children,
	onClose,
	isVisibleAudio,
	onClickAdd,
}) => {
	return isVisibleAudio ? (
		<>
			<div className={styles.container}>
				<div className={styles.background} onClick={onClose} />
				<div className={styles.content}>
					<button onClick={onClose} onClickAdd={onClickAdd}>
						close
					</button>
					{children}
				</div>
			</div>
		</>
	) : null;
};

export const ModalWindowVideo = ({
	children,
	onClose,
	isVisibleVideo,
	onClickAdd,
}) => {
	return isVisibleVideo ? (
		<>
			<div className={styles.container}>
				<div className={styles.background} onClick={onClose} />
				<div className={styles.content}>
					<button onClick={onClose} onClickAdd={onClickAdd}>
						close
					</button>
					{children}
				</div>
			</div>
		</>
	) : null;
};
