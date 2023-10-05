/**
 * @Description:
 * @Version: 1.0
 * @Author: 小国际
 * @Date: 2023-10-05 15:15:08
 * @LastEditors: 小国际
 * @LastEditTime: 2023-10-05 15:22:02
 */

import { FC } from "react";

type PropType = {
	fe_id: string;
	props: {
		title: string;
		options: Array<{
			value: string;
			text: string;
		}>;
		value: string;
		vertical: boolean;
	};
};
export const QuestRadio: FC<PropType> = ({ fe_id, props }) => {
	const { title, options, value, vertical } = props;
	return (
		<>
			<p>{title}</p>
			<ul className="py-0 px-0 list-none">
				{options.map((opt) => {
					const { value: val, text } = opt;

					return (
						<li key={val} className={vertical ? "mb-3" : "inline-block mr-3"}>
							<label htmlFor="">
								<input
									type="radio"
									name={fe_id}
									value={val}
									defaultChecked={val === value}
								/>
								{text}
							</label>
						</li>
					);
				})}
			</ul>
		</>
	);
};
