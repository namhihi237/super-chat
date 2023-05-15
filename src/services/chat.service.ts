import getAxiosInstance from '../utils/axios';
import { Message } from '../utils/types';
const axios = getAxiosInstance(false);

async function createMessage(message: Message) {
	return axios.post('chat', message);
}

async function getChatList() {
	const response = await axios.get('chat');
	return response.data.data;
}

export { createMessage, getChatList };
