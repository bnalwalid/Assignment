<script lang="js" setup>
useHead({
    title: 'Mawdoo3.com',
    meta: [
        { name: 'description', content: 'Mawdoo3.com' },
        { name: 'keywords', content: 'Mawdoo3,com' },
        { name: 'author', content: 'Mawdoo3' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        //facebook meta tags
        { property: 'og:title', content: 'Mawdoo3.com' },
        { property: 'og:description', content: 'Mawdoo3.com' },
        { property: 'og:image', content: '~/assets/images/logo.webp' },
        { property: 'og:url', content: 'https://mawdoo3.com/' },
        { property: 'og:type', content: 'website' },
        //twitter meta tags
        { name: 'twitter:title', content: 'Mawdoo3.com' },
        { name: 'twitter:description', content: 'Mawdoo3.com' },
        { name: 'twitter:image', content: '~/assets/images/logo.webp' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@mawdoo3' },
        { name: 'twitter:creator', content: '@mawdoo3' }
    ]
})
</script>
<template>
    <div class="font-cairo text-primary bg-background">
        <TwSizeIndicator />
        <div class="section">
            <HomepageHero />
        </div>
        <div class="section">
            <HomepageBoard />
        </div>
        <div class="section">
            <HomepageBlog />
        </div>
        <div class="section">
            <HomepageNumbers />
        </div>
        <div class="section">
            <HomepageNewsletter />
        </div>
        <div class="section">
            <HomepageExtra />
        </div>
    </div>
</template>