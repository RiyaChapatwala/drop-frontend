import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { Button } from "@chakra-ui/react";

function PrivacyPolicy(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  function prevPage() {
    const n = pageNumber - 1;
    console.log(n);
    if(n>0) {setPageNumber(n);}
  }
  function nextPage() {
    const n = pageNumber + 1;
    if(n<=numPages) {setPageNumber(n);}
  }


  return (
    <div>
      <Document file={'https://dropsupply.in/api/files/privacyPolicy'} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
      Page {pageNumber} of {numPages}<Button margin={1} onClick={prevPage} >Previous Page</Button><Button margin={1} onClick={nextPage} >Next Page</Button>
      </p>
    </div>
  );
}

export default PrivacyPolicy