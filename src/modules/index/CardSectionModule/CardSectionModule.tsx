import Card from "@/components/Card/Card";
import { CardProps } from "@/components/Card/Card";
import React from "react";

type Props = {
	Cards: CardProps[];
};
import styles from "./CardSectionModule.module.scss";
export default function CardSectionModule({ Cards }: Props) {
	return (
		<section className={styles.cardsection}>
			{Cards.map((card) => {
				return (
					<Card
						imgUrl={card.imgUrl}
						title={card.title}
						body={card.body}
					/>
				);
			})}
		</section>
	);
}
