
# Disclosure

![version](https://img.shields.io/github/manifest-json/v/Natjo/disclosure)

Accesible disclosure component to hide/show panel.

btn must have the id of panel in aria-control

## Parameters
| Name | Arguments | Description |
| ------ | ------ | ------ |
| el | htmlElement | element that contain btn and panel |
| btn | selector | |
| onopen | function | fired on open |
| onclose | function | fired on close |
| autoclose | function | if false panel stay open on focuse out |

## Usage

### html
```html
<div class="disclosure">
	<button class="summary" aria-expanded="false" aria-controls="disclosure" aria-label="Lorem">I'm disclosure</button>
	<div class="panel" id="mypanel">
		<h2>Hello</h2>	
		<p>lorem ipsum</p>
		<a href="/">Link 1</a>
	</div>
</div>
```

### javascript
```javascript
import disclosure from './modules/disclosure/disclosure';
disclosure({
	el: document.querySelector('.disclosure'),
	btn: '.summary',
	onopen(){
	
	}
})
```

### CSS
```css
.disclosure{
	.summary{
		&[aria-expanded="true"] + .panel {
			display: block;
		}
		&[aria-expanded="false"] + .panel  {
			display: none;
		}
	}
}
```

## Demo
[See codepen demo](https://codepen.io/natjo/pen/oNGzJGK?editors=0011)
