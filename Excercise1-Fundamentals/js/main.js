/*
*    main.js
*/
//Chart Area
var svg = d3.select("#chart-area").append("svg")
	.attr("width", 400)
	.attr("height", 400);

//Adding Charts
var circle = svg.append("circle")
	.attr("cx", 100)
	.attr("cy", 250)
	.attr("r", 70)
	.attr("fill", "blue");

var rect = svg.append("rect")
	.attr("x", 20)
	.attr("y", 20)
	.attr("width", 50)
	.attr("height", 50)
	.attr("fill","red");

var star = svg.append("polygon")
	.attr("points", "50, 110 55, 130 70, 130 60, 140 65, 155 50, 145 35, 155 40, 140 30, 130 45, 130")
	.attr("width", 50)
	.attr("height", 500)
    .attr("stroke","black") 
	.attr("fill","#FFFF00");    

var ellipse=svg.append("ellipse")
    .attr("cx","145")
    .attr("cy","150")
    .attr("rx","30")
    .attr("ry","15")
    .attr("fill","#FF8B3D");

var poly=svg.append("polyline")
    .attr("points","60, 110 65, 120 70, 115 75, 130 80, 125 85, 140 90, 135 95, 150 100, 145")    
    .attr("fill","#FFFFF");    

