/**
 * 下拉选择组件
 */

import { Accessor, Component, For, createEffect } from "solid-js";

import { cn } from "~/lib/utils";

export type SelectItem = {
	value: string,
	text: string,
};

interface SelectProps {
	idName: string,
	placeHolder?: string,
	items: Accessor<SelectItem[]>,
	onItemSelect?: (val: string) => void,
    className?: string,
}

const Select: Component<SelectProps> = ({
	placeHolder,
	idName,
	items,
	onItemSelect = (v) => {},
    className,
}) => {
	let input: HTMLInputElement;
	let datalist : HTMLDataListElement;
	
	const onItemSelectCallback = (e: InputEvent) => {
		const val = input.value;
		const options = datalist.childNodes;
		for (const opt of options) {
			if (opt.textContent == val) {
				onItemSelect(val);
			}
		}
	}

	return (
		<div class={cn(className)}>

			<div class='relative'>
				<input
					ref={input}
					type='text'
					list={idName}
					name="selectName"
					class={cn(
						"rounded-lg border-on-background bg-background border w-full py-1 px-4",
						"pe-10 sm:text-sm [&::-webkit-calendar-picker-indicator]:opacity-0", 
						"cursor-default text-center caret-transparent focus:border-primary"
					)}
					placeholder={placeHolder}
					onInput={onItemSelectCallback}
				/>

				<span class='absolute inset-y-0 right-0 flex w-8 items-center'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						class='size-5'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9'
						/>
					</svg>
				</span>
			</div>

			<datalist id={idName} ref={datalist}>
				<For each={items()}>
					{it => <option value={it.value}>{it.text}</option>}
				</For>
			</datalist>
		</div>
	);
};

export default Select;
