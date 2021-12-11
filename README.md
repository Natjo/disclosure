
# Disclosure

![version](https://img.shields.io/github/manifest-json/v/Natjo/disclosure)

Accesible disclore component to hide/show panel.

btn must have the id of panel in aria-control

## Parameters
| Name | Arguments | Description |
| ------ | ------ | ------ |
| el | htmlElement | element that contain btn and panel |
| btn | selector | |
| onopen | function | fired on open |
| onclose | function | fired on close |
| autoclose | function | et if panel stay open on focuse out |

## Usage

### html
```html
<div class="dropdown">
	<button class="summary" 
	aria-expanded="false" 
	aria-controls="mypanel" 
	aria-label="See specification">Specification</button>
	<form class="panel" id="mypanel">
	<h2>Specifications</h2>
	<input type="checkbox"><label>Contrast</label>
	</form>
</div>
```
### javascript
```javascript
import disclosure from './modules/disclosure/disclosure';
disclosure({
	el: dropdown,
	btn: '.summary',
	onopen(){
	
	}
})
```

## Demo
[See codepen demo](https://codepen.io/natjo/pen/oNGzJGK?editors=0011)
