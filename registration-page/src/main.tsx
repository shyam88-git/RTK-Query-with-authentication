
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {store} from "./redux/store.ts";
import { Provider } from 'react-redux';
import './index.css'
import {ThemeProvider} from 'styled-components';
import { GlobalStyle } from './GlobalStyle.tsx';

interface Theme {
  colors: {
    heading: string;
    text: string;
    white: string;
    black: string;
    helper: string;
    bg: string;
    footer_bg: string;
    btn: string;
    border: string;
    hr: string;
    gradient: string;
    shadow: string;
  };
}
const theme:Theme={

  colors:{

    heading: 'rgb(24 24 29)',
    text: 'rgb(24 24 29)',
    white: '#fff',
    black: '#000',
    helper: '#182ce0',
    bg: 'rgb(173, 216, 230)',
    footer_bg: '#8490ff',
    btn: 'rgb(98 84 243)',
    border: 'rgba(98,84,243,0.5)',
    hr: '#ffffff',
    gradient: 'linear-gradient(0deg,rgb(132 144 255) 0%, rgb(98 189 252)100%)',
    shadow: '0 4px 8px rgba(98, 94, 94, 0.1)',
  },
  
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Provider store={store}>
        <App/>
      </Provider>


    </ThemeProvider>
)
