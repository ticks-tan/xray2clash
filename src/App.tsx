import { onMount, type Component, createResource, createMemo } from "solid-js";

import AppHeader from "~/components/header";
import TextAreas from "~/components/text-areas";
import { HorizontalDivider } from "~/components/divider";
import { Refresh as RefreshIcon } from "~/components/icons";
import Select from "./components/select";
import { ACL4SSRContentItem, aclssrRequest, getACLSSRList } from "./lib/api";
import request from "umi-request";
import { cn } from "./lib/utils";

async function testApi() {
	const res = await getACLSSRList();
	const f = res[0];
	console.log(JSON.stringify(f, null, 2));
	// console.log(`filename: ${f.name}`);
	const file = await aclssrRequest.get<string>(f.download_url, {
		prefix: "",
	});
	console.log(file);
	// const regex = /[^;]ruleset=([^,]+),(.+)/g;
	// let match: RegExpExecArray;
	// console.log("-------------------------------");
	// while ((match = regex.exec(file))) {
	// 	console.log(`match-len: ${match.length}`);
	// 	for (const m of match) {
	// 		console.log(`match: ${m}`);
	// 	}
	// }
	// console.log("-------------------------------");
}

const App: Component = () => {
	const [templateData, { refetch }] = createResource(async () => {
		const res = await getACLSSRList();
		let map = new Map<string, ACL4SSRContentItem["_links"]>();
		for (const it of res) {
			map.set(it.name, it._links);
		}
		return map;
	});
	const templatePending = createMemo(() => templateData.state == "pending");
	const templateSelects = createMemo(() => {
		if (templateData()) {
			let list: {
				value: string;
				text: string;
			}[] = new Array();
			templateData().forEach((_v, k) => {
				list.push({ value: k, text: k });
			});
			return list;
		}
		return [];
	});

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
					<Select
						className="w-fit"
						idName='template-select'
						items={templateSelects}
						onItemSelect={(v) => {
							console.log(v);
						}}
					/>
					<RefreshIcon
						className={cn(
							"ml-2 md:ml-4 cursor-pointer hover:text-primary",
							templatePending() ? "animate-spin" : "animate-none"
						)}
						onClick={refetch}
					/>
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
