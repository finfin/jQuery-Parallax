jQuery Parallax
===============

jQuery Parallax is a script that simulates the parallax effect as seen on [nikebetterworld.com](http://www.nikebetterworld.com/).

Usage
-------

Add script
```html
<script src="http://code.jquery.com/jquery-1.7.2.min.js"></script>
<script src="javascripts/jquery-parallax.js"></script>
```
Add class to the elements needed parallax effect (ex. parallax-bg)
```html
<div id='parallax1' class='parallax-bg'></div>
```
Make sure the elements got a background image, for best effect the images height should be 20% larger than container element height (if using default speedFactor).  For example:
```css
.parallax-bg {
    margin: 0 auto;
    padding: 0;
    position: absolute;
    z-index: 200;
    width: 100%;
    height: 500px;
}
```
Here we have a element with 500px in height, so the background images should have more than 600px in height. 

Initiate parallax:
```js
$(window).load(function() {
    $('.parallax-bg').parallax({offsetY:-200}); //in case of big image, you can offset a little bit to center it.
}
```

Viola! You now have a simple parallax page!!

API
-------
Basic usage
```js
$(selector).parallax(options);
```
###Options
####offsetX `default: 50%`
x-pos of background image.
####offsetY `default: 0`
y-pos offset of background image.
####speedFactor `default: 0.12`
Background image moving speed relative to scrolling speed. Where parallax magic happens.
####outerHeight `default: true`
If true use jQuery's [.outerHeight()](http://api.jquery.com/outerHeight/), else use jQuery's [.height()](http://api.jquery.com/height/).
