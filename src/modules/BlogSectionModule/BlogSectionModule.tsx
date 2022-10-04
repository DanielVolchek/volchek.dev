import { useAppStateConsumer } from "@/lib/ContextWrapper";
import { AppState } from "@/lib/types";
import { spawn } from "child_process";
import React, { useEffect, useState } from "react";

import styles from "./BlogSectionModule.module.scss";
export default function BlogSectionModule() {
	const [articleList, setArticleList] = useState<number[] | null>(null);
	const appState = useAppStateConsumer();
	useEffect(() => {
		setArticleList(null);
		// todo
		// fetch a list of blog posts from x url
		const fetched = [1, 2, 3];
		setArticleList(fetched);
	}, [appState]);

	return (
		<section className={styles.blogsectionmodule}>
			<h3>Blog Posts - {appState}</h3>

			<div className={styles.articles}>
				{articleList ? (
					articleList.map((article) => {
						return article;
					})
				) : (
					<span>Loading</span>
				)}
			</div>

			<button className={styles.showMore}>Show More</button>
		</section>
	);
}
