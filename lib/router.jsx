const publicRoutes = FlowRouter.group({ name: 'public' });

const loginRoute = {
  path: '/login',
  action(params, queryParams) {
    ReactLayout.render(App, { yield: <Login /> });
  }
}

publicRoutes.route( loginRoute.path, { action: loginRoute.action });

const authenticatedRoutes = FlowRouter.group({ name: 'authenticated' });

const indexRoute = {
  path: '/',
  action(params, queryParams) {
    Session.set('room', 'global');
    Session.set('userId', null);
    ReactLayout.render(App, { yield: <Index /> });
  }
};

const globalRoomShowRoute = {
  path: '/rooms/global',
  action(params, queryParams) {
    FlowRouter.go('/');
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

authenticatedRoutes.route(indexRoute.path, { action: indexRoute.action });
authenticatedRoutes.route(globalRoomShowRoute.path, { action: globalRoomShowRoute.action });
authenticatedRoutes.route(directMessageShowRoute.path, { action: directMessageShowRoute.action });
