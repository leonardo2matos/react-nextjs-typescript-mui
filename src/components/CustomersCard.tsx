"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { createTheme } from "@mui/material/styles";
import Box from '@mui/material/Box';


interface CustomersCardProps {
  name: string;
  lastname: string;
  email: string;
  avatar: string;
  className?: string;
}

const theme = createTheme();

const CustomersCard: React.FC<CustomersCardProps> = ({
  name,
  lastname,
  email,
  avatar,
  className,
}) => {
  return (

      <Box sx={{ width:'100%'}} className={className}>
        <Card sx={{bgcolor: 'background.paper', flexGrow: 1, p:2}} className={className}  >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={avatar}>
                {name.charAt(0)}
              </Avatar>
            }
            action={<IconButton aria-label="settings"></IconButton>}
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
      </Box>
  
  );
};

export default CustomersCard;

