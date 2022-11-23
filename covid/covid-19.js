var Cases = document.getElementById('cases');
var Recoveries = document.getElementById('recoveries');
var Deaths = document.getElementById('deaths');
var D_Cases = document.getElementById('D_cases');
var D_Recoveries = document.getElementById('D_recoveries');
var D_Death = document.getElementById('D_death');

$(document).ready(function(){
    init();

    function init(){
        var url = 'https://api.covid19api.com/summary';
        //'https://api.covid19api.com/countries'
        $.get(url, function(data){
            console.log(data);

            Cases.innerHTML = data.Global.TotalConfirmed;
            Recoveries.innerHTML = data.Global.TotalRecovered;
            Deaths.innerHTML = data.Global.TotalDeaths;
            D_Cases.innerHTML = data.Global.NewConfirmed;
            D_Recoveries.innerHTML = data.Global.NewRecovered;
            D_Death.innerHTML = data.Global.NewDeaths;
        })
    }
})

// I used a code from Charts.js
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );