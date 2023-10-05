import Head from "next/head";
import { FC } from "react";

type PropType = {
	title: string;
	desc?: string;
	css?: string;
	js?: string;
	children: JSX.Element | JSX.Element[];
};
export const PageWrapper: FC<PropType> = (props: PropType) => {
	return (
		<>
			<Head>
				<title>{props.title}</title>
				<meta name="description" content={props.desc} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico"></link>
				<style>{props.css}</style>
			</Head>
			<main className="my-0 mx-auto max-w-lg">{props.children}</main>
			<script>{props.js}</script>
		</>
	);
};
