import { AlertDialog } from "radix-ui";
import styles from "./AcceptedDialouge.module.css";

export interface AcceptedDialougePropTypes {
  alertTitle: string;
  alertDescription: string;
  alertCancel: string;
  alertDialogState: boolean;
  alertDialogeController: () => void;
}

const AcceptedDialouge = ({
  alertTitle,
  alertDescription,
  alertCancel,
  alertDialogState,
  alertDialogeController,
}: AcceptedDialougePropTypes) => {
  return (
    <AlertDialog.Root
      open={alertDialogState}
      onOpenChange={alertDialogeController}
    >
      <AlertDialog.Portal>
        <AlertDialog.Overlay className={styles.Overlay} />

        <AlertDialog.Content className={styles.Content}>
          <AlertDialog.Title className={styles.Title}>
            {alertTitle}
          </AlertDialog.Title>

          <AlertDialog.Description className={styles.Description}>
            {alertDescription}
          </AlertDialog.Description>

          <div style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}>
            <AlertDialog.Cancel asChild>
              <button className={`${styles.Button} muave`}>
                {alertCancel}
              </button>
            </AlertDialog.Cancel>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default AcceptedDialouge;
