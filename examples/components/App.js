import Style from '../../dist/Style';
import Center from './Center';

const phone = '(min-width: 320px)';
const tablet = '(min-width: 640px)';

function media(a, b, c) {
  return { [phone]: a, [tablet]: b, default: c };
}

export default class App {
  render() {
    return (
      <Center width={media('200px', '400px', '100px')} height="150px">
        <Style
          hover={{
            background: 'black',
            color: 'white',
            cursor: 'pointer'
          }}
          fontSize={media('2em', '4em', '1em')}
          transition="0.2s all">
          <h1>Hello Styles!</h1>
        </Style>
      </Center>
    );
  }
}
