import { Component } from 'react';

// "Style", or "Presentational" components can accept style properties that
// are used to extend their own CSS.
//
// Can declare wrapper components around styles that wrap children to pass in
// props for highly dynamic components?
class Flex extends Component {
  render () {
    return (
      <Style
        display="flex"
        {...this.props} // are these guaranteed to be styles?
      >
        <section>
          { this.props.children }
        </section>
      </Style>
    );
  }
}

class Row extends Component {
  render () {
    return (
        <Flex
          alignItems="middle"
          justifyContent="center"
        >
          <div>Item #1</div>
          <div>Item #2</div>
          <div>Item #3</div>
        </Flex>
      </Style>
    );
  }
}
