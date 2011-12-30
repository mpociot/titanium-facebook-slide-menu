// ALPHABYTES

// Facebook like menu window
var leftMenu	= Ti.UI.createWindow({
	backgroundColor: 'red',
	top:   0,
	left:  0,
	width: 150,
	zIndex: 1
});
var data = [{title:"Row 1"},{title:"Row 2"},{title:"Row 3"},{title:"Row 4"}];
var tableView	= Ti.UI.createTableView({ data: data });
leftMenu.add(tableView);
leftMenu.open();

// Facebook like menu window
var rightMenu	= Ti.UI.createWindow({
	backgroundColor: 'red',
	top:   0,
	right:  0,
	width: 150,
	zIndex: 1
});
var data = [{title:"Row 1"},{title:"Row 2"},{title:"Row 3"},{title:"Row 4"}];
var tableView	= Ti.UI.createTableView({ data: data });
rightMenu.add(tableView);
rightMenu.open();

// animations
var animateLeft	= Ti.UI.createAnimation({
	left: 150,
	curve: Ti.UI.iOS.ANIMATION_CURVE_EASE_OUT,
	duration: 500
});
var animateRight	= Ti.UI.createAnimation({
	left: 0,
	curve: Ti.UI.iOS.ANIMATION_CURVE_EASE_OUT,
	duration: 500
});
var animateNegativeLeft = Ti.UI.createAnimation({
				left: -150,
				curve: Ti.UI.iOS.ANIMATION_CURVE_EASE_OUT,
				duration: 500
});


var win = Titanium.UI.createWindow({
	left: 0,
	zIndex: 10
});
var win1 = Titanium.UI.createWindow({
    backgroundColor: 'white',
    title: 'Facebook menu',
    left: 0,
	zIndex: 10
});
var nav = Titanium.UI.iPhone.createNavigationGroup({
   window: win1,
   left: 0,
   width: Ti.Platform.displayCaps.platformWidth
});
var button = Ti.UI.createButton({
	title: 'm',
	left: 10,
	width: 30,
	height: 30,
	top: 10
});
var button2 = Ti.UI.createButton({
	title: 'm',
	right: 10,
	width: 30,
	height: 30,
	top: 10
});
var touchStartX = 0;
var touchStarted = false;
win1.addEventListener('touchstart',function(e){
	touchStartX = parseInt(e.x,10);
});
win1.addEventListener('touchend',function(e){
	touchStarted = false;
	if( win.left < 0 ){
		if( win.left <= -140 ){
			win.animate(animateNegativeLeft);
			isToggled = true;
		} else {
			win.animate(animateRight);
			isToggled = false;
		}
	} else {
		if( win.left >= 140 ){
			win.animate(animateLeft);
			isToggled = true;
		} else {
			win.animate(animateRight);
			isToggled = false;
		}
	}
});
win1.addEventListener('touchmove',function(e){
	var x 		= parseInt(e.globalPoint.x, 10);
	var newLeft = x - touchStartX;
	if( touchStarted ){
		if( newLeft <= 150 && newLeft >= -150)
		win.left	= newLeft;
	}
	// Minimum movement is 30
	if( newLeft > 30 || newLeft < -30 ){
		touchStarted = true;
	}
});
nav.add(button);
nav.add(button2);
win.add(nav);
win.open();


var isToggled = false;
button.addEventListener('click',function(e){
	if( !isToggled ){
		win.animate(animateLeft);
		isToggled = true;
	} else {
		win.animate(animateRight);
		isToggled = false;
	}
});

button2.addEventListener('click',function(e){
	if( !isToggled ){
		win.animate(animateNegativeLeft);
		isToggled = true;
	} else {
		win.animate(animateRight);
		isToggled = false;
	}
});