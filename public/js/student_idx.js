$(document).ready(() => {
  const $studentButton = $('#std-btn');
  // var $adultButton = $("#adt-btn");
  const $inventoryButton = $('#inv-btn');
  const $betButton = $('#bet-btn');

  const API = {
    getStudents() {
      return $.ajax({
        url: 'api/student',
        type: 'GET',
      });
    },
  };

  const pageRedirect = (page) => {
    window.location.href = page;
  };

  $studentButton.on('click', () => {
    const studentPage = 'student.html';
    pageRedirect(studentPage);
  });

  // $adultButton.on("click", function () {
  //   const adultPage = "adult.html"
  //   pageRedirect(adultPage)
  // });

  $inventoryButton.on('click', () => {
    console.log('inventory button');
  });

  $betButton.on('click', () => {
    console.log('bet button');
  });

  const renderStudents = () => {
    const studentArray = [];
    API.getStudents().then((data) => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        const firstName = data[i].first_name;
        const lastName = data[i].last_name;
        const fullName = `${firstName} ${lastName}`;
        //   //       const grade = data[i].grade;
        //   //       const gender = data[i].gender;
        studentArray.push(fullName);
        const studentList = $('#studentList');
        const tr = $('<tr>');
        const td = $('<td>');
        tr.append(td);
        studentList.append(tr);
        td.append(studentArray[i]);
      }
    });
  };

  // we only want to render students on the student page.
  const location = window.document.location.href;
  if (location === 'http://localhost:3000/student.html') {
    $(window).load(() => {
      renderStudents();
    });
  }
});
