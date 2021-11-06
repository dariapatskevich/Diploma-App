import { useState, useEffect } from "react";

import "./App.css";
import { Button } from "./components/Buttons/Button";
import styles from "./components/Buttons/Button.module.css";

import { ModalWindow } from "./components/ModalWindows/ModalWindow";

import { Post } from "./components/Posts";
import {
	StoryForm,
	PhotoForm,
	VideoForm,
	AudioForm,
	LinkForm,
	QuotaForm,
} from "./components/Forms";

function App() {
	const [isVisible, setIsVisible] = useState(false);
	const [isShown, setIsShown] = useState(false);
	const [isOn, setIsOn] = useState(false);
	const [isVisibleLink, setIsVisibleLink] = useState(false);
	const [isVisibleAudio, setIsVisibleAudio] = useState(false);
	const [isVisibleVideo, setIsVisibleVideo] = useState(false);

	const [posts, setPosts] = useState([]);

	const addPost = (post) => {
		localStorage.setItem("data", JSON.stringify([...posts, post]));
		setPosts([...posts, post]);
	};

	useEffect(() => {
		const toLocalStorage = localStorage.getItem("data");
		const dataParsed = toLocalStorage ? JSON.parse(toLocalStorage) : [];
		setPosts(dataParsed);
	}, []);

	return (
		<div className={styles.app}>
			<div className={styles.app_header}>
				<h1>STAYINFORMED</h1>
			</div>
			<div className={styles.paragraph}>
				<p>You can always be informed with the help of my React-app.</p>
			</div>
			<div className={styles.paragraph_by}>
				<p>Made by Patskevich Darya.</p>
			</div>
			<div className={styles.buttons}>
				<Button
					className={styles.text}
					img={"./images/text.svg"}
					onClick={() => {
						setIsVisible(true);
					}}
				/>
				<Button
					className={styles.photo}
					img={"./images/photo.svg"}
					onClick={() => {
						setIsShown(true);
					}}
				/>
				<Button
					className={styles.quota}
					img={"./images/quota.svg"}
					onClick={() => {
						setIsOn(true);
					}}
				/>
				<Button
					className={styles.link}
					img={"./images/link.svg"}
					onClick={() => {
						setIsVisibleLink(true);
					}}
				/>
				<Button
					className={styles.audio}
					img={"./images/audio.svg"}
					onClick={() => {
						setIsVisibleAudio(true);
					}}
				/>
				<Button
					className={styles.video}
					img={"./images/video.svg"}
					onClick={() => {
						setIsVisibleVideo(true);
					}}
				/>
			</div>
			<div className={styles.posts}>
				{posts.map((item) => (
					<Post
						text={item.text}
						title={item.title}
						img={item.img}
						videoLink={item.videoLink}
						audioLink={item.audioLink}
						author={item.author}
						webLink={item.webLink}
						key={item.id}
					></Post>
				))}
			</div>
			<ModalWindow onClose={() => setIsVisible(false)} isVisible={isVisible}>
				<StoryForm onClickAdd={addPost} closeForm={() => setIsVisible(false)} />
			</ModalWindow>

			<ModalWindow onClose={() => setIsOn(false)} isVisible={isOn}>
				<QuotaForm onClickAdd={addPost} closeForm={() => setIsOn(false)} />
			</ModalWindow>

			<ModalWindow onClose={() => setIsShown(false)} isVisible={isShown}>
				<PhotoForm closeForm={() => setIsShown(false)} onClickAdd={addPost} />
			</ModalWindow>

			<ModalWindow
				onClose={() => setIsVisibleLink(false)}
				isVisible={isVisibleLink}
			>
				<LinkForm
					onClickAdd={addPost}
					closeForm={() => setIsVisibleLink(false)}
				/>
			</ModalWindow>
			<ModalWindow
				onClose={() => setIsVisibleAudio(false)}
				isVisible={isVisibleAudio}
			>
				<AudioForm
					onClickAdd={addPost}
					closeForm={() => setIsVisibleAudio(false)}
				/>
			</ModalWindow>
			<ModalWindow
				onClose={() => setIsVisibleVideo(false)}
				isVisible={isVisibleVideo}
			>
				<VideoForm
					onClickAdd={addPost}
					closeForm={() => setIsVisibleVideo(false)}
				/>
			</ModalWindow>
		</div>
	);
}

export default App;
