import Navbar from 'Navbar';
import { Provider } from "react-redux";
import {Store} from "../store/Store"

function MyApp({ Component, pageProps }) {
          return (
            <>
            <Provider store={Store}>
             <Navbar />
             <Component {...pageProps} />
             </Provider>
             </>
             )
        }
        

        
export default MyApp