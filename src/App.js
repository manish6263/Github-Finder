// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Footer from './components/layout/Footer';
// import Navbar from "./components/layout/Navbar";
// import Home from './pages/Home';
// import About from './pages/About';
// import User from './pages/User';
// import NotFound from './pages/NotFound';
// import { GithubProvider } from './context/github/GithubContext';
// import { AlertProvider } from './context/alert/AlertContext';
// import Alert from './components/layout/Alert';


// function App() {
//   return (
//     <GithubProvider>
//       <AlertProvider>
//         <Router>
//           <div className="flex flex-col justify-between h-screen">
//             <Navbar title='Github Finder' />
//             <main className='container mx-auto px-3 pb-12'>
//               <Alert />
//               <Routes>
//                 <Route exact path='/' element={<Home />} />
//                 <Route exact path='/about' element={<About />} />
//                 <Route exact path='/user/:login' element={<User />} />
//                 <Route exact path='/notfound' element={<NotFound />} />
//                 <Route exact path='/*' element={<NotFound />} />
//               </Routes>
//             </main>
//             <Footer />
//           </div>
//         </Router>
//       </AlertProvider>
//     </GithubProvider>
//   );
// }

// export default App;

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Alert from "./components/layout/Alert";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import { AlertProvider } from "./context/alert/AlertContext";
import { GithubProvider } from "./context/github/GithubContext";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import User from "./pages/User";

const App = () => {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar title="Github Finder" />
            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/user/:login' element={<User />} />
                <Route exact path='/notfound' element={<NotFound />} />
                <Route exact path='/*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  )
}

export default App;