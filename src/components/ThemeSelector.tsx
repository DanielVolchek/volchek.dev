import styles from "../../styles/components/Nav.module.scss";
import { setTheme, Theme } from "../utils/theme";

interface PrivProps {
	theme: Theme;
	themeTitle: string;
}

const ThemeSelector = ({ theme, themeTitle }: PrivProps) => {
	const dots = {
		primaryBGColor: (
			<div
				className={`${styles.colorDot} ${styles.primaryBGColor}`}
				style={{ background: theme.primaryBGColor }}></div>
		),
		secondaryBGColor: (
			<div
				className={`${styles.colorDot} ${styles.secondaryBGColor}`}
				style={{ background: theme.secondaryBGColor }}></div>
		),
		primaryTextColor: (
			<div
				className={`${styles.colorDot} ${styles.primaryTextColor}`}
				style={{ background: theme.primaryTextColor }}></div>
		),
		secondaryTextColor: (
			<div
				className={`${styles.colorDot} ${styles.secondaryTextColor}`}
				style={{ background: theme.secondaryTextColor }}></div>
		),
	};

	return (
		<div className={styles.themeSelector} onClick={() => setTheme(theme)}>
			<p className={styles.title}>{themeTitle}</p>
			<div className={styles.colorDotContainer}>
				{dots.primaryBGColor}
				{dots.secondaryBGColor}
				{dots.primaryTextColor}
				{dots.secondaryTextColor}
			</div>
		</div>
	);
};

export default ThemeSelector;
