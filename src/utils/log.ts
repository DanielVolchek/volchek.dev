import App from "next/app";

enum AppType {
	DEV,
	BUILD,
}

const RunType = AppType.DEV;

const log = (type: AppType, ...logs: any) => {
	if (type !== RunType) {
		return;
	}
	console.log(logs);
};

export { AppType, log };
