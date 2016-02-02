Meteor.publish('messages', (room) => {
  return Messages.find({ room });
});

Meteor.publish('allUsernames', () => {
  return Meteor.users.find({}, {fields: {username: 1}});
});

Meteor.publish('rooms', () => {
  return Rooms.find({});
});
