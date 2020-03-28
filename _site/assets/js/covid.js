
var labels = jsonfile.legal.map(function(e) {
   return e.Data;
});
var estados = jsonfile.legal.map(function(e) {
   return e.PE;
});;
var saopaulo = jsonfile.legal.map(function(e) {
   return e.SP;
});;
console.log(labels)
console.log(estados)
var ctx = document.getElementById('myChart').getContext('2d');
var config = {
   type: 'line',
   data: {
      labels: labels,
      datasets: [{
         label: 'Pernambuco',
         data: estados,
         backgroundColor: 'rgba(0, 119, 204, 0.3)'
      },
      {
      label: 'São Paulo',
              data: saopaulo,
              backgroundColor: 'rgba(0, 119, 204, 0.3)'
      }
      ],
   }
};
var chart = new Chart(ctx, config);