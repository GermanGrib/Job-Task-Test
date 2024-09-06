import { Avatar } from "../Avatar";
import IChatItemList from "./interface";
import styles from "./chatItem.module.scss";
import { FC } from "react";
import classNames from "classnames";

const ChatItem: FC<IChatItemList> = (props: IChatItemList) => {
  const {
    userName,
    userAvatarSrc,
    lastMessageReceivedIn,
    lastMessageText,
    haveNewMessages,
    handleClick,
  } = props;

  return (
    <div
      className={classNames(styles.root, haveNewMessages && styles.newMessages)}
      onClick={handleClick}
    >
      <Avatar src={userAvatarSrc} />
      <div className={styles.chatInfoWrapper}>
        <div className={styles.nameTimeWrapper}>
          <h4 className={styles.userName}>{userName}</h4>
          <div className={styles.time}>{lastMessageReceivedIn}</div>
        </div>
        <div className={styles.messageText}>{lastMessageText}</div>
      </div>
    </div>
  );
};

export default ChatItem;
