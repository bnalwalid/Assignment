<script lang="js" setup>
import board from '~/content/board.json'
import b1 from '~/assets/images/members/b1.webp'
import b2 from '~/assets/images/members/b2.webp'
import b3 from '~/assets/images/members/b3.webp'
import active from '~/assets/images/active.webp'
import noactive from '~/assets/images/noactive.webp'
</script>
<template>
    <div class="font-cairo text-primary relative my-64">

        <div class="rounded-full border-3888 opacity-65 bg-radial-gradientGreen w-7/12 h-screen absolute -top-64 -right-32">
        </div>

        <div class="rounded-full border-3888 opacity-65 bg-radial-gradientBlue w-7/12 h-screen absolute -top-64 -left-32">
        </div>

        <div class="container mx-auto flex flex-col justify-between items-center w-11/12 sm:flex-row">
            <div v-for="(item, index) in board.members" :key="item.name"
                class="flex flex-col items-center justify-center w-full sm:w-1/4 relative">
                <div class="relative w-56 h-64 overflow-hidden flex justify-center items-center">
                    <img :src="index === 0 ? b1 : index === 1 ? b2 : b3" :alt="item.name" class="w-48 h-auto z-40" />
                    <img :src="active" alt="active"
                        class="absolute bottom-0 mx-auto z-50 h-56 transition-all duration-300 hover:opacity-100 opacity-0"
                        id="active" />
                    <img :src="noactive" alt="noactive" class="absolute bottom-0 mx-auto z-40 h-56" id="noactive" />

                </div>
                <div class="text-center text-white text-md mt-4 w-8/12">{{ item.name }}</div>
                <div class="text-center text-white text-xs mt-4 opacity-70 w-4/12">{{ item.position }}</div>



            </div>

        </div>
    </div>
</template>
