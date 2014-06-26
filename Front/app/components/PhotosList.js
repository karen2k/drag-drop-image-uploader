define(['react', 'PhotoComponent', 'ReactBackboneMixin'], function (React, PhotoComponent, ReactBackboneMixin) {
  return React.createClass({
    displayName: 'PhotosListComponent',
    mixins: [ReactBackboneMixin],
    getDefaultProps: function(){
      return {
        collection: []
      };
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
          thumb_url: model.get('thumb_url')
        }));
      }
      return React.DOM.div({className: 'photos'}, photos);
    }
  });
});