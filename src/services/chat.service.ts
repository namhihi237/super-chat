import getAxiosInstance from '../utils/axios';
import { Message } from '../utils/types';
const axios = getAxiosInstance(false);

async function createMessage(message: Message) {
	const response = await axios.post('chat', message);
	return response.data.data;
}

async function getChatList() {
	const response = await axios.get('chat');
	return response.data.data;
}

async function getMessagesByChatId(chatId: string) {
	const response = await axios.get(`chat/${chatId}`);
	return response.data.data;
}

async function deleteChat(chatId: string) {
	const response = await axios.delete(`chat/${chatId}`);
	return response.data.data;
}

export { createMessage, getChatList, getMessagesByChatId, deleteChat };
