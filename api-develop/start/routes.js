'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.get('/', () => {
//   return { greeting: 'Hello world in JSON' }
// })

//login e logout



// cruds usuario
// Route.resource('users', 'UserController').apiOnly();
Route.get('users', 'UserController.index').middleware('auth');
Route.post('users', 'UserController.store').middleware('auth');
Route.put('users/:id', 'UserController.update').middleware('auth');
Route.delete('users/:id', 'UserController.destroy').middleware('auth');
Route.post('/login', 'UserController.login');
Route.get('/logout', 'UserController.logout');

// crud banner
// Route.resource('banners', 'BannerController').apiOnly();
Route.get('banners', 'BannerController.index');
Route.post('banners', 'BannerController.store').middleware('auth');
Route.put('banners/:id', 'BannerController.update').middleware('auth');
Route.delete('banners/:id', 'BannerController.destroy').middleware('auth');

//cruds postagem
// Route.resource('postagens', 'PostagemController').apiOnly();
Route.get('postagens', 'PostagemController.index');
Route.post('postagens', 'PostagemController.store').middleware('auth');
Route.put('postagens/:id', 'PostagemController.update').middleware('auth');
Route.delete('postagens/:id', 'PostagemController.destroy').middleware('auth');

// logs
Route.get('logs', 'LogController.index');
