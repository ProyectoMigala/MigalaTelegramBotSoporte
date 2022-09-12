'use strict'

module.exports = {
  new_chat_members: require('./new_chat_members'),
  help_and_start: require('./help_and_start'),
  callback_query: {
    que_es_padron_migala: require('./help_and_start/que_es_padron_migala'),
    aviso_de_privacidad: require('./help_and_start/aviso_de_privacidad'),
    donde_encuentro_el_formulario: require('./help_and_start/donde_encuentro_el_formulario'),
    que_es_el_pmid: require('./help_and_start/que_es_el_pmid'),
    pmid_lista_de_bajas_voluntarias_o_expulsiones: require('./help_and_start/pmid_lista_de_bajas_voluntarias_o_expulsiones copy'),
    que_son_los_derechos_ARCO: require('./help_and_start/que_son_los_derechos_ARCO')
  }
}
