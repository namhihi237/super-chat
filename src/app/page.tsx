import Tab from '../components/tab';
import Image from 'next/image';
export default function Home() {
	return (
		<main className="pt-6 pb-6 pl-6 pr-6 flex">
			<Tab />
			<div className="bg-[#23252B] h-[700px] w-[1090px] rounded-[25px] flex">
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
						<input
							type="text"
							placeholder="Typing whatever you want?"
							className="w-full h-11 bg-[#333334] border-[#fff] rounded-lg text-sm p-4 text-white focus:border-none"
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
