let pageTitle;
let pageOutput;
let randomColor;
let iconNum;

let pageCollection = [
	{
		"sectionName" : "What is Discord",
		"category": "main",
		"bodyText" : "Discord is an instant messaging and voice over internet protocol (VoIP) platform which allows communication through voice calls, video calls, text messaging, and media and files. Discord's mission is to \"build an easy-to-use communication service that gives people a place to talk, build relationships, and belong\".",
		"attachedImage" : "n/a"
	},
	{
		"sectionName" : "About Discord",
		"category": "main",
		"bodyText" : "Discord was founded by Jason Citron and Stanislav Vishnevskiy and was developed in response to the difficulty in coordinate tactics with teammates \"in games like Final Fantasy XIV and League of Legends\" using existing VoIP software. This led Citron creating a platform with a focus on user friendliness with minimal impact on performance.",
		"attachedImage" : {
			"image1" : "citron.webp",
			"image2" : "n/a"
		}
	},
	{
		"sectionName" : "Discord's Rapid Growth",
		"category": "main",
		"bodyText" : "Since it's launch, Discord has grown exponentially, quickly becoming the go-to chat software for the gaming community. Although initially just supportingtext and voice chat, in 2017, it added video calling, streaming, and screen-sharing features which only further boosted its popularity. Discord's userbase has since exploded, with 614 million registered users as of January 2024.",
		"attachedImage" : {
			"image1" : "usagedata.png",
			"image2" : "n/a"
		}
	},
	{
		"sectionName" : "Initial Funding",
		"category": "funding",
		"bodyText" : "To develop Discord, Hammer & Chisel, which Citron had founded with the proceeds ($104 MM) of of his first venture OpenFeint, gained additional funding from YouWeb's 9+ incubator, which had also funded the startup of Hammer & Chisel, Benchmark Capital, and Tencent.",
		"attachedImage" : "n/a"
	},
	{
		"sectionName" : "After Release",
		"category": "funding",
		"bodyText" : "After publicly releasing in May 2015 discordapp.com, Discord raised an additional $20 million in funding, including an investment from WarnerMedia (which was eventually sold off when WarnerMedia Investment Group was shut down and acquired by AT&T).",
		"attachedImage" : "n/a"
	},
	{
		"sectionName" : "Further Funding",
		"category": "funding",
		"bodyText" : "In December 2018, Discord raised a further $150 million, putting the company's valuation at $2 billion. This round of funding was led by Greenoaks Capital with other major backers including Firstmark, Tencent, IVP, Index Ventures and Technology Opportunity Partners.",
		"attachedImage" : {
			"image1" : "greenoaks.png",
			"image2" : "tencent.webp"
		}
	},
	{
		"sectionName" : "Discord Currently",
		"category": "funding",
		"bodyText" : "Following an announcement in June 2020 that Discord planned on shifting focus away from video gaming specifically to a more all-purpose communication and chat client, it secured yet another $100 million in funding. Ahead of a funding round in August 2021, Discord reported record revenues (triple of the year before) and had an estimated valuation of $15 billion, securing an additional $500 million in investment.",
		"attachedImage" : {
			"image1" : "funding.webp",
			"image2" : "n/a"
		}
	},
	{
		"sectionName" : "Discord's Business Model",
		"category": "profit",
		"bodyText" : "Discord is free to download and until recently, ad-free, which has allowed it to grow its userbase rapidly, opting to prioritize userbase and market share expansion over immediate profitability. Like many tech startups, its challenge lies in finding sustainable revenue streams without alienating its user base or compromising user experience. However, now that Discord's growth has slowed, with monthy active users stagnating since 2021, Discord still lacks a clear path to profitability.",
		"attachedImage" : {
			"image1" : "activeusers.png",
			"image2" : "n/a"
		}
	},
	{
		"sectionName" : "Where Does Discord's Revenue Come From",
		"category": "profit",
		"bodyText" : "Currently, Discord's main source of revenue comes from offering users the opportunity to purchase premium features to enhance their experience - Nitro and Nitro Classic. Nitro offers a variety of customization features to subscribers from personalized emojis to animated avatars, and custom tags. However Discord's reliance on keeping users paying for long periods of time and/or convincing new users to upgrade is very risky in terms of generating consistent revenue.",
		"attachedImage" : {
			"image1" : "nitro.jpeg",
			"image2" : "n/a"
		}
	},
	{
		"sectionName" : "The Cost of Running Discord",
		"category": "profit",
		"bodyText" : "Discord does not release exact figures, but like many social media companies, data centers, cloud tools, and other parts of technology infrastructure are typically the largest expenses, espescially for a company like Discord with growing traffic and network complexity. We can compare Discord to Facebook in 2012, which had around 1 billion monthly active users and spent about $1 per monthly active user. Accounting for technological improvements and smaller userbase, we can assume that for Discord's 150 million monthly active users, it costs 35 cents per user. Using Discord's most rescent revenue figures of $445 million and assuming this is its only cost, we can calculate a $185 million loss for 2022.",
		"attachedImage" : "n/a"
	},
	{
		"sectionName" : "Discord vs Reddit",
		"category": "profit",
		"bodyText" : "Additionally we can compare Discord to Reddit, a similarly sized company, which has raised $1.3 billion in funding and is valued at $10 billion. Reddit has more monthly users than Discord, with over 1 billion monthly active users, and generated $804 million in revenue as of 2023. However, Reddit's recent IPO sheds light on their financials, reporting $90.8 million in losses for 2023. \n \nThis figure is largely consistent with our estimated $185 million loss for Discord, and highlights the fact that Discord still has a long way to go to reach profitability. This is furthered by Citron laying off 17% of its workforce in January 2024 in a memo shown below:",
		"attachedImage" : {
			"image1" : "layoff.png",
			"image2" : "n/a"
		}
	},
	{
		"sectionName" : "Ads on Discord",
		"category": "revenue",
		"bodyText" : "Discord announced in March, and has since rolled out, new ads called Sponsored Quests. The ads target users based on their gameplay, age and geographic location data, and in order to earn rewards, users must stream themselves completing an in-game task from the advertiser while at least one friend is watching. \n\nFrom a business perspective, this is an interesting way to monetize their platform while leveraging the social dynamics inherent in gaming communities and drive engagement.",
		"attachedImage" : {
			"image1" : "ads.webp",
			"image2" : "n/a"
		}
	},
	{
		"sectionName" : "What's Wrong With That?",
		"category": "revenue",
		"bodyText" : "Initial user feedback on the rollout suggested that the ads appear to be minimally intrusive, with many understanding their necessity given that the platform operates on a freemium model. However, the streaming aspect of the ad campaign feels wrong with many users are reluctant to have their friendships monetized or treated as products. \n\nThe real crisis within the Discord community, however, is Discord's contradiction of its own history of claiming it had no intention to run ads like other companies that offer software and social networking services. This has worried many users as it seems Discord's priorities are shifting away from its original values and towards a more profit-driven approach, leaving many wondering if more changes will come at the expense of Discord's userbase and original principles.",
		"attachedImage" : "n/a"
	},
];

document.addEventListener("DOMContentLoaded", function(){
	pageTitle = document.getElementById("pageName");
	pageOutput = document.getElementById("content");

	let lookup = window.location.search;
	let params = new URLSearchParams(lookup);
	let page = params.get('page');

	if(page == "funding"){
		pageTitle.innerText = "who-funds-discord";
		page2.style.backgroundColor = "#404249";
	}
	else if(page == "profit"){
		pageTitle.innerText = "discords-profit-problem";
		page3.style.backgroundColor = "#404249";
	}
	else if(page == "revenue"){
		pageTitle.innerText = "how-discord-is-trying";
		page4.style.backgroundColor = "#404249";
	}
	else if(page == "concerns"){
		pageTitle.innerText = "other-concerns";
		page5.style.backgroundColor = "#404249";
	}
	else{
		pageTitle.innerText = "main-page";
		page1.style.backgroundColor = "#404249";
	}

	for (let i = 0; i < pageCollection.length; i++) {
      if (pageCollection[i]["category"] == page){
      	restyle();
        pageElement(pageCollection[i]);
      }
      if(pageCollection[i]["category"] == "main" && page == null){
      	restyle();
      	pageElement(pageCollection[i]);
      }
    }
});

function pageElement(pageElementJSON) {
	//create section name
	let element = document.createElement("DIV");
	element.classList.add("element");
	let titleText = document.createElement("DIV");

	//random number
	randomIcon();
	//create image
	let img = document.createElement("IMG");
	
	img.classList.add("icon");

	if(iconNum == 0){
		img.src = "icon1.png";
	}
	else if(iconNum == 1){
		img.src = "icon2.png";
	}
	else if(iconNum == 2){
		img.src = "icon3.png"
	}
	else if(iconNum == 3){
		img.src = "icon4.png"
	}
	else{
		img.src = "icon5.png";
	}

	element.appendChild(img);
	let sectionName = document.createElement("DIV");
	sectionName.classList.add("sectionName");
	sectionName.innerText = pageElementJSON["sectionName"];
	sectionName.style.color = randomColor;
	titleText.appendChild(sectionName);

	//body text
	let text = document.createElement("DIV");
	text.classList.add("bodyText");
	text.innerText = pageElementJSON["bodyText"];
	titleText.appendChild(text);

	//attach images if applicable
	let attachedImageJSON = pageElementJSON["attachedImage"];
	if(attachedImageJSON != "n/a"){
		let imageDiv = document.createElement("DIV");
		imageDiv.classList.add("imageDiv");

		let image1 = document.createElement("IMG");
		image1.classList.add("attachedImage");
		image1.setAttribute("id", "myImg");
		image1.src = attachedImageJSON["image1"];
		imageDiv.appendChild(image1);
		
		if(attachedImageJSON["image2"] != "n/a"){
			let image2 = document.createElement("IMG");
			image2.classList.add("attachedImage");
			image1.setAttribute("id", "myImg");
			image2.src = attachedImageJSON["image2"];
			imageDiv.appendChild(image2);
		}
		titleText.appendChild(imageDiv);
	}


	element.appendChild(titleText);

	pageOutput.appendChild(element);	
};

function restyle() {
	//font color
	let r = Math.random() * (255-150) + 150;
	let g = Math.random() * (255-150) + 150;
	let b = Math.random() * (255-150) + 150;
	randomColor = "rgb("+r+","+g+","+b+")";
};

function randomIcon(){
	iconNum = Math.floor(Math.random()*5);
}

