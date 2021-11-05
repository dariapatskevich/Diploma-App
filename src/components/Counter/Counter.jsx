import styles from "../Posts/Posts.module.css";
import { useState } from "react";
import { Button } from "../Buttons/Button";

export function Counter() {
	const [count, setCount] = useState(0);

	return (
		<div className={styles.counter}>
			<Button
				onClick={() => setCount(count + 1)}
				className={styles.post_button_like}
				img={"./images/like.svg"}
			></Button>
			<p>{count}</p>
		</div>
	);
}
