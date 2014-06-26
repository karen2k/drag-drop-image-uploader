define(['backbone', 'PhotoModel'], function (Backbone, PhotoModel) {
  return Backbone.Collection.extend({
    model: PhotoModel,
    url: '/api/photos',
    comparator: function(b, a){
      if (a.id > b.id)
        return 1;
      else if (a.id === b.id)
        return 0;
      else
        return -1;
    }
  });
});