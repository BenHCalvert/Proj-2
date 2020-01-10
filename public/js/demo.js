var events = [
    // {'Date': new Date(2019, 11, 17), 'Title': 'RDV at 1:45pm.'},
    // {'Date': new Date(2019, 12, 18), 'Title': 'Game!'},
    // {'Date': new Date(2020, 1, 27), 'Title': 'event'},
  ];
  var settings = {};
  var element = document.getElementById('caleandar');
  caleandar(element, events, settings);
  $(document).ready(function() {
function curtime() {
        var now = moment().format("MMMM Do YYYY, h:mm:ss a");
        // var hour = moment().format("HH");
        
        $(".current-time").text(now);
    }
    setInterval(curtime, 1000);
    
   
  });

  