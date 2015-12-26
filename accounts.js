if (Meteor.isClient) {
  Template['override-atTitle'].replaces('atTitle');
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
