
console.log("blah");

var l,t,w,h;

function getDivVals() {
        l = $('#sineWave').position().left;
        t = $('#sineWave').position().top;
        w = $('#vector').width();
        h = $('#vector').height();
    
}

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
        running = false;
    };
    
    this.animateStep = _animateStep;
    
    function _animateStep() {
        if (!running) return;
        
        var t = theta;
        setTimeout(
            function () {
                if (!running) return;
                _set(t + 1);
                setTimeout(_animateStep,70);
            },
            70
        );    
    };
    
    this.set = _set;
    
    function _set(d) {
        if (property) {
            theta = d;
            theta = theta % 360;
            
            div.style[property] = 'rotate(' + (d ) + 'deg)';
            
            var y = 95 - 75* Math.sin(d * 3.141593 / 180.0);
            var yBlue = 95 - 75* Math.cos(d * 3.141593 / 180.0);
            var x = 280 + 480 * d / 360.0;
            dot.css('top',y); 
            dot.css('left',x);
            blueDot.css('top',yBlue);
            blueDot.css('left',x);
            
            $('#drag').html(d + "&deg;");
            
            $('#drag').css('left', (d % 360) - $('#dragBounds').position().left );
            
        }
    };
    
    this.toggle = function() {
        if (!running) {
            $('#toggle').html("STOP");
            running = true;
            //this.animate();
            _animateStep();
        } else {
            $('#toggle').html("ANIMATE");
            running = false;
            
        }
    }

};

var myAngle;

$(document).ready(function() {
    myAngle  = new angle();
    $('#drag').draggable({axis:'x',containment:'parent'});
    //myAngle.animate();
    
    $( "#drag" ).bind( "drag", function(event, ui) {
        myAngle.stop(); 
        var dist = $('#drag').position().left - $('#dragBounds').position().left - 1;
        myAngle.set(dist);
    }).mousedown(function() { myAngle.stop(); });  
    
    $('#toggle').click(function() {
        myAngle.toggle();
    });
    
});

