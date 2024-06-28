"use client";

import MainAppBar from "@/components/MainAppBar";
import MainSection from "@/views/sobre/MainSection";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import MainLayout from "@/layouts/MainLayout";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
}));

const VariableWidthGrid = () => {
  return (
    <Box sx={{ flexGrow: 2, padding: 2, marginTop: 1 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={8} md={6} lg={2}>
          <Item>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "0",
                paddingBottom: "56.25%",
              }}
            >
              <Image
                src="/image/istanbul-backgroundcover.jpg"
                alt="Variable width content"
                layout="fill"
                objectFit="fill"
              />
            </Box>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </div>
          </Item>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={2}>
          <Item>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "0",
                paddingBottom: "56.25%",
              }}
            >
              <Image
                src="/image/istanbul-backgroundcover.jpg"
                alt="xs=6"
                layout="fill"
                objectFit="fill"
              />
            </Box>
              <Typography component="h1" variant="body2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
              </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={2}>
          <Item>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "0",
                paddingBottom: "56.25%",
              }}
            >
              <Image
                src="/image/istanbul-backgroundcover.jpg"
                alt="xs"
                layout="fill"
                objectFit="fill"
              />
            </Box>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </div>
          </Item>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={2}>
          <Item>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "0",
                paddingBottom: "56.25%",
              }}
            >
              <Image
                src="/image/istanbul-backgroundcover.jpg"
                alt="xs"
                layout="fill"
                objectFit="fill"
              />
            </Box>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </div>
          </Item>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={2}>
          <Item>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "0",
                paddingBottom: "56.25%",
              }}
            >
              <Image
                src="/image/istanbul-backgroundcover.jpg"
                alt="xs"
                layout="fill"
                objectFit="fill"
              />
            </Box>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </div>
          </Item>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={2}>
          <Item>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "0",
                paddingBottom: "56.25%",
              }}
            >
              <Image
                src="/image/istanbul-backgroundcover.jpg"
                alt="xs"
                layout="fill"
                objectFit="fill"
              />
            </Box>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default function Sobre() {
  return (
    <MainLayout>
      <MainSection />
      <VariableWidthGrid />
    </MainLayout>
  );
}
