import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import deleteIcon from '../../assets/deleteIcon.png'
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";

export default function StudentCard({name, address, age, school, deleteClick}) {
    return (
        <Box>
            <Card sx={{width: '300px', padding:'10px', margin:'10px'}} variant="outlined">
                Name: {name}  <br/>
                Address: {address} <br/>
                Age: {age} <br/>
                School: {school} <br/>
                <IconButton
                    aria-label="delete"
                    size="small"
                    sx={{position:'absolute', marginLeft:'250px', marginTop:'-25px'}}
                    onClick={deleteClick}
                >
                    <DeleteIcon fontSize="inherit" />
                </IconButton>

            </Card>
        </Box>
    )
}