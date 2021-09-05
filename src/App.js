 import './App.css';
 import Homepages from './components/directory/directory';
 import Shoppage from './pages/shoppages/shoppage';
 import { Route ,Switch } from "react-router-dom";

 


function App() {

  return (
    <div>
      <Switch>
      <Route exact path="/" component={ Homepages }/>
      <Route  exact path="/shop" component={ Shoppage }/>
      </Switch>
    </div>
  )
}

export default App;
