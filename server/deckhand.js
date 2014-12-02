Meteor.startup(function () {
  // code to run on server at startup
});

Meteor.methods({
  unzipPptx: function (pptxId, callback) {
    var pptxFile = PowerPoints.findOne(pptxId);
    var zipData = pptxFile.createReadStream();
    var bufs = [];
    zipData.on('data', function (d) {
      console.log(d);
      bufs.push(d);
    });
    zipData.on('end', function () {
      var zipDataBuffer = Buffer.concat(bufs);
      console.log(zipDataBuffer);
      var zip = new JSZip(zipDataBuffer);
      console.log(zip);
      for (var f in zip.files) {
        console.log(f);
        console.log(zip.files[f]);
        var subFile = zip.files[f];
        console.log(subFile);
        var subFileData = subFile.asBinary();
        console.log(subFileData);
      };
    });
    callback(null);
  }
});