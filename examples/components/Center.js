import Style from '../../dist/Style';

export default class Center extends Style {
  static defaultProps = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    margin: 'auto',
    textAlign: 'center',
  }
}