// listener for for select
$(document).ready(() => {
    $('select').formSelect();
  });
   
    
//   Listener for creating a new event
    $('.event-form').on('submit', (event) => {
      event.preventDefault();
      console.log('button submit in calendar form', event);
  
      // get the value of the button so we know which one was selected
      const button = $(document.activeElement).val();
      console.log('button ', button);
  
      // get the values from the form inputs
    //   Need to update this, where does it live in HTML?
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
          $.ajax(`/api/calendar/${formData.student_id}`, {
            type: 'DELETE',
          }).then((res, req) => {
            console.log('Deleted event', res);
            location.reload();
          });
          break;
        case 'update':
          console.log("update event");
          $.ajax(`/api/calendar/${formData.student_id}`, {
            type: 'PUT',
            data: formData
          }).then((res, req) => {
            console.log('Updated event res', res);
            location.reload();
          });
          break;
        case 'add':
          console.log("add studet");
          $.ajax(`/api/calendar/`, {
            type: 'POST',
            data: formData
          }).then((res, req) => {
            console.log('Create event', res);
            location.reload();
          });
          break;
      }
    });
  

  // use jquery to list form of student detail information
  //   Need to update this, where does it live in HTML?
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
  };
  
  
  