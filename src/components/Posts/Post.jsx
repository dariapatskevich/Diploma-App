import React from "react";
import styles from "./Posts.module.css";

export function Post({ id, img, title, text }) {
	return (
		<div>
			<div className={styles.post_container} id={id}>
				<p className={styles.post_title}>{title}</p>
				<img className={styles.post_img} src={img} />
				<p className={styles.post_text}>{text}</p>
			</div>
		</div>
	);
}
