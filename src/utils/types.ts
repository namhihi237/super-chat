export enum ChatType {
	Chat = 'chat',
	ChatCompletion = 'chatCompletion',
}

export interface Message {
	content: string;
	chatId?: string;
	type: ChatType;
}
