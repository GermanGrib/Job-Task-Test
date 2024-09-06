import { IChatData } from "../../../interface/chat";

export interface IChatState {
  activeChatId: string | null;
  chats: IChatData[];
  loading: boolean;
  error: string | null;
}
