$(document).ready(() => {
  const $adultButton = $('#adt-btn');

  function pageRedirect(page) {
    window.location.href = page;
  }

  const API = {
    getAdults() {
      return $.ajax({
        url: 'api/adult',
        type: 'GET',
      });
    },
  };

  $adultButton.on('click', () => {
    const adultPage = 'adult.html';
    pageRedirect(adultPage);
  });

  const renderAdults = () => {
    const adultArray = [];
    API.getAdults().then((data) => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        const firstName = data[i].first_name;
        const lastName = data[i].last_name;
        const fullName = `${firstName} ${lastName}`;

        adultArray.push(fullName);
        const adultList = $('#adultList');
        const tr = $('<tr>');
        const td = $('<td>');
        tr.append(td);
        adultList.append(tr);
        td.append(adultArray[i]);
      }
    });
  };

  // we only want to render students on the student page.
  const location = window.document.location.href;
  if (location === 'http://localhost:3000/adult.html') {
    $(window).load(() => {
      renderAdults();
    });
  }
});
