import * as React from "react";
import { Accordion } from "radix-ui";
import styles from "./Accordian.module.css";

const headerClass = (index: number, itemLength: number) => {
  if (index < 1) {
    return `${styles.header} ${styles.roundedTop}`;
  } else if (index + 1 === itemLength) {
    return `${styles.header} ${styles.roundedBottom}`;
  } else {
    return `${styles.header}`;
  }
};

export type AccordianPrimitiveProps = {
  items: {
    triggerText: string;
    itemValue: string;
    contentBody: React.ReactElement;
  }[];
};

function AccordionPrimitive({ items }: AccordianPrimitiveProps) {
  return (
    <Accordion.Root type="multiple" className={styles.root}>
      {items.map((item, index) => (
        <Accordion.Item value={item.itemValue} className={`${styles.item}`}>
          <Accordion.Header className={headerClass(index, items.length)}>
            <Accordion.Trigger className={styles.trigger}>
              {item.triggerText}
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className={`${styles.content}`}>
            {item.contentBody}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

export default AccordionPrimitive;
