define(['react', 'PhotosListComponent', 'PhotosUploadComponent', 'PhotosCollection'], function (React, PhotosListComponent, PhotosUploadComponent, PhotosCollection) {
  return React.createClass({
    displayName: 'MainViewComponent',
    render: function(){
      var photosCollection = new PhotosCollection([], {});
      photosCollection.fetch();

      var photosList = PhotosListComponent({
        key: 0,
        collection: photosCollection
      });

      var photosUpload = PhotosUploadComponent({
        key: 1
      });

      return React.DOM.div({}, [photosUpload, photosList]);
    }
  });
});