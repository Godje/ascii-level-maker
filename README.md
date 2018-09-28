# ascii-level-maker

Making text-based levels graphically.

**What is this for:** This tool will be for the people who create levels using ASCII characters in 2d arrays to create levels.

**Goal**: An editor of 2d tiled canvas that returns array of ASCII strings.
	Creation of a 2d level will be made on an HTML5 canvas.
	An output will be a formatted 2d array, that you can copy and paste into your project.

### To develop locally:

	clone the repository
	npm install
	npm run watch
	// open localhost:3000 by default

## TODO:
- Fix the **[issue#6](https://github.com/Godje/ascii-level-maker/issues/6)**
- Rewrite CTRL to populate an array in the argument, not the spec array.
- Reset previewData to the size required on each resize of the canvas
