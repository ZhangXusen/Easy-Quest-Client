import type { NextApiRequest, NextApiResponse } from "next";
import { postAnswer } from "../service/answer";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "post") {
		res.status(200).json({ errno: -1, message: "请求方法错误" });
	}

	// 提交到服务端
	const info = getAnswerInfo(req.body);

	try {
		const data = await postAnswer(info);
		if (data.errno === 0) {
			res.redirect("/success");
		}
	} catch (error) {
		res.redirect("/fail");
	}
}

// 发送请求;
function getAnswerInfo(req: any) {
	const answerList: any[] = [];
	Object.keys(req).forEach((key) => {
		if (key === "questionId") return;
		answerList.push({ componentId: key, value: req[key] });

		return {
			questionId: req.questionId || "",
			answerList,
		};
	});
}
