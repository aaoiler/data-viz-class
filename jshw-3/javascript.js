var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['1950s', '1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020'],
        datasets: [{
            label: 'IMDB Movies',
            data: [3,6,	4,	4, 16, 10,	6,	2],
            fill: false,
            borderColor: '#00b159',
            backgroundColor: '#00b159',
            tension: 0.1}
                  
        ]
    },
    options: {
        responsive: true,
        interaction: {
            intersect: false,
            mode: 'index',
          },
        plugins: {
            title: {
                display: true,
                text: 'What decade the top 50 highest rated movies were release in',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'The movie industry spiked in the 1990s with 16 of the highest rated movies of all time being released in that decade. According to data from IMDB in 2021, there are still movies from the 50s and 60s that continue to be rated highly. The 2020 decade has the least amount of movies in the top 50 best rated, but there is only two years of data in for it so far. '
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        },
    },
});