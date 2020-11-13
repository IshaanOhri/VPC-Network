$(document).ready(function () {
  $("#view").click(function () {
    window.location.href = "./entries.html";
  });

  $("#submit").click(function () {
    var name = $("#name").val().toUpperCase();

    if (name === "") {
      alert("Please enter a name");
    } else {
      var settings = {
        url: `/add?name=${name}`,
        method: "GET",
        timeout: 0,
      };

      $.ajax(settings).done(function (response) {
        if (response.success) {
          alert("Data entered successfully!");
        } else {
          alert("Data could not be entered in database. Try again.");
        }
      });
    }
  });
});
