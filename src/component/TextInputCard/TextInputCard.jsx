import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import * as React from "react";
import Box from "@mui/material/Box";
import {useState} from "react";

export default function textInputCard() {
    const [id, setId] = useState("")
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const onChangeId = (event) => {
        setId(event.target.value)
    }
    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }
    const onChangeBody = (event) => {
        setBody(event.target.value)
    }

    const onClick = () => {
        console.log(id)
        console.log(title)
        console.log(body)
    }

    return (
        <Box>
            <Box sx={{width:'400px', position:'relative', left:'35%'}}>
                <TextField onChange={onChangeId} sx={{width:'400px', marginTop:'10px'}} id="outlined-basic" label="Id" variant="outlined"/>
                <br/>
                <TextField onChange={onChangeTitle}  sx={{width:'400px', marginTop:'10px'}} id="outlined-basic" label="Title" variant="outlined"/>
                <br/>
                <TextField onChange={onChangeBody}  sx={{width:'400px', marginTop:'10px'}} id="outlined-basic" label="Body" variant="outlined"/>
                <br/>
                <Button  sx={{marginTop:'5px', position:'relative', left:'35%'}} variant="contained" onClick={onClick}>
                    Submit
                </Button>
            </Box>
        </Box>

    )
}