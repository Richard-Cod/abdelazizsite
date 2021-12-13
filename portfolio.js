import emoji from "react-easy-emoji";

export const greetings = {
	name: "Abdelaziz GAKOU",
	title: "Salut à tous, Je suis Abdelaziz ",
	description:"Je suis passionné d'informatique et j'apprends le développement web avec Richard",
	resumeLink: "https://cv.hanzla.ga",
};

export const openSource = {
	githubUserName: "1hanzla100",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/1hanzla100",
	instagram: "https://www.instagram.com/1hanzla100",
	twitter: "https://twitter.com/1hanzla100",
	github: "https://github.com/1hanzla100",
	linkedin: "https://www.linkedin.com/in/hanzla-tauqeer-0869281ba/",
};

export const skillsSection = {
	title: "Qu'est-ce que je fais ?",
	subTitle:
		"J'apprends l'informatique et les nouvelles technologies",
	skills: [
		emoji(
			"⚡ Je développe des applications et des sites web "
		),
		emoji(
			"⚡ Je développe des applications mobiles"
		),
		emoji(
			"⚡ Je fais du tennis de table"
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "flutter",
			fontAwesomeClassname: "logos:flutter",
		},
		{
			skillName: "swift",
			fontAwesomeClassname: "vscode-icons:file-type-swift",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "logos:aws",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "docker",
			fontAwesomeClassname: "logos:docker-icon",
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programmation",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "Collège JEAN MACE",
		subHeader: "Je suis en 3ème année , option informatique",
		duration: "September 2018 - Toujours en cours",
		desc: "J'apprend l'informatique.",
		descBullets: [
			"Je veux pouvoir développer mes propres projets informatiques à la fin de mon parcours",
		],
	},
];

export const experience = [
	{
		role: "Stage chez Mayyan",
		company: "MAYYAN",
		companylogo: "/img/icons/common/logomayyan.png",
		date: "13 décembre 2021 – Actuellement",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		role: "Développeur frontend",
		company: "Github",
		companylogo: "/img/icons/common/github.svg",
		date: "Mai 2017 – Mai 2018",
		desc: "Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		role: "Ingénieur logiciel",
		company: "Google",
		companylogo: "/img/icons/common/google.svg",
		date: "Juin 2018 – Août 2019",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		descBullets: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
	},
];

export const projects = [
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		link: "https://example.com",
	},
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/1hanzla100",
	},
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/1hanzla100",
		link: "https://example.com",
	},
];

export const feedbacks = [
	{
		name: "Richard Bathiebo",
		feedback:
			"Je trouve que Abdelaziz est vraiment passionné par le domaine des nouvelles technologies et je compte sur lui pour continuer d'apprendre ! 🙂",
	},
];
