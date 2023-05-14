import getAxiosInstance from '../utils/axios';
import { Message } from '../utils/types';

async function createMessage(message: Message) {
	const axios = getAxiosInstance(false);
	axios.post('chat', message);
}

export  {
	createMessage,
};
