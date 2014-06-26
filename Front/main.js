requirejs.config({
  baseUrl: '/front/lib',
  paths: {
    jquery: './jquery-1.11.1',
    underscore: 'underscore',
    backbone: 'backbone',
    react: 'react-with-addons-0.10.0',

    app: '../app',

    // React components
    MainViewComponent: '../app/components/MainView',
    PhotosListComponent: '../app/components/PhotosList',
    PhotoComponent: '../app/components/Photo',
    PhotosUploadComponent: '../app/components/PhotosUpload',

    // React mixins
    ReactBackboneMixin: '../app/mixins/ReactBackbone',

    // Backbone models
    PhotoModel: '../app/models/Photo',

    // Backbone collections
    PhotosCollection: '../app/collections/Photos',
  },
  shim : {
    backbone : {
      deps : [
        'jquery',
        'underscore'
      ],
      exports : 'Backbone'
    },
    jquery : {
      exports : '$'
    },
    underscore : {
      exports : '_'
    }
  }
});

requirejs(['app/main']);