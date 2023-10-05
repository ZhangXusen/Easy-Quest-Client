import { PageWrapper } from "@/components/PageWrapper";
import { Metadata } from "next";
import { FC } from "react";

/**
 * @Description:
 * @Version: 1.0
 * @Author: 小国际
 * @Date: 2023-10-05 15:51:41
 * @LastEditors: 小国际
 * @LastEditTime: 2023-10-05 16:56:17
 */

export const metadata: Metadata = {
	title: "Question",
};

export const Success: FC = () => {
	return (
		<PageWrapper title="提交失败">
			<p>问卷提交失败</p>
		</PageWrapper>
	);
};

export default Success;
