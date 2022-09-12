'use strict'
const services = require('../../../services')

// Actividades ya Ejecutadas Command
module.exports = async (ctx) => {

  let user = ctx.update.callback_query.from.first_name
  let activity = ctx.update.callback_query.data

  await services.jsoning.add(user, activity)

  let caption = `Es la facultad que otorga la Ley para que tú, como titular de los datos personales, puedas decidir a quién proporcionas tu información, cómo y para qué; este derecho te permite acceder, rectificar, cancelar y oponerte al tratamiento de tu información personal. Por sus iniciales, son conocidos comúnmente como derechos ARCO.

Acceso: Derecho de acceder a información personal en posesión de terceros.

Rectificación: Rectifica tu información en caso de estar incompleta o inexacta.

Cancelación: Solicita que eliminen tus datos cuando lo desees.

Oposición: Derecho a oponerte al uso de tu información personal.`

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
