var myChart;
var autorefresh = false;
$(function() {
    $.ajax({
        url: "/api/brewing/last"
    }).done(function(response) {

        var labels = [];
        var data = [];
        var targetData = [];

        //Found Brewing state for scheme
        response.states.forEach(function(state) {
            if(state.type.name === "Brewing"){
                state.temperatures.forEach(function(temperature) {

                    var date = new Date(temperature.createdAt.timestamp*1000);
                    var hours = date.getHours();
                    var minutes = "0" + date.getMinutes();
                    var seconds = "0" + date.getSeconds();
                    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
                    labels.push(formattedTime);
                    data.push(temperature.value);
                    targetData.push(temperature.target);
                });
            }
         });


        var ctx = document.getElementById("myChart");
        myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Current brewing',
                    data: data,
                    spanGaps: true,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },{
                    spanGaps: false,
                    label: 'profil',
                    data: targetData,
                    spanGaps: true,
                    backgroundColor: [
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                animation: {
                    duration: 0
                }
            }
        });
    });

    jQuery("#brewing-autorefresh").click(function(){
        if(autorefresh){
            console.log("unactive autorefresh");
            autorefresh = false;
            jQuery("#brewing-autorefresh").removeClass("btn-danger");
            jQuery("#brewing-autorefresh").addClass("btn-success");
        }else{
            console.log("active autorefresh");
            autorefresh = true;
            jQuery("#brewing-autorefresh").addClass("btn-danger");
            jQuery("#brewing-autorefresh").removeClass("btn-success");
            autorefreshFunction();
        }
    });
});

function autorefreshFunction(){
    setTimeout(updateChart, 2000);
    if(autorefresh){
        setTimeout(autorefreshFunction, 2000);
    }
}

function updateChart(){
    $.ajax({
        url: "/api/brewing/last"
    }).done(function(response) {
        var labels = [];
        var data = [];
        var targetData = [];

        //Found Brewing state for scheme
        response.states.forEach(function(state) {
            if(state.type.name === "Brewing"){
                state.temperatures.forEach(function(temperature) {

                    var date = new Date(temperature.createdAt.timestamp*1000);
                    var hours = date.getHours();
                    var minutes = "0" + date.getMinutes();
                    var seconds = "0" + date.getSeconds();
                    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
                    labels.push(formattedTime);
                    data.push(temperature.value);
                    targetData.push(temperature.target);
                });
            }
        });
        myChart.data.labels = labels;
        myChart.data.datasets[0].data = data;
        myChart.data.datasets[1].data = targetData;
        myChart.update();
    });
}