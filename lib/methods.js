Meteor.methods({
  createMessage(message) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    message.createdAt = new Date();
    message.user = {
      _id: Meteor.userId(),
      username: Meteor.user().username,
      directUrl: "http://www.google.com"
    };
    Messages.insert(message);
  }
});
