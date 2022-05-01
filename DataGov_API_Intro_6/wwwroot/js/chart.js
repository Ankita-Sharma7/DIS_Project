var stars = [135850, 52122, 148825, 16939, 9763, 13];
var frameworks = ['Action', 'Adventure', 'Comedy', 'Crime', 'Documentry', 'War'];
var ctx = document.getElementById('myChart');

var myChart = new Chart(ctx, {
    type: 'pie',
    data: {}
}
)

var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: frameworks,
        datasets: [{
            label: 'Popular JavaScript Frameworks',
            data: stars
        }]
    },

});

var ctx = document.getElementById("myChart");

var stars = [135850, 52122, 148825, 16939, 9763, 13];
var frameworks = ['Action', 'Adventure', 'Comedy', 'Crime', 'Documentry', 'War'];


var myChart = new Chart(ctx, {
    type: "pie",
    data: {
        labels: frameworks,
        datasets: [
            {
                label: "Github Stars",
                data: stars,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                ]
            }
        ]
    }
});