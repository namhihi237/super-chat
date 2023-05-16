/* eslint-disable react/no-children-prop */
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
	_id: string;
	content: string;
	answer: string;
	role: string;
}

export default function MessageCard({ message }: { message: Message }) {
	return (
		<div className="pt-3 px-4 pb-5 mb-4 border border-[#656565] rounded-xl flex">
			<div>
				<div className="w-10 h-10 rounded-full bg-[#282C34] border border-[#656565] justify-center flex">
					<Image src="./logo.svg" alt="" width={22} height={22} />
				</div>
			</div>
			<div className="px-4 w-[5/6]">
				<p className="pb-2 text-white">{message.content}</p>
				<ReactMarkdown remarkPlugins={[remarkGfm]} className="text-[#656565]">
					{message.answer || message.content}
				</ReactMarkdown>
			</div>
		</div>
	);
}
