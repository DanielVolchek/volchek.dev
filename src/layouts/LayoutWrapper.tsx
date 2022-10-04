import { CardProps } from "@/components/Card/Card";
import Header from "@/components/Header/Header";
import AboutSectionModule from "@/modules/index/AboutSectionModule/AboutSectionModule";
import BlogSectionModule from "@/modules/index/BlogSectionModule/BlogSectionModule";
import CardSectionModule from "@/modules/index/CardSectionModule/CardSectionModule";
import ContactMe from "@/modules/index/ContactMeModule/ContactMe";
import MainHeroModule from "@/modules/index/MainHeroModule/MainHeroModule";
import React from "react";

type Props = {
	HeroAbout: React.ReactNode;
	AboutMeAside: React.ReactNode;
	Cards: CardProps[];
};

export default function LayoutWrapper({
	HeroAbout,
	AboutMeAside,
	Cards,
}: Props) {
	return (
		<>
			<Header />
			<MainHeroModule HeroAbout={HeroAbout} />
			<AboutSectionModule AboutMeAside={AboutMeAside} />
			<CardSectionModule Cards={Cards} />
			<BlogSectionModule />
			<ContactMe />
		</>
	);
}
