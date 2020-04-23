# frame-all
Turn 2D images into framed 3D models.

Status: scoping stage

::Bounty::

Turn 2D images into framed 3D models.

![](%60frame-all%60%20Brief/MacBook%20Pro%20-%205.png)

### Overview

 `frame-all`  is a React JS component for creating 3D framed models from a 2D image. Provide an input image an a volumetric 3D model of the image on a customized canvas and frame is generated.

![](%60frame-all%60%20Brief/MacBook%20Pro%20-%203.png)


As with all projects, the complexity of this component ranges depending on the scope. For this component, the complexity comes from the handling image dimensions. Canvas ratios are traditionally: square, landscape, or portrait. However, each of these orientations can have any size length/width. 

![](%60frame-all%60%20Brief/MacBook%20Pro%20-%202.png)


# MVP - Changing materials on pre-made models
- - - -

![](%60frame-all%60%20Brief/MacBook%20Pro%20-%208.png)

The simplest implementation of this component is to have a collection of pre-made (static) canvases/frames to fit the most popular frame sizes and change the Normal Map of the canvas element to the input image. Image modes would need to include standards, like “contain” and “cover.”

![](%60frame-all%60%20Brief/MacBook%20Pro%20-%206.png)


# v1 - Mimic framing process
- - - -
![](%60frame-all%60%20Brief/MacBook%20Pro%20-%207.png)

The dynamic sizing of artworks is precisely why real-world framers cut each frame to size. To give the most degrees of freedom, it would likely be easiest to mimic this process and “build” a frame around the imported image.

![](%60frame-all%60%20Brief/MacBook%20Pro%20-%204.png)

Many of these components are basic box geometries and can be made, scaled, and resized easily. 


The process for this would look something like:
2. Apply image to the normal map of a base canvas.
	- Oil, wood panel, paper, etc.
3. Apply a frame style / silhouette and to match desired dimensions.
4. Apply ornamental elements to extruded geometry
5. Apply additional frame properties (color, thickness, offset, etc.)



# Technical details:
- - - -

### Dependencies

- [`three.js`](https://threejs.org/)
	- [Loaders](https://threejs.org/docs/#api/en/loaders/Loader)
		- [MaterialLoader](https://threejs.org/docs/#api/en/loaders/MaterialLoader)
	- Exporters
		- [GLTFExporter](https://threejs.org/docs/#examples/en/exporters/GLTFExporter)
		- [PLYExporter](https://threejs.org/docs/#examples/en/exporters/PLYExporter)
		- [ColladaExporter](https://threejs.org/docs/#examples/en/exporters/ColladaExporter)
- [`react-three-fiber`](https://github.com/react-spring/react-three-fiber)

Other considerations:
- Input images will likely be from the user’s local machine, so it should be easily compatible with popular drag and drop libraries, like [`react-dropzone`](https://github.com/react-dropzone/react-dropzone) .


### Potential Props

* `containerStyle` - {}
* `canvasStyle` - url or one of `[“oil”, “wood”, “print”]`
* `canvasImage` - url 
* `canvasTexture` - url
* `canvasWidth` - number
* `canvasHeight` - number
* `matColor` - string
* `matWidth` - number
* `frameThickness` - number

![](%60frame-all%60%20Brief/MacBook%20Pro%20-%201%20(1).png)

Total width and height of the frame is calculated based off of the canvas length, mat width, and frame width.

### Potential Actions

* `export()`
* `clear()`
* `rotate(degrees)`


### Potential  Events

* `onExport` - (result, error)
* `onFrameSelect`
* `onCanvasSelect`
* `onImageChange`
* `onResize`
