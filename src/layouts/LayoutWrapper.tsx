import { CardProps } from "@/components/Card/Card";
import Header from "@/components/Header/Header";
import AboutSectionModule from "@/modules/AboutSectionModule/AboutSectionModule";
import BlogSectionModule from "@/modules/BlogSectionModule/BlogSectionModule";
import CardSectionModule from "@/modules/CardSectionModule/CardSectionModule";
import ContactMe from "@/modules/ContactMeModule/ContactMe";
import MainHeroModule from "@/modules/MainHeroModule/MainHeroModule";
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
