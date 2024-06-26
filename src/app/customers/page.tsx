"use client";
import { useState, useEffect } from "react";
import axios, {AxiosResponse} from "axios";
import Grid from "@mui/material/Grid";
import CustomersCard from "@/components/CustomersCard";

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

  useEffect(() => {
    axios.get<ApiResponse>('https://reqres.in/api/users')
      .then((response: AxiosResponse<ApiResponse>) => {
        const { data } = response.data;
        setCustomers(data);
      });
  }, []);

  return (
    <>
      <h1>Customers</h1>
      <Grid container>
        {customers.map((item, index) => (
          <Grid item xs={12} md={4} key={index}> 
            <CustomersCard
              name={item.first_name}
              lastname={item.last_name}
              email={item.email}
              avatar={item.avatar}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Customers;
