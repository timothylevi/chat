const indexRoute = {
  path: '/',
  action(params, queryParams) {
    Session.set('room', 'global');
    Session.set('username', '');
    ReactLayout.render(App, { yield: <Index /> });
  }
};

const aboutRoute = {
  path: '/about',
  action(params, queryParams) {
    ReactLayout.render(App, { yield: <About /> });
  }
}

const messagesRoute = {
  path: '/messages/:username',
  action(params, queryParams) {
    Session.set('room', 'direct');
    Session.set('username', params.username);
    ReactLayout.render(App, { yield: <Index /> });
  }
};

const publicRoutes = FlowRouter.group({ name: 'public' });
const authenticatedRoutes = FlowRouter.group({ name: 'authenticated' });

publicRoutes.route( aboutRoute.path, { action: aboutRoute.action });
authenticatedRoutes.route(indexRoute.path, { action: indexRoute.action });
authenticatedRoutes.route(messagesRoute.path, { action: messagesRoute.action });
