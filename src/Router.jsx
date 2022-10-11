import { Route, Routes } from "react-router-dom";
import { Home, AboutUs, Connect, Profile, PageNotFound, Registration } from "./components";

export default function Router() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Connect" element={<Connect />} />
                <Route path="/Registration" element={<Registration />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    )
} 