import { useState } from "react";

import styles from "./Form.module.css";
import { generateId } from "./helpers";

export function StoryForm({ onClickAdd, closeForm, className }) {
	const [title, setTitle] = useState("");
	const [text, setText] = useState("");

	const onTitleChange = (event) => {
		setTitle(event.target.value);
	};

	const onTextChange = (event) => {
		setText(event.target.value);
	};

	const publishStory = () => {
		onClickAdd({ title, text, id: generateId() });
		closeForm();
	};

	return (
		<div>
			<p>Title</p>
			<input type="text" value={title} onChange={onTitleChange} />
			<p>Text</p>
			<input type="text" value={text} onChange={onTextChange} />
			<button className={styles.publish} onClick={publishStory}>
				publish a story
			</button>
		</div>
	);
}
