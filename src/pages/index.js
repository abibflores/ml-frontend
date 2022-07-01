import React from "react";
import { Text } from "components/Text";
import { Layout } from "components/Layout";
import { SearchBar } from "components/SearchBar";
import { useQuery } from "react-query";
import { useForm } from "react-hook-form";


import { search } from "services/api";
import { Loader } from "components/Loader";
import { Catalogue } from "components/Catalogue";

const Home = () => {
  const {
    getValues,
    register,
    handleSubmit,
  } = useForm();

  const { search: name } = getValues();

  const { data, refetch, isLoading } = useQuery(
    ['seraches', name],
    search,
    {
      enabled: !!name,
      refetchOnWindowFocus: false,
    }
  );

  return(  
    <Layout>
      <Text variant="big" type="h1">
        Busca un producto 
      </Text>
      <SearchBar action={handleSubmit((data) => refetch())} register={register}/>
      <Catalogue data={data} />
      {isLoading && <Loader />}
    </Layout>
  );
};

export default Home;
