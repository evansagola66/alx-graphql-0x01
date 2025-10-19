import "@/styles/globals.css";
// 'next/app' types may not be available in this environment; use inline typings below
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import React from "react";

const graphqlEndpoint =
  (globalThis as any).process?.env?.NEXT_PUBLIC_GRAPHQL_ENDPOINT ??
  "https://rickandmortyapi.com/graphql";

const client = new ApolloClient({
  link: new HttpLink({ uri: graphqlEndpoint }),
  cache: new InMemoryCache(),
});
export default function App({ Component, pageProps }: { Component: any; pageProps: any }) {
  return React.createElement(
    ApolloProvider,
    { client },
    React.createElement(Component, pageProps)
  );
}