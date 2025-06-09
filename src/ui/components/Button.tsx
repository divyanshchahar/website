import styles from "./Button.module.css";

export interface ButtonProps {
  buttonText: string;
  addedStyles?: string;
  clickHandler?: () => {};
}

function Button({ buttonText, addedStyles, clickHandler }: ButtonProps) {
  return (
    <button
      className={`${styles.container} ${addedStyles}`}
      onClick={clickHandler}
    >
      {buttonText}
    </button>
  );
}

export default Button;
