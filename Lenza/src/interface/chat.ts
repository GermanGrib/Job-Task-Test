export interface IChatData {
  id: string;
  created_at: number;
  title: string;
  avatar: string;
  last_message: {
    created_at: number;
    user_id: string;
    user_name: string;
    user_surname: string;
    you: boolean;
    message: string;
  };
  count_unread: number;
}
