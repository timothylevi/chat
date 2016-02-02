Meteor.methods({
  createMessage(message) {
    message.createdAt = new Date();
    message.user = {
      _id: Meteor.userId(),
      username: Meteor.user().username,
      directUrl: "http://www.google.com"
    };
    Messages.insert(message);
  }
});
