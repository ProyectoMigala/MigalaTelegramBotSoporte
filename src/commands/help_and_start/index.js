'use strict'
const services = require('../../services')

const text = process.env.MENU_TEXT

// Default Command (Shows a Message and Buttons Menu)
module.exports = async (ctx) => {

  if (ctx.update.message !== undefined) {
    let user = ctx.update.message.from.first_name
    let activity = 'Inicio'

    await services.jsoning.add(user, activity)
  }

  if (ctx.update.callback_query !== undefined) {
    let user = ctx.update.callback_query.from.first_name
    let activity = ctx.update.callback_query.data

    await services.jsoning.add(user, activity)
  }

  let options = {
    caption: text,
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: '¿Qué es Padrón Migala?',
            callback_data: '¿Qué es Padrón Migala?'
          },
        ],
        [
          {
            text: 'Aviso de privacidad',
            callback_data: 'Aviso de privacidad'
          },
        ],
        [
          {
            text: '¿En dónde encuentro el formulario?',
            callback_data: '¿En dónde encuentro el formulario?'
          }
        ],
        [
          {
            text: '¿Qué es el PMID?',
            callback_data: '¿Qué es el PMID?'
          }
        ],
        [
          {
            text: 'Se encontró mi PMID en la lista de bajas voluntarias o expulsiones',
            callback_data: 'pmid_lista_de_bajas_voluntarias_o_expulsiones'
          },
        ],
        [
          {
            text: '¿Qué son los derechos ARCO?',
            callback_data: 'que_son_los_derechos_ARCO'
          },
        ],
      ]
    }
  }

  try {
    await ctx.editMessageCaption(text, options)
  } catch {
    let imagePath = `${process.cwd()}/resources/${process.env.IMG}`
    await ctx.replyWithPhoto({ source: imagePath }, options)
  }
}
