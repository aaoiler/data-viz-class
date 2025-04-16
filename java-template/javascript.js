var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1800','1825','1850','1875','1900','1925','1950','1975','2000'],
        datasets: [{
            label: 'China',
            data: [32, 32, 32, 31.96, ],
            backgroundColor: [
                '#ff0800'
            ],
        },
        {
            label: '# of Oranges',
            data: [22, 10, 23, 6, 22, 13],
            backgroundColor: [
                '#FFA500'
            ],
        }
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Apples and Oranges by year',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'For all but one year, oranges outnumbered apples'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});