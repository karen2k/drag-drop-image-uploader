define(['react'], function (React) {
  return React.createClass({
    displayName: 'PhotosUploadComponent',
    onFileDrop: function(){
      this.refs.fileInput.getDOMNode().value = '';
    },
    render: function(){
      return React.DOM.div({className: 'fileUploadZone'}, [
        React.DOM.input({ref:'fileInput', onChange: this.onFileDrop, type: 'file', name:'image', key: 0}),
        React.DOM.div({key: 1}, 'Click me to browse image or drag&drop from finder')
      ]);
    }
  });
});