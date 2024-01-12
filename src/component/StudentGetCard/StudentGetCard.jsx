import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {TextField} from "@mui/material";
import Card from "@mui/material/Card";
import {useState} from "react";

export default function StudentGetCard({saveStudent}) {
    const [name, setName] = useState( "")
    const [address, setAddress] = useState( "")
    const [age, setAge] = useState( "")
    const [school, setSchool] = useState( "")


    const getStudentCard = () => {
        saveStudent({name: name, address:address, age:age, school:school})
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
                    onChange={(val) =>setName(val.target.value)}
                />
                <br/>
                <TextField
                    sx={{marginBottom:'10px'}}
                    id="outlined-basic"
                    fullWidth
                    label="Address"
                    variant="outlined"
                    onChange={(val) => setAddress(val.target.value)}
                />
                <br/>
                <TextField
                    sx={{marginBottom:'10px'}}
                    id="outlined-basic"
                    fullWidth
                    label="Age"
                    variant="outlined"
                    onChange={(val) => setAge(val.target.value)}
                />
                <br/>
                <TextField
                    sx={{marginBottom:'10px'}}
                    id="outlined-basic"
                    fullWidth
                    label="School"
                    variant="outlined"
                    onChange={(val) => setSchool(val.target.value)}

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