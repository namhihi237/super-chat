import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getChatList } from '../services/chat.service';
import { truncateString } from '../utils/string';

interface Chat {
	id: string;
	name: string;
	timestamp: string;
}

export default function ChatList() {
	const [chatList, setChatList] = useState<Chat[]>([]);

	const getChat = async () => {
		try {
			const chats = await getChatList();
			console.log(chats);
			setChatList(chats);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getChat();
	});

	return (
		<div className="mt-7">
			<p className="text-2xl">Chat List</p>
			{chatList.map((chat) => (
				<ChatItem key={chat.id} item={chat} />
			))}
		</div>
	);
}

function ChatItem({ item }: { item: Chat }) {
	return (
		<div className="flex justify-between mt-8">
			<div className="flex">
				<Image src="./arrow-down.svg" alt="" width={18} height={22} />
				<div className="ml-4 pr-2">
					<button className="pb-2">
						<p>{truncateString(item.name, 22)}</p>
					</button>
					<p className="text-xs font-light text-[#CBCBCB]">{item.timestamp}</p>
				</div>
			</div>
			<button>
				<Image src="./delete.svg" alt="" width={15} height={17} />
			</button>
		</div>
	);
}
