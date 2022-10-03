import { read } from "fs";
import React from "react";
import { Stack } from "./Stack";

type Props = {
	stackList: Stack[]; // either pass in string and write function to get correct stack piece or pass in Stack element
};
import styles from "./TechStack.module.scss";

export default function TechStack({}: Props) {
	return <div>TechStack</div>;
}

const LookupMap = {};

const getStackElementFromName = (stack: Stack) => {};
