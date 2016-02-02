Meteor.publish('messages', (room, ownUserId, otherUserId) => {
  const inGlobalChat = room === 'global' && otherUserId === null;

  if (inGlobalChat) return Messages.find({ room });

  return Messages.find({
    $or: [
      { room, toUser: ownUserId, "user._id": otherUserId },
      { room, toUser: otherUserId, "user._id": ownUserId }
    ]
  });
});

Meteor.publish('allUsernames', () => {
  return Meteor.users.find({}, {fields: {username: 1}});
});

Meteor.publish('rooms', () => {
  return Rooms.find({});
});
