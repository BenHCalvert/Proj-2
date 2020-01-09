
$(document).ready(() => {
  $('select').formSelect();
});

$(() => {
  $('.adult-row').on('click', function (event) {
    const adultId = $(this).data('adult-id');

    $.ajax(`/api/adult/${adultId}`, {
      type: 'GET',
    }).then(
      (res, req) => {
        renderChildren(res);
      },
    );
  });
});

function renderChildren(data) {
  console.log(data.Students[0].first_name,data.Students[0].last_name);
  // for (let i = 0; i < data.length; i++) {
  $('#childrenList').val(data.id);
  $('#first_name').val(data.Students[0].first_name);
  $('#last_name').val(data.Students[0].last_name);
  //   console.log(data.Students[0].first_name, data.Students[0].last_name);
  // }
}
