'use strict'
const services = require('../../../services')

// Actividades ya Ejecutadas Command
module.exports = async (ctx) => {

  let user = ctx.update.callback_query.from.first_name
  let activity = ctx.update.callback_query.data

  await services.jsoning.add(user, activity)

  let caption = `Aunque tus datos personales han sido eliminados aún conservamos un PMID como referencia para dudas, protección de miembros de Proyecto Migala, seguimiento de acciones disciplinarias y reingresos. Si tu baja fue voluntaria y deseas reingresar, escribe un correo a padron.pmigala@gmail.com con asunto: "reingreso" y en el correo indica tu PMID
Las bajas por acción disciplinaria son irreversibles`

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
