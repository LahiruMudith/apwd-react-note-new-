import Box from "@mui/material/Box";
import {useState} from "react";
import Card from "@mui/material/Card";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import StudentCard from "../../component/StudentCard/StudentCard.jsx";
import StudentGetCard from "../../component/StudentGetCard/StudentGetCard.jsx";

export default function Student() {
    const [data, setData] = useState([])

    const onClick = (student) => {
        const arr = [...data]
        arr.push(student)
        setData(arr)
        console.log(data)
    }

    return (
        <Box>
            <StudentGetCard getStudent={(student) => onClick(student)}/>
            <Box sx={{backgroundColor:'#bdc3c7', marginTop:'50px', padding:'10px',  display:'flex', flexWrap:'wrap' }}>
                {
                    data.map((val,index) =>  (
                        <StudentCard name={val.0}/>
                    ))
                }

            </Box>
        </Box>

    )
}