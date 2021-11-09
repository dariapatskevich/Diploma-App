import { render } from "@testing-library/react";
import React from "react";
import { useState, useEffect } from "react";

export const DateComponent = () => {
	const [date, setDate] = useState(new Date().toLocaleDateString());

	useEffect(() => {
		const interval = setInterval(() => {
			setDate(new Date().toLocaleDateString());
		}, 60000);

		return () => {
			clearInterval(interval);
		};
	}, []);
	render();
	return (
		<div>
			<h3>Current Date:</h3>
			<br />
			{new Date().toLocaleDateString()}
		</div>
	);
};
