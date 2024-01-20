<script lang="js" setup>
//form validation
const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
}
const data = reactive({
    email: '',
    error: false,
    success: false
})

const submitForm = () => {
    if (validateEmail(data.email)) {
        data.success = true
        data.error = false
    } else {
        data.error = true
        data.success = false
    }
}

</script>
<template>
    <div class="font-cairo text-primary relative">
        <div class="rounded-full border-3888 opacity-30 z-0 bg-radial-gradientGreen w-9/12 h-screen absolute -left-64">
        </div>
        <div class="newsletter container mx-auto flex flex-col justify-center items-center w-full h-screen">




            <div class="mt-4 relative w-full sm:w-6/12 p-6 flex flex-col justify-end items-start">
                <div
                    class=" bg-[url('assets/images/newl-border.png')] bg-contain bg-center bg-no-repeat w-[250px] sm:w-[220px] md:w-[250px] lg:w-[300px] h-[200px] absolute top-0 left-12">
                </div>

                <div class="text-right font-primary text-xl w-4/12 mb-6">اشترك في نشرتنا
                    الإخبارية</div>

                <div class="flex justify-start items-center pl-6 w-full">
                    <div class="relative w-8/12">
                        <input type=" text" placeholder="أدخل عنوان بريدك الالكتروني"
                            class="text-sm bg-transparent outline-none border rounded-sm w-full px-4 py-4 border-white text-white"
                            v-model="data.email"
                            @change="validateEmail(data.email) ? data.error = false : data.error = true" />
                        <img src="~/assets/images/icons/email.webp" alt="email" width="20" height="20"
                            class="absolute top-1/2 transform -translate-y-1/2 left-4 text-white" />
                    </div>
                    <button :disabled="data.error || data.success || data.email.length < 5" :class="`text-[#F34A08] bg-white text-center mr-2 w-3/12 text-sm font-bold  py-4 rounded-md hover:bg-[#F34A08] hover:text-white transition-all duration-300` +
                        (data.error || data.success || data.email.length < 5 ? ' opacity-50 cursor-not-allowed' : '')
                        " @click="submitForm">
                        اشترك
                    </button>
                </div>
                <!-- error/success message -->
                <div class="text-right text-red-500 text-sm w-5/12 mt-4" v-if="data.error">
                    الرجاء إدخال بريد إلكتروني صحيح
                </div>
                <div class="text-right text-green-600 text-sm w-5/12 mt-4" v-if="data.success">
                    تم الاشتراك بنجاح
                </div>

            </div>

            <div class="relative">
                <div class="text-md w-9/12 flex justify-start items-start mt-4">
                    <div>
                        <input type="checkbox" class="w-4 h-4" checked ref="agree" />
                    </div>
                    <div @click="$refs.agree.checked = !$refs.agree.checked" class="cursor-pointer mr-2">
                        أقر بأنني قرأت شروط اتفاقية المستخدم وأقبلها وأوافق على سياسة <span
                            class="text-[#F34A08]">الخصوصية</span>
                    </div>
                </div>
                <div class="text-left font-normal text-[10px] w-full relative ltr flex justify-start items-center">
                    <div class="w-6/12">
                        I acknowledge that I have read and accept the Terms of User Agreement and consent to the Privacy
                        policy.
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
