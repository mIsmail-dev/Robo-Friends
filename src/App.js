import './App.css';
import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import CardList from './pages/CardList';
import Scroll from './components/Scroll';
import Spinner from './components/Spinner';
import ErrorBoundry from './components/ErrorBoundry';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfeild: '',
      loading: true
    }
  }

  async componentDidMount() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    const users = await res.data
    this.setState({ robots: users,
                    loading: false
                  })
  }

  onChange = (e) => {
    this.setState({ searchfeild: e.target.value })
  }

 render() {
  const filterRobots = this.state.robots.filter((robot) => robot.name.toLowerCase().includes(this.state.searchfeild.toLowerCase()))

  if (this.state.loading) {
    return <Spinner />
  }

  return (
    <div className='tc'>
      <Header title="RoboFriends" searchChange={this.onChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filterRobots} />
        </ErrorBoundry>
      </Scroll>
      {/* <CardList robots={this.state.robots} searchfeild={this.state.searchfeild} /> */}
    </div>
  );
 }
}

export default App;
