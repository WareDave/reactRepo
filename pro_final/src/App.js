import React, { Component } from 'react'
import LoginRegisterForm from './LoginRegisterForm'
import CharacterContainer from './CharacterContainer'
import Header from './Header'
import { Route, Switch } from 'react-router-dom'
import './App.css'


const My404 = () => {
  return (
    <div>
      Wong Way Fool
    </div>
  )
}

class App extends Component {
  constructor() {
    super()

    this.state = {
      loggedIn: false,
      loggedInUserEmail: null
    }
  }

  handledLoggedInStatus = (loggedInUserEmail) => {
    this.setState({
      loggedIn: true,
      loggedInUserEmail: loggedInUserEmail
    })
  }

  logout = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/logout`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })

  const parsedLogoutResponse = await response.json()

  if (parsedLogoutResponse.status.code === 200) {
    this.setState({
      loggedIn: false,
      loggedInUserEmail: ''
    })
  } else {
    console.log('Register Failed: ', parsedLogoutResponse)
  }
}

  render() {
    return (
      <main>
        <Header
          loggedIn={this.state.loggedIn}
          loggedInUserEmail={this.state.loggedInUserEmail}
          logout={this.logout}
        />
        <Switch>
          <Route
            exact path="/"
            render={(props) => 
              <LoginRegisterForm {...props}
              loggedIn={this.state.loggedIn}
              loggedStatus={this.handledLoggedInStatus}
              />
            }
          />
          <Route
            exact path="/boards"
            render={(props) => 
              <CharacterContainer {...props}
              loggedIn={this.state.loggedIn}
              loggedStatus={this.handledLoggedInStatus}
              />
            }
          />
            }
          />

          <Route
            component={ My404 }
          />
        </Switch>
        

      </main>
    )
  }
}

export default App;