import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from 'screens/Home'
import Invoice from 'screens/Invoice'
import Provider from 'providers'
import SideBar from 'components/SideBar'

function App() {
  return (
    <Provider>
      <Router>
        <SideBar />
        <main className="container">
          <Switch>
            <Route path="/invoice/:id?" component={Invoice} exact />
            <Route path="/" component={Home} exact />
          </Switch>
        </main>
      </Router>
    </Provider>
  )
}

export default App
