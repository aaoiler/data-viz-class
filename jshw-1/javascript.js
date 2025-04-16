var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: [
        'Action',
        'Adventure',
        'Animation',
        'Biography',
        'Comedy',
        'Crime',
        'Drama',
        'Horror',
        'Western',
      ],
      datasets: [{
        label: 'Genres of the IMDB Top 50 Movies',
        data: [13, 2, 3, 5, 2, 11, 11, 1, 2],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(56, 162, 232)',
          'rgb(191, 3, 3)',
          'rgb(85, 231, 139)',
          'rgb(186, 142, 198)',
          'rgb(193, 234, 33)'
        ]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Genres of the Top IMDB 50 Moives '

        },
            subtitle: {
                display: true,
                text: 'In the top 50 movies according to IMDB ratings, action movies were most common with 13 movies. This included movies like Inception and Lord of the Rings. The only horror movie that made the cut was Psycho. '
            }
      }
    }
  });