document.getElementById('change-color').addEventListener('click', function() {
    console.log('Change color button clicked!');
	document.body.style.backgroundColor = getRandomColor();
});

document.getElementById('change-font').addEventListener('click', function() {
    console.log('Change font button clicked!');
	document.getElementById('content').style.fontSize = getRandomFontSize() + 'px';
});

function getRandomColor() {
	var colors = ['#ff69b4', '#33cc33', '#6666ff', '#ffff66', '#cc00cc'];
	return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomFontSize() {
	return Math.floor(Math.random() * (30 - 18 + 1)) + 18;
}
