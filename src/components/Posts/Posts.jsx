import React from "react";
import styles from "./Posts.module.css";

export class Posts extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
		};
	}

	render() {
		return (
			<div>
				<div className={styles.container}>
					Post: {this.state.post.length ? this.state.post.length : "0"}
				</div>
				{this.state.posts.map((post, id) => {
					return (
						<div className={styles.app}>
							<div key={post.id}>
								<p>{post.text}</p>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
