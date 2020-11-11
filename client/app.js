$(document).ready(function () {
    $("#view").click(function () {
      window.location.href='./entries.html';
    });

    $("#submit").click(function () {
      var name = $("#name").val().toUpperCase();
      
      var settings = {
        "url": `/add?name=${name}`,
        "method": "GET",
        "timeout": 0,
      };
      
      $.ajax(settings).done(function (response) {
        alert(response.message);
      });
    });
  });
  