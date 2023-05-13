import './style/App.css';

import Home from './components/Home';
import ExtraInformation from './components/ExtraInformation';
import QualityServices from './components/QualityServices';
import Creativity from './components/Creativity';
import FinancialHelp from './components/FinancialHelp';
import MarkSection from './components/MarkSection';
import Professions from './components/Professions';
import Marketing from './components/Marketing';
import ContactUs from './components/ContactUs';

function App() {

  return (
    <div className="App">
      <Home />
      <ExtraInformation />
      <QualityServices />
      <Creativity />
      <FinancialHelp />
      <MarkSection />
      <Professions />
      <Marketing />
      <ContactUs />
    </div>
  );
}

export default App;
