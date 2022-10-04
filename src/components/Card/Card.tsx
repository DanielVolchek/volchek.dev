import React from "react";
import Image from "next/image";

export type CardProps = {
	imgUrl: string;
	title: string;
	body: string;
};
import styles from "./Card.module.scss";

export default function Card({ imgUrl, title, body }: CardProps) {
	return (
		<div className={styles.card}>
			<Image src={imgUrl} />
			<h4>{title}</h4>
			<p>{body}</p>
		</div>
	);
}
