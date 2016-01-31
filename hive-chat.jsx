// TODO: Rooms = new Mongo.Collection("rooms");
Messages = new Mongo.Collection("messages");

if (Meteor.isClient) {
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

  Meteor.startup(function () {
    ReactDOM.render(<App />, document.getElementById("render-target"));
  });
}

Meteor.methods({
  createMessage(text) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Messages.insert({
      text: text,
      edited: false,
      createdAt: new Date(),
      user: {
        id: Meteor.userId(),
        name: Meteor.user().username
      }
    });
  },

  deleteMessage(messageId) {
    Messages.remove(messageId);
  },

  updateMessage(messageId, text) {
    Messages.update(messageId, {
      $set: {
        edited: true,
        updatedAt: new Date(),
        text: text
      }
    });
  }
});
