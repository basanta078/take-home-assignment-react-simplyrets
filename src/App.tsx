/**
 * Remove this content and start here
 */

import heartFill from './assets/heart-fill.svg';
import heartStroke from './assets/heart-stroke.svg';
import { Header } from './components/header/Header';
import { useProperties} from './hooks/useProperties';

function App() {
  useProperties();
  return (
    <><Header
        title="Here is the title"
      />
    <div
      style={{
        maxWidth: '70%',
        padding: '1em',
        marginLeft: 'auto',
        marginRight: 'auto',
        background: '#eee',
      }}
    >
      Main Content
    </div>
    </>
  );
}

export default App;

//<img src={heartFill} className="App-logo" alt="favorite icon" />
//<img src={heartStroke} className="App-logo" alt="unfavorite icon" />