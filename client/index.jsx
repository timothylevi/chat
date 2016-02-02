if (Meteor.isClient) {
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL"
  });

  Meteor.startup(function () {
    ReactDOM.render(<App />, document.getElementById("render-target"));
  });
}
