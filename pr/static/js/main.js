
function xtract(keys, data) {
    var ndata = {};
    for(var i = 0; data.length > i; ++i) {
        for(var j = 0; keys.length > j; ++j) {
            if(!(keys[j] in ndata)) {
                ndata[keys[j]] = [];
            }
            ndata[keys[j]].push([
                new Date(data[i]['date']),
                data[i][keys[j]]
            ]);
        }
    }
    var nndata = [];
    for(var k in ndata) {
        nndata.push({
            name: k,
            data: ndata[k]
        })
    }
    return nndata;
}

var data1 = [];
var categories1 = [];
for(var i = 0; i < data[0].length; ++i) {
    data1.push(data[0][i]['consolidated_net_income_loss']);
    categories1.push(data[0][i]['fiscal_year'] + ', Q' + data[0][i]['fiscal_qtr']);
}

var data2 = [];
var categories2 = [];
for(var i = 0; i < data[1].length; ++i) {
    data2.push(data[1][i]['estimize_eps_count']);
    categories2.push(data[1][i]['fiscal_year'] + ', Q' + data[1][i]['fiscal_qtr']);
}

var data3 = [];
var categories3 = [];
for(var i = 0; i < data[2].length; ++i) {
    data3.push([
        data[2][i]['date'],
        data[2][i]['bull_bear_difference']
    ]);
}

var data4 = [];
var categories4 = [];
for(var i = 0; i < data[3].length; ++i) {
    if (isNaN(data[3][i]['rolling'])) {
        data[3][i]['rolling'] = 0;
    }
    data4.push([
        data[3][i]['date'],
        data[3][i]['rolling']
    ]);
}


$(function() {
    $('#chart-container1').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Consolidated Net Income/Loss (Tagnifi)'
        },
        xAxis: {
            categories: categories1
        },
        yAxis: {
            title: {
                text: 'USD'
            }
        },
        series: [{
            name: 'Income',
            data: data1
        }]
    });
    $('#chart-container2').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'EPS Count (Estimize)'
        },
        xAxis: {
            categories: categories2
        },
        series: [{
            name: 'Count',
            data: data2
        }]
    });
    $('#chart-container3').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Bull/Bear Difference (PsychSignal)'
        },
        xAxis: {
            type: 'datetime'
        },
        series: [{
            name: 'Delta',
            data: data3
        }]
    });
    $('#chart-container4').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Rolling Bull/Bear Difference (PsychSignal)'
        },
        xAxis: {
            type: 'datetime'
        },
        series: [{
            name: 'Delta',
            data: data4
        }]
    });
});

