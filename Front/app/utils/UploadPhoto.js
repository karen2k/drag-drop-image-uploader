define([], function () {
  return function(photosCollection){
    return function(){
      var fileInput = this.refs.fileInput.getDOMNode(),
          file = fileInput.files[0],
          formData = new FormData();
      formData.append('photo[image]', file);
      $.ajax({
        url: '/api/photos',
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        type: 'POST',
        dataType: 'json',
        success: function(response){
          photosCollection.create(response);
        },
        error: function(error){
          alert('Something went wrong');
        }
      });
      fileInput.value = '';
    };
  };
});