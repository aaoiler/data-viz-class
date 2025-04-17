var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['8.5', '8.6', '8.7', '8.8', '8.9', '9', '9.2','9.3'],
        datasets: [{
            label: 'IMDB Ratings',
            data: [17, 15, 5, 5, 3, 3,1,1],
            backgroundColor: [
                '#ff0800'
              ]
        }]
    },
    options: {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            title: {
                display: true,
                text: 'IMDB Ratings of the Top 50 Movies Ever',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Only 5 movies of the top 50 we rated above a 9. The highest rated movie at 9.3 is Shawshank Redemption. The average rating is 8.6, which includes movies like Interstellar and Saving Private Ryan. '
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                stacked: true
            ,title: {
                    display: true,
                    text: 'Ratings'
                  },
            },
            x: {
                stacked: true  
                ,title: {
                    display: true,
                    text: 'Amount of Movies'
                  }
            }
        },
        },
    },
);