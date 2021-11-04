import "./App.css";
import { Button } from "./components/Buttons/Button";
import styles from "./components/Buttons/Button.module.css";
import {
	ModalWindow,
	ModalWindowPhoto,
	ModalWindowQuota,
	ModalWindowLink,
	ModalWindowAudio,
	ModalWindowVideo,
} from "./components/ModalWindows/ModalWindow";
import { Form } from "./components/Forms";
import { useState } from "react";
import { Post } from "./components/Posts/Post";

function App() {
	const [isVisible, setIsVisible] = useState(false);
	const [isShown, setIsShown] = useState(false);
	const [isOn, setIsOn] = useState(false);
	const [isVisibleLink, setIsVisibleLink] = useState(false);
	const [isVisibleAudio, setIsVisibleAudio] = useState(false);
	const [isVisibleVideo, setIsVisibleVideo] = useState(false);

	return (
		<div className={styles.app}>
			<div className={styles.app_header}>
				<h1>
					Welcome to my single page application! You can share your ideas about
					everything you want! Make a post and have fun!
				</h1>
			</div>
			<div className={styles.buttons}>
				<Button
					className={styles.text}
					img={"./images/text.svg"}
					text={"Text"}
					onClick={() => {
						setIsVisible(true);
					}}
				/>
				<Button
					className={styles.photo}
					img={"./images/photo.svg"}
					text={"Photo"}
					onClick={() => {
						setIsShown(true);
					}}
				/>
				<Button
					className={styles.quota}
					img={"./images/quota.svg"}
					text={"Quota"}
					onClick={() => {
						setIsOn(true);
					}}
				/>
				<Button
					className={styles.link}
					img={"./images/link.svg"}
					text={"Link"}
					onClick={() => {
						setIsVisibleLink(true);
					}}
				/>
				<Button
					className={styles.audio}
					img={"./images/audio.svg"}
					text={"Audio"}
					onClick={() => {
						setIsVisibleAudio(true);
					}}
				/>
				<Button
					className={styles.video}
					img={"./images/video.svg"}
					text={"Video"}
					onClick={() => {
						setIsVisibleVideo(true);
					}}
				/>
			</div>
			<Post
				title={"TO THE FLOWERS"}
				text={
					"Bright little day stars,                             Scattered all over the earth,                              Ye drape the house of mourning,                          And ye deck the hall of mirth.                             Ye are gathered to grace the ballroom,                    Ye are borne to the house of prayer,                      Ye wither upon the snowy shroud,                          Ye fade in the bride’s jeweled hair.                      Ye are relics of bygone ages,                           From Eden inherited,                                      To gladden the homes of the living,And mourn on the graves of the dead."
				}
				img={"./images/flower.svg"}
			/>
			<ModalWindow onClose={() => setIsVisible(false)} isVisible={isVisible}>
				<p>Title</p>
				<>
					<Form />
				</>
				<p>Text</p>
				<>
					<Form />
				</>

				<button>publish a story</button>
			</ModalWindow>
			<ModalWindowPhoto onClose={() => setIsShown(false)} isShown={isShown}>
				<></>
				<button>publish a photo</button>
			</ModalWindowPhoto>
			<ModalWindowQuota onClose={() => setIsOn(false)} isOn={isOn}>
				<p>"Quotation"</p>
				<>
					<Form />
				</>
				<button>publish a quotation</button>
			</ModalWindowQuota>
			<ModalWindowLink
				onClose={() => setIsVisibleLink(false)}
				isVisibleLink={isVisibleLink}
			>
				<></>
				<button>publish a link</button>
			</ModalWindowLink>
			<ModalWindowAudio
				onClose={() => setIsVisibleAudio(false)}
				isVisibleAudio={isVisibleAudio}
			>
				<></>
				<button>publish an audio</button>
			</ModalWindowAudio>
			<ModalWindowVideo
				onClose={() => setIsVisibleVideo(false)}
				isVisibleVideo={isVisibleVideo}
			>
				<></>
				<button>publish a video</button>
			</ModalWindowVideo>
		</div>
	);
}

export default App;
