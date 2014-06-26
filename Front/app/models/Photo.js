define(['backbone'], function (Backbone) {
  return Backbone.Model.extend({
    defaults: {
      name: 'No name',
      thumb_url: ''
    }
  });
});