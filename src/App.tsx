/**
 * Remove this content and start here
 */

import heartFill from './assets/heart-fill.svg';
import heartStroke from './assets/heart-stroke.svg';
import { PropertyPage } from './pages/PropertyPage';
import { BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Route path="/" render={() => (
        <PropertyPage />
        )}>
      </Route>
    </Router>
    
  );
}

export default App;

//<img src={heartFill} className="App-logo" alt="favorite icon" />
//<img src={heartStroke} className="App-logo" alt="unfavorite icon" />