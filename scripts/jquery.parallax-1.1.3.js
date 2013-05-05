/*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

(function( $ ){
	var $window = $(window);
	var windowHeight = $window.height();

	$window.resize(function () {
		windowHeight = $window.height();
	});
    
    
    $.fn.parallax = function(options) {
        var defaults = {
            offsetX: "50%",
            speedFactor: 0.12,
            outerHeight: true,
            offsetY: 0
        }
        
        var $this = $(this);
        var options = $.extend(defaults, options); 
		var getHeight;
		var paddingTop = 0;


		getHeight = function(jqo, outerheight) {
			if (outerheight) {
				return jqo.outerHeight(true);
			} else {
				return jqo.height()
			}
		};
        
        function update(){
			var pos = $window.scrollTop();				

			$this.each(function(){
				var $element = $(this);
				var top = $element.offset().top;
				var height = getHeight($element, options.outerHeight);

				// Check if totally above or totally below viewport
				if (top + height < pos || top > pos + windowHeight) {
					return;
				}

				$this.css('backgroundPosition', options.offsetX + " " + Math.round((top - pos - (windowHeight/2)) * options.speedFactor + options.offsetY) + "px");
			});
		}	
        
        $window.bind('scroll', update).resize(update);
		update();
    }
})(jQuery);
        
    
