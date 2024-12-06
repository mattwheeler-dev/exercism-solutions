// TASK 1
// DEFINE SIZE TO STORE DIMENSIONS
class Size {
	constructor(width = 80, height = 60) {
		this.width = width;
		this.height = height;
	}

	resize(newWidth, newHeight) {
		this.width = newWidth;
		this.height = newHeight;
	}
}

// TASK 2
// DEFINE POSITION TO STORE POSITION
class Position {
	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}

	move(newX, newY) {
		this.x = newX;
		this.y = newY;
	}
}

// TASK 3
// DEFINE "ProgramWindow" CLASS
class ProgramWindow {
	constructor(screenSize, size, position) {
		this.screenSize = new Size(800, 600);
		this.size = new Size();
		this.position = new Position();
	}

	// TASK 4
	// ADD METHOD TO RESIZE WINDOW
	resize(newSize) {
		const maxWidth = this.screenSize.width - this.position.x;
		const maxHeight = this.screenSize.height - this.position.y;

		const newWidth = Math.max(1, Math.min(newSize.width, maxWidth));
		const newHeight = Math.max(1, Math.min(newSize.height, maxHeight));

		this.size.resize(newWidth, newHeight);
	}

	// TASK 5
	// ADD METHOD TO MOVE WINDOW
	move(newPosition) {
		const maxX = this.screenSize.width - this.size.width;
		const maxY = this.screenSize.height - this.size.height;

		const newX = Math.max(0, Math.min(newPosition.x, maxX));
		const newY = Math.max(0, Math.min(newPosition.y, maxY));
		this.position.move(newX, newY);
	}
}

// TASK 6
// CHANGE PROGRAM WINDOW
function changeWindow(programWindow) {
	programWindow.resize(new Size(400, 300));
	programWindow.move(new Position(100, 150));
	return programWindow;
}
