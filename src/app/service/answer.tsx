import { post } from "./ajax";

export async function postAnswer(answer: any) {
	const url = "/api/answer";
	const data = await post(url, answer);
	return data;
}
