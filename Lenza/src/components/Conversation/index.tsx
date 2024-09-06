import React, { useEffect, useRef } from "react";
import styles from "./conversation.module.scss";
import { useSelector } from "react-redux";
import { selectActiveChatId } from "../../store/Chat/selectors";
import {
  selectMessages,
  selectMessagesError,
  selectMessagesLoadingStatus,
} from "../../store/Message/selectors";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchMessages } from "../../store/Message/thunk";
import {
  formattedDateToDayMonthYear,
  formattedDateToHoursAndMinutes,
} from "../../utils/dates";
import IncomingMessage from "../Message/IncomingMessage";
import Message from "../Message";

const Conversation = () => {
  const dispatch = useAppDispatch();
  const activeChatId = useSelector(selectActiveChatId);
  const messagesData = useSelector(selectMessages);
  const loading = useSelector(selectMessagesLoadingStatus);
  const error = useSelector(selectMessagesError);
  const messagesWrapperRef = useRef<HTMLDivElement | null>(null);

  const newMessages = messagesData.filter(message => message.is_new);
  const oldMessages = messagesData.filter(message => !message.is_new);
  const sortedOldMessages = oldMessages.sort(
    (a, b) => a.created_at - b.created_at,
  );
  const sortedNewMessages = newMessages.sort(
    (a, b) => a.created_at - b.created_at,
  );

  useEffect(() => {
    if (activeChatId) {
      dispatch(fetchMessages());
    }
  }, [dispatch, activeChatId]);

  useEffect(() => {
    if (messagesWrapperRef.current) {
      messagesWrapperRef.current.scrollTop =
        messagesWrapperRef.current.scrollHeight;
    }
  }, [messagesData]);
  return (
    <div className={styles.root} ref={messagesWrapperRef}>
      {loading && !error && <div className={styles.loading}>Loading...</div>}
      {error && <div>{error}</div>}
      {!loading && messagesData && (
        <div className={styles.messagesWrapper}>
          {sortedOldMessages.map(message => {
            const date = formattedDateToDayMonthYear(message.created_at);
            const formattedDateHours = formattedDateToHoursAndMinutes(
              message.created_at,
            );

            return (
              <React.Fragment key={message.id}>
                <div className={styles.receiptDateWrapper}>
                  <div className={styles.receiptDate}>{date}</div>
                </div>
                <div key={message.id} className={styles.messageItem}>
                  {message.user.you ? (
                    <Message
                      text={message.message}
                      receivedTime={formattedDateHours}
                      yourMessage
                    />
                  ) : (
                    <IncomingMessage
                      src={message.user.avatar}
                      userName={message.user.name}
                      userLastName={message.user.surname}
                      messageText={message.message}
                      receivedTime={formattedDateHours}
                    />
                  )}
                </div>
              </React.Fragment>
            );
          })}

          {sortedNewMessages.map((message, index) => {
            const date = formattedDateToDayMonthYear(message.created_at);
            const formattedDateHours = formattedDateToHoursAndMinutes(
              message.created_at,
            );

            return (
              <React.Fragment key={message.id}>
                <div className={styles.receiptDateWrapper}>
                  <div className={styles.receiptDate}>{date}</div>
                </div>
                <React.Fragment key={message.id}>
                  {message.is_new && index === 0 && (
                    <div className={styles.newMessages}>Новые сообщения</div>
                  )}
                  <div className={styles.messageItem}>
                    <IncomingMessage
                      src={message.user.avatar}
                      userName={message.user.name}
                      userLastName={message.user.surname}
                      messageText={message.message}
                      receivedTime={formattedDateHours}
                    />
                  </div>
                </React.Fragment>
                {/*);*/}
                {/*})}*/}
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Conversation;
