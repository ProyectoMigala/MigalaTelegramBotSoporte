'use strict'
const services = require('../../../services')

// Actividad Actual Command
module.exports = async (ctx) => {

  let user = ctx.update.callback_query.from.first_name
  let activity = ctx.update.callback_query.data

  await services.jsoning.add(user, activity)

  let caption = `Padrón Migala es el espacio donde se administran los datos personales que las personas han proporcionado a Proyecto Migala mediante el formulario de registro, éstos son necesarios para el funcionamiento del proyecto y algunas de sus finalidades son:
• Orientación política
• Capacitación
• Participación en grupos de trabajo
• Postulación a responsabilidades
• Trabajo operativo...

Para más información, consulta el aviso de privacidad`

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
