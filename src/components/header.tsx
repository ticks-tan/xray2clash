import { Component, createSignal, onCleanup, onMount } from "solid-js";
import { cn } from "~/lib/utils";

const Header : Component = () => {

    const [isTop, setIsTop] = createSignal(true);


    const scrollHandler = (ev) => {
        setIsTop(window.scrollY < 10);
    }

    onMount(() => {
        window.addEventListener("scroll", scrollHandler);
    });

    onCleanup(() => {
        window.removeEventListener("scroll", scrollHandler);
    })

    return (
        <header 
            class={cn(
                "w-full h-20 flex items-center",
                "justify-center md:justify-start sticky top-0 z-40 bg-background",
                isTop() ? "shadow-sm" : "shadow-md",
                "transition-shadow duration-300 translate-y-0",
            )}
        >
            <div class="grid grid-cols-1 gap-1 md:ml-16">
                {/* Title */}
                <p class="text-xl font-bold text-center md:text-start">Xray2Clash</p>
                {/* Description */}
                <p class="text-sm text-on-background/60 text-center md:text-start">一个简单的 Xray 订阅转 Clash 工具</p>
            </div>
        </header>
    );
}

export default Header;