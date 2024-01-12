import Box from "@mui/material/Box";
import {useState} from "react";
import Card from "@mui/material/Card";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import StudentCard from "../../component/StudentCard/StudentCard.jsx";
import StudentGetCard from "../../component/StudentGetCard/StudentGetCard.jsx";

export default function Student() {
    const [data, setData] = useState([])

    const studentDataSave = (val) => {
        const arr = [...data]
        arr.push(val)
        setData(arr)
        console.log(data)
    }
    const studentDataDelete = (index) => {
        const arr = [...data]
        arr.splice(index,1)
        setData(arr)
        console.log(data)
    }

    return (
        <Box>
            <StudentGetCard saveStudent={(val)=> studentDataSave(val) }/>
            <Box sx={{backgroundColor:'#bdc3c7', marginTop:'50px', padding:'10px',  display:'flex', flexWrap:'wrap' }}>
                {
                    data.map((val,index) =>  (
                        <StudentCard
                            key={index}
                            name={val.name}
                            address={val.address}
                            age={val.age}
                            school={val.school}
                            deleteClick={() => studentDataDelete(index)}
                        />
                    ))
                }
            </Box>
        </Box>

    )
}