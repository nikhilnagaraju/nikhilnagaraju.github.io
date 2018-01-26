var container = $('div.container');

$(document).ready(function() {
  $('#GSD').click(function () {

    $.ajax({
      // url: "http://localhost:8000/random",
      type: 'GET',
      url: "https://random-kan-fact.herokuapp.com/random",
      dataType: 'json',
      success: function (data) {
        $('#resjson').text(JSON.stringify( data, null, '  '));
      }
    });
    $('#response').collapse('show');
  });
});
