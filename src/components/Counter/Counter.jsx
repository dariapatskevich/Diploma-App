import styles from "../Posts/Posts.module.css";
import { Button } from "../Buttons/Button";

export function Counter({ onClick, likeCount, className }) {
	return (
		<div className={styles.post_buttons}>
			<Button
				onClick={onClick}
				className={styles.post_button_like}
				img={"./images/like.svg"}
			></Button>
			<p>{likeCount}</p>
		</div>
	);
}
