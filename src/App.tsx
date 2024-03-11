import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "styles/GlobalStyles";
import Layout from "components/Layout/Layout";

// Pages
import Home from "pages/Home/Home";
import About from "pages/About/About";
import Users from "pages/Users/Users";
import Clients from "pages/Clients/Clients";
import LifferEssen from "pages/Clients/LieferEssen/LifferEssen";
import TechnoPlus from "pages/Clients/TechnoPlus/TechnoPlus";
import WorkSpaceStudio from "pages/Clients/WorkSpaceStudio/WorkSpaceStudio";

// Lessons
import Lesson20 from "lessons/Lesson20/Lesson20";
import Lesson21 from "lessons/lesson21/Lesson21";
import Lesson22 from "lessons/Lesson 22/Lesson22";
import Lesson23 from "lessons/Lesson 23/Lesson23";
import Lesson24 from "lessons/Lesson 24/Lesson24";
import Lesson25 from "lessons/Lesson25";

// Homeworks
import HomeWork20 from "homeworks/Homework20";
import Homework21 from "homeworks/Homework21";
import Homework22 from "homeworks/Homework22";
import Homework23 from "homeworks/homework23";
import Homework24 from "homeworks/Homework24";
import Homework25 from "homeworks/Homework25";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element="Page Not Found" />
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/lifferessen" element={<LifferEssen />} />
          <Route path="/clients/technoplus" element={<TechnoPlus />} />
          <Route path="/clients/workspacetudio" element={<WorkSpaceStudio />} />
        </Routes>
      </Layout>
      {/* <Lesson20 /> */}
      {/* <Lesson21 /> */}
      {/* <Lesson22 /> */}
      {/* <Lesson23 /> */}
      {/* <Lesson24 /> */}
      {/* <Lesson25 /> */}
      {/* <Homework20 /> */}
      {/* <Homework21 /> */}
      {/* <Homework22 /> */}
      {/* <Homework23 /> */}
      {/* <Homework24 /> */}
      {/* <Homework25 /> */}
    </BrowserRouter>
  );
}

export default App;
