// Dom7
var $$ = Dom7;

var app = new Framework7({
  root: '#app',
  name: 'Panadería App',
  id: 'com.miapp.panaderia',
  panel: {
    swipe: true,
  },
  routes: [
    {
      path: '/inicio/',
      url: 'inicio.html',
    },
    {
      path: '/categorias/',
      url: 'categorias.html',
    },
    {
      path: '/favoritos/',
      url: 'favoritos.html',
    },
    {
      path: '/locales/',
      url: 'locales.html',
    },
    {
      path: '/perfil/',
      url: 'perfil.html',
    },
  ]
});

	




