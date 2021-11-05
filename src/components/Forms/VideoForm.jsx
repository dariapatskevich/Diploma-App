import { useState } from "react";

import styles from "./Form.module.css";
import { generateId } from "./helpers";

export const VideoForm = ({ onClickAdd, closeForm }) => {
  const [src, setSrc] = useState("");

  const publishVideo = () => {
    onClickAdd({ videoLink: src, id: generateId() });
    closeForm();
  };

  const onChangeVideoSource = (event) => {
    const [_, secondPart] = event.target.value.split("v=");

    if (secondPart) {
      setSrc("https://www.youtube.com/embed/" + secondPart);
    }
  };

  return (
    <div>
      {src ? (
        <iframe
          src={src}
          width="420"
          height="345"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ) : null}
      <input onChange={onChangeVideoSource} value={src} />

      <button onClick={publishVideo}>publish a video</button>
    </div>
  );
};
