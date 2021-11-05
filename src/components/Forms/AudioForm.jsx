import { useState } from "react";

import styles from "./Form.module.css";
import { generateId } from "./helpers";

export const AudioForm = ({ onClickAdd, closeForm }) => {
  const [src, setSrc] = useState("");

  const publishAudio = () => {
    onClickAdd({ audioLink: src, id: generateId() });
    closeForm();
  };

  const onChangeInput = (event) => {
    setSrc(event.target.value);
  };

  return (
    <div>
      {src ? <audio src={src} controls /> : null}
      <input value={src} onChange={onChangeInput} />

      <button onClick={publishAudio}>publish a audio</button>
    </div>
  );
};
