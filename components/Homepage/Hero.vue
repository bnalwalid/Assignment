 
<script lang="js" setup>
const scrollTo = () => {
    window.scrollTo({
        top: 700,
        behavior: 'smooth'
    })
}
</script>

<template>
    <div
        class="relative bg-cover bg-center bg-no-repeat h-full min-h-[80%] flex items-center justify-center bg-[url('assets/images/hero.webp')] z-10">
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#000000] to-[#876747] opacity-80 z-0"></div>
        <div class="contener z-10 my-56">
            <div class="text-center w-11/12 sm:w-9/12 mx-auto">
                <h1 class="text-3xl sm:text-5xl font-bold">كل ما يهمك معرفته عن المملكة العربية السعودية تجدُه هنا</h1>
                <HomepageSearch />
            </div>

            <div z-10 class="absolute -bottom-24 left-0 right-0 flex justify-center items-center flex-col cursor-pointer"
                @click="scrollTo">
                <svg width="24" height="54" viewBox="0 0 35 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="33" height="52" rx="16.5" stroke="white" stroke-width="2" />
                    <circle cx="18" cy="24" r="4" fill="white" class="animate-bounce" />
                </svg>
                <div class="text-white text-sm mt-2"> Scroll down </div>

            </div>


        </div>
    </div>
</template>