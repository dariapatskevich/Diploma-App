import React from "react";
import { Button } from "../Buttons/Button";
import styles from "./Posts.module.css";
import { Counter } from "../Counter/Counter";

export function Post({
	img,
	title,
	text,
	videoLink,
	audioLink,
	author,
	webLink,
}) {
	return (
		<div className={styles.post_container}>
			{title ? <p className={styles.post_title}>{title}</p> : null}
			{img ? <img className={styles.post_img} src={img} /> : null}
			{text ? <p className={styles.post_text}>{text}</p> : null}
			{videoLink ? (
				<iframe
					src={videoLink}
					width="420"
					height="345"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					className={styles.post_video}
				></iframe>
			) : null}
			{audioLink ? (
				<audio controls src={audioLink} className={styles.post_audio}></audio>
			) : null}
			{author ? <p className={styles.post_author}>{author}</p> : null}
			{webLink ? (
				<iframe
					src={webLink}
					width="420"
					height="345"
					className={styles.post_link}
				/>
			) : null}

			<div className={styles.post_buttons}>
				<Counter />
				<Button
					className={styles.post_button_delete}
					img={"./images/delete.svg"}
				/>
			</div>
		</div>
	);
}
