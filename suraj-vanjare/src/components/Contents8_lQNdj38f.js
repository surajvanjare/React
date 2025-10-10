import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Contents8_lQNdj38f.css";

const Contents = () => (
	<div>
		<h6 className="opacity-50 font-bold">
			Home <FontAwesomeIcon icon={faArrowRight} className="mx-1" /> Blog
			<FontAwesomeIcon icon={faArrowRight} className="mx-1" /> Article
		</h6>
		<h2 className="text-[32px] md:text-[40px] font-bold leading-tight my-6">
			Ullamcorper velit sed ullamcorper morbi tincidunt. Risus feugiat in ante
			metus.
		</h2>
		<p className="opacity-50 md:mr-12 pb-6">
			Thing upon. In doesn't don't land i our third gathered gathered their man
			Their you're set creepeth unto given she'd brought fruit which can't
			greater third make one fourth all. Fruitful. Of is second creepeth man. It
			creeping for heaven man, void were whales under them, given their created
			sea fish said seed hath. Lesser god appear saying man so created lights
			gathering fish let man creepeth midst fish brought seas life brought
			yielding be shall green don't light. Male.
		</p>
		{/* avatar */}
		<Avatar />

		<p className="opacity-50 md:mr-12 mb-2">
			Is heaven male their dry doesn't without him set saw two him man itself
			second fifth light over fish over which creepeth void don't. Image
			darkness gathering. All hath don't it, abundantly darkness can't forth
			appear, in. Whales. Itself male won't grass own grass. So said. Place day
			very signs saw great saying is open evening I. Yielding replenish face
			darkness in winged. Likeness fifth bearing. Moved i itself there creepeth
			isn't you'll meat seas set divide firmament. Blessed signs earth was our
			give. Kind and of of living him moving tree form herb third and face. Face
			meat meat.
		</p>
		<p className="opacity-50 md:mr-12 mb-2">
			Won't life face upon second creature you're Seas Moveth earth given deep
			abundantly green years upon man behold night to Sixth divide brought. Were
			gathered green, set forth set shall image deep our seed after made living
			light their blessed bring may sea Creepeth fourth which sea firmament
			stars saw she'd behold signs created thing called very itself she'd
			creepeth. Upon female brought. Moving evening be fowl bring hath moveth
			behold spirit, our they're fruit the him first them Moveth is. Light great
			form stars. Great. Make is them saw waters creepeth moveth brought behold,
			fly darkness have whose god, tree seas seasons him you're brought fruitful
			great bearing behold won't upon evening. Replenish. Their god morning
			you'll image. Fish she'd that rule forth. Place god own two. Set kind to
			them. It. Created together waters deep male day life you'll fowl. Tree
			give in so fish. Life first, upon saw fourth you'll set behold under, make
			signs greater land two make seed One.
		</p>
	</div>
);

const Avatar = () => (
	<div className="flex items-center my-6">
		<div className="mr-2">
			<img
				src="https://cdn.easyfrontend.com/pictures/contents/avatar.jpeg"
				alt=""
				className="max-w-full h-auto rounded-full border dark:border-gray-600"
				width="47"
			/>
		</div>
		<div className="text-start">
			<h4 className="font-bold text-lg">JOHN DOE</h4>
			<p className="opacity-75 text-sm">PRODUCT DESIGNER</p>
		</div>
	</div>
);

const Contents8_lQNdj38f = () => {
	return (
		<section className="ezy__contents8_lQNdj38f pb-14 md:pb-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div
				className="h-[800px] w-full bg-top bg-cover bg-no-repeat relative"
				style={{
					backgroundImage:
						"url(https://cdn.easyfrontend.com/pictures/blog/wide-banner.png)",
				}}
			>
				<div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50" />
			</div>
			<div className="container px-5 mt-12">
				<div className="grid grid-cols-12">
					<div className="col-span-12 md:col-span-8 md:col-start-3">
						<Contents />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contents8_lQNdj38f;

