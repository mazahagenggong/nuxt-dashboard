// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        'nuxt-simple-sitemap',
        'nuxt-csurf',
        '@nuxtjs/tailwindcss'
    ],
    csurf: { // optional
        https: false, // default true if in production
        cookieKey: 'csrf', // "__Host-csrf" if https is true otherwise just "csrf"
        cookie: { // CookieSerializeOptions from unjs/cookie-es
            path: '/',
            httpOnly: true,
            sameSite: 'strict'
        },
        methodsToProtect: ['POST', 'PUT', 'PATCH', 'DELETE'],
        excludedUrls: ['/nocsrf1', ['/nocsrf2/.*', 'i']],
        encryptSecret: "Abunaum!@#",
        encryptAlgorithm: 'AES-CBC',
        addCsrfTokenToEventCtx: true
    }
})
