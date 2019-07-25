import React from 'react';
import logo from './../logo.svg';
import MDSLOGO from './../mds-logo.svg';
import notFoundImage from './../search-not-found.svg';
import './../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import mataharilogo from './../mataharilogo.svg';
import { Container,
  Row,
  Card,
  Form,
  Button,
  Navbar,
  Col} from 'react-bootstrap';

import Image from 'react-bootstrap/Image'

const axios = require('axios');

class Content extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
          priceformat:'Rp.600.000,-',
          priceformatStrike:'Rp.600.000,-',
          dataSort:this.props.dataSort,
          urlApi2:this.props.urlApi2,
          dataProduct:this.props.dataProduct,
          value:'',
          arrProduct:'',
          html:'',
          statusFilter:0,
          formSearch:this.props.formSearch,
          keyword:''
      };

      this.handleChange = this.handleChange.bind(this);

	  }

    handleChange(event) {
          this.setState({value: event.target.value,statusFilter:1,formSearch:0});

      var key = event.target.value;
      var keybaru = key.replace(/ /g,"+");
      var url = this.props.urlApi2+keybaru;

      let arrProduct = '';

      axios.get(url)
              .then(function (response) {
                //console.log(response.data.data.sorts);
                // handle success
                
               let dataProduct = response.data.data.products

               let arrProduct = '';
               let html = '<h1>THoh agung narso</h1>';

               var elem = document.getElementById("ListProduct");
               elem.parentNode.removeChild(elem);

               var formProduct = document.getElementById("formProduct");
               var htmlbaru = '<div class="col-md-12 cards row" id="ListProduct"></div>';
               formProduct.innerHTML = htmlbaru;

               var hasilbaru = '';


                if (dataProduct.length!==0) {
                    {
                      dataProduct.map((item, index) => {

                       
                        if(item.pricing.original.discount > 0 ){
                            var elem = document.getElementById("ListProduct");
                            elem.innerHTML += '<div class="cards card" style="width: 18rem;"><img class="card-img-top" src="'+item.images[0].original+'"><div class="text-left card-body"><div class="card-title h5">'+item.brand.name+'</div><p class="card-text">'+item.product_title+'</p><p class="card-text"><b>'+item.pricing.formatted.effective_price+'</b></p><p class="card-text"><strike>'+item.pricing.formatted.base_price+'</strike></p></div></div>';
                            
                        }else{
                            var elem = document.getElementById("ListProduct");
                            elem.innerHTML += '<div class="cards card" style="width: 18rem;"><img class="card-img-top" src="'+item.images[0].original+'"><div class="text-left card-body"><div class="card-title h5">'+item.brand.name+'</div><p class="card-text">'+item.product_title+'</p><p class="card-text"><b>'+item.pricing.formatted.base_price+'</b></p></div></div>';
                            
                          
                        }
                        }
                      )

                    };

                  }

               
                
              })
              .catch(function (error) {
                // handle error
                console.log(error)
                //alert("Connection Error !")
              })
              .finally(function () {
                // always executed
                //console.log(that.state.responseCode)
              });
    }

  render() {

    console.log("From Seacrh : "+this.state.formSearch)   

    const responseServer = this.props.responseServer;
    const responseCode = this.props.responseCode;
    const valueString = this.props.data;
    const productCount = this.props.productCount;
    const dataSort = this.props.dataSort;
    const dataProduct = this.props.dataProduct;
    let html = <div className="col-md-12" id="baseForm">
        <Image className="ImageHome" src={MDSLOGO} fluid />
      </div>;

    
    let arrProduct = '';
      if (dataProduct.length!==0) {
          if(this.state.statusFilter === 0){
            
            arrProduct = <div className="col-md-12 cards row" id="ListProduct">
          {
            dataProduct.map((item, index) => {

              if(item.pricing.original.discount > 0 ){
                  return (

                    <Card style={{ width: '18rem' }} className="cards">
                          <Card.Img variant="top" src={item.images[0].original} />
                          <Card.Body className="text-left">
                            <Card.Title>{item.brand.name}</Card.Title>
                            <Card.Text>
                              {item.product_title}
                            </Card.Text>
                            <Card.Text>
                              <b>{item.pricing.formatted.effective_price}</b>
                            </Card.Text>
                            <Card.Text>
                              <strike>{item.pricing.formatted.base_price}</strike>
                            </Card.Text>   
                            
                          </Card.Body>
                        </Card>

                                
                  ) 
              }else{
                  return (

                  <Card style={{ width: '18rem' }} className="cards">
                        <Card.Img variant="top" src={item.images[0].original} />
                        <Card.Body className="text-left">
                          <Card.Title>{item.brand.name}</Card.Title>
                          <Card.Text>
                            {item.product_title}
                          </Card.Text>
                           <Card.Text>
                              <b>{item.pricing.formatted.base_price}</b>
                            </Card.Text>         
                          
                        </Card.Body>
                      </Card>

                              
                )
              }

                

              }
            )

          }</div>;

          
            
          }else{

             var elem = document.getElementById("ListProduct");
             elem.parentNode.removeChild(elem);

             var formProduct = document.getElementById("formProduct");
             var htmlbaru = '<div class="col-md-12 cards row" id="ListProduct"></div>';
             formProduct.innerHTML = htmlbaru;

             var hasilbaru = '';

             if (dataProduct.length!==0) {
                    {
                      dataProduct.map((item, index) => {

                       
                        if(item.pricing.original.discount > 0 ){
                            var elem = document.getElementById("ListProduct");
                            elem.innerHTML += '<div class="cards card" style="width: 18rem;"><img class="card-img-top" src="'+item.images[0].original+'"><div class="text-left card-body"><div class="card-title h5">'+item.brand.name+'</div><p class="card-text">'+item.product_title+'</p><p class="card-text"><b>'+item.pricing.formatted.effective_price+'</b></p><p class="card-text"><strike>'+item.pricing.formatted.base_price+'</strike></p></div></div>';
                            
                        }else{
                            var elem = document.getElementById("ListProduct");
                            elem.innerHTML += '<div class="cards card" style="width: 18rem;"><img class="card-img-top" src="'+item.images[0].original+'"><div class="text-left card-body"><div class="card-title h5">'+item.brand.name+'</div><p class="card-text">'+item.product_title+'</p><p class="card-text"><b>'+item.pricing.formatted.base_price+'</b></p></div></div>';
                            
                          
                        }
                        }
                      )

                    };

                  }




            arrProduct = <div className="col-md-12 cards row" id="ListProduct">

          {
            dataProduct.map((item, index) => {

              if(item.pricing.original.discount > 0 ){
                  return (

                    <Card style={{ width: '18rem' }} className="cards">
                          <Card.Img variant="top" src={item.images[0].original} />
                          <Card.Body className="text-left">
                            <Card.Title>{item.brand.name}</Card.Title>
                            <Card.Text>
                              {item.product_title}
                            </Card.Text>
                            <Card.Text>
                              <b>{item.pricing.formatted.effective_price}</b>
                            </Card.Text>
                            <Card.Text>
                              <strike>{item.pricing.formatted.base_price}</strike>
                            </Card.Text>   
                            
                          </Card.Body>
                        </Card>

                                
                  ) 
              }else{
                  return (

                  <Card style={{ width: '18rem' }} className="cards">
                        <Card.Img variant="top" src={item.images[0].original} />
                        <Card.Body className="text-left">
                          <Card.Title>{item.brand.name}</Card.Title>
                          <Card.Text>
                            {item.product_title}
                          </Card.Text>
                           <Card.Text>
                              <b>{item.pricing.formatted.base_price}</b>
                            </Card.Text>         
                          
                        </Card.Body>
                      </Card>

                              
                )
              } 

              }
            )

          }</div>;

          }
          
      }else{
        arrProduct = <div className="col-md-12">
                <Image className="ImageHomeNotFound" src={notFoundImage} fluid />
                <p>Sorry :(</p>
                <p>{notfound}</p>
                <p>Please try another keyword.</p>
              </div>;


      }
   

    let hasilhitung = '';
      if(productCount===undefined){
         hasilhitung = "0 product found.";

      }else{
         hasilhitung = productCount+" product found.";        
      }

    if (responseServer===200) {
      if(responseCode===200){
        html = <div className="col-md-12" id="baseForm"><div className="col-md-12 text-left cards row texthasil">
                <div className="col-md-6 row">
                  <h2>"{valueString}"</h2> <p className="hitung">{hasilhitung}</p>
                </div>
                <div className="col-md-6 text-right">
                    <Form.Group controlId="filter" value={this.state.value} onChange={this.handleChange}>
                      <Form.Label>Sort By :</Form.Label>
                      <Form.Control as="select">
                      <option value="0">Choice one</option>
                       {dataSort.map((item, index) => (
                            <option value={item.q}>{item.title}</option>
                        ))};
                      </Form.Control>
                    </Form.Group>
                </div>
                 
        </div>
            <div id="formProduct">{arrProduct}</div>
        </div>

          
        ;
      }else{
        html = <div className="col-md-12" id="baseForm">
                <Image className="ImageHome" src={notFoundImage} fluid />

              </div>;
      }
    }else if(responseServer===500){
      var notfound = 'No result found for "'+valueString+'"';
      html = <div className="col-md-12" id="baseForm">
                <Image className="ImageHomeNotFound" src={notFoundImage} fluid />
                <p>Sorry :(</p>
                <p>{notfound}</p>
                <p>Please try another keyword.</p>
              </div>;
    }

  	return (
  		<Container>
          <Row className="col-md-12 containerbaru" id="baseFormatas">
              {html}
          </Row>
        </Container>
   )
  }
}

export default Content;

