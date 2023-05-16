import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getChatList, deleteChat } from '../services/chat.service';
import { truncateString } from '../utils/string';

interface Chat {
	_id: string;
	name: string;
	timestamp: string;
}

interface ChatListProps {
	setChatIdSelected: React.Dispatch<React.SetStateAction<string>>;
	chatIdSelected?: string;
}

export default function ChatList({
	setChatIdSelected,
	chatIdSelected,
}: ChatListProps) {
	const [chatList, setChatList] = useState<Chat[]>([]);

	useEffect(() => {
		const getChat = async () => {
			try {
				if (
					chatIdSelected &&
					chatList.map((e) => e._id).includes(chatIdSelected)
				) {
					return;
				}
				const chats = await getChatList();
				setChatList(chats);
			} catch (error) {
				console.log(error);
			}
		};
		getChat();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [chatIdSelected]);

	const handleDelete = async (id: string) => {
		try {
			await deleteChat(id);
			if (id === chatIdSelected) {
				setChatIdSelected('');
			} 
			setChatList(chatList.filter((chat) => chat._id !== id));
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="h-full">
			<p className="text-2xl">Chat List</p>
			{chatList.map((item) => (
				<div key={item._id} className="flex justify-between mt-8">
					<div className="flex">
						<Image src="./arrow-down.svg" alt="" width={18} height={22} />
						<div className="ml-4 pr-2">
							<button
								className="pb-2"
								onClick={() => setChatIdSelected(item._id)}
							>
								<p>{truncateString(item.name, 22)}</p>
							</button>
							<p className="text-xs font-light text-[#CBCBCB]">
								{item.timestamp}
							</p>
						</div>
					</div>
					<button onClick={() => handleDelete(item._id)}>
						<Image src="./delete.svg" alt="" width={15} height={17} />
					</button>
				</div>
			))}
		</div>
	);
}
