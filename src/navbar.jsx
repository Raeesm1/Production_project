import React from "react";
import chatPage, { private_message } from './chatPage.tsx';
import App from './App.js';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Routes, Navigate, createBrowserRouter, BrowserRouter, NavLink, Outlet }
    from 'react-router-dom';
import { ApplyDay } from "./dates.jsx";




// export function route(){

//     <div>
//             <Router>
//                 <Routes>
//                     <Route exact path="./navbar.jsx" element={<Navbar />}></Route>
//                     <Route exact path="./chatPage.tsx" element={<chatPage />}></Route>
//                 </Routes>
//                 <div className='list'>
//                     <ul>
//                         <li><Link to="./App.js" element={<App />}></Link></li>
//                         <li><Link to="./chatPage.tsx">Chat</Link></li>
            
//                     </ul>
//                 </div>
//             </Router>
//         </div>

//     createBrowserRouter([
//         {path: './App.js', element: <App></App>},
//         {path: './chatPage.tsx', element: <chatPage></chatPage>}
//     ])

//     // <Link to="/chatPage">Chat</Link>
// }


// export function routeNavbar()
// {
//     createBrowserRouter([
//       {path: '/navbar.jsx', element: <Navbar />},
//       {path: './chatPage.tsx', element: chatPage}
//     ])

//     // <Link to="/chatPage">Chat</Link>
// }

export function Navbar() 
{

    return(
        <>
        {/* <h1>hello</h1> */}
        {/* <BrowserRouter>
            <div>
                {/* <Router> */}
                    {/* <Routes>
                        <Route exact path="./navbar.jsx" element={<Navbar />}></Route>
                        <Route exact path="./chatPage.tsx" element={<chatPage />}></Route>
                    </Routes> */} 
                {/* </Router> */}
            {/* </div> */}


            <div className='list'>
                <ApplyDay />
                <ul>
                    {/* <li><Link to="./navbar.jsx" element={<test1 />}>Home</Link></li>
                    <li><Link to="./chatPage.tsx" element={<private_message />}>Chat</Link></li> */}
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="chatPage">Chat</NavLink></li>
                    <li><NavLink to="Calendar">Calendar</NavLink></li>
                </ul>
            </div>
            <main>
                <Outlet />
            </main>


        {/* </BrowserRouter> */}
        
        {/* //     </Router> */}
        {/* // </div> */}
        </>
    );
}

export default Navbar;
