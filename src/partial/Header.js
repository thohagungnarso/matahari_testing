import React from 'react';
import logo from './../logo.svg';
import './../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import mataharilogo from './../mataharilogo.svg';
import { Container,
  Row,
  Navbar,
  Col} from 'react-bootstrap';


class Header extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      valueString: ''
	    };
	  }

	  handleKeyPress = (event) => {
	      if(event.key === 'Enter'){
	         this.setState({ valueString: event.target.value })
	         //console.log(event.target.value);
	      }
	    }

  render() {
  	return (
  		
    <>
   
      <Navbar className="App-header">
          <Container>
            <Row className="col-md-12">
            <div className="col-md-6">
              <Navbar.Brand>
              <img
                alt=""
                src={mataharilogo}
                width="200"
                height="40"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            </div>
            <div className="col-md-6">
                  <span><FontAwesomeIcon className="blackSreach" icon="search" />
	                  <input type="text" 
	                        onKeyPress={this.handleKeyPress}
	                  		placeholder="Cari produk" 
	                  		className="jsx-1671817932 searchbox f_f:lato placeholder-grey m_r:30"
	                  		/>
                  </span>
       
            </div>
          
            </Row>
          </Container>
            
          </Navbar>
      </> )
  }
}

export default Header;

