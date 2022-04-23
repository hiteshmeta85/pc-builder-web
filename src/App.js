import {BrowserRouter, Route} from "react-router-dom";
import Landing from "./routes/Landing";
import Login from "./routes/Login";
import Registration from "./routes/Registration";
import ContactUs from "./routes/ContactUs";
import DetailedPCInfo from "./routes/DetailedPCInfo";
import BuildCustomPC from "./routes/BuildCustomPC";
import OrderHistory from "./routes/OrderHistory";
import Cart from "./routes/Cart";
import Checkout from "./routes/Checkout";
import Recommendation from "./routes/Recommendation";
import {ChakraProvider, theme} from "@chakra-ui/react";
import httpClient from "./utilities/httpClient";
import {useState} from "react";
import Header from "./components/Header";
import PreviousQueries from "./routes/PreviousQueries";


const checkSession = async setIsLoggedIn => {
    try {
        let result = await httpClient({
            method: 'GET',
            url: `${process.env.REACT_APP_API_HOST}/user/session`,
        });
        if (result) {
            return setIsLoggedIn(true);
        }
        return setIsLoggedIn(false);
    } catch (err) {
        return setIsLoggedIn(false);
    }
};

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    checkSession(setIsLoggedIn);

    return (
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                <Route exact path='/'>
                    <Landing/>
                </Route>
                <Route exact path='/login'>
                    <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                </Route>
                <Route exact path='/registration'>
                    <Registration isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                </Route>
                <Route exact path='/contact-us'>
                    <ContactUs isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                </Route>
                <Route exact path='/previous-queries'>
                    <PreviousQueries isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                </Route>
                <Route exact path='/recommendation'>
                    <Recommendation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                </Route>
                <Route exact path='/detailed-pc-info/:id'>
                    <DetailedPCInfo isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                </Route>
                <Route exact path='/build-custom-pc'>
                    <BuildCustomPC isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                </Route>
                <Route exact path='/order-history'>
                    <OrderHistory isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                </Route>
                <Route exact path='/cart'>
                    <Cart isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                </Route>
                <Route exact path='/checkout'>
                    <Checkout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                </Route>
            </BrowserRouter>
        </ChakraProvider>
    );
}

export default App;
