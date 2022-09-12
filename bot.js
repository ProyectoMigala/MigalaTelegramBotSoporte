'use strict'
const { Telegraf } = require('telegraf')

// Import commands
const commands = require('./src/commands')

// Import logger
const logger = require('./src/utils/logger')

// Token Validation
if (process.env.TELEGRAM_BOT_TOKEN === undefined || process.env.TELEGRAM_BOT_TOKEN === '') {
  console.log('=== BOT TOKEN CANNOT BE EMPTY ===')
  process.exit(1)
}

// Bot Initialization
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)

/**
 * Commands
 */
bot.on('new_chat_members', async (ctx) => {
  await commands.new_chat_members(ctx)
  logger.info(`New Chat Member: ${ctx.update.message.new_chat_members[0].first_name}`)
})

bot.command('start', async (ctx) => {
  await commands.help_and_start(ctx)
  logger.info(`Start Command: ${ctx.update.message.from.first_name}`)
})

bot.command('help', async (ctx) => {
  await commands.help_and_start(ctx)
  logger.info(`Help Command: ${ctx.update.message.from.first_name}`)
})

bot.on('callback_query', async (ctx) => {

  let callback_query = ctx.update.callback_query

  switch (callback_query.data) {
    case '¿Qué es Padrón Migala?':
      await commands.callback_query.que_es_padron_migala(ctx)
      break;
    case 'Aviso de privacidad':
      await commands.callback_query.aviso_de_privacidad(ctx)
      break;
    case '¿En dónde encuentro el formulario?':
      await commands.callback_query.donde_encuentro_el_formulario(ctx)
      break;
    case '¿Qué es el PMID?':
      await commands.callback_query.que_es_el_pmid(ctx)
      break;
    case 'pmid_lista_de_bajas_voluntarias_o_expulsiones':
      await commands.callback_query.pmid_lista_de_bajas_voluntarias_o_expulsiones(ctx)
      break;
    case 'que_son_los_derechos_ARCO':
      await commands.callback_query.que_son_los_derechos_ARCO(ctx)
      break;
    case 'Regresar':
      await commands.help_and_start(ctx)
      break;
    default:
      break;
  }
})

module.exports = bot
