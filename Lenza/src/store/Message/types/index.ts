import { IMessageData } from "../../../interface/message";

export interface IMessageState {
  messages: IMessageData[];
  loading: boolean;
  error: string | null;
}
