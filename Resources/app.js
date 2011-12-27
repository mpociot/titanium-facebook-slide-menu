// animations
var animateLeft	= Ti.UI.createAnimation({
	left: 250,
	duration: 500
});
var animateRight	= Ti.UI.createAnimation({
	left: 0,
	duration: 500
});
var win = Titanium.UI.createWindow();
var win1 = Titanium.UI.createWindow({
    backgroundColor: 'white',
    title: 'Facebook menu'
});
var nav = Titanium.UI.iPhone.createNavigationGroup({
   window: win1,
   width: Ti.Platform.displayCaps.platformWidth
});
var button = Ti.UI.createButton({
	systemButton: Ti.UI.iPhone.SystemButton.ORGANIZE,
	left: 10,
	width: 30,
	height: 30,
	top: 10
});

win1.addEventListener('swipe',function(e){
	if( e.direction == 'left' ){
		button.fireEvent('click');
	} else {
		button.fireEvent('click');
	}
});
nav.add(button);
win.add(nav);
win.open();


// Facebook like menu window
var menu	= Ti.UI.createWindow({
	backgroundColor: 'red',
	top: 0,
	left: -250,
	width: 250
});
var data = [{title:"Row 1"},{title:"Row 2"},{title:"Row 3"},{title:"Row 4"}];
var tableView	= Ti.UI.createTableView({
	data: data
});
menu.add(tableView);
menu.open();



var isToggled = false;
button.addEventListener('click',function(e){
	if( !isToggled ){
		nav.animate(animateLeft);
		menu.animate({
			left: 0,
			duration: 500
		});
		isToggled = true;
	} else {
		nav.animate(animateRight);
		menu.animate({
			left: -250,
			duration: 500
		});
		isToggled = false;
	}
});