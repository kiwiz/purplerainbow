
var sampleData=[{"Date":"1993-01-29","Open":43.97,"High":43.97,"Low":43.75,"Close":43.94,"Volume":1003200,"Adj_Close":31.16},
{"Date":"1993-02-01","Open":43.97,"High":44.25,"Low":43.97,"Close":44.25,"Volume":480500,"Adj_Close":31.38},
{"Date":"1993-02-02","Open":44.22,"High":44.38,"Low":44.13,"Close":44.34,"Volume":201300,"Adj_Close":31.44},
{"Date":"1993-02-03","Open":44.41,"High":44.84,"Low":44.38,"Close":44.81,"Volume":529400,"Adj_Close":31.77}
];

$(function() {
    var stxx=new STXChart({container:$$$(".chartContainer")}); // Declare a STXChart object. This is the main object for drawing charts.

setTimeout(function() {
    stxx.newChart("SPY", historicalQuote);
}, 2000);
});

