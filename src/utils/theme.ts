// set theme using specified type

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

interface Theme {
	primaryTextColor: Color;
	secondaryTextColor: Color;
	primaryBGColor: Color;
	secondaryBGColor: Color;
}

const setTheme = (t: Theme) => {
	const root = document.documentElement;
	root.style.setProperty("--primaryTextColor", t.primaryTextColor);
	root.style.setProperty("--secondaryTextColor", t.secondaryTextColor);
	root.style.setProperty("--primaryBGColor", t.primaryBGColor);
	root.style.setProperty("--secondaryBGColor", t.secondaryBGColor);
};
export { type Theme, setTheme };
