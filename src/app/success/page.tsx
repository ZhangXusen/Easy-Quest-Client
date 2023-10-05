import { PageWrapper } from "@/components/PageWrapper";
import { Metadata } from "next";

/**
 * @Description:
 * @Version: 1.0
 * @Author: 小国际
 * @Date: 2023-10-05 15:51:41
 * @LastEditors: 小国际
 * @LastEditTime: 2023-10-05 17:26:17
 */

export const metadata: Metadata = {
	title: "Question",
};

export default function Success() {
	return (
		<PageWrapper title="提交成功">
			<p>问卷提交成功1</p>
		</PageWrapper>
	);
}
