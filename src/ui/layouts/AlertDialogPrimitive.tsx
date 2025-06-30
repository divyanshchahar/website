import { AlertDialog } from "radix-ui";
import styles from "./AlertDialogPrimitive.module.css";

export interface AlertDialogePropTypes {
  alertTitle: string;
  alertDescription: string;
  alertCancel: string;
  alertDialogState: boolean;
  alertDialogeController: () => void;
}

const AlertDialogDemo = ({
  alertTitle,
  alertDescription,
  alertCancel,
  alertDialogState,
  alertDialogeController,
}: AlertDialogePropTypes) => {
  return (
    <AlertDialog.Root
      open={alertDialogState}
      onOpenChange={alertDialogeController}
    >
      {/* <AlertDialog.Trigger asChild>
        <button className={`${styles.Button} violet`}>Delete account</button>
      </AlertDialog.Trigger> */}

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

export default AlertDialogDemo;
