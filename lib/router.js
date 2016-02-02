const indexRoute = {
  path: '/',
  action: (params, queryParams) => {
    Session.set('room', 'global');
    Session.set('userId', null);
  }
};

const globalRoomShowRoute = {
  path: '/rooms/global',
  action: (params, queryParams) => {
    FlowRouter.go('/');
  }
};

const directMessageShowRoute = {
  path: '/messages/:userId',
  action: (params, queryParams) => {
    Session.set('room', 'direct');
    Session.set('userId', params.userId);
  }
}

FlowRouter.route(indexRoute.path, { action: indexRoute.action });
FlowRouter.route(globalRoomShowRoute.path, { action: globalRoomShowRoute.action });
FlowRouter.route(directMessageShowRoute.path, { action: directMessageShowRoute.action });
