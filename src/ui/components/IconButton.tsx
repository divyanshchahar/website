import { StaticImageData } from "next/image";
import Image from "next/image";
import styles from "./IconButton.module.css";

export type IconButtonProps = {
  iconImage: StaticImageData;
  iconName: string;
  addedStyle?: string;
};

function IconButton({ iconImage, iconName, addedStyle }: IconButtonProps) {
  return (
    <button className={`${styles.button} ${addedStyle}`}>
      <Image
        src={iconImage}
        alt={iconName}
        // style={{ height: "64px", width: "auto" }}
        className={styles.img}
      />
    </button>
  );
}

export default IconButton;
