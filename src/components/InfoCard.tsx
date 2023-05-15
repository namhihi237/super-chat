import Image from 'next/image';

interface InfoCardItem {
	title: string;
	description: string;
}

interface ItemCardProps {
	item: InfoCardItem;
}

export default function InfoCard({ item }: ItemCardProps) {
	return (
		<div className="pt-3 px-4 pb-5 mb-4 border border-[#656565] rounded-xl flex">
			<div>
				<div className="w-10 h-10 rounded-full bg-[#282C34] border border-[#656565] justify-center flex">
					<Image src="./logo.svg" alt="" width={22} height={22} />
				</div>
			</div>
			<div className="px-4 w-[5/6]">
				<p className="pb-2 text-white">{item.title}</p>
				<p className="text-gray-72">{item.description}</p>
			</div>
		</div>
	);
}
