import { Avatar } from "../Avatar";
import Message from "./index";
import React, { FC } from "react";
import styles from "./message.module.scss";

interface IIncomingMessage {
  src: string;
  userName: string;
  userLastName: string;
  messageText: string;
  receivedTime: string;
}

const IncomingMessage: FC<IIncomingMessage> = (props: IIncomingMessage) => {
  const { src, userName, userLastName, messageText, receivedTime } = props;
  return (
    <div className={styles.userMessageWrapper}>
      <Avatar imgSize="sm" src={src} />
      <div>
        <h3 className={styles.userTitle}>{userName + " " + userLastName}</h3>
        <Message
          text={messageText}
          receivedTime={receivedTime}
          yourMessage={false}
        />
      </div>
    </div>
  );
};

export default IncomingMessage;
