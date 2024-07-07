export interface ChatMessage {
  userId: string;
  from: string;
  role: string;
  content: string;
  //come back and change date to not be nullable if needed
//   Timestamp?: string;
  Timestamp?: string;
}
