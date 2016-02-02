Meteor.startup(function seedRooms() {
  Rooms.remove({});
  Rooms.insert({ name: "global" });
});
