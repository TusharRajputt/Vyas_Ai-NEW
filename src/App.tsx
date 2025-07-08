import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import SignIn from './pages/SignIn';

// Product Pages
import Universe from './pages/products/Universe';
import Annotate from './pages/products/Annotate';
import Train from './pages/products/Train';
import Workflows from './pages/products/Workflows';
import Deploy from './pages/products/Deploy';

// Solution Pages
import AerospaceDefense from './pages/solutions/AerospaceDefense';
import Automotive from './pages/solutions/Automotive';
import Construction from './pages/solutions/Construction';
import Government from './pages/solutions/Government';
import Logistics from './pages/solutions/Logistics';
import OilAndGas from './pages/solutions/OilAndGas';
import Safety from './pages/solutions/Safety';
import Transportation from './pages/solutions/Transportation';
import Agriculture from './pages/solutions/Agriculture';
import Banking from './pages/solutions/Banking';
import Food from './pages/solutions/Food';
import Healthcare from './pages/solutions/Healthcare';
import Manufacturing from './pages/solutions/Manufacturing';
import Retail from './pages/solutions/Retail';
import Telecom from './pages/solutions/Telecom';
import Utilities from './pages/solutions/Utilities';

// Developer Pages
import Forum from './pages/developers/Forum';
import Models from './pages/developers/Models';
import Learn from './pages/developers/Learn';
import Webinar from './pages/developers/Webinar';
import Changelog from './pages/developers/Changelog';
import Convert from './pages/developers/Convert';
import Templates from './pages/developers/Templates';
import Playground from './pages/developers/Playground';

// Other Pages
import Pricing from './pages/Pricing';
import Docs from './pages/Docs';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            
            {/* Product Routes */}
            <Route path="/products/universe" element={<Universe />} />
            <Route path="/products/annotate" element={<Annotate />} />
            <Route path="/products/train" element={<Train />} />
            <Route path="/products/workflows" element={<Workflows />} />
            <Route path="/products/deploy" element={<Deploy />} />
            
            {/* Solution Routes */}
            <Route path="/solutions/aerospace-defense" element={<AerospaceDefense />} />
            <Route path="/solutions/automotive" element={<Automotive />} />
            <Route path="/solutions/construction" element={<Construction />} />
            <Route path="/solutions/government" element={<Government />} />
            <Route path="/solutions/logistics" element={<Logistics />} />
            <Route path="/solutions/oil-and-gas" element={<OilAndGas />} />
            <Route path="/solutions/safety" element={<Safety />} />
            <Route path="/solutions/transportation" element={<Transportation />} />
            <Route path="/solutions/agriculture" element={<Agriculture />} />
            <Route path="/solutions/banking" element={<Banking />} />
            <Route path="/solutions/food" element={<Food />} />
            <Route path="/solutions/healthcare" element={<Healthcare />} />
            <Route path="/solutions/manufacturing" element={<Manufacturing />} />
            <Route path="/solutions/retail" element={<Retail />} />
            <Route path="/solutions/telecom" element={<Telecom />} />
            <Route path="/solutions/utilities" element={<Utilities />} />
            
            {/* Developer Routes */}
            <Route path="/developers/forum" element={<Forum />} />
            <Route path="/developers/models" element={<Models />} />
            <Route path="/developers/learn" element={<Learn />} />
            <Route path="/developers/webinar" element={<Webinar />} />
            <Route path="/developers/changelog" element={<Changelog />} />
            <Route path="/developers/convert" element={<Convert />} />
            <Route path="/developers/templates" element={<Templates />} />
            <Route path="/developers/playground" element={<Playground />} />
            
            {/* Other Routes */}
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;