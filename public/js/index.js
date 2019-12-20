$(document).ready(function() {

  var $studentButton = $("#std-btn");
  var $adultButton = $("#adt-btn");
  var $inventoryButton = $("#inv-btn");
  var $betButton = $("#bet-btn");

  var API = {
    getStudents: function () {
      return $.ajax({
        url: "api/student",
        type: "GET"
      });
    }
  };

  var renderStudents = function () {
    API.getStudents().then(function (data) {
      console.log(data);
    });
  };

  $studentButton.on("click", function () {
    // console.log( 'student button' );
    renderStudents();
  });

  $adultButton.on("click", function () {
    console.log('adult button');

  });

  $inventoryButton.on("click", function () {
    console.log('inventory button');
  });

  $betButton.on("click", function () {
    console.log('bet button');
  });

});
