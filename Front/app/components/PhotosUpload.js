define(['react'], function (React) {
  return React.createClass({
    displayName: 'PhotosUploadComponent',
    render: function(){
      return React.DOM.form({className: 'fileUploadZone'}, [
        React.DOM.input({ref:'fileInput', onChange: this.props.onFileDrop, type: 'file', name:'image', key: 0}),
        React.DOM.div({key: 1}, 'Click me to browse image or drag&drop from finder')
      ]);
    }
  });
});