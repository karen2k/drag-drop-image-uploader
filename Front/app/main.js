define(['jquery', 'backbone', 'react', 'MainViewComponent'], function ($, Backbone, React, MainViewComponent) {
  $(document).ready(function(){
    var reactRoot = document.getElementById('reactRoot');
    React.renderComponent(MainViewComponent(), reactRoot);
  });
});