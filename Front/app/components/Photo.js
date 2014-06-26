define(['react'], function (React) {
  var cx = React.addons.classSet;

  return React.createClass({
    displayName: 'PhotosListComponent',
    getDefaultProps: function(){
      return {
        name: '',
        thumb_url: '',
        onPhotoClick: null
      };
    },
    getInitialState: function(){
      return {
        visible: false
      };
    },
    componentDidMount: function(){
      var that = this;
      setTimeout(function(){
        that.setState({
          visible: true
        });
      });
    },
    onClick: function(){
      if(this.props.onPhotoClick)
        this.props.onPhotoClick(this.props.key)
    },
    render: function(){
      var photoClasses = cx({
        photo: true,
        visible: this.state.visible
      });
      return React.DOM.div({className: photoClasses, onClick: this.onClick}, [
        React.DOM.img({className: 'image', src: this.props.thumb_100, key: 0}),
        React.DOM.div({className: 'title', key: 1}, this.props.name)
      ]);
    }
  });
});