import React from 'react';
import logo from './logo.svg';
import Content from './partial/Content.js';
import mataharilogo from './mataharilogo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import './App.css';
import { Container,
  Row,
  Navbar,
  Col} from 'react-bootstrap';

  const axios = require('axios');


class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        valueString: '',
        urlApi:'',
        urlApi2:'',
        productCount:0,
        responseCode:10,
        responseServer:10,
        dataProduct:[],
        dataSort:[]
      };
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){

          var key = event.target.value;
          var keybaru = key.replace(/ /g,"%20");
           
           let URL = 'https://services.mataharimall.com/products/v0.2/products/search?q='+keybaru+'&per_page=36&sort=date+DESC';
           
           let URL2 = 'https://services.mataharimall.com/products/v0.2/products/search?q='+keybaru+'&per_page=36&';

           this.setState({ valueString: event.target.value,
                    urlApi:URL,
                    urlApi2:URL2
            })

           console.log(URL);

           var that = this;

           axios.get(URL)
              .then(function (response) {
                //console.log(response.data.data.sorts);
                // handle success
                if(response.status===200){
                  console.log('joss');
                     that.setState({
                        responseServer:response.status,
                        responseCode:response.data.code,
                        dataProduct:response.data.data.products,
                        productCount:response.data.data.info.product_count,
                        dataSort:response.data.data.sorts
                      })
                }else{
                      that.setState({
                        responseServer:response.status,
                        responseCode:response.data.code
                      })
                }
               
                
              })
              .catch(function (error) {
                // handle error
                that.setState({responseServer:500,responseCode:500})
              })
              .finally(function () {
                // always executed
                //console.log(that.state.responseCode)
              });
        }
      }

    render(){
      return (
            <div className="App">
              <>
                  <Navbar className="App-header fixed-top header-margin">
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
                  </> 
            <Content
              data = {this.state.valueString}
              urlApi = {this.state.urlApi}
              urlApi2 = {this.state.urlApi2}
              responseCode = {this.state.responseCode}
              responseServer = {this.state.responseServer}
              dataProduct = {this.state.dataProduct}
              dataSort = {this.state.dataSort}
              productCount = {this.state.productCount}
            />
            </div>
          );
    }

}


export default App;
