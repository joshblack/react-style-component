# Basic Usage

You can use a Style component simply by doing the following:

```js
<Style><h1>Hello World!</h1></Style>
```

Of course, the `<h1>` tag won't have any styling applied to it. To do this, we can add any basic css declaration values as properties to the Style component. For example:

```js
<Style color="blue"><h1>Hello World!</h1></Style>
```

In the case above, the `h1` element will now have a CSS class applied to it that has the single declaration: `color: blue;`.

# Psuedo Classes and Elements

We can apply pseudo class and pseudo element styling in the same fashion, except this time the property takes in an object. For example:

```js
<Style
  hover={{
    background: 'black',
    color: 'white'
  }}>
  <h1>Hello World!</h1>
</Style>
```

Inside of this object, we can place any CSS properties that we want to be applied for the given pseudo class on the child component.

# Autoprefixed Properties

The Style component supports an increasing list of autoprefixed properties, but you don't have to worry about autoprefixing them in your component! Instead, just write down the property and the Style component will do the rest.

Example:

```js
<Style
  transition="0.2s all">
  <h1>Hello Styles!</h1>
</Style>
```

# Media Queries

The Style component also supports media queries on __properties__. This means that you can define the value of a property at any point in time and the Style component will take care of the rest for you. An example:

```js
<Style
  fontSize={{
    '(min-width: 320px)': '2em',
    '(min-width: 640px)': '4em',
    default: '1em'
  }}>
  <h1>Hello Styles!</h1>
</Style>
```
