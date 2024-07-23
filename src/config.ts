import { defineConfig } from '@tok/generation'

export default defineConfig({
  locale: {
    fallback: 'en',
    en: import('./locales/en.json')
  },

  pages: [
    {
      slides: [
        {
          // media: {
          // },
          textAlign: 'center',
          title: '_s1.title',
          description: '_s1.description',
          button: '_s1.button'
        },

        {
          extends: 'form',
          media: {},
          textAlign: 'center',
          title: '_s2.title',
          description: '_s2.description',
          form: [
            {
              id: 'name',
              placeholder: '_s2.namePlaceholder',
              type: 'text'
            }
          ],
          button: '_s1.button'
        }
      ]
    },
    {}
  ]
})
