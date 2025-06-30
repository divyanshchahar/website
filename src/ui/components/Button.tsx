import styles from "./Button.module.css";

export interface ButtonProps {
  buttonText: string;
  addedStyles?: string;
  clickHandler?: () => void;
  isDisabled?: boolean;
}

function Button({
  buttonText,
  addedStyles,
  clickHandler,
  isDisabled,
}: ButtonProps) {
  return (
    <button
      className={`${styles.container} ${addedStyles}`}
      onClick={clickHandler}
      disabled={isDisabled}
    >
      {buttonText}
    </button>
  );
}

export default Button;
