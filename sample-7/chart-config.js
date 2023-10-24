const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'polarArea',
  data: {
    labels: ['Facebook', 'Youtube', 'Amazon'],
    datasets: [{
      label: 'Traffic Source',
      data: [1200, 1900, 300],
      backgroundColor:[
        'rgba(255, 99, 132, 1)',
        'rgba(54, 165, 32, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
  }
});

const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
      label: 'Earnings',
      data: [1100, 3300, 2200, 5500, 6600, 4400, 7700, 500, 6600, 5500, 2200, 11000],
      backgroundColor:[
        'rgba(10, 220, 110, 1)',
        'rgba(20, 210, 100, 1)',
        'rgba(30, 200, 90, 1)',
        'rgba(40, 190, 80, 1)',
        'rgba(50, 180, 70, 1)',
        'rgba(60, 170, 60, 1)',
        'rgba(70, 160, 50, 1)',
        'rgba(80, 150, 40, 1)',
        'rgba(90, 30, 170, 1)',
        'rgba(100, 20, 160, 1)',
        'rgba(110, 10, 150, 1)',
        'rgba(120, 250, 140, 1)',
        'rgba(130, 240, 130, 1)',
        'rgba(140, 230, 120, 1)',
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
  }
});