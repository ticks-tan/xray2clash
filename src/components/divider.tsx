import { Component } from "solid-js";
import { cn } from "~/lib/utils";

interface HorizontalDividerProps {
    text?: string,
    className?: string,
}

export const HorizontalDivider: Component<HorizontalDividerProps> = ({
    text = "我是横向分割线",
    className
}) => {
	return (
			<div class={cn('relative flex justify-center', className)}>
				<div class='absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-on-background/60 to-transparent opacity-75'>

                </div>
				<span class='relative z-10 bg-background px-6 font-bold'>
					{text}
				</span>
			</div>
	);
};

