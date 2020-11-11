$(document).ready(function () {
  var settings = {
    url: `/all`,
    method: "GET",
    timeout: 0,
  };

  $.ajax(settings).done(function (response) {
    if (response.data.length == 0) {
      var h = document.createElement("h3");
      h.innerHTML = "No entries found";
      document.getElementById("entries").appendChild(h);
    } else {
      var table = document.createElement("table");

      var tr = document.createElement("tr");
      var th1 = document.createElement("th");
      var th2 = document.createElement("th");
      th1.innerHTML = "NAME";
      th2.innerHTML = "DATE";
      tr.appendChild(th1);
      tr.appendChild(th2);
      table.appendChild(tr);

      for (var i = 0; i < response.data.length; i++) {
        var tr = document.createElement("tr");
        var th1 = document.createElement("th");
        var th2 = document.createElement("th");

        th1.style.paddingTop = "10px";
        th1.style.paddingBottom = "10px";
        th1.style.paddingLeft = "20px";
        th1.style.paddingRight = "20px";

        th2.style.paddingTop = "10px";
        th2.style.paddingBottom = "10px";
        th2.style.paddingLeft = "20px";
        th2.style.paddingRight = "20px";

        th1.innerHTML = response.data[i].name;
        th2.innerHTML = response.data[i].date;
        tr.appendChild(th1);
        tr.appendChild(th2);
        table.appendChild(tr);
      }
      document.getElementById("entries").appendChild(table);
    }
  });
});
