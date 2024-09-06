import styles from "./asideChatsMenu.module.scss";
import ChatItem from "../ChatItem";
import { useEffect } from "react";
import { formattedDateToHoursAndMinutes } from "../../utils/dates";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { fetchChatAndSetActive } from "../../store/Chat/thunk/chatsListThunk";
import {
  selectChats,
  selectChatsError,
  selectChatsLoadingStatus,
} from "../../store/Chat/selectors";
import { setActiveChatId } from "../../store/Chat/slice";

const AsideChatsMenu = () => {
  const dispatch = useAppDispatch();
  const chatsData = useSelector(selectChats);
  const loading = useSelector(selectChatsLoadingStatus);
  const error = useSelector(selectChatsError);

  useEffect(() => {
    dispatch(fetchChatAndSetActive());
  }, [dispatch]);

  const handleChatClick = (chatId: string) => {
    dispatch(setActiveChatId(chatId));
  };

  return (
    <aside className={styles.root}>
      <div className={styles.chatsWrapper}>
        <div className={styles.header}>
          <h3 className={styles.title}>All chats</h3>
        </div>
        {loading && !error && <div className={styles.loading}>Loading...</div>}
        {error && <div>{error}</div>}
        <div>
          {chatsData.map(chatData => {
            const formattedDateHours = formattedDateToHoursAndMinutes(
              chatData.last_message.created_at,
            );
            return (
              <ChatItem
                key={chatData.id}
                userName={chatData.title}
                userAvatarSrc={chatData.avatar}
                lastMessageReceivedIn={formattedDateHours}
                lastMessageText={chatData.last_message.message}
                haveNewMessages={chatData.count_unread > 0}
                handleClick={() => handleChatClick(chatData.id)}
              />
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default AsideChatsMenu;
