import styles from "./Button.module.css";

export interface ButtonProps {
  buttonText: string;
  addedStyles?: string;
}

function Button({ buttonText, addedStyles }: ButtonProps) {
  return (
    <button className={`${styles.container} ${addedStyles}`}>
      {buttonText}
    </button>
  );
}

export default Button;
