<script lang="js" setup>
import menu from '~/content/menu.json'
// burger menu toggle using nuxt 3 
import { ref } from 'vue'
const isMenuOpen = ref(false)
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}
</script>
<template>
    <header class="absolute top-0 left-0 right-0 text-center mx-auto py-4 z-20">
        <div class="relative container">
            <div class="flex justify-between items-center mb-8 :sm:justify-start :sm:items-start">
                <div class="w-1/2 sm:w-auto">
                    <img src="~/assets/images/logo-white.webp" alt="logo" width="200" height="200" />
                </div>
                <!-- burger -->
                <div class="sm:hidden">
                    <button @click="toggleMenu" class="focus:outline-none">
                        <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                :d="isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"></path>
                        </svg>
                    </button>

                </div>

            </div>
            <!-- menu -->
            <div
                :class="'flex flex-wrap justify-between items-start mx-auto my-4 border-t border-b border-[#9CA3AF] py-4 bg-[#000000e4] sm:bg-transparent'
                    +
                    (isMenuOpen ? ' visible opacity-100' : ' invisible opacity-0 sm:visible sm:opacity-100 ') + ' transition-all duration-300'">

                <ul class=" flex flex-wrap flex-col justify-between items-center sm:items-start sm:flex-row w-full">
                    <li class="mx-4 sm:mx-1 md:mx-1 lg:mx-4 relative" v-for="item in menu.header" :key="item.name">
                        <nuxt-link :to="item.url"
                            class="text-white text-2xl leading-10 sm:leading-none hover:text-primary transition-all duration-300 sm:text-[11px] md:text-[13px] lg:text-md xl:text-lg">
                            {{ item.name }}
                        </nuxt-link>
                        <div class="absolute -right-4 h-8 w-1 top-0 bg-primary sm:-bottom-4 sm:w-full sm:h-1 sm:top-auto sm:right-auto sm:left-0"
                            v-if="$route.path === item.url">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>