import { useState } from "react";

import "./App.css";
import { Button } from "./components/Buttons/Button";
import styles from "./components/Buttons/Button.module.css";

import { ModalWindow } from "./components/ModalWindows/ModalWindow";

import { Post } from "./components/Posts";
import { StoryForm, PhotoForm, VideoForm, AudioForm } from "./components/Forms";

import defaultPosts from "./posts.json";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const [isVisibleLink, setIsVisibleLink] = useState(false);
  const [isVisibleAudio, setIsVisibleAudio] = useState(false);
  const [isVisibleVideo, setIsVisibleVideo] = useState(false);
  const [posts, setPosts] = useState(defaultPosts);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

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
      {posts.map((item) => (
        <Post
          text={item.text}
          title={item.title}
          img={item.img}
          videoLink={item.videoLink}
          audioLink={item.audioLink}
        />
      ))}
      <ModalWindow onClose={() => setIsVisible(false)} isVisible={isVisible}>
        <StoryForm onClickAdd={addPost} closeForm={() => setIsVisible(false)} />
      </ModalWindow>
      <ModalWindow onClose={() => setIsShown(false)} isVisible={isShown}>
        <PhotoForm closeForm={() => setIsShown(false)} onClickAdd={addPost} />
      </ModalWindow>
      <ModalWindow onClose={() => setIsOn(false)} isVisible={isOn}>
        <p>"Quotation"</p>

        <button>publish a quotation</button>
      </ModalWindow>
      <ModalWindow
        onClose={() => setIsVisibleLink(false)}
        isVisible={isVisibleLink}
      >
        <button>publish a link</button>
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
