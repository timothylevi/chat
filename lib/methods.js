Meteor.methods({
  createMessage(message) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    const username = Meteor.user().username;

    message.createdAt = new Date();
    message.fromUsername = username;

    Messages.insert(message);
  }
});
