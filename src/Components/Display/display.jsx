import React, {useState} from 'react'
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import './display.css';
import Button from "@mui/material/Button";
import { useLocation } from 'react-router-dom';
// import ResumePdf from '../../Assets/Resume.pdf'

function App() {
  let location = useLocation();
  console.log(location.state);
  var tempno= location.state.tempno;
  console.log(tempno);
  var filename="/Resume"+tempno+".pdf";
  console.log(filename);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);


  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet){
    setPageNumber(prevPageNumber => prevPageNumber + offSet);
  }

  function changePageBack(){
    changePage(-1)
  }

  function changePageNext(){
    changePage(+1)
  }

  return (
    <div className="App">
      <header className="App-header">
      <Document file={filename} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(
              new Array(numPages),
              (el,index) => (
                <Page 
                  key={`page_${index+1}`}
                  pageNumber={index+1}
                />
              )
            )}
          </Document>
          <Button 
          //onClick={handleClick}
            sx={{
              width: "190px",
              height: "60px",
              marginBottom: "10px",
              backgroundColor: "#EE6C4D",
              borderRadius: "10px",
              padding: "5px",
            }}
          > Download </Button>
      </header>
      {/* <center>
        <div>
          <Document file="/Resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(
              new Array(numPages),
              (el,index) => (
                <Page 
                  key={`page_${index+1}`}
                  pageNumber={index+1}
                />
              )
            )}
          </Document>
        </div>
      </center> */}
    </div>
  );
}

export default App;