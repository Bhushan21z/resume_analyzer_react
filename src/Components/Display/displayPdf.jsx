import React, { Component } from 'react';
import { render } from 'react-dom';
import Button from "@mui/material/Button";
import jsPDF from 'jspdf';
import Template from './Template';
import Heading from '../Reports/Heading';
import Analysis from '../Reports/Analysis';
import './tempstyle.css';


class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Still, Jaime',
      rank: 'SGT',
      description: 'Demonstrate how to export an HTML section to PDF'
    };
  }


  generatePDF = ()=>{
    var doc = new jsPDF("p","pt","a4");
    doc.html(document.querySelector("#resume"),{
      callback: function(pdf){
        pdf.save("userresume.pdf");
      }
    });
  };
  

  render() {
    console.log(this.state);
    return (
      <div id='outerDiv'>
      <div id='resume'>
          <Template />
      </div>
          <Button 
          onClick={this.generatePDF}
            sx={{
              width: "190px",
              height: "60px",
              marginBottom: "10px",
              backgroundColor: "#EE6C4D",
              borderRadius: "10px",
              padding: "5px",
            }}
          > Download </Button>      
      </div>
      
    );
  }
}

export default Display;