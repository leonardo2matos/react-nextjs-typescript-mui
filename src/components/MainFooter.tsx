import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FaTiktok } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";


interface FooterItem {
  label: string,
  icon: React.ReactNode
}

const ResponsiveComponent = () => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  const items: FooterItem[] = [
    { label: "Variable width content", icon: <WhatsAppIcon /> },
    { label: "Variable width content", icon: <LinkedInIcon /> },
    { label: "Variable width content", icon: <InstagramIcon /> },
    { label: "Variable width content", icon: <FacebookIcon /> },
    { label: "Variable width content", icon: <FaTiktok/> },
    { label: "Variable width content", icon: <FaDiscord  /> },
  ]
  return (
    <Box
      sx={{
        borderTop: "1px solid #000",
        bottom: 0,
        left: 0,
        right: 0,
        p: 0.75,
        backgroundColor: "#1976d2",
        textAlign: "center",
        position: "fixed",
      }}
    >
      <Grid container spacing={{ xs: 2, md: 3 }} width="100%" mt={0} ml={0}>
        {items.map( (item, i) => {
          return (
            <Grid key={i} item xs={12} md={4} sm={6}>
              {isSmUp ? (
                <Typography >{item.label}</Typography>
              ) : (
                item.icon
              )}
            </Grid>
          )
        })}
        </Grid>
    </Box>
  );
};

export default ResponsiveComponent;
