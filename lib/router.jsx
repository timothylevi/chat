const loginRoute = {
  path: '/login',
  action(params, queryParams) {
    ReactLayout.render(App, { yield: <Login /> });
  }
}

const indexRoute = {
  path: '/',
  action(params, queryParams) {
    Session.set('room', 'global');
    Session.set('userId', null);
    ReactLayout.render(App, { yield: <Index /> });
  }
};

const directMessageShowRoute = {
  path: '/messages/:userId',
  action(params, queryParams) {
    Session.set('room', 'direct');
    Session.set('userId', params.userId);
    ReactLayout.render(App, { yield: <Index /> });
  }
};

const publicRoutes = FlowRouter.group({ name: 'public' });
const authenticatedRoutes = FlowRouter.group({ name: 'authenticated' });

publicRoutes.route( loginRoute.path, { action: loginRoute.action });
authenticatedRoutes.route(indexRoute.path, { action: indexRoute.action });
authenticatedRoutes.route(directMessageShowRoute.path, { action: directMessageShowRoute.action });
