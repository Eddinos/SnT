(function(){

  angular
       .module('app', [])
       .controller('ProgressionChartsController', ProgressionChartsController);

  ProgressionChartsController.$inject = ['$scope', '$state', '$ionicPopup'];

  function ProgressionChartsController($scope, $state, AuthService, $ionicPopup) {
    var vm = this;

    var data = [{
        "sale": "202",
        "year": "2000"
    }, {
        "sale": "215",
        "year": "2001"
    }, {
        "sale": "179",
        "year": "2002"
    }, {
        "sale": "199",
        "year": "2003"
    }, {
        "sale": "134",
        "year": "2005"
    }, {
        "sale": "176",
        "year": "2010"
    }];

    var vis = d3.select("#visualization"),
      WIDTH = 340,
      HEIGHT = 520,
      MARGINS = {
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
      };
    xScale = d3.scaleLinear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([2000,2010]);
    yScale = d3.scaleLinear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([134,215]);
    
    xAxis = d3.axisBottom()
      .scale(xScale),
    
    yAxis = d3.axisLeft()
      .scale(yScale);
    
    vis.append("svg:g")
    .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
      .call(xAxis);
    
    vis.append("svg:g")
      .attr("transform", "translate(" + (MARGINS.left) + ",0)")
      .call(yAxis);
    
    var lineGen = d3.line()
    .x(function(d) {
      return xScale(d.year);
    })
    .y(function(d) {
      return yScale(d.sale);
    })
    .curve(d3.curveCatmullRom);
    //.interpolate("cardinal");

var arc = d3.symbol().type('circle');

    vis
    //responsive SVG needs these 2 attributes and no width and height attr
   .attr("preserveAspectRatio", "xMinYMin meet")
   .attr("viewBox", "0 0 340 520")
   //class to make it responsive
   .classed("svg-content-responsive", true)
   .append('svg:path')
    .attr('d', lineGen(data))
    .attr('stroke', 'cyan')
    .attr('stroke-width', 2)
    .attr('fill', 'none')

    }

})();