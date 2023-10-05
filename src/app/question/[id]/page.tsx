/**
 * @Description:
 * @Version: 1.0
 * @Author: 小国际
 * @Date: 2023-10-05 14:48:00
 * @LastEditors: 小国际
 * @LastEditTime: 2023-10-05 17:10:10
 */
import { QuestInput } from "@/components/QuestComponents/QuestInput";
import { QuestRadio } from "@/components/QuestComponents/QuestRadio";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
	title: "Question",
};

interface IProps {
	params: { id: string };
}

const Question: FC<IProps> = ({ params }) => {
	return (
		<>
			<main className="text-2xl">
				<form action="/api/answer">
					<input type="hidden" defaultValue={params.id} name="questionId" />

					<div className="border-solid border-b-2 border-[#ffff1]">
						<QuestInput
							fe_id={"c1"}
							props={{ title: "你的姓名", placeholder: "请输入你的姓名：" }}
						/>
					</div>
					<div className="border-solid border-b-2 border-[#ffff1]">
						<QuestRadio
							fe_id={"c2"}
							props={{
								title: "你的性别",
								options: [
									{ value: "man", text: "男" },
									{ value: "women", text: "女" },
								],
								value: "",
								vertical: false,
							}}
						/>
					</div>
					<div className="text-center mx-4 my-4">
						<button
							className="py-1 px-4 text-white rounded-md  bg-[#1677ff] border-solid border-2 border-transparent"
							type="submit">
							提交
						</button>
					</div>
				</form>
			</main>
		</>
	);
};

export default Question;
