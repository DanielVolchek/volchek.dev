import { Layout_FooterStyles as styles } from "../../../styles/StylesModuleAPI";

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footerLinks}></div>
			<a
				href="https://github.com/danielvolchek"
				style={{ marginRight: "10px" }}>
				Github
			</a>
			<a href="">LinkedIn</a>
			<p>Copyright Daniel Volchek - 2022</p>
		</div>
	);
};

export default Footer;
