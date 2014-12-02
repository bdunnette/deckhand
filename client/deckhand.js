  Session.setDefault("pptx", false);
  Session.setDefault("pptxUploaded", false);

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.hello.events({
    'click .unzipFile': function () {
      // increment the counter when button is clicked
      var zip = Meteor.call("unzipPptx", Session.get("pptxId"));
    },

    'change .myFileInput': function (event, template) {
      FS.Utility.eachFile(event, function (file) {
        PowerPoints.insert(file, function (err, fileObj) {
          console.log(err);
          console.log(fileObj);
          Session.set("pptxId", fileObj._id);
        });
      });
    }
  });