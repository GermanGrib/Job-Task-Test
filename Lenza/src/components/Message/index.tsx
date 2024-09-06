import IMessage from "./interface";
import styles from "./message.module.scss";
import { FC } from "react";
import classNames from "classnames";

const Message: FC<IMessage> = (props: IMessage) => {
  const { text, receivedTime, yourMessage } = props;

  const messageClassname = classNames(styles.root, {
    [styles.incoming]: !yourMessage,
    [styles.outgoing]: yourMessage,
  });

  return (
    <div className={messageClassname}>
      <div className={styles.messageText}>{text}</div>
      <div className={styles.time}>
        {receivedTime}
        {yourMessage && <img src="/checks.svg" alt="checks" />}
      </div>
    </div>
  );
};

export default Message;
