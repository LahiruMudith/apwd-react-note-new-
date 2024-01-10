import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {TextField} from "@mui/material";
import Card from "@mui/material/Card";
import {useState} from "react";

export default function StudentGetCard({getStudent}) {
    const [name, setName] = useState( "")
    const [address, setAddress] = useState( "")
    const [age, setAge] = useState( "")
    const [school, setSchool] = useState( "")

    const onChangeName = (event) => {
        setName(event.target.value)
    }
    const onChangeAddress = (event) => {
        setAddress(event.target.value)
    }
    const onChangeAge = (event) => {
        setAge(event.target.value)
    }
    const onChangeSchool = (event) => {
        setSchool(event.target.value)
    }

    const getStudentCard = () => {
        const student = [name, address, age, school]
        getStudent(student)
    }

    return (
        <Box sx={{display:'flex', justifyContent:'center'}}>
            <Card variant="outlined" sx={{width: '540px', padding:'20px'}}>
                <TextField
                    sx={{marginBottom:'10px'}}
                    id="outlined-basic"
                    fullWidth
                    label="Name"
                    variant="outlined"
                    onChange={onChangeName}
                />
                <br/>
                <TextField
                    sx={{marginBottom:'10px'}}
                    id="outlined-basic"
                    fullWidth
                    label="Address"
                    variant="outlined"
                    onChange={onChangeAddress}
                />
                <br/>
                <TextField
                    sx={{marginBottom:'10px'}}
                    id="outlined-basic"
                    fullWidth
                    label="Age"
                    variant="outlined"
                    onChange={onChangeAge}
                />
                <br/>
                <TextField
                    sx={{marginBottom:'10px'}}
                    id="outlined-basic"
                    fullWidth
                    label="School"
                    variant="outlined"
                    onChange={onChangeSchool}
                />
                <br/>
                <br/>
                <Button
                    sx={{marginLeft:'30%'}}
                    variant="contained"
                    color="primary"
                    onClick={() => getStudentCard()}
                >
                    Get Student Card
                </Button>
            </Card>
        </Box>
    )
}