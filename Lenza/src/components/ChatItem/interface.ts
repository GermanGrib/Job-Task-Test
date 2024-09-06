interface IChatItemList {
  id?: string;
  userName: string;
  userAvatarSrc: string;
  lastMessageReceivedIn: string;
  lastMessageText: string;
  haveNewMessages: boolean;
  handleClick?: () => void;
}

export default IChatItemList;
