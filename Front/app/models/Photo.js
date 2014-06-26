define(['backbone'], function (Backbone) {
  return Backbone.Model.extend({
    defaults: {
      name: 'No name',
      thumb_100: '',
      thumb_200: '',
      thumb_300: '',
      largest_200: '',
      largest_300: '',
      largest_300_smallest_200: ''
    }
  });
});