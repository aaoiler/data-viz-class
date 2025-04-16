var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#3e95cd",
                backgroundColor: "#3e95cd",
               
              }, { 
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#9b2226",
                backgroundColor: "#9b2226",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "US",
                borderColor: "#f72585",
                backgroundColor:"#f72585",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 68.3, y: 45986},
                ],
                label: "Indonesia",
                borderColor: "#f3722c",
                backgroundColor:"#f3722c",
                borderWidth:2,
                
              },  { 
                data: [
                {x: 71.9, y: 11461},
                ],
                label: "Brazil",
                borderColor: "#f9c74f",
                backgroundColor:"#f9c74f",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 65.4, y: 13173},
                ],
                label: "Russia",
                borderColor: "#90be6d",
                backgroundColor:"#90be6d",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 62.6, y: 3366},
                ],
                label: "Pakistan",
                borderColor: "#43aa8b",
                backgroundColor:"#43aa8b",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 65.8, y: 1632},
                ],
                label: "Bangladesh",
                borderColor: "#577590",
                backgroundColor:"#577590",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 81.1, y: 32193},
                ],
                label: "Japan",
                borderColor: "#7400b8",
                backgroundColor:"#7400b8",
                borderWidth:2,
                
              },  { 
                data: [
                {x: 55.8, y: 2836},
                ],
                label: "Nigeria",
                borderColor: "#fec5bb",
                backgroundColor:"#fec5bb",
                borderWidth:2,
                
              }

            ]
          },
          options: {
            responsive: true,
            indexAxis: 'y',
            plugins: {
                title: {
                    display: true,
                    text: 'Top 10 Most Populated Countries GDP and Life Expectancy',
                    font: {
                        size: 18
                }
            },
                subtitle: {
                    display: true,
                    text: 'The United States has the highest GDP and Japan has the highest life expectancy. Out of the top 10 most populated countries, Nigeria and India rank lowest in GDP and life expectancy.'
                }
            },
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'GDP Per Capita'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Age'
                  }
              }
            }
          }
        });