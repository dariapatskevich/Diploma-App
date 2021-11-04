import { useState } from "react";

import styles from "./Form.module.css";

export function Form({ onClick, children, onClickAdd }) {
	const [inputValue, setInputValue] = useState("");
	const Posts = [];

	const onInputChange = (event) => {
		setInputValue(event.target.value);
	};

	return (
		<div>
			<input type="text" value={inputValue} onChange={onInputChange} />
		</div>
	);
}
