import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


export default class App extends React.Component {
  constructor(){
    super();
    this.state={
  
        name:null,
        description:null,
        price:null,
        showMessage:false
      
    }
    this.proref= React.createRef();
    this.desref= React.createRef();
    this.priref= React.createRef();
  
  }

  sendData=()=>{
    console.log(this.proref.current.value);
     console.log(this.desref.current.value);
     console.log(this.priref.current.value);
     if(this.proref.current.value=="" || this.desref.current.value=="" || 
      this.priref.current.value==""){
       alert(` Product,description and price should not be empty`);
      }
       else if(Number.isInteger(this.priref.current.value-'0')==false){
          alert(`price should be a number ${this.priref.current.value}`);
       }
     else{
      var url='http://localhost:3001/users/product'
      axios.post(url,{
        name:`${this.proref.current.value}`,
        description:`${this.desref.current.value}`,
        price:`${this.priref.current.value}`,
      })
      .then(res=>{
        if(res!=null){
          console.log('entered in')
          this.setState({
            showMessage:true,
            name:this.proref.current.value,
            description:this.desref.current.value,
            price:this.priref.current.value
          })
        }
        console.log(res);
      }).catch(err=>console.log('error is',err))
 
     
     }
   
  }

render(){
  return (
    <div className="App">
        {
        
        (this.state.showMessage===true)?<div><h1>Product Registered</h1></div>:
       <div>
   <h1>Admin Panel</h1>
      <input type='text' placeholder="name" ref={this.proref}></input><br></br>
      <input type='text' placeholder="description" ref={this.desref}></input><br></br>
      <input type='text' placeholder="price" ref={this.priref}></input><br></br>
        <button onClick = {this.sendData}>Send Data</button>

       </div>
        
        }

        </div>
        

  );
  }
  
  }
