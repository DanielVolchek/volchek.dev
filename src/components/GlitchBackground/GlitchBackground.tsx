import React, { useState } from "react";

type Props = {};

import styles from "./GlitchBackground.module.scss";

export default function GlitchBackground({}: Props) {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.fundal}></div>
				{/* <div
							className={styles.glitch}
							data-text="404 NOT FOUND ...">
							404 NOT FOUND ...
						</div> */}
			</div>

			{/* <div className={styles.generator}>
				https://snorpey.github.io/jpg-glitch/
			</div> */}
		</>
	);
}
