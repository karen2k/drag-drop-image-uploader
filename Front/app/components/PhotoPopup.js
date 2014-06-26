define(['react'], function (React) {
  var cx = React.addons.classSet;
  return React.createClass({
    displayName: 'PhotoPopupComponent',
    getInitialState: function(){
      return {
        photo: null
      };
    },
    closeMe: function(){
      this.setState({photo: null});
    },
    render: function(){
      
      var photos = [];
      
      if(this.state && this.state.photo){
        photos.push(React.DOM.img({key: 0, src: this.state.photo.get('thumb_100')}));
        photos.push(React.DOM.img({key: 1, src: this.state.photo.get('thumb_200')}));
        photos.push(React.DOM.img({key: 2, src: this.state.photo.get('thumb_300')}));
        photos.push(React.DOM.img({key: 3, src: this.state.photo.get('largest_200')}));
        photos.push(React.DOM.img({key: 4, src: this.state.photo.get('largest_300')}));
        photos.push(React.DOM.img({key: 5, src: this.state.photo.get('largest_300_smallest_200')}));
      }
      
      var popupBG = React.DOM.div({
        key: 0,
        className:'photoPopupBG'
      });
      var popupContent = React.DOM.div({
        key: 1,
        className:'photoPopupContent'
      }, photos);

      var popupClasses = cx({
        photoPupup: true,
        visible: photos.length
      });

      return React.DOM.div({className: popupClasses, onClick: this.closeMe}, [popupBG, popupContent]);
    }
  });
});