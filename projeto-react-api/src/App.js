import { ChakraProvider } from "@chakra-ui/react"
import { createGlobalStyle } from "styled-components";
import GlobalState from "./Global/GlobalState";
import Router from "./Routes/Router";

const GlobalStyle = createGlobalStyle`
    body {
      font-family: 'Poppins', sans-serif;
    }
  `

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <GlobalState>
          <GlobalStyle />
          <Router />
        </GlobalState>
      </ChakraProvider>
    </div>
  );
}

export default App;
