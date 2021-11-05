import React from "react";

export class Button extends React.Component {
	render() {
		const { text, onClick, className, img } = this.props;
		return (
			<div>
				<button onClick={onClick}>
					<img src={img} />
					{text}
				</button>
			</div>
		);
	}
}
