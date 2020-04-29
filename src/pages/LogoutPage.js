import { Component } from 'react';

class LogoutPage extends Component {
  componentDidMount() {
    sessionStorage.removeItem('token');
    window.location = '/login';
  }

  render() {
    return null;
  }
}

export default LogoutPage;
