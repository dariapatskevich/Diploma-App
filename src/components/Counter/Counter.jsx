import styles from "../Posts/Posts.module.css";
import { Button } from "../Buttons/Button";

export function Counter({ onClick, likeCount }) {
  return (
    <div className={styles.counter}>
      <Button
        onClick={onClick}
        className={styles.post_button_like}
        img={"./images/like.svg"}
      ></Button>
      <p>{likeCount}</p>
    </div>
  );
}
