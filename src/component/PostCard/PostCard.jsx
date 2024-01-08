import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import {useState} from "react";


export default function PostCard({id, title, description}) {

    return (
        <Card sx={{ maxWidth: 345, margin:"1px" }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {id}
                    </Avatar>
                }
                title={title}
            />

            <CardContent>
                {description}
            </CardContent>
        </Card>
    );
}