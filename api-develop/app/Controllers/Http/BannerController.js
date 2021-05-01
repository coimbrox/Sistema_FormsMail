'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with banners
 */

const Banner = use("App/Models/Banner");
const Log = use('App/Models/Log');
class BannerController {

// listar todos os arquivos

async index ({ request, response, view }) {
  const banners = await Banner.query().with('user').fetch();

  return banners;
}

//criar novos usuários no banco
async store ({ request, response, auth }) {
  const {Controller, Action} = request.all();
  const {id}= auth.user;
  const {imagens , links} = request.all();

  const banner = await Banner.create({imagens , links, user_id: id });
  const logs = await Log.create({ Controller: 'Banner', Action: 'Criar', user_id: id});
  return banner, logs, response.status(200).send({message: 'Banner Criado'});
}

// atualizar informações
async update ({ params, request, response, auth }) {
  const {Controller, Action} = request.all();
  const {id}= auth.user;
  const banner = await Banner.findOrFail(params.id);
  const {imagens , links} = request.all();
  const logs = await Log.create({ Controller: 'Banner', Action:'Editar', user_id:id});
  banner.merge({imagens , links, user_id:id});
  await banner.save();

  return banner,logs,response.status(200).send({message: 'Banner Editado'});
}

//remover
async destroy ({ params, request, response, auth }) {
  const {Controller, Action} = request.all();
  const {id}= auth.user;
const banner = await Banner.findOrFail(params.id);
const logs = await Log.create({ Controller: 'Banner', Action:'Deletar', user_id:id});
await banner.delete();
return logs, response.status(200).send({message: 'Banner Removido'});
}
}

module.exports = BannerController
