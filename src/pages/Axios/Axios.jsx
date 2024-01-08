import axios from 'axios'
import {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import PostCard from "../../component/PostCard/PostCard.jsx";
import Box from "@mui/material/Box";
import {PropagateLoader} from "react-spinners";

export default function Axios() {

    const [loader, setLoader] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        getData([])
    }, []);


    const getData = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setData(response.data)
                setLoader(false)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    const postData = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'user',
            body: 'userBody',
            userId: 1,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const deleteData = () => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/1`)
            .then(response => {
                console.log(`Deleted post with ID ${postIdToDelete}`);
            })
            .catch(error => {
                console.error(error);
            });
    }

    const updateData = () => {
        axios.put('https://jsonplaceholder.typicode.com/posts/1', {
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        })
            .then((response) => {
                // console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <Box>
            {loader ?
                <Box sx={{position:'absolute', top:'50%', left:'50%'}}>
                    <PropagateLoader
                        color="#27ae60"
                        size={35}
                        speedMultiplier={1}
                    />
                </Box>
                :
                <Box>
                    <h1>Axios</h1>
                    <Button onClick={() => postData()} variant="outlined">Post Data</Button>
                    <Button onClick={() => updateData()} variant="outlined">Update Data</Button>
                    <Button onClick={() => deleteData()} variant="outlined">Delete Data</Button>
                    <br/><br/>
                    <Box sx={{display: "flex", flexWrap: 'wrap'}}>
                        {
                            data.map((val, index) => (
                                <PostCard id={val.id} title={val.title} description={val.body}/>
                            ))
                        }
                    </Box>
                </Box>
            }


        </Box>
    )
}