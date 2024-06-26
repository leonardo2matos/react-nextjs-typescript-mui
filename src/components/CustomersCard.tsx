'use client';
import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import  classNames  from 'classnames'

interface CustomersCardProps {
    name: string;
    lastname: string;
    email: string;
    avatar: string;
  }
  
  const CustomersCard: React.FC<CustomersCardProps> = ({
    name,
    lastname,
    email,
    avatar,
    className,
  }) => {
    const classes= useStyles()

    return (
        <Card className= {classes.root} sx={{ maxWidth: 345 }}>
        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={avatar}>
                R
            </Avatar>
            }
            action={
            <IconButton aria-label="settings">
                
            </IconButton>
            }
            title={`${name} ${lastname}`}
            subheader={email}
        />
        
            <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
            <ShareIcon />
            </IconButton>
        
            
        </Card>
  );
}

export default CustomersCard