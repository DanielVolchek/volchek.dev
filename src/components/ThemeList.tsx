import ThemeSelector from "./ThemeSelector";

const themeList: JSX.Element[] = [
	<ThemeSelector
		key={"DEFAULT"}
		theme={{
			primaryBGColor: "#111827",
			secondaryBGColor: "#adadad",
			primaryTextColor: "#ffffff",
			secondaryTextColor: "#add8e6",
		}}
		themeTitle={"DEFAULT"}
	/>,
	<ThemeSelector
		key={"LIGHT"}
		theme={{
			primaryBGColor: "#fff",
			secondaryBGColor: "#666",
			primaryTextColor: "#000",
			secondaryTextColor: "#ADD8E6",
		}}
		themeTitle={"LIGHT"}
	/>,
	<ThemeSelector
		key={"DARK"}
		theme={{
			primaryBGColor: "#000",
			secondaryBGColor: "#ADD8E6",
			primaryTextColor: "#fff",
			secondaryTextColor: "#fff",
		}}
		themeTitle={"DARK"}
	/>,
];

export default themeList;
