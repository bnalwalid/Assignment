<script lang="js" setup>
import menu from '~/content/menu.json'

</script>

<template>
    <footer class="container text-pretty flex justify-center items-center my-4 flex-col relative">
        <img src="~/assets/images/logo.webp" alt="logo" class="w-56 h-auto" />
        <ul class="flex justify-between items-center mt-12 mb-12 w-8/12 flex-col sm:flex-row">
            <li v-for="item in menu.footer" :key="item.name">
                <nuxt-link :to="item.url" class="text-white text-md hover:text-primary transition-all duration-300">
                    {{ item.name }}
                </nuxt-link>
            </li>
        </ul>

        <div class="flex justify-center items-center flex-col w-full relative">
            <div class="flex justify-center items-center border-b border-[#596172] w-full pb-4">
                <a href="https://www.facebook.com/" target="_blank"
                    class="bg-[#384152] rounded-full w-12 h-12 flex justify-center items-center mr-4">
                    <img src="~/assets/images/icons/fb.svg" alt="facebook" class="object-contain w-4 h-auto" /> 
                </a>
                <a href="https://www.facebook.com/" target="_blank"
                    class="bg-[#384152] rounded-full w-12 h-12 flex justify-center items-center mr-4">
                    <img src="~/assets/images/icons/tw.svg" alt="twitter" class="object-contain w-6 h-auto" />
                </a>
                <a href="https://www.facebook.com/" target="_blank"
                    class="bg-[#384152] rounded-full w-12 h-12 flex justify-center items-center mr-4">
                    <img src="~/assets/images/icons/in.svg" alt="instagram" class="object-contain w-6 h-auto" />
                </a>

            </div>
            <div class="text-white text-xs mt-4 opacity-60 mb-4">© 2024 Mawdoo3.com. All Rights Reserved.</div>
        </div>
    </footer>
</template>