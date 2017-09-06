require('offline-plugin/runtime').install();

import {render} from 'react-dom';
import App from './components/App';

render(<App/>, document.getElementById('app'));
