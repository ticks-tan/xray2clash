import { Component } from "solid-js";
import { cn } from "~/lib/utils";

interface IconProps{
    viewBox?: string,
    className?: string,
    onClick?: () => void,
}

export const Refresh : Component<IconProps> = ({
    viewBox = "0 0 24 24",
    className
}) => {
	return (
		<svg
			class={cn('w-6 h-6 text-on-background', className)}
			aria-hidden='true'
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox={viewBox}
            onClick={onclick}
		>
			<path
				stroke='currentColor'
				stroke-linecap='round'
				stroke-linejoin='round'
				stroke-width='1.5'
				d='M17.7 7.7A7.1 7.1 0 0 0 5 10.8M18 4v4h-4m-7.7 8.3A7.1 7.1 0 0 0 19 13.2M6 20v-4h4'
			/>
		</svg>
	);
};
