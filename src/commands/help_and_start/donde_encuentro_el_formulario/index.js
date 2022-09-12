'use strict'
const services = require('../../../services')

const FORMULARIO_URL = process.env.FORMULARIO_URL

// Linktree Command
module.exports = async (ctx) => {

  let user = ctx.update.callback_query.from.first_name
  let activity = ctx.update.callback_query.data

  await services.jsoning.add(user, activity)

  let caption = 'Enlace al formulario de registro'

  let options = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Formulario',
            url: FORMULARIO_URL
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
