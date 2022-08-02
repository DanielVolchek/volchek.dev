import styles from "../../styles/components/Nav.module.scss";
import themeList from "./ThemeList";

interface PrivProps {}

const ThemesContainer = ({}: PrivProps) => {
	return <div className={styles.themesContainer}>{themeList}</div>;
};

export default ThemesContainer;
