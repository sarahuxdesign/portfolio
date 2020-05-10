$( document )
.ready( function() {
$( '#posOne' )
.addClass( 'actPos' )
.css( {
'background-color': '#EE4E9C'
} );
var winH = $( window )
.innerHeight();
$( '#scrollBox' )
.css( {
'height': winH * 25 + 'px'
} );
$( '.sect' )
.css( {
'height': winH + 'px'
} );
$( window )
.resize( function() {
winH = $( window )
.innerHeight();
$( '.sect' )
.css( {
'height': winH + 'px'
} );
$( '#scrollBox' )
.css( {
'height': winH * 25 + 'px'
} );

} );
/*sticky*/ ////
/*http://leafo.net/sticky-kit/#reference*/
/*this is for the left to stick and right to still scroll*/
$( '.left' )
.each( function( i, el ) {
$( el )
.stick_in_parent();
} );

function reset() {
$( '#arm' )
.stop()
.animate( {
left: '-300px'
}, 1000, 'swing' );
$( '#arm2' )
.stop()
.animate( {
left: '-300px'
}, 1000, 'swing' );
$( '#antibody' )
.stop()
.animate( {
left: '200px'
}, 1000, 'swing' );
$( '#ant2' )
.stop()
.animate( {
top: '50px'
}, 1000, 'swing' );
$( '#ant3' )
.stop()
.animate( {
top: '200px'
}, 1000, 'swing' );
$( '#macrophage' )
.stop()
.animate( {
left: '300px'
, top: '110px'
}, 1000, 'swing' );
$( '.daughter' )
.stop()
.animate( {
left: '-499px'
}, 2000, 'swing' );
$( '.castle' )
.stop()
.animate( {
top: '-100px'
}, 2000, 'swing' );

$( '.cancer' )
.stop()
.animate( {
left: '-499px'
}, 2000, 'swing' );
$( '.grandma' )
.stop()
.animate( {
left: '-499px'
}, 2000, 'swing' );
$( '.mother' )
.stop()
.animate( {
left: '-499px'
}, 2000, 'swing' );
$( '.grave' )
.stop()
.animate( {
left: '-499px'
}, 1000, 'swing' );
};
var currentFrame = 0;
$( document )
.scroll( function() {
var scrollPos = $( document )
.scrollTop();
var location = 0;
for ( i = 0; i < 24; i++ ) {
if ( scrollPos > i * ( winH ) ) {
location++;
};
}
console.log(location);
if ( location != currentFrame ) {
currentFrame = location;
$( '#scrollNav li' )
.removeClass( 'actPos' )
.css( {
'background-color': '#fff'
} );
if ( location < 1 ) {
$( '#posOne' )
.addClass( 'actPos' )
.css( {
'background-color': '#EE4E9C'
} );
} else if ( location < 2 ) {
$( '#posTwo' )
.addClass( 'actPos' )
.css( {
'background-color': '#EE4E9C'
} );
} else if ( location < 6 ) {
$( '#posThree' )
.addClass( 'actPos' )
.css( {
'background-color': '#EE4E9C'
} );
} else if ( location < 10 ) {
$( '#posFour' )
.addClass( 'actPos' )
.css( {
'background-color': '#EE4E9C'
} );
} else if ( location < 14 ) {
$( '#posFive' )
.addClass( 'actPos' )
.css( {
'background-color': '#EE4E9C'
} );
} else if ( location < 18 ) {
$( '#posSix' )
.addClass( 'actPos' )
.css( {
'background-color': '#EE4E9C'
} );
} else if ( location < 22 ) {
$( '#posSeven' )
.addClass( 'actPos' )
.css( {
'background-color': '#EE4E9C'
} );
} else if ( location < 26 ) {
$( '#posEight' )
.addClass( 'actPos' )
.css( {
'background-color': '#EE4E9C'
} );
} else if ( location >= 26 ) {};
};
if ( location < 5 && location >= 2 ) {
console.log( location );
reset();
setTimeout( function() {
$( '.scroll-btn' )
.fadeOut( 3000 );
}, 5000 );
$( '#arm' )
.stop()
.animate( {
left: '-90px'
}, 2000, 'swing' );
$( '#antibody' )
.stop()
.animate( {
left: '115px'
}, 2000, 'swing' );
$( '#ant2' )
.stop()
.animate( {
'top': '75px'
, 'left': '80px'
}, 2000, 'swing' );
$( '#ant3' )
.stop()
.animate( {
'top': '149px'
}, 2000, 'swing' );
$( '#macrophage' )
.stop()
.animate( {
'top': '10%'
, 'left': '4%'
}, 2000, 'swing' );
$( '#mainContent' ).removeClass(  ).addClass( 'colorOne' );

if ( location < 5 && location >= 2 ) {}
if ( location < 5 && location >= 3 ) {}
} else if ( location < 6 ) {
reset();
if ( location < 6 && location >= 4 ) {}
if ( location < 6 && location >= 5 ) {}
} else if ( location < 10 ) {
reset();
$( '#mainContent' ).removeClass(  ).addClass( 'colorTwo' );
$( '.daughter' )
.stop()
.animate( {
left: '315px'
}, 2000, 'swing' );
setTimeout( function() {
$( '.map-pop' )
.fadeOut( 2000 );
}, 5000 );

if ( location < 10 && location >= 8 ) {}
if ( location < 10 && location >= 9 ) {}
} else if ( location < 14 ) {
reset();
        $('#Layer_1').attr("background-color", "#EE4E9C");

$( '.castle' )
.stop()
.animate( {
top: '40px'
}, 2000, 'swing' );
$( '#girly' )
.addClass( 'pink' )
.removeClass( 'blue' );
$( '#mainContent' ).removeClass(  ).addClass( 'colorThree' );

if ( location < 14 && location >= 12 ) {}
if ( location < 14 && location >= 13 ) {}
} else if ( location < 17 ) {
reset();
$( '.cancer' )
.stop()
.animate( {
left: '140px'
}, 1000, 'swing' );
$( '.grandma' )
.stop()
.animate( {
left: '370px'
}, 2000, 'swing' );
$( '.mother' )
.stop()
.animate( {
left: '470px'
}, 3000, 'swing' );
$( '#mainContent' ).removeClass(  ).addClass( 'colorFour' );

} else if ( location < 22 ) {
reset();
$( '.grave' )
.stop()
.animate( {
left: '100px'
}, 1000, 'swing' );



$( '#mainContent' ).removeClass(  ).addClass( 'colorFive' );

} else if ( location < 25 ) {
reset();
$( '#arm2' )
.stop()
.animate( {
left: '-90px'
}, 1000, 'swing' );

$( '#mainContent' ).removeClass(  ).addClass( 'colorSix' );

} else {
reset();
if ( location >= 17 ) {}
if ( location >= 19 ) {}
};
} );
$( '#posOne' )
.on( 'click', function() {
$( 'body' )
.animate( {
scrollTop: 0
}, 2500, 'swing' );
} );
$( '#posTwo' )
.on( 'click', function() {
$( 'body' )
.animate( {
scrollTop: winH * 1
}, 2500, 'swing' );
} );
$( '#posThree' )
.on( 'click', function() {
$( 'body' )
.animate( {
scrollTop: winH * 5
}, 2500, 'swing' );
} );
$( '#posFour' )
.on( 'click', function() {
$( 'body' )
.animate( {
scrollTop: winH * 9
}, 2500, 'swing' );
} );
$( '#posFive' )
.on( 'click', function() {
$( 'body' )
.animate( {
scrollTop: winH * 13
}, 2500, 'swing' );
} );
$( '#posSix' )
.on( 'click', function() {
$( 'body' )
.animate( {
scrollTop: winH * 17
}, 2500, 'swing' );
} );
$( '#posSeven' )
.on( 'click', function() {
$( 'body' )
.animate( {
scrollTop: winH * 21
}, 2500, 'swing' );
} );
$( '#posEight' )
.on( 'click', function() {
$( 'body' )
.animate( {
scrollTop: winH * 25
}, 2500, 'swing' );
} );





	   $('body').animate({scrollTop:0},500,'swing');
} );
/*map**********************************/
$( document )
.ready( function() {
var insuranceSavings = {
"AL": 60392
, "AK": 9937
, "AZ": 83088
, "AR": 40258
, "CA": 593788
, "CO": 69137
, "CT": 39533
, "DE": 11589
, "DC": 8080
, "FL": 224430
, "GA": 131403
, "HI": 16325
, "ID": 22686
, "IL": 151309
, "IN": 83525
, "IA": 41215
, "KS": 39555
, "KY": 54353
, "LA": 59159
, "ME": 13536
, "MD": 72012
, "MA": 72897
, "MI": 116299
, "MN": 69710
, "MS": 41042
, "MO": 74413
, "MT": 11484
, "NE": 30409
, "NV": 37118
, "NH": 11852
, "NJ": 110116
, "NM": 29049
, "NY": 232521
, "NC": 128290
, "ND": 9875
, "OH": 144604
, "OK": 54335
, "OR": 45531
, "PA": 143298
, "RI": 11165
, "SC": 59240
, "SD": 12181
, "TN": 79233
, "TX": 394801
, "UT": 50114
, "VT": 6366
, "VA": 100074
, "WA": 86492
, "WV": 21333
, "WI": 70220
, "WY": 7825
}
$( '#map' )
.usmap( {
'stateStyles': {
fill: "#99cdfa"
, stroke: "#ffffff"
, "stroke-width": 1
, "stroke-linejoin": "round"
, scale: [ 1, 1 ]
}
, 'stateHoverStyles': {
fill: "#EE4E9C"
, scale: [ 1, 1 ]
}
, 'click': function( event, data ) {
var state = ( data.name );
$( '#state' )
.text( state )
$( '#average' )
.text( insuranceSavings[ state ] )
$( '#savings' )
.text( Math.round( insuranceSavings[ state ] * .2 ) )
.stop()
}
, } );
} );
/*two tables**********************************/
var twoColComp = {
init: function() {
var tables = document.getElementsByTagName( 'table' );
// for each table
for ( var i = 0; i < tables.length; i++ ) {
// don't process one that's already been done (has class two-column-comp)
if ( new RegExp( '(^| )two-column-comp( |$)', 'gi' )
.test( tables[ i ].className ) ) {
return;
}
//TODO: need to verify cross-browser support of these vars
var h = tables[ i ].clientHeight
, t = tables[ i ].getBoundingClientRect()
.top
, wT = window.pageYOffset || document.documentElement.scrollTop
, wH = window.innerHeight;
if ( wT + wH > t + h / 2 ) {
this.make( tables[ i ] );
}
}
}
, make: function( el ) {
var rows = el.getElementsByTagName( 'tr' )
, vals = []
, max, percent;
// for each row in the table, get vals
for ( var x = 0; x < rows.length; x++ ) {
var cells = rows[ x ].getElementsByTagName( 'td' );
for ( var y = 1; y < cells.length; y++ ) {
vals.push( parseInt( cells[ y ].innerHTML, 10 ) );
}
}
max = Math.max.apply( Math, vals );
percent = 100 / max;
//for each row in the table, apply vals
for ( x = 0; x < rows.length; x++ ) {
var cells = rows[ x ].getElementsByTagName( 'td' );
for ( var y = 1; y < cells.length; y++ ) {
var currNum = parseInt( cells[ y ].innerHTML, 10 );
cells[ y ].style.backgroundSize = percent * currNum + "% 100%";
cells[ y ].style.transitionDelay = x / 20 + "s";
}
}
//add a class so you don't process it a bunch of times
el.className = +" two-column-comp"
} // end make
}
window.onload = function() {
twoColComp.init();
}
window.onscroll = function() {
twoColComp.init();
}
/*messages**********************************/
var current = 1; //keeps track of the current div
var height = $( '.roles' )
.height(); //the height of the roles div
var numberDivs = $( '.roles' )
.children()
.length; //the number of children of the roles div
var first = $( '.roles div:nth-child(1)' ); //the first div nested in roles div
setInterval( function() {
var number = current * -height;
first.css( 'margin-top', number + 'px' );
if ( current === numberDivs ) {
first.css( 'margin-top', '0px' );
current = 1;
} else current++;
}, 4000 );



/*immunity**********************************/


$( '#buttons' )
.click( function() {
if ( $( '.v25' )
.attr( 'fill' ) ) {
$( '.v25' )
.removeAttr( 'fill' );
} else {
$( '.v25' )
.attr( 'fill', "#EE4E9C" );
}
} );

$( '#buttons1' )
.click( function() {
if ( $( '.v50' )
.attr( 'fill' ) ) {
$( '.v50' )
.removeAttr( 'fill' );
$( '.v25' )
.removeAttr( 'fill' );


} else {
$( '.v50' )
.attr( 'fill', "#EE4E9C" );
}
} );


$( '#buttons2' )
.click( function() {
if ( $( '.v75' )
.attr( 'fill' ) ) {
$( '.v75' )
.removeAttr( 'fill' );
$( '.v50' )
.removeAttr( 'fill' );
$( '.v25' )
.removeAttr( 'fill' );
} else {
$( '.v75' )
.attr( 'fill', "#EE4E9C" );
}
} );


$( '#buttons3' )
.click( function() {
if ( $( '.v95' )
.attr( 'fill' ) ) {
$( '.v95' )
.removeAttr( 'fill' );
$( '.v75' )
.removeAttr( 'fill' );
$( '.v50' )
.removeAttr( 'fill' );
$( '.v25' )
.removeAttr( 'fill' );

} else {
$( '.v95' )
.attr( 'fill', "#EE4E9C" );
}
} );


/*trend chart**********************************/


var chartData = [ {
"year": 2005
, "cars": 700
, "motorcycles": 737

            }, {
"year": 2006
, "cars": 700
, "motorcycles": 680
, "bicycles": 55
            }, {
"year": 2007
, "cars": 700
, "motorcycles": 664
, "bicycles": 43
            }, {
"year": 2008
, "cars": 700
, "motorcycles": 648
, "bicycles": 140
            }, {
"year": 2009
, "cars": 700
, "motorcycles": 637
, "bicycles": 71
            }, {
"year": 2010
, "cars": 700
, "motorcycles": 133
, "bicycles": 63
            }, {
"year": 2011
, "cars": 700
, "motorcycles": 621
, "bicycles": 220
            }, {
"year": 2012
, "cars": 700
, "motorcycles": 10
, "bicycles": 55
            }, {
"year": 2013
, "cars": 700
, "motorcycles": 232
, "bicycles": 187
            }, {
"year": 2014
, "cars": 700
, "motorcycles": 219
, "bicycles": 667
            }, {
"year": 2015
, "cars": 700
, "motorcycles": 201
, "bicycles": 188
            }, {
"year": 2016
, "cars": 700
, "motorcycles": 85
, "bicycles": 70
            }, {
"year": 2017
, "cars": 700
, "motorcycles": 28
            } ];

var chart = AmCharts.makeChart( "chartdiv", {
"type": "serial"
, "fontFamily": "Lato"
, "autoMargins": true
, "addClassNames": true
, "zoomOutText": ""
, "defs": {
"filter": [ {
"x": "-50%"
, "y": "-50%"
, "width": "200%"
, "height": "200%"
, "id": "blur"
, "feGaussianBlur": {
"in": "SourceGraphic"
, "stdDeviation": "50"
}
                }, {
"id": "shadow"
, "width": "150%"
, "height": "150%"
, "feOffset": {
"result": "offOut"
, "in": "SourceAlpha"
, "dx": "2"
, "dy": "2"
}
, "feGaussianBlur": {
"result": "blurOut"
, "in": "offOut"
, "stdDeviation": "10"
}
, "feColorMatrix": {
"result": "blurOut"
, "type": "matrix"
, "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .2 0"
}
, "feBlend": {
"in": "SourceGraphic"
, "in2": "blurOut"
, "mode": "normal"
}
                } ]
}
, "fontSize": 15,

"dataProvider": chartData
, "dataDateFormat": "YYYY"
, "marginTop": 0
, "marginRight": 0
, "marginLeft": 0
, "autoMarginOffset": 0
, "categoryField": "year"
, "categoryAxis": {
"gridAlpha": 0.07
, "axisColor": "#DADADA"
, "startOnAxis": true
, "tickLength": 0
, "parseDates": true
, "minPeriod": "YYYY"
}
, "valueAxes": [ {
"stackType": "regular"
, "gridAlpha": 0.07
, "axisAlpha": 0
, "inside": true
, "labelFrequency": 2
              } ]
, "graphs": [ {
"id": "g1"
, "type": "line"
, "title": "Cars"
, "valueField": "cars"
, "fillColors": [
                  "#0066e3"
                  , "#802ea9"
                ]
, "lineAlpha": 0
, "fillAlphas": 0.8
, "showBalloon": false
              }, {
"id": "g2"
, "type": "line"
, "title": "Motorcycles"
, "valueField": "motorcycles"
, "lineAlpha": 0
, "fillAlphas": 0.8
, "lineColor": "#5bb5ea"
, "showBalloon": false
              }, {
"id": "g3"
, "title": "Bicycles"
, "valueField": "bicycles"
, "lineAlpha": 0.5
, "lineColor": "#FFFFFF"
, "bullet": "round"
, "dashLength": 2
, "bulletBorderAlpha": 1
, "bulletAlpha": 1
, "bulletSize": 15
, "stackable": false
, "bulletColor": "#5d7ad9"
, "bulletBorderColor": "#FFFFFF"
, "bulletBorderThickness": 3
, "balloonText": "<div style='margin-bottom:30px;text-shadow: 2px 2px rgba(0, 0, 0, 0.1); font-weight:200;font-size:30px; color:#ffffff'>[[value]]</div>"
              } ]
, "chartCursor": {
"cursorAlpha": 1
, "zoomable": false
, "cursorColor": "#FFFFFF"
, "categoryBalloonColor": "#8d83c8"
, "fullWidth": true
, "categoryBalloonDateFormat": "YYYY"
, "balloonPointerOrientation": "vertical"
}
, "balloon": {
"borderAlpha": 0
, "fillAlpha": 0
, "shadowAlpha": 0
, "offsetX": 40
, "offsetY": -50
}
} );

// we zoom chart in order to have better blur (form side to side)
chart.addListener( "dataUpdated", zoomChart );

function zoomChart() {
chart.zoomToIndexes( 1, chartData.length - 2 );
}




/*----------------------------------------------   
-easyPieChart
-----------------------------------------------  */
( function( root, factory ) {
if ( typeof exports === 'object' ) {
module.exports = factory( require( 'jquery' ) );
} else if ( typeof define === 'function' && define.amd ) {
define( 'EasyPieChart', [ 'jquery' ], factory );
} else {
factory( root.jQuery );
}
}( this, function( $ ) {
/**
* Renderer to render the chart on a canvas object
* @param {DOMElement} el      DOM element to host the canvas (root of the plugin)
* @param {object}     options options object of the plugin
*/
var CanvasRenderer = function( el, options ) {
var cachedBackground;
var canvas = document.createElement( 'canvas' );

if ( typeof( G_vmlCanvasManager ) !== 'undefined' ) {
G_vmlCanvasManager.initElement( canvas );
}

var ctx = canvas.getContext( '2d' );

canvas.width = canvas.height = options.size;

el.appendChild( canvas );

// canvas on retina devices
var scaleBy = 1;
if ( window.devicePixelRatio > 1 ) {
scaleBy = window.devicePixelRatio;
canvas.style.width = canvas.style.height = [ options.size, 'px' ].join( '' );
canvas.width = canvas.height = options.size * scaleBy;
ctx.scale( scaleBy, scaleBy );
}

// move 0,0 coordinates to the center
ctx.translate( options.size / 2, options.size / 2 );

// rotate canvas -90deg
ctx.rotate( ( -1 / 2 + options.rotate / 180 ) * Math.PI );

var radius = ( options.size - options.lineWidth ) / 2;
if ( options.scaleColor && options.scaleLength ) {
radius -= options.scaleLength + 2; // 2 is the distance between scale and bar
}

// IE polyfill for Date
Date.now = Date.now || function() {
return +( new Date() );
};

/**
* Draw a circle around the center of the canvas
* @param  {strong} color     Valid CSS color string
* @param  {number} lineWidth Width of the line in px
* @param  {number} percent   Percentage to draw (float between 0 and 1)
*/
var drawCircle = function( color, lineWidth, percent ) {
percent = Math.min( Math.max( 0, percent || 1 ), 1 );

ctx.beginPath();
ctx.arc( 0, 0, radius, 0, Math.PI * 2 * percent, false );

ctx.strokeStyle = color;
ctx.lineWidth = lineWidth;

ctx.stroke();
};

/**
* Draw the scale of the chart
*/
var drawScale = function() {
var offset;
var length;
var i = 24;

ctx.lineWidth = 1
ctx.fillStyle = options.scaleColor;

ctx.save();
for ( var i = 24; i > 0; --i ) {
if ( i % 6 === 0 ) {
length = options.scaleLength;
offset = 0;
} else {
length = options.scaleLength * .6;
offset = options.scaleLength - length;
}
ctx.fillRect( -options.size / 2 + offset, 0, length, 1 );
ctx.rotate( Math.PI / 12 );
}
ctx.restore();
};

/**
* Request animation frame wrapper with polyfill
* @return {function} Request animation frame method or timeout fallback
*/
var reqAnimationFrame = ( function() {
return window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||
function( callback ) {
window.setTimeout( callback, 1000 / 60 );
};
}() );

/**
* Draw the background of the plugin including the scale and the track
*/
var drawBackground = function() {
options.scaleColor && drawScale();
options.trackColor && drawCircle( options.trackColor, options.lineWidth );
};

/**
* Clear the complete canvas
*/
this.clear = function() {
ctx.clearRect( options.size / -2, options.size / -2, options.size, options.size );
};

/**
* Draw the complete chart
* @param  {number} percent Percent shown by the chart between 0 and 100
*/
this.draw = function( percent ) {
// do we need to render a background
if ( !!options.scaleColor || !!options.trackColor ) {
// getImageData and putImageData are supported
if ( ctx.getImageData && ctx.putImageData ) {
if ( !cachedBackground ) {
drawBackground();
cachedBackground = ctx.getImageData( 0, 0, options.size * scaleBy, options.size * scaleBy );
} else {
ctx.putImageData( cachedBackground, 0, 0 );
}
} else {
this.clear();
drawBackground();
}
} else {
this.clear();
}

ctx.lineCap = options.lineCap;

// if barcolor is a function execute it and pass the percent as a value
var color;
if ( typeof( options.barColor ) === 'function' ) {
color = options.barColor( percent );
} else {
color = options.barColor;
}
// draw bar
if ( percent > 100 ) {
drawCircle( color, options.lineWidth, percent / 1000 );
} else {
drawCircle( color, options.lineWidth, percent / 100 );

}
}.bind( this );

/**
* Animate from some percent to some other percentage
* @param  {number} from Starting percentage
* @param  {number} to   Final percentage
*/
this.animate = function( from, to ) {
var startTime = Date.now();
options.onStart( from, to );
var animation = function() {
var process = Math.min( Date.now() - startTime, options.animate );
var currentValue = options.easing( this, process, from, to - from, options.animate );
this.draw( currentValue );
options.onStep( from, to, currentValue );
if ( process >= options.animate ) {
options.onStop( from, to );
} else {
reqAnimationFrame( animation );
}
}.bind( this );

reqAnimationFrame( animation );
}.bind( this );
};

var EasyPieChart = function( el, opts ) {
var defaultOptions = {
barColor: '#ff675f'
, trackColor: '#d4d4d4'
, scaleColor: '#d4d4d4'
, scaleLength: 0
, lineCap: 'round'
, lineWidth: 15
, size: 152
, rotate: 0
, animate: 1000
, easing: function( x, t, b, c, d ) { // more can be found here: http://gsgd.co.uk/sandbox/jquery/easing/
t = t / ( d / 2 );
if ( t < 1 ) {
return c / 2 * t * t + b;
}
return -c / 2 * ( ( --t ) * ( t - 2 ) - 1 ) + b;
}
, onStart: function( from, to ) {
return;
}
, onStep: function( from, to, currentValue ) {
return;
}
, onStop: function( from, to ) {
return;
}
};

// detect present renderer
if ( typeof( CanvasRenderer ) !== 'undefined' ) {
defaultOptions.renderer = CanvasRenderer;
} else if ( typeof( SVGRenderer ) !== 'undefined' ) {
defaultOptions.renderer = SVGRenderer;
} else {
throw new Error( 'Please load either the SVG- or the CanvasRenderer' );
}

var options = {};
var currentValue = 0;

/**
* Initialize the plugin by creating the options object and initialize rendering
*/
var init = function() {
this.el = el;
this.options = options;

// merge user options into default options
for ( var i in defaultOptions ) {
if ( defaultOptions.hasOwnProperty( i ) ) {
options[ i ] = opts && typeof( opts[ i ] ) !== 'undefined' ? opts[ i ] : defaultOptions[ i ];
if ( typeof( options[ i ] ) === 'function' ) {
options[ i ] = options[ i ].bind( this );
}
}
}

// check for jQuery easing
if ( typeof( options.easing ) === 'string' && typeof( jQuery ) !== 'undefined' && jQuery.isFunction( jQuery.easing[ options.easing ] ) ) {
options.easing = jQuery.easing[ options.easing ];
} else {
options.easing = defaultOptions.easing;
}

// create renderer
this.renderer = new options.renderer( el, options );

// initial draw
this.renderer.draw( currentValue );

// initial update
if ( el.dataset && el.dataset.percent ) {
this.update( parseFloat( el.dataset.percent ) );
} else if ( el.getAttribute && el.getAttribute( 'data-percent' ) ) {
this.update( parseFloat( el.getAttribute( 'data-percent' ) ) );
}
}.bind( this );

/**
* Update the value of the chart
* @param  {number} newValue Number between 0 and 100
* @return {object}          Instance of the plugin for method chaining
*/
this.update = function( newValue ) {
newValue = parseFloat( newValue );
if ( options.animate ) {
this.renderer.animate( currentValue, newValue );
} else {
this.renderer.draw( newValue );
}
currentValue = newValue;
return this;
}.bind( this );

init();
};

$.fn.easyPieChart = function( options ) {
return this.each( function() {
if ( !$.data( this, 'easyPieChart' ) ) {
$.data( this, 'easyPieChart', new EasyPieChart( this, options ) );
}
} );
};

} ) );

$( '.graph-donut' )
.easyPieChart( {
easing: 'easeOutBounce'
, barColor: '#00a1e4'
, rackColor: '#00a1e4'
, scaleColor: '#d4d4d4'
, scaleLength: 0
, lineCap: 'square'
, lineWidth: 10
, size: 85
, onStep: function( from, to, percent ) {

$( this.el )
.find( '.percent' )
.text( Math.round( percent ) );

}
} );




/*----------------------------------------------   
sprites
-----------------------------------------------  */




$( document )
.ready( function() {
var guyBrush = [ [ '0px', '0px' ], [ '0px', '-70px' ] ];

var guySBSize = [ [ '150px', '87px' ], [ '150px', '87px' ] ];

function spriteMover( gbA, gbS, target, frames ) {
var incTimer = 0;
var frame = 0;

function beginIt() {
if ( frame == 0 ) {
setTimeout( goNext, incTimer += 200 );
};
for ( i = 1; i < frames; i++ ) {
setTimeout( goNext, incTimer += 200 );
};
};

function goNext() {
$( target )
.css( {
'height': gbS[ frame ][ 0 ]
, 'width': gbS[ frame ][ 1 ]
} );
$( target + ' img' )
.css( {
'top': gbA[ frame ][ 0 ]
, 'left': gbA[ frame ][ 1 ]
} );
frame += 1;
if ( frame == gbA.length ) {
frame = 0;
incTimer = 0;
beginIt();
};
};
beginIt();
};
$( '.sprite' )
.draggable();
spriteMover( guyBrush, guySBSize, '#sb1', 2 );

var myPosishes = [ [ '0px', '-75px' ], [ '0px', '2px' ] ];
var mySizizes = [ [ '150px', '80px' ], [ '150px', '80x' ]];
spriteMover( myPosishes, mySizizes, '#sb2', 2 );
} );




/*reset*/

var idleTime = 0;
$(document).ready(function () {
    //Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 60000); // 1 minute

    //Zero the idle timer on mouse movement.
    $(this).mousemove(function (e) {
        idleTime = 0;
    });
    $(this).keypress(function (e) {
        idleTime = 0;
    });
});

function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 1) { // 20 minutes
        window.location.reload();
    }
};


/*counter*/


$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 5000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});


  
