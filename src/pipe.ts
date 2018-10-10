import { _compose, Dir } from './compose';
import { curry2 } from './utils/curry';

export default curry2(_compose(Dir.LTR));
