import {BrowserRouter, Route, Routes, Link, Router,NavLink, Outlet, useParams} from 'react-router-dom'



const RouterApp = () => (
<BrowserRouter>

    <NavLink to={'/'} title={'Home'} style={navLinkStyles}>Home</NavLink>
    <NavLink to={'/search'} title={'Search'} style={navLinkStyles}>Query</NavLink>
    <NavLink to={'/products'} title={'Products'} style={navLinkStyles}>Products</NavLink>
    <NavLink to={'/about'} title={'About'} style={navLinkStyles}>About</NavLink>
    <NavLink to={'/contact'} title={'Login'} style={navLinkStyles}>Contact</NavLink>

    <Routes>
        <Route  path={'/'}  element={<Home />}  />
        <Route  path={'/search/:query'}  element={<UseParamsAPP />} />
        <Route path={'/products'} element={<Products />} >
            <Route  path={'car'}  element={<CarProducts />} />
            <Route  path={'bike'}  element={<BikeProducts />} />
        </Route>
        <Route  path={'/about'}  element={<About />} />
        <Route  path={'/contact'}  element={<Contacts />} />
    </Routes>

</BrowserRouter>
);

function Home (){

    return <h1>Home</h1>
}

function About (){
    return <h1>About</h1>
}

function Contacts (){
    return <h1>Contacts</h1>
}
function Products(){
    return (
        <>
            <h1>Products</h1>
            <Outlet/>
        </>
    )
}

function CarProducts(){
    return <h1>Car Products</h1>
}

function  BikeProducts(){
    return <h1>Bike Products</h1>
}

function UseParamsAPP(){
    const {query} = useParams();

    return (
        <h1> {query} !</h1>
    )
}

const navLinkStyles = ({ isActive }) => ({
    color: isActive ? '#007bff' : '#333',
    textDecoration: isActive ? 'none' : 'underline',
    fontWeight: isActive ? 'bold' : 'normal',
    padding: '5px 10px'
});

export default RouterApp;