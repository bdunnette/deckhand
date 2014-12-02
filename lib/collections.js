PowerPoints = new FS.Collection("ppts", {
  stores: [new FS.Store.GridFS("ppts")]
});

PowerPointComponents = new FS.Collection("pptComponents", {
  stores: [new FS.Store.GridFS("pptComponents")]
});