Meteor.startup(function () {
    if (Messages.find().count() === 0) {
        for( var i = 0; i < 10; i++ ) {
            Messages.insert({text: "A dummy message"});
        }
    }
});
