import { useState } from "react";

import styles from "./Form.module.css";
import { generateId } from "./helpers";

export const LinkForm = ({ onClickAdd, closeForm, className }) => {
	const [src, setSrc] = useState("");

	const publishLink = () => {
		onClickAdd({ webLink: src, id: generateId() });
		closeForm();
	};

	const onChangeInput = (event) => {
		setSrc(event.target.value);
	};

	return (
		<div>
			{src ? <a src={src} controls /> : null}
			<input value={src} onChange={onChangeInput} />
			<div className={styles.content}>
				<button className={styles.publish} onClick={publishLink}>
					publish a link
				</button>
			</div>
		</div>
	);
};
