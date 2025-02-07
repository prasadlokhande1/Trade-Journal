// Example data for the Profit and Loss (P&L) pie chart
const pnlData = {
  labels: ['Profit', 'Loss'],
  datasets: [{
    data: [10000, -2000], // Example data: ₹10,000 profit, ₹2,000 loss
    backgroundColor: ['#4CAF50', '#F44336'], // Green for profit, Red for loss
    hoverBackgroundColor: ['#45a049', '#e53935'],
  }]
};

// Create the P&L pie chart
const ctx = document.getElementById('performanceChart').getContext('2d');
const pieChart = new Chart(ctx, {
  type: 'pie', // Set the chart type to 'pie'
  data: pnlData,
  options: {
    responsive: true, // Make the chart responsive to screen size
    plugins: {
      legend: {
        position: 'top', // Position of the legend (Profit, Loss)
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.label + ': ₹' + tooltipItem.raw;
          }
        }
      }
    }
  }
});
