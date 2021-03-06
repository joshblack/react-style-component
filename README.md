# React Style Component

![Demo](styles-demo.gif)

> Proof of concept that defines a presentational component that wraps a data component.

Users can define CSS properties such as declarations, pseudo elements, pseudo classes, and rules on this presentational component and they will be translated into CSS that will be injected above the wrapped component. The wrapped component will receive a CSS class name that all the properties declared on the presentational component will be defined under.

> The idea is to create a way to compose styles together and be able to colocate all information needed by a developer in order to work on individual components.

## Goal

The goal of this project is to provide an acceptable alternative to inline styles that allows you to gain the benefits of an inline style approach without losing support for essential CSS properties.

Another goal is to provide a possible alternative to creating a separate Stylesheet inside of a component. Instead, React Style Component looks to treat CSS as a type of component with a certain set of regulations and limits. Ideally, this project could allow the realization of true CSS modules and allow users to explore true composition of CSS styles through the composition of React components.

Finally, React Style Component also looks to provide development checks for things such as:

- valid declarations
    - is the property that you typed a valid CSS property?
    - is the value of the property valid?
- `@media` query validation
- `@keyframe` validation
- `@font-face` validation

In order to help new developers understand the CSS that they're writing.
## Example

```js
class App {
  render() {
    return (
      <Style fontFamily="Helvetica">
        <h1>Hello Styles!</h1>
      </Style>
    );
  }
}
```

The above translates to the following `html` after being rendered by React and React Style Component:

```html
<div>
  <style>
  .a {
      font-family: 'Helvetica';
  }
  </style>
  <h1 class="a">Hello Styles!</h1>
</div>
```
