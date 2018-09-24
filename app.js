
window.onload = function () {

  var vehicles = document.querySelectorAll('.vehicle');

  for (var i = vehicles.length - 1; i >= 0; i--) {
    var vehicle = vehicles[i];
    var vehicleData = vehicle.querySelector('.speeds').dataset.speed;
    vehicleData = JSON.parse(vehicleData);

    var ctx = vehicle.querySelector('.chart');
    var timeFormat = 'YYYY-MM-DD HH:mm';

    var config = {
      type: 'line',
      data: {
        datasets: [{
          label: "Velocidad promedio",
          data: vehicleData,
          fill: false,
          borderColor: 'red'
        }]
      },
      options: {
        responsive: true,
        scales: {
          xAxes: [{
            type: "time",
            time: {
              unit: 'hour',
              format: timeFormat,
              tooltipFormat: 'll'
            },
            scaleLabel: {
              display: true,
              labelString: 'Hora'
            }
          }],
          yAxes: [{
            scaleLabel: {
              display:     true,
              labelString: 'Velocidad'
            }
          }]
        }
      }
  };
      
    var myChart = new Chart(ctx, config);
  } 
};



