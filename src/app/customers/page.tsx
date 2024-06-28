"use client";

import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import Grid from "@mui/material/Grid";
import CustomersCard from "@/components/CustomersCard";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { CircularProgress, Typography } from "@mui/material";

// Definindo a interface para o tipo de cada item de customer
interface Customer {
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

// Definindo a interface para a resposta da API
interface ApiResponse {
  data: Customer[];
}

// Componente Customers em TypeScript
const Customers: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {

    axios.get<ApiResponse>('https://reqres.in/api/users')
      .then((response: AxiosResponse<ApiResponse>) => {
        const { data } = response.data;
        setCustomers(data);
      })
      .catch((err: any) => {
        console.log(err)
      })
      .finally(()=> {
        setLoading(false)
      });

  }, []);

  const theme = createTheme();

  return (
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 3 }}>
        <Typography component="h1" variant="h3">Customers</Typography>

        {loading && (
          <CircularProgress />
        )}
        <Grid 
          container 
          spacing={2} 
          justifyContent="center"
        >
          {customers.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CustomersCard
                name={item.first_name}
                lastname={item.last_name}
                email={item.email}
                avatar={item.avatar}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
  );
};

export default Customers;
