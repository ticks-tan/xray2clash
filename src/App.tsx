import type { Component } from "solid-js";

import AppHeader from "~/components/header";
import TextAreas from "~/components/text-areas";
import { HorizontalDivider } from "~/components/divider";
import { Refresh as RefreshIcon } from "~/components/icons";
import Select from "./components/select";

const App: Component = () => {
	return (
		<>
			{/* 顶部标题 */}
			<AppHeader />
			{/* Xray输入框 */}
			<TextAreas
				idName='xray-input'
				labelText='Xray 分享链接'
				placeHolder={`请输入Xray分享链接：\n例：vless://xxxx`}
				className='m-8'
			/>
			{/* 模板设置区域 */}
			<div class='m-8 flex flex-col items-center md:items-start gap-2'>
				{/* 模板 */}
				<div class='flex items-center'>
					<p>模板选择：</p>
					<Select idName='template-select' items={[]} />
					<RefreshIcon className="ml-2 md:ml-4 cursor-pointer hover:text-primary"/>
				</div>
			</div>
			{/* 分割线 */}
			<HorizontalDivider text='转换结果' />
			{/* Clash输出框 */}
			<TextAreas
				idName='clash-output'
				labelText='Clash转换结果'
				disabled={true}
				placeHolder={`这里会实时输出转换结果哟`}
				className='m-8'
			/>
		</>
	);
};

export default App;
