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
