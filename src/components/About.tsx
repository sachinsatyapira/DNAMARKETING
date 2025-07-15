import { useState, useEffect } from 'react';
import { MoveLeft, MoveRight } from 'lucide-react';

const founders = [
	{
		name: 'Preksha Sharma',
		role: 'Managing director & Founder',
		img: '/lovable-uploads/IMG-20250709-WA0002(1)(1).jpg',
		desc: 'Innovative young entrepreneur with a passion for creating cutting-edge digital marketing solutions.',
	},
	// {
	// 	name: 'Krishna Kant Yadav',
	// 	role: 'CEO',
	// 	img: '/lovable-uploads/IMG-20250709-WA0004(1).jpg',
	// 	desc: 'Young entrepreneur with a fresh perspective on digital marketing and business strategy.',
	// },
	{
		name: 'Smarjeet Das',
		role: 'Finance and Legal advisor',
		img: '/lovable-uploads/1615290252662.jpeg',
		desc: 'Operations specialist ensuring seamless project delivery and client satisfaction.',
	},
	{
		name: 'Deepesh Khare',
		role: 'Marketing Head',
		img: '/lovable-uploads/WhatsApp Image 2025-07-09 at 16.23.29_0ab5358b.jpg',
		desc: 'Expert in digital campaigns and brand strategy with a decade of real estate marketing experience.',
	},
];

const CARDS_TO_SHOW = 3;
const TRANSITION_DURATION = 700; // ms

const AboutSection = () => {
	const [current, setCurrent] = useState(0);
	const [animatePreksha, setAnimatePreksha] = useState(false);
	const [animateKrishna, setAnimateKrishna] = useState(false);

	useEffect(() => {
		setTimeout(() => setAnimatePreksha(true), 300);
		setTimeout(() => setAnimateKrishna(true), 800);
	}, []);

	const prev = () => {
		setCurrent((prev) =>
			prev === 0 ? founders.length - CARDS_TO_SHOW : prev - 1
		);
	};

	const next = () => {
		setCurrent((prev) =>
			prev === founders.length - CARDS_TO_SHOW ? 0 : prev + 1
		);
	};

	return (
		<section
			id="about"
			className="py-10 min-h-screen flex flex-col items-center justify-center"
			style={{ background: '#edededff' }}
		>
			{/* About DNA Slide Section */}
			<div className="w-[95vw] max-w-[1600px] mx-auto flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-2xl p-10 mb-12">
				{/* Left: Text Content */}
				<div className="flex-1 pr-0 md:pr-12">
					<h2 className="text-4xl font-bold mb-6 text-[#111]">About DNA</h2>
					<p className="text-lg text-gray-700 mb-6 text-justify">
						DNA is your dedicated digital marketing partner. We understand the unique challenges builders, brokers, and developers face in today's competitive market. Our specialized approach combines industry expertise with cutting-edge digital strategies to drive qualified leads, increase brand visibility, and accelerate sales.
					</p>
					<p className="text-lg text-gray-700 mb-8 text-justify">
						With years of experience exclusively serving the sector, we've helped hundreds of projects achieve remarkable growth through targeted digital campaigns. From luxury residential developments to commercial complexes, we know what works in marketing.
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						<div className="flex items-start gap-3">
							<div className="bg-blue-100 rounded-full p-3 flex items-center justify-center">
								<svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414M17.95 17.95l-1.414-1.414M6.05 6.05L4.636 7.464" /></svg>
							</div>
							<div>
								<p className="font-bold text-lg text-[#111]">Global Reach</p>
								<p className="text-gray-600 text-sm">Connecting brands worldwide</p>
							</div>
						</div>
						<div className="flex items-start gap-3">
							<div className="bg-blue-100 rounded-full p-3 flex items-center justify-center">
								<svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
							</div>
							<div>
								<p className="font-bold text-lg text-[#111]">Fast Results</p>
								<p className="text-gray-600 text-sm">Quick turnaround time</p>
							</div>
						</div>
						<div className="flex items-start gap-3">
							<div className="bg-blue-100 rounded-full p-3 flex items-center justify-center">
								<svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" /></svg>
							</div>
							<div>
								<p className="font-bold text-lg text-[#111]">Data Driven</p>
								<p className="text-gray-600 text-sm">Insights-based strategies</p>
							</div>
						</div>
						<div className="flex items-start gap-3">
							<div className="bg-blue-100 rounded-full p-3 flex items-center justify-center">
								<svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M9 20H4v-2a3 3 0 015.356-1.857M15 11a4 4 0 10-8 0 4 4 0 008 0z" /></svg>
							</div>
							<div>
								<p className="font-bold text-lg text-[#111]">Fresh Ideas</p>
								<p className="text-gray-600 text-sm">Young, innovative team</p>
							</div>
						</div>
					</div>
				</div>
				{/* Right: Image */}
				<div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
					<div className="relative">
						<div className="absolute -top-4 -left-4 w-full h-full bg-blue-100 rounded-2xl z-0" style={{ width: '105%', height: '105%' }}></div>
						<img
							src="/lovable-uploads/urban-traffic-with-cityscape.jpg"
							alt="Cityscape"
							className="rounded-2xl shadow-lg relative z-10 w-[480px] h-[320px] object-cover"
						/>
					</div>
				</div>
			</div>

			<div
				className="w-[95vw] max-w-[1600px] rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl mb-10"
				style={{
					background:
						'linear-gradient(90deg, #d3ac36ff 0%, #e8bb35ff 20%, #fff 20%, #fff 100%)',
				}}
			>
				{/* Left: Image with gold border */}
				<div
					className={`flex-shrink-0 flex items-center justify-center bg-[#F9D976] p-0 md:p-8 transition-all duration-700 ${animatePreksha ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}
					style={{ minWidth: 480 }}
				>
					<div className="rounded-2xl overflow-hidden border-[8px] border-[#C9A13B] w-[420px] h-[420px] flex items-center justify-center bg-white">
						<img
							src="/lovable-uploads/IMG-20250709-WA0002(1)(1).jpg"
							alt="Founder"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
				{/* Right: Content */}
				<div className={`flex-1 flex flex-col justify-center px-6 md:px-16 py-10 bg-white transition-all duration-700 ${animatePreksha ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
					<div className="mb-0">
						<h2 className="text-blue-500 text-3xl md:text-4xl font-bold text-center md:text-left mb-2">
							Mrs. Preksha Sharma
						</h2>
						<h1 className="text-[#F9D976] text-4xl md:text-5xl font-bold text-center md:text-left mb-4">
							Founder and Director
						</h1>
					</div>
					<div className="bg-white rounded-xl shadow p-6 md:p-4">
						<p className="text-[#222] mb-2 text-justify">
							<span className="font-bold text-xl text-blue-700"></span>Mrs. Preksha Sharma
is recognized as a trusted leader in the Indian Digital Marketing landscape with extensive experience spanning over a decade. Her visionary approach has established the foundations to make marketing more effective and accessible through innovative digital strategies. DNA Marketing Services brings together a team of skilled digital marketing specialists offering comprehensive solutions for businesses. 
						</p>
						<p className="text-[#222] text-justify">
							Under the leadership of our Founder, we have successfully positioned ourselves as the Best Digital Marketing Agency in Pune by delivering exceptional results in lead generation, brand visibility, and client engagement. We have set new benchmarks in the industry with our data-driven approach and commitment to maximizing ROI for every projects.
						</p>
					</div>
				</div>
			</div>

			<div
				className="w-[95vw] max-w-[1600px] rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl mb-10"
				style={{
					background:
						'linear-gradient(90deg, #d3ac36ff 0%, #e8bb35ff 20%, #fff 20%, #fff 100%)',
				}}
			>
				{/* Left: Content */}
				<div className={`flex-1 flex flex-col justify-center px-6 md:px-16 py-10 bg-white order-2 md:order-1 transition-all duration-700 ${animateKrishna ? 'opacity-100 -translate-x-0' : 'opacity-0 translate-x-16'}`}>
					<div className="mb-0">
						<h2 className="text-blue-500 text-3xl md:text-4xl font-bold text-center md:text-left mb-2">
							Krishna Kant Yadav
						</h2>
						<h1 className="text-[#F9D976] text-4xl md:text-5xl font-bold text-center md:text-left mb-2">
							CEO Of DNA marketing Services
						</h1>
					</div>
					<div className="bg-white rounded-xl shadow p-6 md:p-5">
						<p className="text-[#222] mb-2 text-justify">
							<span className="font-bold text-xl text-blue-700"></span>Mr. Krishna Kant Yadav is a highly accomplished professional with over 15 years of experience in sales, marketing, and financial leadership. His journey includes impactful roles across sectors, notably as CFO at Kaineel Realty in Pune and previously at Safal Steel, a leading steel fabricator based in Cato Ridge, South Africa. His global exposure has sharpened his strategic thinking and ability to adapt in dynamic markets. Krishna Sir stands out for his sharp financial acumen, deep market insight, and people-first leadership. His proven ability to drive sustainable growth and deliver measurable results makes him a standout figure in both real estate and industrial sectors.
						</p>
					</div>
				</div>
				{/* Right: Image with gold border */}
				<div
					className={`flex-shrink-0 flex items-center justify-center bg-[#F9D976] p-0 md:p-4 order-1 md:order-2 transition-all duration-700 ${animateKrishna ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}
					style={{ minWidth: 480 }}
				>
					<div className="rounded-2xl overflow-hidden border-[8px] border-[#C9A13B] w-[420px] h-[420px] flex items-center justify-center bg-white">
						<img
							src="/lovable-uploads/IMG-20250709-WA0004(1).jpg"
							alt="Founder"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>


			{/* Below main card: Deepesh and Smarjeet cards (bigger) */}
			<div className="w-full flex flex-col items-center mt-12">
				<div className="w-[95vw] max-w-[1600px] flex flex-col md:flex-row gap-7 justify-between">
					{/* Smarjeet Das */}
					<div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-2xl border-2 border-blue-400 p-10 flex-1 min-w-[480px] max-w-3xl">
						<div className="w-80 h-80 rounded-2xl overflow-hidden border-2 border-blue-200 bg-white mb-6 md:mb-0 md:mr-10 flex items-center justify-center">
							<img
								src="/lovable-uploads/1615290252662.jpeg"
								alt="Smarjeet Das"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="flex flex-col justify-center flex-1">
							<h2 className="text-blue-700 text-2xl font-bold mb-2 text-left uppercase tracking-wide">
								Smarjeet Das
							</h2>
							<p className="text-blue-500 font-semibold mb-3 text-left text-xl">
								Finance and Legal advisor
							</p>
							<p className="text-gray-700 text-left text-lg text-justify">
								Drives innovative marketing strategies and brand growth initiatives to maximize client success and market reach.
							</p>
						</div>
					</div>
					{/* Deepesh Khare */}
					<div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-2xl border-2 border-blue-400 p-10 flex-1 min-w-[480px] max-w-3xl">
						<div className="w-80 h-80 rounded-2xl overflow-hidden border-2 border-blue-200 bg-white mb-6 md:mb-0 md:mr-10 flex items-center justify-center">
							<img
								src="/lovable-uploads/WhatsApp Image 2025-07-09 at 16.23.29_0ab5358b.jpg"
								alt="Deepesh Khare"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="flex flex-col justify-center flex-1">
							<h2 className="text-blue-700 text-2xl font-bold mb-2 text-left uppercase tracking-wide">
								Deepesh Khare
							</h2>
							<p className="text-blue-500 font-semibold mb-3 text-left text-xl">
								Marketing Head
							</p>
							<p className="text-gray-700 text-left text-lg ">
								Expert in digital campaigns and brand strategy with a decade of real estate marketing experience.
							</p>
						</div>
					</div>
				</div>
			</div>

		</section>
	);
};

export default AboutSection;
