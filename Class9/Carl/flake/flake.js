
var step = 1;
var delay = 10;
var CONVRAD = 3.141593 / 180.0;

/* http://www.zachstronaut.com/posts/2009/02/17/animate-css-transforms-firefox-webkit.html */
function getTransformProperty(element) {
    // Note that in some versions of IE9 it is critical that
    // msTransform appear in this list before MozTransform
    var properties = [
        'transform',
        'WebkitTransform',
        'msTransform',
        'MozTransform',
        'OTransform'
    ];
    var p;
    while (p = properties.shift()) {
        if (typeof element.style[p] != 'undefined') {
            return p;
        }
    }
    return false;
}

function angle() {
    var dot = $('#redDot');
    var blueDot = $('#blueDot');
    //var div = tgt.get();
    var theta = 0;
    var div = document.getElementById('vector');
    var property = getTransformProperty(div);
    
    var running = false;
    
    this.animate = function() {
        running = true;   
        this.animateStep();
    };
    
    this.stop = function() {
        $('#toggle').html("ANIMATE");
        running = false;
    };
    
    this.animateStep = _animateStep;
    
    function _animateStep() {
        if (!running) return;
        
        var t = theta;
        setTimeout(
            function () {
                if (!running) return;
                _set(t + step);
                setTimeout(_animateStep,delay);
            },
            70
        );    
    }
    
   
    
    var cosLine = $('#cosineLine');
    var sinLine = $('#sineLine');
    
    var r = 80;
    var x0 = $('#sineWave').position().left + $('#vector').width() / 2.0;
    
    function setTrackLine(d) {
        var left,right;
        
        if (cosLine) {
            left = x0 + r * Math.sin(d*CONVRAD);
            right = dotOffset(d);
            cosLine.css('top',(blueHeight(d) + 2) + 'px');
            cosLine.css('left',left);
            cosLine.css('width',right - left);
        }
        if (sinLine) {
            left = x0 - r * Math.cos(d*CONVRAD);
            right = dotOffset(d);
            sinLine.css('top',(redHeight(d) + 3 ) + 'px');
            sinLine.css('left',left);
            sinLine.css('width',right - left);
        }
    }
    
    var sinAmp = 77;
    var sinOffset = 98;
    
   function blueHeight(d) {
        return sinOffset - sinAmp* Math.cos(d *CONVRAD);
    }  
    
    function redHeight(d) {
        return sinOffset - sinAmp* Math.sin(d * CONVRAD);
    }
    
    function dotOffset(d) {
        return 280 + 480 * d / 360.0 + 1;  
    }
    
    this.set = _set;
    
    function _set(d) {
        if (property) {
            theta = d;
            theta = theta % 360;
            
            div.style[property] = 'rotate(' + ( theta ) + 'deg)';
            
            var y = redHeight(theta);
            var yBlue = blueHeight(theta); 
            var x = dotOffset(theta);
            dot.css('top',y); 
            dot.css('left',x);
            blueDot.css('top',yBlue);
            
            blueDot.css('left',x);
            
            $('#drag').html(theta + "&deg;");
            
            $('#drag').css('left', theta  );
            
            setTrackLine(theta);
        }
    }
    
    this.toggle = function() {
        if (!running) {
            $('#toggle').html("STOP");
            running = true;
            _animateStep();
        } else {
            $('#toggle').html("ANIMATE");
            running = false;
            
        }
    };

}

//var myAngle;

$(document).ready(function() {
    var myAngle  = new angle();
    myAngle.set(0);
    
    $('#drag').draggable({axis:'x',containment:'parent'});
    //myAngle.animate();
    
    $( "#drag" ).bind( "drag", function(event, ui) {
        myAngle.stop(); 
        var dist = $('#drag').position().left - $('#dragBounds').position().left  - 1;
        myAngle.set(dist);
    }).mousedown(function() { myAngle.stop(); });  
    
    $('#toggle').click(function() {
        myAngle.toggle();
    });
    
});

