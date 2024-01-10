import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

export default function StudentCard({name, address, age, school}) {
    return (
        <Box>
            <Card sx={{width: '300px', padding:'10px', margin:'10px'}} variant="outlined">
                Name: {name}  <br/>
                Address: {address} <br/>
                Age: {age} <br/>
                School: {school} <br/>
            </Card>
        </Box>
    )
}