Meteor.publish('messages', function(room, otherUserId) {
  const inGlobalChat = room === 'global' && otherUserId === null;

  if (!this.userId) return this.ready();
  if (inGlobalChat) return Messages.find({ room });
  return Messages.find({
    $or: [
      { room, toUser: this.userId, "user._id": otherUserId },
      { room, toUser: otherUserId, "user._id": this.userId }
    ]
  });
});

Meteor.publish('allUsernames', function() {
  if (!this.userId) return this.ready();
  return Meteor.users.find({}, {fields: {username: 1}});
});
