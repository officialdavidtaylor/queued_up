import { ChakraProvider } from '@chakra-ui/react'

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://queued-up.hasura.app/v1/graphql",
  headers: { "x-hasura-admin-secret": "tjF3ZB039fMSk25rlCRn5evfoCjYy4ndrsKU6HPm7FXjA8ZOKztkWSmVaxNYtF9Y" },
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  )
}

export default MyApp
