import { useState } from "react";

import styles from "./Form.module.css";
import { generateId } from "./helpers";

export const PhotoForm = ({ onClickAdd, closeForm, className }) => {
	const [src, setSrc] = useState("");

	const publishImg = () => {
		onClickAdd({ img: src, id: generateId() });
		closeForm();
	};

	return (
		<div>
			{src ? (
				<img src={src} alt={"Image"} className={styles.img} />
			) : (
				<div className={styles.emptyPhoto}>Add your photo here.</div>
			)}
			<input
				type="file"
				name="myImage"
				onChange={(event) => {
					setSrc(URL.createObjectURL(event.target.files[0]));
				}}
			/>
			<button className={styles.publish} onClick={publishImg}>
				publish a photo
			</button>
		</div>
	);
};
