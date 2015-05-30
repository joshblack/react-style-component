# Composition

What makes using Style components fun is that you can compose them together into semantic, presentation components and be able to write code such as: `<Blue><Text>Hello World!</Text></Blue>`. All style components compose together and collapse into the last Style component defined before the style needs to be applied.

You can define your own presentational components using the Style component by doing the following:

```js
class Blue extends Style {
  static defaultProps = {
    color: 'blue'
  }
}
```

Now, you can even define CSS styles on these modified presentational components and they will be passed down as well. For example, `<Blue fontSize="1em">Hello World!</Blue>`.
