export interface ChatMessage {
    id: string,
    name: string,
    role: string,
    message: string,
    //come back and change date to not be nullable
    Date?: string,
}
