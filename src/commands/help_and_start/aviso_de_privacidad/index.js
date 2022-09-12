'use strict'
const services = require('../../../services')

const AVISO_DE_PRIVACIDAD = process.env.AVISO_DE_PRIVACIDAD

// Actividad Futura Command
module.exports = async (ctx) => {

  let user = ctx.update.callback_query.from.first_name
  let activity = ctx.update.callback_query.data

  await services.jsoning.add(user, activity)

  let caption = 'Aviso de privacidad documento completo'

  let options = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Aviso de privacidad.pdf',
            url: AVISO_DE_PRIVACIDAD
          },
        ],
        [
          {
            text: 'Regresar',
            callback_data: 'Regresar'
          },
        ],
      ]
    }
  }

  await ctx.editMessageCaption(caption, options)
}
