import Style from '../../dist/Style';
import Center from './Center';

export default class App {
  render() {
    return (
      <Center>
        <Style
          hover={{
            background: 'black',
            color: 'white',
            cursor: 'pointer'
          }}
          fontSize={{
            '(min-width: 320px)': '2em',
            '(min-width: 640px)': '4em',
            default: '1em'
          }}
          transition="0.2s all">
          <h1>Hello Styles!</h1>
        </Style>
      </Center>
    );
  }
}
