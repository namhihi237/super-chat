'use client';

import Tab from '../components/tab';
import React, { useState, useRef } from 'react';
import { createMessage } from '@/services/chat.service';
import InfoCard from '../components/InforCard';
import { cardInfo } from '../constants/cartInfo';
import ChatList from '../components/ChatList';

export default function Home() {
	const [text, setText] = useState('');
	const textAreaRef = useRef<HTMLTextAreaElement>(null);
	const [numLines, setNumLines] = useState(1);
	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const textArea = textAreaRef.current;

		if (textArea) {
			setText(e.target.value);
			if (!e.target.value) {
				setNumLines(1);
				return;
			}

			const lineHeight = parseInt(getComputedStyle(textArea).lineHeight);

			const rows = Math.ceil(
				(textArea.scrollHeight - 2 * lineHeight) / lineHeight,
			);

			if (rows > 5) {
				setNumLines(5);
				textArea.style.overflowY = 'auto';
			} else {
				textArea.style.overflowY = 'hidden';
				setNumLines(rows);
			}
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === 'Enter' && !e.shiftKey && text) {
			e.preventDefault();
			submitMessage();
		}
	};

	const submitMessage = async () => {
		try {
			const response = await createMessage({ content: text });
			console.log(response);
			setText('');
		} catch (error) {
			console.log('some thing error', error);
		}
	};

	return (
		<main className="pt-6 pb-6 pl-6 pr-6 flex">
			<Tab />
			<div className="bg-[#23252B] h-[90vh] w-5/6 rounded-[25px] flex">
				<div className="w-3/4 pt-14 flex-col flex justify-between">
					<div className="overflow-auto h-5/6 pr-8 pb-8 pl-12  border-b border-[#494949]">
						{cardInfo.map((item, index) => (
							<InfoCard key={index} item={item} />
						))}
					</div>
					<div className="pl-12 pr-8 items-center pb-4">
						<textarea
							ref={textAreaRef}
							placeholder="Typing whatever you want?"
							onChange={handleChange}
							rows={numLines}
							value={text}
							onKeyDown={handleKeyDown}
							className={`w-full bg-[#333334] border-[#fff] rounded-lg text-sm p-4 text-white focus:border-none focus:outline-none resize-none`}
						/>
					</div>
				</div>
				<div className="w-1/4 pt-14 border-l border-[#494949] px-4 overflow-auto flex-col flex h-full justify-between pb-4">
					<div>
						<button className="w-full h-11 rounded-lg bg-[#227641] text-white">
							New Chat
						</button>
						<ChatList />
					</div>

					<button className="w-full h-11 rounded-lg bg-[#E93131] text-white">
						Clear All
					</button>
				</div>
			</div>
		</main>
	);
}
