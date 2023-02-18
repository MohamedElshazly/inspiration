const container = document.getElementsByClassName('bubble-container');

const animateBubbles = (x) => {
	const bubble = document.createElement('div');
	console.log(container)

	bubble.className = 'bubble'

	bubble.style.left = `${x}px`;

	container[0].appendChild(bubble);

	setTimeout(() => container[0].removeChild(bubble), 2000);
}

document.onmousemove = e => animateBubbles(e.clientX)