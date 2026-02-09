import "./styles/style.css";

import Home from "./pages/Home";

import Body from "./pages/Body";

import Subject from "./pages/subject/Subject";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";

import Login from "./pages/Login";

import Pdfs from "./pages/Pdfs";

import Pdf from "./pages/Pdf";

import Write from "./pages/Write";

import Contact from "./pages/Contact";

import About from "./pages/About";




function App() {


  return (

    <>


      <Router>

        <Routes>

          <Route exact path="/" element={<Home />}>

            <Route index element={<Body />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/about" element={<About />} />

            <Route path="/pdfs" element={<Pdfs />} />

            <Route path="/pdf/:id" element={<Pdf />} />

            <Route path="/subject" element={<Subject />} />

            <Route path="/upload" element={<Write />} />

            <Route path="/edit" element={<Write />} />

          </Route>

          <Route path="/signup" element={<Signup />} />

          <Route path="/login" element={<Login />} />


        </Routes>

      </Router>

    </>

  );

}

export default App;