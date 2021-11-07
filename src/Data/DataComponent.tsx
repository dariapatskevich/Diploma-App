import * as React from "react";
import DataInterface from "../DataInterface";

export default class DataComponent extends React.Component<DataInterface, {}> {
	constructor(props: DataInterface) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1>Current date:</h1>
				<b>{this.props.data.toDateString()}</b>
			</div>
		);
	}
}
