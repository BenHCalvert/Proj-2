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

  function pageRedirect (){
    // console.log("Page redirect")
    window.location.href = "student.html";

  }

  $studentButton.on("click", function () {
    pageRedirect()
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

  renderStudents = function () {
    API.getStudents().then(function (data) {
      // console.log(data);
      // console.log("render student");
      const studentArray = [];

      for (let i = 0; i < data.length; i++) {
        const firstName = data[i].first_name;
        const lastName = data[i].last_name;
        const fullName = firstName + ' ' + lastName;
        const grade = data[i].grade;
        const gender = data[i].gender;
        // const student = fullName + ' ' + grade + ' ' + gender;

        studentArray.push(fullName);
        // studentArray.push(fullName, grade, gender);
        console.log(studentArray);
        // $.each(studentArray, () => {
        // })
        const studentList = $('#studentList');
        const tr = $('<tr>');
        const td = $('<td>');
        tr.append(td);
        studentList.append(tr);
        td.append(studentArray[i]);
        // td.append(student);
      }
    });
  };

  // we only want to render students on the student page.
  let location = window.document.location.href
  if(location === "http://localhost:3000/student.html"){
    $(window).load(function(){
      renderStudents();
    });
    }
});
