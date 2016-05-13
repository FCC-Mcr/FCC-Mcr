import { Component } from 'react'

class Navigation extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      navOpen: false
    };    
  }
  
  toggleNav() {
    this.setState({
      navOpen: !this.state.navOpen
    })
  }
  
  render() {
    return (
      <div className="fill navigation">
        <NavToggle onClick={ () => this.toggleNav() } />
        <MainNav open={this.state.navOpen} />
      </div>
    )
  }
}

export default Navigation