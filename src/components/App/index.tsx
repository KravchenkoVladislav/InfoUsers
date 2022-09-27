import { Route, Switch, Redirect } from 'react-router-dom';
import MainPage, {routeMain as routeMainPage} from '../../pages/MainPage';
import UserDetail, {routeMain as userDetailPage} from '../../pages/UserDetail';

import './styles.scss';


function App() {
  
  return (
    <div className="app">
        <Switch>
          <Route exact path={routeMainPage()} component={MainPage}/>
          <Route exact path={userDetailPage()} component={UserDetail}/>
          <Redirect 
                  to={{
                    pathname:routeMainPage()
                  }}
                />
        </Switch>
    </div>
  );
}

export default App;
