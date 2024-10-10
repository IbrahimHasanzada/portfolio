import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../Layout/MainLayout";
import Service from "../Pages/Service";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
export const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Service />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
        </Route>
    )
)
export default route