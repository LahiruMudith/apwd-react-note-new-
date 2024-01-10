import Box from "@mui/material/Box";
import {useState} from "react";
import Card from "@mui/material/Card";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";

export default function Student() {

    return (
        <Box>
            <Box sx={{display:'flex', justifyContent:'center'}}>
                <Card variant="outlined" sx={{width: '540px',padding:'20px'}}>
                    <TextField sx={{marginBottom:'10px'}} id="outlined-basic" fullWidth label="Name" variant="outlined"/> <br/>
                    <TextField sx={{marginBottom:'10px'}} id="outlined-basic" fullWidth label="Address" variant="outlined"/> <br/>
                    <TextField sx={{marginBottom:'10px'}} id="outlined-basic" fullWidth label="Age" variant="outlined"/> <br/>
                    <TextField sx={{marginBottom:'10px'}} id="outlined-basic" fullWidth label="School" variant="outlined"/> <br/>
                    <br/>
                    <Button sx={{marginLeft:'30%'}} variant="contained" color="primary">Get Student Card</Button>
                </Card>
            </Box>
            <Box sx={{backgroundColor:'#bdc3c7', marginTop:'50px', padding:'20px',  display:'flex', flexWrap:'wrap' }}>
                <Card sx={{width: '300px', padding:'10px', margin:'10px'}} variant="outlined">
                    Name: <br/>
                    Address: <br/>
                    Age: <br/>
                    School: <br/>
                </Card>
                <Card sx={{width: '300px', padding:'10px', margin:'10px'}} variant="outlined">
                    Name: <br/>
                    Address: <br/>
                    Age: <br/>
                    School: <br/>
                </Card>
                <Card sx={{width: '300px', padding:'10px', margin:'10px'}} variant="outlined">
                    Name: <br/>
                    Address: <br/>
                    Age: <br/>
                    School: <br/>
                </Card>
            </Box>
        </Box>

    )
}