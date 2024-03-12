/**
 * 文本输入域
 */

import { Component } from "solid-js";
import { cn } from "~/lib/utils";

interface TextAreasProps {
    idName?: string,
    rows?: number,
    labelText?: string,
    placeHolder?: string,
    disabled?: boolean,
    className?: string,
}

const TextAreas : Component<TextAreasProps> = ({
    idName = `text-area-id`,
    labelText = "",
    rows = 8,
    placeHolder = "请输入文本",
    disabled = false,
    className,
}) => {
    return (
    <div class={cn(className)}>
        <label for={idName} class="block text-sm font-bold text-on-secondary-container">{labelText}</label>
        <textarea
            id={idName}
            class={cn(
                "p-4 mt-2 w-full rounded-md border border-secondary align-top",
                "shadow-sm sm:text-sm bg-secondary-container/40 min-h-96",
                "md:min-h-64",
                disabled && "cursor-not-allowed",
            )}
            rows={rows}
            placeholder={placeHolder}
            disabled={disabled}
        >

        </textarea>
    </div>
    );
};

export default TextAreas;