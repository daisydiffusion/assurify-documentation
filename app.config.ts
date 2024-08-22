// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts

export default defineAppConfig({
  docus: {
    title: 'Assurify Documentation',
    description: 'Get started with Assurify',
    image: 'https://i.ibb.co/Mspj1Gs/Untitled-268-x-62-px.png',
    socials: {
      github: 'https://github.com/daisydiffusion/assurify-documentation'
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },

    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },
    footer: {
      credits: {
        icon: '',
        text: 'Powered by Assurify',
        href: 'https://assurify.app'
      }
    }
  }
})
