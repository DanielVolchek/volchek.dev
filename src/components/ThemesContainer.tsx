import { Layout_NavStyles as styles } from "../../styles/StylesModuleAPI";
import themeList from "./ThemeList";

interface PrivProps {}

const ThemesContainer = ({}: PrivProps) => {
	return <div className={styles.themesContainer}>{themeList}</div>;
};

export default ThemesContainer;
