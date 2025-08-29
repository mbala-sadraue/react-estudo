import {BrowserRouter, Route, Routes, Link, Router} from 'react-router-dom'



const RouterApp = () => (
<BrowserRouter>

    <Link to={'/'} title={'Home'}>Home</Link>
    <Link to={'/about'} title={'About'}>About</Link>
    <Link to={'/contact'} title={'Login'}>Contact</Link>

    <Routes>
        <Route  path={'/'}  element={<Home />}  />
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


export default RouterApp;