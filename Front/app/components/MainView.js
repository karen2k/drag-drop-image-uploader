define(['react', 'PhotosListComponent', 'PhotosUploadComponent', 'PhotoPopupComponent', 'PhotosCollection', 'UploadPhotoUtil'], function (React, PhotosListComponent, PhotosUploadComponent, PhotoPopupComponent, PhotosCollection, UploadPhotoUtil) {
  return React.createClass({
    displayName: 'MainViewComponent',
    render: function(){
      var photosCollection = new PhotosCollection([], {});
      photosCollection.fetch();

      var photoPopup = PhotoPopupComponent({
        key: 0
      });

      var photosList = PhotosListComponent({
        key: 1,
        collection: photosCollection,
        onPhotoClick: function(model){
          photoPopup.setState({photo: model});
        }
      });

      var photosUpload = PhotosUploadComponent({
        key: 2,
        onFileDrop: UploadPhotoUtil(photosCollection)
      });

      return React.DOM.div({}, [photosUpload, photosList, photoPopup]);
    }
  });
});