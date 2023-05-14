'use client';

import Tab from '../components/tab';
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import { createMessage } from '@/services/chat.service';

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
			const response = await createMessage({ content: text })
			console.log(response);
			setText("");
			
		} catch (error) {
			console.log("some thing error", error);
			
		}
	}

	return (
		<main className="pt-6 pb-6 pl-6 pr-6 flex">
			<Tab />
			<div className="bg-[#23252B] h-[90vh] w-5/6 rounded-[25px] flex">
				<div className="w-3/4 pt-14 flex-col flex justify-between">
					<div className="overflow-auto h-5/6 pr-8 pb-8 pl-12  border-b border-[#494949]">
						{[1, 2, 3, 4, 5, 6, 7].map((e, index) => (
							<div
								className="pt-3 px-4 pb-5 mb-4 border border-[#656565] rounded-xl flex"
								key={index}
							>
								<div>
									<div className="w-10 h-10 rounded-full bg-[#282C34] border border-[#656565] justify-center flex">
										<Image src="./logo.svg" alt="" width={22} height={22} />
									</div>
								</div>
								<div className="px-4 w-[5/6]">
									<p className="pb-2 text-white">Personalization</p>
									<p className="text-gray-72">
										Al can analyze user data and behavior to create personalized
										experiences for individual users. This can help designers
										create interfaces that adapt to each user’s preferences,
										making the interface more intuitive and user-friendly.
									</p>
								</div>
							</div>
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
					<button className="w-full h-11 rounded-lg bg-[#227641] text-white">
						New Chat
					</button>
					<button className="w-full h-11 rounded-lg bg-[#E93131] text-white">
						Clear All
					</button>
				</div>
			</div>
		</main>
	);
}
