var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['1800',	'1825',	'1850',	'1875',	'1900','1925',	'1950',	'1975',	'2000'],
        datasets: [{
            label: 'Brazil',
            data: [32, 32,31.99,	32.06,32.4,	32.75,51.78,	63.65,	71.44],
            fill: true,
            borderColor: 'rgba(255, 8, 0)',
            
            tension: 0.1},
        {
            label: 'China',
            data: [32,	32,	32,	31.96,	31.75,	31.55,	40.73,	63.26,	70.03],
            fill: true,
            borderColor: 'rgba(255, 165, 0)',
            
            tension: 0.1},
        {
              label: 'India',
              data: [25.44,	25.44,	25.44,	25.11,18.37,	26.69,	34.92,51.51,62.34],
              fill: true,
              borderColor: '#3f37c9',
              
              tension: 0.1},
        {
                label: 'Indonesia',
                data: [30,30,30,	30.04,	30.24,	30.43,	37.16,	56.49,	67.27],
                fill: true,
                borderColor: '#6930c3',
                
                tension: 0.1},
        {
                  label: 'United States',
                  data: [39.41,	39.41,	39.41,	39.41,	48.92,	58.47,	68.07, 72.44,	76.9],
                  fill: true,
                  borderColor: '#43aa8b',
              
                  tension: 0.1},
            
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Life Expectancy For The 5 Largest Countries Over Time',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Life expectancy was relatively even until 1900, when the infant mortality rate went down for many countries. This caused life expectancy to skyrocket, escpecially in places like India and China. '
            }
        },
        scales: {
          y: {
            title: {
              display: true,
              text: 'Country Life Expectancy'
            }
          },
          x: {
              title: {
                  display: true,
                  text: 'Year'
              }
          }
        },
    },
});