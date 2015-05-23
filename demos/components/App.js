import { Component } from 'react';
import Style from '../dist/Style';

export default class App extends Component {
  render () {
    return (
      <section>
        <Style

          // default declaration
          fontFamily="Helvetica"

          // declaration media query
          fontSize={{
            rule: 'media',
            queries: [
              ['(min-width: 320px)', '3em'],
              ['(min-width: 720px)', '4em']
            ],
            value: '2em'
          }}

          // pseudo class default
          focus={{ border: '1px solid black' }}

          // pseudo class with autoprefix
          hover={{
            transition: "0.5s all",
            cursor: 'pointer',
            background: {
              rule: 'media',
              queries: [
                ['(min-width: 360px)', 'black'],
                ['(min-width: 720px)', 'blue']
              ],
              value: 'red'
            },
            color: 'white'
          }}

          // autoprefix property, not-nested
          transition="0.3s all"
        >
          <h1>Hello Styles!</h1>
        </Style>
      </section>
    );
  }
}
