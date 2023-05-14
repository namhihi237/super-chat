import axios, { AxiosInstance } from 'axios';

interface Headers {
	'Content-Type': string;
	Authorization?: string;
}

function getAxiosInstance(useAuth: boolean = false): AxiosInstance {
	const headers: { [key: string]: string } = {
		'Content-Type': 'application/json',
	};

	if (useAuth) {
		const token =
			typeof window !== 'undefined' ? localStorage.getItem('token') : null;
		headers['Authorization'] = `Bearer ${token}`;
	}

	const instance = axios.create({
		baseURL: process.env.NEXT_PUBLIC_API_URL,
		timeout: 5000,
		headers,
	});

	return instance;
}

export default getAxiosInstance;
