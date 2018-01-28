var container = $('div.container');

$(document).ready(function() {
  $('#GSD').click(function () {

    var radioValue = $("input[name='options']:checked").val();
    if (radioValue==="option1"){
      var endurl = "https://random-kan-fact.herokuapp.com/random";
    }else {
        var endurl = "https://random-kan-fact.herokuapp.com/facts";
    }

    $.ajax({
      // url: "http://localhost:8000/random",
      type: 'GET',
      url: endurl,
      dataType: 'json',
      success: function (data) {
        $('#resjson').text(JSON.stringify( data, null, '  '));
      }
    });
    $('#response').collapse('show');
  });
});
