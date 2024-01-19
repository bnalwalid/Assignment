<script lang="js" setup>
import numbers from '~/content/numbers.json';
import CountUp from 'vue-countup-v3'


</script>
<template>
    <div class="font-cairo text-primary relative my-32">
        <div
            class="rounded-full border-3888 opacity-100 z-0 bg-radial-gradientBrawn w-6/12 h-screen absolute -right-96 -top-32 ">
        </div>
        <div
            class="rounded-full border-3888 opacity-65 z-0 bg-radial-gradientGreen w-6/12 h-screen absolute -left-96 -bottom-64">
        </div>

        <div class="text-center text-white text-5xl font-bold mt-32 mb-12 z-20">
            Mawdoo3 in Numbers
        </div>

        <div class="container mx-auto flex flex-col sm:flex-row justify-between items-center">
            <div v-for="(item, index) in numbers" :key="item.endCount"
                class="flex flex-col items-center justify-center w-full sm:w-1/4 h-auto py-24 relative bg-[#ffffff37] rounded-xl mr-auto sm:mr-6 mb-6 sm:mb-auto shadow-sm  hover:scale-105 transition-all duration-300">

                <div class="text-center text-white text-4xl w-full font-normal px-6 flex justify-center items-center">
                    <span class="text-md font-bold m-0 p-0 text-[#C02DDB]">{{ item.startNumberStr }}</span>
                    <count-up :end-val="item.endCount" class="text-md font-bold m-0 p-0 text-pretty"
                        :start-val="0"></count-up>
                    <span class="text-md font-bold m-0 p-0 text-pretty">{{ item.endNumberStr }}</span>
                </div>
                <div class="text-center text-white text-md mt-4 w-9/12 font-normal px-8 h-6"> {{ item.text }}</div>

            </div>
        </div>

    </div>
</template>
