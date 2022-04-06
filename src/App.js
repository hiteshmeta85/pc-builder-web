import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
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

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Landing/>}/>
                <Route exact path='/login' element={<Login/>}/>
                <Route exact path='/registration' element={<Registration/>}/>
                <Route exact path='/contact-us' element={<ContactUs/>}/>
                <Route exact path='/recommendation' element={<Recommendation/>}/>
                <Route exact path='/detailed-pc-info/:id' element={<DetailedPCInfo/>}/>
                <Route exact path='/build-custom-pc' element={<BuildCustomPC/>}/>
                <Route exact path='/order-history' element={<OrderHistory/>}/>
                <Route exact path='/cart' element={<Cart/>}/>
                <Route exact path='/checkout' element={<Checkout/>}/>
            </Routes>
        </Router>
    );
}

export default App;
