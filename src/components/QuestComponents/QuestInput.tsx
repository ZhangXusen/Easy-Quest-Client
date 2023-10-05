import { FC } from "react";

/**
 * @Description:
 * @Version: 1.0
 * @Author: 小国际
 * @Date: 2023-10-05 15:00:35
 * @LastEditors: 小国际
 * @LastEditTime: 2023-10-05 15:10:08
 */

type PropType = {
	fe_id: string;
	props: {
		title: string;
		placeholder?: string;
	};
};
export const QuestInput: FC<PropType> = ({ fe_id, props }: PropType) => {
	const { title, placeholder = "" } = props;
	return (
		<>
			<p>{title}</p>
			<div className="px-1 py-0 mb-4">
				<input
					className="w-full py-2 px-4 border-solid rounded border-2 border-neutral-300"
					name={fe_id}
					placeholder={placeholder}
				/>
			</div>
		</>
	);
};
