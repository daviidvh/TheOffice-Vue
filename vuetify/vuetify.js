// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify/lib/framework.mjs'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default createVuetify({
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
  })


