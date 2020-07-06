import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { PokemonContainer } from "./containers/PokemonContainer";

export function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon.now.sh",
  });
  return (
    <ApolloProvider client={client}>
      <main>
        <PokemonContainer />
      </main>
    </ApolloProvider>
  );
}
