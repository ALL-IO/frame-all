# frame-all

![stage](https://img.shields.io/badge/stage-proposal-yellow)
![bounty](https://img.shields.io/badge/bounty-artwork-red)

Turn 2D images into framed 3D models.

## Contributors ✨

> Contributors will receive a print of [The Starving Artist by Sebastian Errazuriz](https://www.instagram.com/p/B_DfoRADwR-/?utm_source=ig_web_button_share_sheet).

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- <table>
  <tr>
    <td align="center"><a href="https://github.com/fckchairs"><img src="https://avatars3.githubusercontent.com/u/1652655?v=4" width="100px;" alt=""/><br /><sub><b>fckchairs</b></sub></a><br /><a href="#example-fckchairs" title="Examples">💡</a> <a href="https://github.com/ALL-IO/frame-all/commits?author=fckchairs" title="Code">💻</a></td>
  </tr>
</table> -->

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!


![](https://firebasestorage.googleapis.com/v0/b/aw-publish-production.appspot.com/o/public%2Fgithub%2Fframe-all%2Fhero.png?alt=media&token=64132770-9987-4f39-9eea-3517b6d557c2)

### Overview

 `frame-all`  is a React JS component for creating 3D framed models from a 2D image. Provide an input image an a volumetric 3D model of the image on a customized canvas and frame is generated.

![](https://firebasestorage.googleapis.com/v0/b/aw-publish-production.appspot.com/o/public%2Fgithub%2Fframe-all%2Foverview.png?alt=media&token=085db8f8-7cc9-428e-9cfb-6bc04c41f8c3)


As with all projects, the complexity of this component ranges depending on the scope. For this component, the complexity comes from the handling image dimensions. Canvas ratios are traditionally: square, landscape, or portrait. However, each of these orientations can have any size length/width. 

![](https://firebasestorage.googleapis.com/v0/b/aw-publish-production.appspot.com/o/public%2Fgithub%2Fframe-all%2FframeSkew.png?alt=media&token=e3304495-cf14-448b-814f-f251fb35f143)


# MVP - Changing materials on pre-made models

![](https://firebasestorage.googleapis.com/v0/b/aw-publish-production.appspot.com/o/public%2Fgithub%2Fframe-all%2Fmvp.png?alt=media&token=d3bbcf49-adc1-4b9d-ad2b-bf18072b7ec9)

The simplest implementation of this component is to have a collection of pre-made (static) canvases/frames to fit the most popular frame sizes and change the Normal Map of the canvas element to the input image. Image modes would need to include standards, like “contain” and “cover.”

![](https://firebasestorage.googleapis.com/v0/b/aw-publish-production.appspot.com/o/public%2Fgithub%2Fframe-all%2FimageMode.png?alt=media&token=db1dc64e-5030-4737-beac-d3f333360905)


# v1 - Mimic framing process

![](https://firebasestorage.googleapis.com/v0/b/aw-publish-production.appspot.com/o/public%2Fgithub%2Fframe-all%2Fv1.png?alt=media&token=5de61f16-ff49-4b10-a3c0-12ef5341f273)

The dynamic sizing of artworks is precisely why real-world framers cut each frame to size. To give the most degrees of freedom, it would likely be easiest to mimic this process and “build” a frame around the imported image.

![](https://firebasestorage.googleapis.com/v0/b/aw-publish-production.appspot.com/o/public%2Fgithub%2Fframe-all%2FframeComponents.png?alt=media&token=6f5e5012-8187-4fed-a096-49526a408416)

Many of these components are basic box geometries and can be made, scaled, and resized easily. 


The process for this would look something like:
2. Apply image to the normal map of a base canvas.
	- Oil, wood panel, paper, etc.
3. Apply a frame profile / silhouette and to match desired dimensions.
4. Apply ornamental elements / patterns to extruded geometry
5. Apply additional frame properties (color, thickness, offset, etc.)

![](https://firebasestorage.googleapis.com/v0/b/aw-publish-production.appspot.com/o/public%2Fgithub%2Fframe-all%2FframeProfiles.png?alt=media&token=5a282cc0-9754-49dc-aad8-9e492b6d535f)



# Technical details:

### Dependencies

- [`three.js`](https://threejs.org/)
	- [Loaders](https://threejs.org/docs/#api/en/loaders/Loader)
		- [`MaterialLoade`](https://threejs.org/docs/#api/en/loaders/MaterialLoader)
	- Exporters
		- [`GLTFExporter`](https://threejs.org/docs/#examples/en/exporters/GLTFExporter)
		- [`PLYExporter`](https://threejs.org/docs/#examples/en/exporters/PLYExporter)
		- [`ColladaExporter`](https://threejs.org/docs/#examples/en/exporters/ColladaExporter)
- [`react-three-fiber`](https://github.com/react-spring/react-three-fiber)

Other considerations:
- Input images will likely be from the user’s local machine, so it should be easily compatible with popular drag and drop libraries, like [`react-dropzone`](https://github.com/react-dropzone/react-dropzone) .


### Potential Props

| Prop | Type | Description |
| --- | --- | --- |
| `containerStyle` | {} | |
| `canvasStyle` | url or string? | Maybe one of `[“oil”, “wood”, “print”]` ? |
| `canvasImage` | url | |
| `canvasTexture` | url | |
| `canvasWidth` | number | |
| `canvasHeight` | number | |
| `matColor` | string | |
| `matWidth` | number | |
| `frameThickness` | number | |
| `frameProfile` | ?? | Could be a string, one of an array, or potentially an object or svg? |

![](https://firebasestorage.googleapis.com/v0/b/aw-publish-production.appspot.com/o/public%2Fgithub%2Fframe-all%2FframeProps.png?alt=media&token=983b2e41-f29d-4e01-8b72-890d3d86fffb)

Total width and height of the frame is calculated based off of the canvas length, mat width, and frame width.

### Potential Actions

* `export()`
* `clear()`
* `rotate(degrees)`


### Potential  Events

* `onExport` - (result, error)
* `onProfileSelect`
* `onCanvasSelect`
* `onImageChange`
* `onResize`
