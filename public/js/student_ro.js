/* eslint-disable no-undef */
// document.addEventListener('DOMContentLoaded', () => {
//   const elems = document.querySelectorAll('select');
//   const instances = M.FormSelect.init(elems, options);
// });

// listener for for select
$(document).ready(() => {
  $('select').formSelect();
});

// resize allergy text box
// $('#textarea1').val('New Text');
// M.textareaAutoResize($('#textarea1'));

//  listener for onclick on student row in student list
$(() => {
  $('.student-row').on('click', function (event) {
    const studId = $(this).data('student-id');

    // Send the get request.
    $.ajax(`/api/student/${studId}`, {
      type: 'GET',
    }).then(
        (res, req) => {
        // console.log(">>>>>>got back selected student info", res);
        renderStudForm(res);
        renderAdultList(res); // only applicable for readonly page
      },
    );
  });

  $('.student-form').on('submit', (event) => {
    event.preventDefault();
    console.log('button submit in student form', event);

    // get the value of the button so we know which one was selected
    const button = $(document.activeElement).val();
    console.log('button ', button);

    // get the values from the form inputs
    const formData = {
      student_id: $('#studId').val(),
      first_name: $('#first_name').val(),
      last_name: $('#last_name').val(),
      gender: $('select[id=gender]').val(),
      grade: $('select[id=grade]').val(),
      allergies: $('#textarea_allergies').val(),
    };

    console.log('formdata', formData);
    console.log('button', button);

    // preform desired action based on button
    switch (button) {
      case 'delete':
        $.ajax(`/api/student/${formData.student_id}`, {
          type: 'DELETE',
        }).then((res, req) => {
          console.log('Deleted student', res);
          location.reload();
        });
        break;
      case 'update':
        console.log("update studet");
        $.ajax(`/api/student/${formData.student_id}`, {
          type: 'PUT',
          data: formData
        }).then((res, req) => {
          console.log('Updated student res', res);
          location.reload();
        });
        break;
      case 'add':
        console.log("add studet");
        $.ajax(`/api/student/`, {
          type: 'POST',
          data: formData
        }).then((res, req) => {
          console.log('Create student', res);
          location.reload();
        });
        break;
    }
  });
});
// use jquery to list form of student detail information
function renderStudForm(data) {
  $('#studId').val(data.id);
  $('#first_name').val(data.first_name);
  $('#last_name').val(data.last_name);

  $('#gender').find(`option[value=${data.gender}]`).prop('selected', true);
  $('#gender').formSelect();

  $('#grade').find(`option[value=${data.grade}]`).prop('selected', true);
  $('#grade').formSelect();

  $('#textarea_allergies').val(data.allergies);
  // add the focus to the alleriges so the test does not lay ontop of the lable
  $('#textarea_allergies').focus();
  // change back to first name so focus is at top of form
  $('#first_name').focus();
}

// use jquery to create list for adults associated with student
function renderAdultList(data) {
  $('#adult-list').empty();
  for (let i = 0; i < data.Adults.length; i += 1) {
    const adult = data.Adults[i];
    // console.log("ADULT",adult);
    // console.log("FAMILY",adult.Family.adult_type);
    const adultRow = $('<tr>');
    adultRow.addClass('adult-row');
    // adultRow.text($(this).attr("data-adult-id"));
    adultRow.attr('data-adult-id', adult.id);

    const firstTd = $('<td>');
    firstTd.text(`${adult.last_name}, ${adult.first_name}`);
    adultRow.append(firstTd);

    const secondTd = $('<td>');
    secondTd.text(`${adult.Family.adult_type}`);
    adultRow.append(secondTd);

    $('#adult-list').append(adultRow);
  }
}