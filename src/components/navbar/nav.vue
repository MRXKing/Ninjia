<template>
    <div
        class="navbar bg-base-100 text-base-content sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100">
        <div class="navbar-start">
            <div title="Change Theme" class="dropdown">
                <div tabindex="0" class="btn normal-case btn-ghost">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        class="h-5 w-5 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01">
                        </path>
                    </svg>
                    <span class="hidden font-normal md:inline">{{ $t("theme") }}</span>
                    <svg width="12px" height="12px" class="hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                    </svg>
                </div>
                <div
                    class="dropdown-content bg-base-200 text-base-content rounded-box top-px h-[70vh] max-h-96 w-56 overflow-y-auto shadow mt-16">
                    <div class="grid grid-cols-1 gap-3 p-3" tabindex="0">
                        <button class="outline-base-content overflow-hidden rounded-lg text-left" data-set-theme="light"
                            data-act-class="[&amp;_svg]:visible">
                            <div data-theme="light" class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                <div class="grid grid-cols-5 grid-rows-3">
                                    <div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                            fill="currentColor" class="invisible h-3 w-3 shrink-0">
                                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z">
                                            </path>
                                        </svg>
                                        <div class="flex-grow text-sm">light</div>
                                        <div class="flex h-full flex-shrink-0 flex-wrap gap-1"
                                            data-svelte-h="svelte-izuv7l">
                                            <div class="bg-primary w-2 rounded"></div>
                                            <div class="bg-secondary w-2 rounded"></div>
                                            <div class="bg-accent w-2 rounded"></div>
                                            <div class="bg-neutral w-2 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button><button
                            class="outline-base-content overflow-hidden rounded-lg text-left [&amp;_svg]:visible"
                            data-set-theme="dark" data-act-class="[&amp;_svg]:visible">
                            <div data-theme="dark" class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                <div class="grid grid-cols-5 grid-rows-3">
                                    <div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                            fill="currentColor" class="invisible h-3 w-3 shrink-0">
                                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z">
                                            </path>
                                        </svg>
                                        <div class="flex-grow text-sm">dark</div>
                                        <div class="flex h-full flex-shrink-0 flex-wrap gap-1"
                                            data-svelte-h="svelte-izuv7l">
                                            <div class="bg-primary w-2 rounded"></div>
                                            <div class="bg-secondary w-2 rounded"></div>
                                            <div class="bg-accent w-2 rounded"></div>
                                            <div class="bg-neutral w-2 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button><button class="outline-base-content overflow-hidden rounded-lg text-left"
                            data-set-theme="cupcake" data-act-class="[&amp;_svg]:visible">
                            <div data-theme="cupcake" class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                <div class="grid grid-cols-5 grid-rows-3">
                                    <div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                            fill="currentColor" class="invisible h-3 w-3 shrink-0">
                                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z">
                                            </path>
                                        </svg>
                                        <div class="flex-grow text-sm">cupcake</div>
                                        <div class="flex h-full flex-shrink-0 flex-wrap gap-1"
                                            data-svelte-h="svelte-izuv7l">
                                            <div class="bg-primary w-2 rounded"></div>
                                            <div class="bg-secondary w-2 rounded"></div>
                                            <div class="bg-accent w-2 rounded"></div>
                                            <div class="bg-neutral w-2 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button><button class="outline-base-content overflow-hidden rounded-lg text-left"
                            data-set-theme="bumblebee" data-act-class="[&amp;_svg]:visible">
                            <div data-theme="bumblebee"
                                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                <div class="grid grid-cols-5 grid-rows-3">
                                    <div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                            fill="currentColor" class="invisible h-3 w-3 shrink-0">
                                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z">
                                            </path>
                                        </svg>
                                        <div class="flex-grow text-sm">bumblebee</div>
                                        <div class="flex h-full flex-shrink-0 flex-wrap gap-1"
                                            data-svelte-h="svelte-izuv7l">
                                            <div class="bg-primary w-2 rounded"></div>
                                            <div class="bg-secondary w-2 rounded"></div>
                                            <div class="bg-accent w-2 rounded"></div>
                                            <div class="bg-neutral w-2 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button><button class="outline-base-content overflow-hidden rounded-lg text-left"
                            data-set-theme="emerald" data-act-class="[&amp;_svg]:visible">
                            <div data-theme="emerald" class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                <div class="grid grid-cols-5 grid-rows-3">
                                    <div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                            fill="currentColor" class="invisible h-3 w-3 shrink-0">
                                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z">
                                            </path>
                                        </svg>
                                        <div class="flex-grow text-sm">emerald</div>
                                        <div class="flex h-full flex-shrink-0 flex-wrap gap-1"
                                            data-svelte-h="svelte-izuv7l">
                                            <div class="bg-primary w-2 rounded"></div>
                                            <div class="bg-secondary w-2 rounded"></div>
                                            <div class="bg-accent w-2 rounded"></div>
                                            <div class="bg-neutral w-2 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button><button class="outline-base-content overflow-hidden rounded-lg text-left"
                            data-set-theme="corporate" data-act-class="[&amp;_svg]:visible">
                            <div data-theme="corporate"
                                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                <div class="grid grid-cols-5 grid-rows-3">
                                    <div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                            fill="currentColor" class="invisible h-3 w-3 shrink-0">
                                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z">
                                            </path>
                                        </svg>
                                        <div class="flex-grow text-sm">corporate</div>
                                        <div class="flex h-full flex-shrink-0 flex-wrap gap-1"
                                            data-svelte-h="svelte-izuv7l">
                                            <div class="bg-primary w-2 rounded"></div>
                                            <div class="bg-secondary w-2 rounded"></div>
                                            <div class="bg-accent w-2 rounded"></div>
                                            <div class="bg-neutral w-2 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button><button class="outline-base-content overflow-hidden rounded-lg text-left"
                            data-set-theme="synthwave" data-act-class="[&amp;_svg]:visible">
                            <div data-theme="synthwave"
                                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                <div class="grid grid-cols-5 grid-rows-3">
                                    <div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                            fill="currentColor" class="invisible h-3 w-3 shrink-0">
                                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z">
                                            </path>
                                        </svg>
                                        <div class="flex-grow text-sm">synthwave</div>
                                        <div class="flex h-full flex-shrink-0 flex-wrap gap-1"
                                            data-svelte-h="svelte-izuv7l">
                                            <div class="bg-primary w-2 rounded"></div>
                                            <div class="bg-secondary w-2 rounded"></div>
                                            <div class="bg-accent w-2 rounded"></div>
                                            <div class="bg-neutral w-2 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button><button class="outline-base-content overflow-hidden rounded-lg text-left"
                            data-set-theme="retro" data-act-class="[&amp;_svg]:visible">
                            <div data-theme="retro" class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                <div class="grid grid-cols-5 grid-rows-3">
                                    <div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                            fill="currentColor" class="invisible h-3 w-3 shrink-0">
                                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z">
                                            </path>
                                        </svg>
                                        <div class="flex-grow text-sm">retro</div>
                                        <div class="flex h-full flex-shrink-0 flex-wrap gap-1"
                                            data-svelte-h="svelte-izuv7l">
                                            <div class="bg-primary w-2 rounded"></div>
                                            <div class="bg-secondary w-2 rounded"></div>
                                            <div class="bg-accent w-2 rounded"></div>
                                            <div class="bg-neutral w-2 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button><button class="outline-base-content overflow-hidden rounded-lg text-left"
                            data-set-theme="cyberpunk" data-act-class="[&amp;_svg]:visible">
                            <div data-theme="cyberpunk"
                                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                <div class="grid grid-cols-5 grid-rows-3">
                                    <div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                            fill="currentColor" class="invisible h-3 w-3 shrink-0">
                                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z">
                                            </path>
                                        </svg>
                                        <div class="flex-grow text-sm">cyberpunk</div>
                                        <div class="flex h-full flex-shrink-0 flex-wrap gap-1"
                                            data-svelte-h="svelte-izuv7l">
                                            <div class="bg-primary w-2 rounded"></div>
                                            <div class="bg-secondary w-2 rounded"></div>
                                            <div class="bg-accent w-2 rounded"></div>
                                            <div class="bg-neutral w-2 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button><button class="outline-base-content overflow-hidden rounded-lg text-left"
                            data-set-theme="valentine" data-act-class="[&amp;_svg]:visible">
                            <div data-theme="valentine"
                                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                <div class="grid grid-cols-5 grid-rows-3">
                                    <div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                            fill="currentColor" class="invisible h-3 w-3 shrink-0">
                                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z">
                                            </path>
                                        </svg>
                                        <div class="flex-grow text-sm">valentine</div>
                                        <div class="flex h-full flex-shrink-0 flex-wrap gap-1"
                                            data-svelte-h="svelte-izuv7l">
                                            <div class="bg-primary w-2 rounded"></div>
                                            <div class="bg-secondary w-2 rounded"></div>
                                            <div class="bg-accent w-2 rounded"></div>
                                            <div class="bg-neutral w-2 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button><button class="outline-base-content overflow-hidden rounded-lg text-left"
                            data-set-theme="halloween" data-act-class="[&amp;_svg]:visible">
                            <div data-theme="halloween"
                                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                <div class="grid grid-cols-5 grid-rows-3">
                                    <div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                            fill="currentColor" class="invisible h-3 w-3 shrink-0">
                                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z">
                                            </path>
                                        </svg>
                                        <div class="flex-grow text-sm">halloween</div>
                                        <div class="flex h-full flex-shrink-0 flex-wrap gap-1"
                                            data-svelte-h="svelte-izuv7l">
                                            <div class="bg-primary w-2 rounded"></div>
                                            <div class="bg-secondary w-2 rounded"></div>
                                            <div class="bg-accent w-2 rounded"></div>
                                            <div class="bg-neutral w-2 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button><button class="outline-base-content overflow-hidden rounded-lg text-left"
                            data-set-theme="garden" data-act-class="[&amp;_svg]:visible">
                            <div data-theme="garden" class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                <div class="grid grid-cols-5 grid-rows-3">
                                    <div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                            fill="currentColor" class="invisible h-3 w-3 shrink-0">
                                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z">
                                            </path>
                                        </svg>
                                        <div class="flex-grow text-sm">garden</div>
                                        <div class="flex h-full flex-shrink-0 flex-wrap gap-1"
                                            data-svelte-h="svelte-izuv7l">
                                            <div class="bg-primary w-2 rounded"></div>
                                            <div class="bg-secondary w-2 rounded"></div>
                                            <div class="bg-accent w-2 rounded"></div>
                                            <div class="bg-neutral w-2 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button><button class="outline-base-content overflow-hidden rounded-lg text-left"
                            data-set-theme="forest" data-act-class="[&amp;_svg]:visible">
                            <div data-theme="forest" class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                <div class="grid grid-cols-5 grid-rows-3">
                                    <div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                            fill="currentColor" class="invisible h-3 w-3 shrink-0">
                                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z">
                                            </path>
                                        </svg>
                                        <div class="flex-grow text-sm">forest</div>
                                        <div class="flex h-full flex-shrink-0 flex-wrap gap-1"
                                            data-svelte-h="svelte-izuv7l">
                                            <div class="bg-primary w-2 rounded"></div>
                                            <div class="bg-secondary w-2 rounded"></div>
                                            <div class="bg-accent w-2 rounded"></div>
                                            <div class="bg-neutral w-2 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button><button class="outline-base-content overflow-hidden rounded-lg text-left"
                            data-set-theme="aqua" data-act-class="[&amp;_svg]:visible">
                            <div data-theme="aqua" class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                <div class="grid grid-cols-5 grid-rows-3">
                                    <div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                            fill="currentColor" class="invisible h-3 w-3 shrink-0">
                                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z">
                                            </path>
                                        </svg>
                                        <div class="flex-grow text-sm">aqua</div>
                                        <div class="flex h-full flex-shrink-0 flex-wrap gap-1"
                                            data-svelte-h="svelte-izuv7l">
                                            <div class="bg-primary w-2 rounded"></div>
                                            <div class="bg-secondary w-2 rounded"></div>
                                            <div class="bg-accent w-2 rounded"></div>
                                            <div class="bg-neutral w-2 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button><button class="outline-base-content overflow-hidden rounded-lg text-left"
                            data-set-theme="lofi" data-act-class="[&amp;_svg]:visible">
                            <div data-theme="lofi" class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                <div class="grid grid-cols-5 grid-rows-3">
                                    <div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                            fill="currentColor" class="invisible h-3 w-3 shrink-0">
                                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z">
                                            </path>
                                        </svg>
                                        <div class="flex-grow text-sm">lofi</div>
                                        <div class="flex h-full flex-shrink-0 flex-wrap gap-1"
                                            data-svelte-h="svelte-izuv7l">
                                            <div class="bg-primary w-2 rounded"></div>
                                            <div class="bg-secondary w-2 rounded"></div>
                                            <div class="bg-accent w-2 rounded"></div>
                                            <div class="bg-neutral w-2 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button><button class="outline-base-content overflow-hidden rounded-lg text-left"
                            data-set-theme="pastel" data-act-class="[&amp;_svg]:visible">
                            <div data-theme="pastel" class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                <div class="grid grid-cols-5 grid-rows-3">
                                    <div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                            fill="currentColor" class="invisible h-3 w-3 shrink-0">
                                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z">
                                            </path>
                                        </svg>
                                        <div class="flex-grow text-sm">pastel</div>
                                        <div class="flex h-full flex-shrink-0 flex-wrap gap-1"
                                            data-svelte-h="svelte-izuv7l">
                                            <div class="bg-primary w-2 rounded"></div>
                                            <div class="bg-secondary w-2 rounded"></div>
                                            <div class="bg-accent w-2 rounded"></div>
                                            <div class="bg-neutral w-2 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button><button class="outline-base-content overflow-hidden rounded-lg text-left"
                            data-set-theme="fantasy" data-act-class="[&amp;_svg]:visible">
                            <div data-theme="fantasy" class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                <div class="grid grid-cols-5 grid-rows-3">
                                    <div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                            fill="currentColor" class="invisible h-3 w-3 shrink-0">
                                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z">
                                            </path>
                                        </svg>
                                        <div class="flex-grow text-sm">fantasy</div>
                                        <div class="flex h-full flex-shrink-0 flex-wrap gap-1"
                                            data-svelte-h="svelte-izuv7l">
                                            <div class="bg-primary w-2 rounded"></div>
                                            <div class="bg-secondary w-2 rounded"></div>
                                            <div class="bg-accent w-2 rounded"></div>
                                            <div class="bg-neutral w-2 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button><button class="outline-base-content overflow-hidden rounded-lg text-left"
                            data-set-theme="wireframe" data-act-class="[&amp;_svg]:visible">
                            <div data-theme="wireframe"
                                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                <div class="grid grid-cols-5 grid-rows-3">
                                    <div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                            fill="currentColor" class="invisible h-3 w-3 shrink-0">
                                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z">
                                            </path>
                                        </svg>
                                        <div class="flex-grow text-sm">wireframe</div>
                                        <div class="flex h-full flex-shrink-0 flex-wrap gap-1"
                                            data-svelte-h="svelte-izuv7l">
                                            <div class="bg-primary w-2 rounded"></div>
                                            <div class="bg-secondary w-2 rounded"></div>
                                            <div class="bg-accent w-2 rounded"></div>
                                            <div class="bg-neutral w-2 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button><button class="outline-base-content overflow-hidden rounded-lg text-left"
                            data-set-theme="black" data-act-class="[&amp;_svg]:visible">
                            <div data-theme="black" class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                <div class="grid grid-cols-5 grid-rows-3">
                                    <div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                            fill="currentColor" class="invisible h-3 w-3 shrink-0">
                                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z">
                                            </path>
                                        </svg>
                                        <div class="flex-grow text-sm">black</div>
                                        <div class="flex h-full flex-shrink-0 flex-wrap gap-1"
                                            data-svelte-h="svelte-izuv7l">
                                            <div class="bg-primary w-2 rounded"></div>
                                            <div class="bg-secondary w-2 rounded"></div>
                                            <div class="bg-accent w-2 rounded"></div>
                                            <div class="bg-neutral w-2 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button><button class="outline-base-content overflow-hidden rounded-lg text-left"
                            data-set-theme="luxury" data-act-class="[&amp;_svg]:visible">
                            <div data-theme="luxury" class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                <div class="grid grid-cols-5 grid-rows-3">
                                    <div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                            fill="currentColor" class="invisible h-3 w-3 shrink-0">
                                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z">
                                            </path>
                                        </svg>
                                        <div class="flex-grow text-sm">luxury</div>
                                        <div class="flex h-full flex-shrink-0 flex-wrap gap-1"
                                            data-svelte-h="svelte-izuv7l">
                                            <div class="bg-primary w-2 rounded"></div>
                                            <div class="bg-secondary w-2 rounded"></div>
                                            <div class="bg-accent w-2 rounded"></div>
                                            <div class="bg-neutral w-2 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button><button class="outline-base-content overflow-hidden rounded-lg text-left"
                            data-set-theme="dracula" data-act-class="[&amp;_svg]:visible">
                            <div data-theme="dracula" class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                <div class="grid grid-cols-5 grid-rows-3">
                                    <div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                            fill="currentColor" class="invisible h-3 w-3 shrink-0">
                                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z">
                                            </path>
                                        </svg>
                                        <div class="flex-grow text-sm">dracula</div>
                                        <div class="flex h-full flex-shrink-0 flex-wrap gap-1"
                                            data-svelte-h="svelte-izuv7l">
                                            <div class="bg-primary w-2 rounded"></div>
                                            <div class="bg-secondary w-2 rounded"></div>
                                            <div class="bg-accent w-2 rounded"></div>
                                            <div class="bg-neutral w-2 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button><button class="outline-base-content overflow-hidden rounded-lg text-left"
                            data-set-theme="cmyk" data-act-class="[&amp;_svg]:visible">
                            <div data-theme="cmyk" class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                <div class="grid grid-cols-5 grid-rows-3">
                                    <div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                            fill="currentColor" class="invisible h-3 w-3 shrink-0">
                                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z">
                                            </path>
                                        </svg>
                                        <div class="flex-grow text-sm">cmyk</div>
                                        <div class="flex h-full flex-shrink-0 flex-wrap gap-1"
                                            data-svelte-h="svelte-izuv7l">
                                            <div class="bg-primary w-2 rounded"></div>
                                            <div class="bg-secondary w-2 rounded"></div>
                                            <div class="bg-accent w-2 rounded"></div>
                                            <div class="bg-neutral w-2 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button><button class="outline-base-content overflow-hidden rounded-lg text-left"
                            data-set-theme="autumn" data-act-class="[&amp;_svg]:visible">
                            <div data-theme="autumn" class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                <div class="grid grid-cols-5 grid-rows-3">
                                    <div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                            fill="currentColor" class="invisible h-3 w-3 shrink-0">
                                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z">
                                            </path>
                                        </svg>
                                        <div class="flex-grow text-sm">autumn</div>
                                        <div class="flex h-full flex-shrink-0 flex-wrap gap-1"
                                            data-svelte-h="svelte-izuv7l">
                                            <div class="bg-primary w-2 rounded"></div>
                                            <div class="bg-secondary w-2 rounded"></div>
                                            <div class="bg-accent w-2 rounded"></div>
                                            <div class="bg-neutral w-2 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button><button class="outline-base-content overflow-hidden rounded-lg text-left"
                            data-set-theme="business" data-act-class="[&amp;_svg]:visible">
                            <div data-theme="business"
                                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                <div class="grid grid-cols-5 grid-rows-3">
                                    <div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                            fill="currentColor" class="invisible h-3 w-3 shrink-0">
                                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z">
                                            </path>
                                        </svg>
                                        <div class="flex-grow text-sm">business</div>
                                        <div class="flex h-full flex-shrink-0 flex-wrap gap-1"
                                            data-svelte-h="svelte-izuv7l">
                                            <div class="bg-primary w-2 rounded"></div>
                                            <div class="bg-secondary w-2 rounded"></div>
                                            <div class="bg-accent w-2 rounded"></div>
                                            <div class="bg-neutral w-2 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button><button class="outline-base-content overflow-hidden rounded-lg text-left"
                            data-set-theme="acid" data-act-class="[&amp;_svg]:visible">
                            <div data-theme="acid" class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                <div class="grid grid-cols-5 grid-rows-3">
                                    <div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                            fill="currentColor" class="invisible h-3 w-3 shrink-0">
                                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z">
                                            </path>
                                        </svg>
                                        <div class="flex-grow text-sm">acid</div>
                                        <div class="flex h-full flex-shrink-0 flex-wrap gap-1"
                                            data-svelte-h="svelte-izuv7l">
                                            <div class="bg-primary w-2 rounded"></div>
                                            <div class="bg-secondary w-2 rounded"></div>
                                            <div class="bg-accent w-2 rounded"></div>
                                            <div class="bg-neutral w-2 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button><button class="outline-base-content overflow-hidden rounded-lg text-left"
                            data-set-theme="lemonade" data-act-class="[&amp;_svg]:visible">
                            <div data-theme="lemonade"
                                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                <div class="grid grid-cols-5 grid-rows-3">
                                    <div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                            fill="currentColor" class="invisible h-3 w-3 shrink-0">
                                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z">
                                            </path>
                                        </svg>
                                        <div class="flex-grow text-sm">lemonade</div>
                                        <div class="flex h-full flex-shrink-0 flex-wrap gap-1"
                                            data-svelte-h="svelte-izuv7l">
                                            <div class="bg-primary w-2 rounded"></div>
                                            <div class="bg-secondary w-2 rounded"></div>
                                            <div class="bg-accent w-2 rounded"></div>
                                            <div class="bg-neutral w-2 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button><button class="outline-base-content overflow-hidden rounded-lg text-left"
                            data-set-theme="night" data-act-class="[&amp;_svg]:visible">
                            <div data-theme="night" class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                <div class="grid grid-cols-5 grid-rows-3">
                                    <div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                            fill="currentColor" class="invisible h-3 w-3 shrink-0">
                                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z">
                                            </path>
                                        </svg>
                                        <div class="flex-grow text-sm">night</div>
                                        <div class="flex h-full flex-shrink-0 flex-wrap gap-1"
                                            data-svelte-h="svelte-izuv7l">
                                            <div class="bg-primary w-2 rounded"></div>
                                            <div class="bg-secondary w-2 rounded"></div>
                                            <div class="bg-accent w-2 rounded"></div>
                                            <div class="bg-neutral w-2 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button><button class="outline-base-content overflow-hidden rounded-lg text-left"
                            data-set-theme="coffee" data-act-class="[&amp;_svg]:visible">
                            <div data-theme="coffee" class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                <div class="grid grid-cols-5 grid-rows-3">
                                    <div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                            fill="currentColor" class="invisible h-3 w-3 shrink-0">
                                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z">
                                            </path>
                                        </svg>
                                        <div class="flex-grow text-sm">coffee</div>
                                        <div class="flex h-full flex-shrink-0 flex-wrap gap-1"
                                            data-svelte-h="svelte-izuv7l">
                                            <div class="bg-primary w-2 rounded"></div>
                                            <div class="bg-secondary w-2 rounded"></div>
                                            <div class="bg-accent w-2 rounded"></div>
                                            <div class="bg-neutral w-2 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button><button class="outline-base-content overflow-hidden rounded-lg text-left"
                            data-set-theme="winter" data-act-class="[&amp;_svg]:visible">
                            <div data-theme="winter" class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                <div class="grid grid-cols-5 grid-rows-3">
                                    <div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                            fill="currentColor" class="invisible h-3 w-3 shrink-0">
                                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z">
                                            </path>
                                        </svg>
                                        <div class="flex-grow text-sm">winter</div>
                                        <div class="flex h-full flex-shrink-0 flex-wrap gap-1"
                                            data-svelte-h="svelte-izuv7l">
                                            <div class="bg-primary w-2 rounded"></div>
                                            <div class="bg-secondary w-2 rounded"></div>
                                            <div class="bg-accent w-2 rounded"></div>
                                            <div class="bg-neutral w-2 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div title="Change Language" class="dropdown">
                <div tabindex="0" class="btn btn-ghost normal-case" data-svelte-h="svelte-16sc62l"><svg
                        class="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        viewBox="0 0 512 512">
                        <path d="M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z">
                        </path>
                        <path
                            d="M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z">
                        </path>
                    </svg> <svg width="12px" height="12px" class="hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                    </svg></div>
                <div
                    class="dropdown-content bg-base-200 text-base-content rounded-box top-px mt-16 w-56 overflow-y-auto shadow">
                    <ul class="menu menu-sm gap-1" tabindex="0">
                        <li><button @click="i18nStore.switchLocale('en')" :class="[locale == 'en'?'active':'']"><span
                                    class="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">EN</span>
                                English </button> </li>
                    
                        <li><button @click="i18nStore.switchLocale('zh')" :class="[locale == 'cn'?'active':'']"><span
                                    class="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">ZH</span>
                                中文 </button> </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="navbar-center">
            <a class="btn btn-ghost normal-case text-xl">Ninjia</a>
        </div>
        <div class="navbar-end">
            <details class="dropdown dropdown-end">
                <summary class="btn btn-square btn-ghost m-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        class="inline-block w-5 h-5 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                        </path>
                    </svg>
                </summary>
                <ul tabindex="0" class="dropdown-content shadow z-[1] menu p-2 shadow bg-base-200 rounded-box w-52">
                    <li v-for="i in cfgMenu">
                        <label class="label cursor-pointer" v-if="'checked' in i">
                            <span class="label-text">{{ i.desc }}</span>
                            <input type="checkbox" class="toggle" v-model="i.checked" />

                        </label>

                        <details class="collapse rounded-none" v-else-if="'subMenu' in i">
                            <summary class="after:content-none"><span>{{ i.desc }}</span></summary>
                            <div class="collapse-content">
                                <ul tabindex="0" class="ml-0">
                                    <li v-for="_, k in i.subMenu" class="p-0">
                                        <label class="label cursor-pointer pr-[8px]">
                                            <span class="label-text">{{ k }}</span>
                                            <input type="checkbox" class="toggle" v-model="i.subMenu[k]" />

                                        </label>

                                    </li>
                                </ul>
                        </div>
                    </details>
                </li>
            </ul>
        </details>
    </div>
</div></template>

<script lang="ts" setup>
import { reactive,computed } from 'vue'
// import type { Ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSoundStore,userI18nStore } from "@/store/index";
import type { UseSoundStore,UseI18nStore } from "@/store/store"
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const soundStore: UseSoundStore = useSoundStore()

const { inputWord, wordVoice, convRomaji, convTokenize, BaiduTranslate } = storeToRefs(soundStore)

const i18nStore: UseI18nStore = userI18nStore()

const { locale } = storeToRefs(i18nStore)
// interface Menu {
//     desc: string
//     checked?: Ref<boolean>
//     subMenu: Record<string, Ref<boolean>> | ""
// }

const cfgMenu = computed(()=>reactive([{
    desc: t("wordInput"),
    checked: inputWord,
}, {
    desc: t("wordVoice"),
    checked: wordVoice,
}, {
    desc: t("romajiSwitch"),
    checked: convRomaji,
}, {
    desc: t("tokenizeSwitch"),
    checked: convTokenize,
}, {
    desc: t("translateSwitch"),
    subMenu: {
        [t("baiduTranslate")]: BaiduTranslate
    },
}]))
</script>

<style lang="sass" scoped></style>