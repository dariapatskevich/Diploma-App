import { useState } from "react";

import styles from "./Form.module.css";
import { generateId } from "./helpers";

export function QuotaForm({ onClickAdd, closeForm, className }) {
	const [author, setAuthor] = useState("");
	const [text, setText] = useState("");

	const onAuthorChange = (event) => {
		setAuthor(event.target.value);
	};

	const onTextChange = (event) => {
		setText(event.target.value);
	};

	const publishQuota = () => {
		onClickAdd({ author, text, id: generateId() });
		closeForm();
	};

	return (
		<div>
			<p>"Quotation"</p>
			<input type="text" value={text} onChange={onTextChange} />
			<p>Author</p>
			<input type="text" value={author} onChange={onAuthorChange} />
			<button className={styles.publish} onClick={publishQuota}>
				publish the quotation
			</button>
		</div>
	);
}
