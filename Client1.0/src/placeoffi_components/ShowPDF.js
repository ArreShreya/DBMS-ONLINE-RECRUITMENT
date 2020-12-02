import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';


function ShowPDF({id}) {
    const [url,setUrl] = useState("");

    const getPDF = () =>{
        try {
            
            const res =  axios.get(`http://localhost:5000/getPDFS/${id}`,{responseType: 'arraybuffer'}).then((response) => {
                console.log(response)
                const newBlob = new Blob([response.data], {type: "application/pdf"});

      
                const dataUrl = window.URL.createObjectURL(newBlob);
                setUrl(dataUrl);
                //alert("The file is successfully uploaded");
            })

        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getPDF();
       
    }, [])
    return (
        <div>
            
            <div id = "divIdToPrint"></div>
            <Button href = {url} download = "Output.pdf" color = "primary" variant="contained" startIcon = {<GetAppIcon/>}>
            Download Resume
            </Button>
        
           
        </div>
    )
}

export default ShowPDF