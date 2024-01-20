<script lang="js" setup>
import blog from '~/content/blog.json'

const getDateFormatted = (date) => {
    return new Date(date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
}

</script>
<template>
    <div class="font-cairo text-primary relative my-64">
        <div
            class="rounded-full border-3888 opacity-60 z-10 bg-radial-gradientGreen w-full h-screen absolute left-0 right-0 -top-48 bottom-0 mx-auto">
        </div>

        <div class="text-center text-white text-5xl font-bold mt-32 mb-12 z-20">
            Read About
        </div>

        <div class="container mx-auto flex flex-col sm:flex-row justify-between items-center relative z-50">
            <div v-for="(item, index) in blog" :key="item.name"
                class="flex flex-col items-center justify-center w-full sm:w-1/3 relative bg-[#ffffff37] rounded-xl mr-auto sm:mr-6 mb-6 sb:mr-auto pb-6 shadow-sm  hover:scale-105 transition-all duration-300">
                <img :src="item.image" :alt="item.name"
                    class="w-full object-cover h-auto z-40 rounded-t-xl hover:opacity-75 transition-all duration-300 hover:cursor-pointer hover:shadow-lg" />
                <div class="text-left text-white text-xs mt-4 w-11/12 pr-6 opacity-75">{{
                    getDateFormatted(item.date) }}
                </div>

                <div class="text-left text-white text-lg mt-4 w-11/12 font-bold pr-6"> {{ item.name }}</div>

                <!-- read more -->
                <nuxt-link :to="`#${item.id}`"
                    class="text-white text-xs mt-4 w-11/12 pr-6 hover:text-primary transition-all duration-300">
                    Read More <span class="text-primary pl-2">></span>
                </nuxt-link>
            </div>
        </div>

        <!-- Visit our blog -->
        <div class="text-center text-white text-5xl font-bold mt-12 mb-12 z-50 cursor-pointer relative">
            <nuxt-link to="#blog"
                class="text-white text-sm font-normal text-center border-2 border-white rounded-full px-12 py-2 hover:bg-white hover:text-black transition-all duration-300">
                Visit our blog
            </nuxt-link>
        </div>
    </div>
</template>
