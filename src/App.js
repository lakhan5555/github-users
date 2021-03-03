import React from 'react';
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Dashboard, Login, Error} from './pages';

function App() {
  return (
    <div>
      <Dashboard></Dashboard>
    </div>

    // <Router>
    //   <Switch>
    //     <Route path="/" exact>
          
    //     </Route>
    //     <Route path="/login">
    //       <Login></Login>
    //     </Route>
    //     <Route path="*">
    //       <Error></Error>
    //     </Route>
    //   </Switch>
    // </Router>
  );
}

export default App;
