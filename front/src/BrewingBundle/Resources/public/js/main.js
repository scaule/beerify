var myChart;
var autorefresh = false;
$(function() {
    $.ajax({
        url: "/api/brewing/last"
    }).done(function(response) {

        var labels = [];
        var data = [];
        var profilData = [];

        var i = 0;
        var j = 0;
        while(i < response.temperature.length || j < response.profil.dates.length ){
            if(response.temperature.length <= i ){
                var date = new Date("2999/10/01");
            }else {
                var date = new Date(response.temperature[i].date);
            }

            if(response.profil.dates.length <= j){
                var dateProfil = new Date("2999/10/01");
            }else{
                var dateProfil = new Date(response.profil.dates[j]);
            }

            if(date < dateProfil){
                labels.push(date.getFullYear() + "/" + date.getMonth() + "/" + date.getDay() + " " +date.getHours() +":"+date.getMinutes()+":"+date.getSeconds());
                data.push(response.temperature[i].value);
                profilData.push(null);
                i++;
            }else{
                labels.push(dateProfil.getFullYear() + "/" + dateProfil.getMonth() + "/" + dateProfil.getDay() + " " +dateProfil.getHours() +":"+dateProfil.getMinutes()+":"+dateProfil.getSeconds());
                data.push(null);
                if(j >= response.profil.temperatures.length){
                    profilData.push(response.profil.temperatures[j-1]);
                }else{
                    profilData.push(response.profil.temperatures[j]);
                }
                j++;
            }
        }

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
                    data: profilData,
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
        var profilData = [];
        var i = 0;
        var j = 0;
        while(i < response.temperature.length || j < response.profil.dates.length ){
            if(response.temperature.length <= i ){
                var date = new Date("2999/10/01");
            }else {
                var date = new Date(response.temperature[i].date);
            }

            if(response.profil.dates.length <= j){
                var dateProfil = new Date("2999/10/01");
            }else{
                var dateProfil = new Date(response.profil.dates[j]);
            }

            if(date < dateProfil){
                labels.push(date.getFullYear() + "/" + date.getMonth() + "/" + date.getDay() + " " +date.getHours() +":"+date.getMinutes()+":"+date.getSeconds());
                data.push(response.temperature[i].value);
                profilData.push(null);
                i++;
            }else{
                labels.push(dateProfil.getFullYear() + "/" + dateProfil.getMonth() + "/" + dateProfil.getDay() + " " +dateProfil.getHours() +":"+dateProfil.getMinutes()+":"+dateProfil.getSeconds());
                data.push(null);
                if(j >= response.profil.temperatures.length){
                    profilData.push(response.profil.temperatures[j-1]);
                }else{
                    profilData.push(response.profil.temperatures[j]);
                }
                j++;
            }
            myChart.data.labels = labels;
            myChart.data.datasets[0].data = data;
            myChart.data.datasets[1].data = profilData;
            myChart.update();
        }
    });
}