define([], function () {
  /*
  A basic one-way bind for storing Backbone models and collections inside
  of React components. Will attach itself to 'collection' and 'model' properties
  if they have been passed, and add event handlers to do a forceUpdate() every time
  the model/collection changes or syncs.

  When the component unmounts, the notification events will be removed from the Backbone
  collection, guaranteeing proper cleanup and avoiding closure leak.
   */
  var ReactBackboneMixin = {
    componentWillMount: function() {
      return this.forceUpdateBoundToSelf_ = ((function(_this) {
        return function() {
          return _this.forceUpdate();
        };
      })(this));
    },
    componentDidMount: function() {
      var eventName, m, _i, _len, _ref, _results;
      _ref = _.compact([this.props.collection, this.props.model]);
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        m = _ref[_i];
        if (m.on) {
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = ['remove', 'add', 'change', 'sync'];
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              eventName = _ref1[_j];
              _results1.push(m.on(eventName, this.forceUpdateBoundToSelf_));
            }
            return _results1;
          }).call(this));
        } else {
          throw "The object passed in `model' or `collection` prop has no on() method";
        }
      }
      return _results;
    },
    componentWillUnmount: function() {
      var m, _i, _len, _ref, _results;
      _ref = _.compact([this.props.collection, this.props.model]);
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        m = _ref[_i];
        _results.push(m.off(null, this.forceUpdateBoundToSelf_));
      }
      return _results;
    }
  };

  return ReactBackboneMixin;
});