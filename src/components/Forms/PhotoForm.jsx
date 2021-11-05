import { useState } from "react";

import styles from "./Form.module.css";
import { generateId } from "./helpers";

export const PhotoForm = ({ onClickAdd, closeForm }) => {
  const [src, setSrc] = useState("");

  const publishImg = () => {
    onClickAdd({ img: src, id: generateId() });
    closeForm();
  };

  return (
    <div>
      {src ? (
        <img src={src} alt={"Image"} className={styles.img} />
      ) : (
        <div className={styles.emptyPhoto}>Put your photo here</div>
      )}
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          setSrc(URL.createObjectURL(event.target.files[0]));
        }}
      />

      <button onClick={publishImg}>publish a photo</button>
    </div>
  );
};
