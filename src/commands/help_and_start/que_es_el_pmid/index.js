'use strict'
const services = require('../../../services')

// Encargados de los Roles Actuales Command
module.exports = async (ctx) => {

  let user = ctx.update.callback_query.from.first_name
  let activity = ctx.update.callback_query.data

  await services.jsoning.add(user, activity)

  let caption = `El PMID es un registro único dentro de Proyecto Migala que permite identificarte de forma rápida, también ayuda a mantener la seguridad en los espacios y la rápida integración en las actividades del proyecto`

  let options = {
    reply_markup: {
      inline_keyboard: [
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
