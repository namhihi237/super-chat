import Image from 'next/image';

export default function Tab() {
	return (
		<div className="w-1/5 h-full">
			<div className="flex">
				<Image src={'./logo-app.svg'} height={33} width={33} alt="logo" />
				<p className="text-2xl font-bold ml-1 text-[#64BD64]">Super Chat</p>
			</div>
		</div>
	);
}
