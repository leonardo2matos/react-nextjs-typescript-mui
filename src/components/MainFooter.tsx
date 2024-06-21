import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ResponsiveComponent = () => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

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
      <Grid container spacing={{ xs: 2, md: 3 }} width="100%" mt={0} ml={0}  >
        <Grid item xs={12} md={4} sm={6}>
          {isSmUp ? (
            <Typography >Variable width content</Typography>
          ) : (
            <WhatsAppIcon />
          )}
        </Grid>
          <Grid item xs={12} md={4}  sm={6}>
            {isSmUp ? (
              <Typography>Variable width content</Typography>
            ) : (
              <WhatsAppIcon />
            )}
          </Grid>
          <Grid item xs={12} md={4}  sm={6}>
            {isSmUp ? (
              <Typography>Variable width content</Typography>
            ) : (
              <WhatsAppIcon />
            )}
          </Grid>
          <Grid item xs={12} md={4}  sm={6}>
            {isSmUp ? (
              <Typography>Variable width content</Typography>
            ) : (
              <WhatsAppIcon />
            )}
          </Grid>
          <Grid item xs={12} md={4}  sm={6}>
            {isSmUp ? (
              <Typography>Variable width content</Typography>
            ) : (
              <WhatsAppIcon />
            )}
          </Grid>
          <Grid item xs={12} md={4}  sm={6}>
            {isSmUp ? (
              <Typography>Variable width content</Typography>
            ) : (
              <WhatsAppIcon />
            )}
          </Grid>
        </Grid>
    </Box>
  );
};

export default ResponsiveComponent;
