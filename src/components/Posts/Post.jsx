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
	onClickLike,
	onClickDelete,
	likeCount,
	id,
}) {
	const deletePost = () => {
		onClickDelete(id);
	};

	const likePost = () => {
		onClickLike(id);
	};

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
				<div>
					<Counter onClick={likePost} likeCount={likeCount} />
				</div>
				<Button
					onClick={deletePost}
					className={styles.post_button_delete}
					img={"./images/delete.svg"}
				/>
			</div>
		</div>
	);
}
