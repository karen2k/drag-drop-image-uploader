define(['react'], function (React) {
  return React.createClass({
    displayName: 'PhotosListComponent',
    getDefaultProps: function(){
      return {
        name: '',
        thumb_url: ''
      };
    },
    render: function(){
      return React.DOM.div({className: 'photo'}, [
        React.DOM.img({className: 'image', src: this.props.thumb_url, key: 0}),
        React.DOM.div({className: 'title', key: 1}, this.props.name)
      ]);
    }
  });
});