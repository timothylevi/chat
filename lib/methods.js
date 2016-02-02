Meteor.methods({
  createMessage(message) {
    message.createdAt = new Date();
    message.user = {
      username: Meteor.user().username,
      directUrl: "http://www.google.com"
    };
    Messages.insert(message);
  }
});
