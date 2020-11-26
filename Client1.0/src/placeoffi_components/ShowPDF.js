import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"

//import { jsPDF } from "jspdf";

function ShowPDF() {
    const [url,setUrl] = useState("");

    const getPDF = () =>{
        try {
            
            const res =  axios.get("http://localhost:5000/getPDFS",{responseType: 'arraybuffer'}).then((response) => {
                console.log(response)
                const newBlob = new Blob([response.data], {type: "application/pdf"});

               // const input = document.getElementById('divIdToPrint');

             /*   {{
                html2canvas(input)
                .then((canvas) => {
                    const imgData = canvas.toDataURL(re);
                    const pdf = new jsPDF();
                    pdf.text(response.data, '.json', 0, 0);
                    pdf.save("download.pdf");  
                
  });
                }}*/
                const dataUrl = window.URL.createObjectURL(newBlob);
                setUrl(dataUrl);
                alert("The file is successfully uploaded");
            })

        

            
           // const jsonData =  res.json();

            //console.log(jsonData)


        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getPDF();
       
    }, [])
    return (
        <div>
            <h2>GET PDFS</h2>
            <div id = "divIdToPrint"></div>
            <a href = {url}> pdf file </a>
            {/* <Link to={'url'}><button className="btn btn-success">PDF FILE</button></Link> */}
        </div>
    )
}

export default ShowPDF
