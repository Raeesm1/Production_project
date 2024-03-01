import './App.css';
import Navbar from './navbar.jsx';
import { ApplyDay } from './dates.jsx';
import CalendarGrid from './calendar.tsx';
import { DayTracker } from './dates.jsx';
import chatPage from './chatPage.tsx';
import { BrowserRouter as Router, Route, Link, Switch, Routes, Navigate, createBrowserRouter, RouterProvider, NavLink, createRoutesFromElements }
    from 'react-router-dom';
//import { Router, Route, Link, Switch, Routes, Navigate, createBrowserRouter, RouterProvider, router, BrowserRouter } from 'react-router-dom';
import routeNavbar from './navbar.jsx';
import test, { Private_message } from './chatPage.tsx';
import Test1 from './testPage.tsx';

 

// function route(){
//     createBrowserRouter([
//       {path: './navbar.jsx', element: <Navbar />},
//       {path: './chatPage.tsx', element: <chatPage></chatPage>}
//     ])

//     <Link to="/chatPage">Chat</Link>
// }

function testing(){
  return(
    <>
    <h1>testing router</h1>
    </>
  )
  
}

const routertest = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<Navbar />}>
      <Route index element={<Test1 />} />
      <Route path="chatPage" element={<Private_message />} />
      <Route path="Calendar" element={<CalendarGrid />} />
     </Route>
   ))
    // <Routes>
      
      
    // </Routes>  
      
    
  

    

function App() {
  return (
    <div>
      <RouterProvider router={routertest} />
      
    </div>
   
  );
}

{/* <Router>
      <nav>
        <NavLink to="private_message">Chat Page</NavLink>
      </nav>
    </Router> */}
    
    




      {/* <RouterProvider router={Navbar} /> */}
      {/* <Navbar>
        <Navbar.Brand href="./chatPage.tsx">Chat Page</Navbar.Brand>
      </Navbar> */}
      
      
        {/* <Switch> */}
        {/* <div> */}

    {/* <Router>
      <Routes> */}

      {/* <Switch> */}

      
        {/* <Navbar /> */}

      
            {/* <Routes> */}
            
              {/* <Route exact path="./navbar.jsx" element={<Navbar />}></Route>
              <Route exact path="./chatPage.tsx" element={<chatPage />}></Route> */}
        {/* <Route exact path="/navbar" render={<Navbar />}></Route> */}
              {/* <Route path='./navbar.jsx' render={<Navbar />} /> */}
              {/* <Route exact path="./chatPage.tsx" render={<private_message />}>Chat</Route> */}
        {/* <Route path="/private_message" render={<testing />}></Route> */}
            
              
            {/* </Routes> */}
    {/* </Router> */}
        {/* </div> */}
      {/* <div className='list'>
        <ul>
          <li><Link to="./navbar.jsx" Component={<Navbar />}>Home</Link></li> */}
          {/* <li><Link to="./chatPage.tsx" element={<chatPage />}>Chat</Link></li> */}
          {/* <li><Link to="./navbar.jsx" render={<Navbar />}>Home</Link></li> */}
          {/* <li><Link to="./chatPage.tsx" render={<private_message />}>Chat</Link></li>  */}
          {/* <li><Link to="./chatPage.tsx" Component={<testing />}>Chat</Link></li> 
        </ul>
      </div> */}
        
      
        {/* </Switch> */}
        {/* </Switch> */}
      {/* </Routes> */}
    {/* </Router> */}
      

      {/* <Date /> 
      <Grid /> */}
      

      {/* <CalendarGrid />
      <ApplyDay />
      <DayTracker />    */}
    
    
  


export default App;
