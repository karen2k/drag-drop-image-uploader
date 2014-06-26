define(['react', 'PhotoComponent', 'ReactBackboneMixin'], function (React, PhotoComponent, ReactBackboneMixin) {
  return React.createClass({
    displayName: 'PhotosListComponent',
    mixins: [ReactBackboneMixin],
    getDefaultProps: function(){
      return {
        collection: []
      };
    },
    onPhotoClick: function(i){
      if(this.props.onPhotoClick && this.props.collection.at(i))
        this.props.onPhotoClick(this.props.collection.at(i));
    },
    render: function(){
      var i, model,
          photosModels = this.props.collection,
          photos = [];
      for(i = 0; i < photosModels.length; i++){
        model = photosModels.at(i);
        photos.push(PhotoComponent({
          key: i,
          id: model.get('id'),
          name: model.get('name'),
          thumb_100: model.get('thumb_100'),
          onPhotoClick: this.onPhotoClick
        }));
      }
      return React.DOM.div({className: 'photos'}, photos);
    }
  });
});