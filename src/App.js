import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Nepali12 from './Components/Nepali12/Nepali12';
import Nepali11 from './Components/Nepali11/Nepali11';
import English12 from './Components/English12/English12';
import English11 from './Components/English11/English11';
import Criticalthinking from './Components/English12/Eng12_contex/Criticalthinking';
import Family from './Components/English12/Eng12_contex/Family';
import Education from './Components/English12/Eng12_contex/Education';
import Humour from './Components/English12/Eng12_contex/Humour';
import Moneyandeconomy from './Components/English12/Eng12_contex/Moneyandeconomy';
import Sports from './Components/English12/Eng12_contex/Sports';
import Technology from './Components/English12/Eng12_contex/Technology';
import HumanCulture from './Components/English12/Eng12_contex/HumanCulture';
import Ecologyandenvironment from './Components/English12/Eng12_contex/Ecologyandenvironment';
import Careeropportunities from './Components/English12/Eng12_contex/Careeropportunities';
import Hobbies from './Components/English12/Eng12_contex/Hobbies';
import Animalworld from './Components/English12/Eng12_contex/Animalworld';
import Humanrights from './Components/English12/Eng12_contex/Humanrights';
import Leisureandentertainment from './Components/English12/Eng12_contex/Leisureandentertainment';
import History from './Components/English12/Eng12_contex/History';
import Fantasy from './Components/English12/Eng12_contex/Fantasy';
import Warandpeace from './Components/English12/Eng12_contex/Warandpeace';
import Musicandcreation from './Components/English12/Eng12_contex/Musicandcreation';
import Migrationanddiaspora from './Components/English12/Eng12_contex/Migrationanddiaspora';
import Powerandpolitics from './Components/English12/Eng12_contex/Powerandpolitics';
import Neighbours from './Components/English12/Eng12_contex/Neighbours';
import Arespectablewomen from './Components/English12/Eng12_contex/Arespectablewomen';
import Adevotedson from './Components/English12/Eng12_contex/Adevotedson';
import Thetreasureintheforest from './Components/English12/Eng12_contex/Thetreasureintheforest';
import Myoldhome from './Components/English12/Eng12_contex/Myoldhome';
import Thehalfclosedeyes from './Components/English12/Eng12_contex/Thehalfclosedeyes';
import Averyoldmanwith from './Components/English12/Eng12_contex/Averyoldmanwith';
import Aday from './Components/English12/Eng12_contex/Aday';
import Everymorningiwake from './Components/English12/Eng12_contex/Everymorningiwake';
import Iwasmyownroute from './Components/English12/Eng12_contex/Iwasmyownroute';
import Theawakeningage from './Components/English12/Eng12_contex/Theawakeningage';
import Softstorm from './Components/English12/Eng12_contex/Softstorm';
import Onlibraries from './Components/English12/Eng12_contex/Onlibraries';
import Marriagesasasocialinstitution from './Components/English12/Eng12_contex/Marriagesasasocialinstitution';
import Amatterofhusbands from './Components/English12/Eng12_contex/Amatterofhusbands';
import Facingdeath from './Components/English12/Eng12_contex/Facingdeath';
import Thebull from './Components/English12/Eng12_contex/Thebull';
import Aamakosapana from './Components/Nepali12/Nep12_contex/Aamakosapana';
import Birahinidamayanti from './Components/Nepali12/Nep12_contex/Birahinidamayanti';
import Ghanaghasya from './Components/Nepali12/Nep12_contex/Ghanaghasya';
import Byabasayikpatra from './Components/Nepali12/Nep12_contex/Byabasayikpatra';
import Ekchihan from './Components/Nepali12/Nep12_contex/Ekchihan';
import Stephenwilliamhawking from './Components/Nepali12/Nep12_contex/Stephenwilliamhawking';
import Hamilaibolauchahimchuli from './Components/Nepali12/Nep12_contex/Hamilaibolauchahimchuli';
import Matrittwo from './Components/Nepali12/Nep12_contex/Matrittwo';
import Gorkhe from './Components/Nepali12/Nep12_contex/Gorkhe';
import Nepalipahichan from './Components/Nepali12/Nep12_contex/Nepalipahichan';
import Sahakaari from './Components/Nepali12/Nep12_contex/Sahakaari';
import Alltheworldsastage from './Components/English11/Eng11_contex/Alltheworldsastage';
import Anastrologersday from './Components/English11/Eng11_contex/Anastrologersday';
import Aredredrose from './Components/English11/Eng11_contex/Aredredrose';
import Artsandcreations from './Components/English11/Eng11_contex/Artsandcreations';
import Asunnymorning from './Components/English11/Eng11_contex/Asunnymorning';
import Careerandentrepreneurship from './Components/English11/Eng11_contex/Careerandentrepreneurship';
import Civilpeace from './Components/English11/Eng11_contex/Civilpeace';
import Communication from './Components/English11/Eng11_contex/Communication';
import Coronasays from './Components/English11/Eng11_contex/Coronasays';
import Criticalthinking11 from './Components/English11/Eng11_contex/Criticalthinking';
import Democracyandhumanrights from './Components/English11/Eng11_contex/Democracyandhumanrights';
import Ecologyanddevelopment from './Components/English11/Eng11_contex/Ecologyanddevelopment';
import Educationandhumanity from './Components/English11/Eng11_contex/Educationandhumanity';
import Fantasy11 from './Components/English11/Eng11_contex/Fantasy11';
import Globalisationanddiaspora from './Components/English11/Eng11_contex/Globalisationanddiaspora';
import Godseesthetruthbutwaits from './Components/English11/Eng11_contex/Godseesthetruthbutwaits';
import Healthandexercise from './Components/English11/Eng11_contex/Healthandexercise';
import Historyandculture from './Components/English11/Eng11_contex/Historyandculture';
import Homelifeandfamilyrelationship from './Components/English11/Eng11_contex/Homelifeandfamilyrelationship';
import Howtolivebeforeyoudie from './Components/English11/Eng11_contex/Howtolivebeforeyoudie';
import Humourandsatire from './Components/English11/Eng11_contex/Humourandsatire';
import Immigrationandidentity from './Components/English11/Eng11_contex/Immigrationandidentity';
import Lifeandlove from './Components/English11/Eng11_contex/Lifeandlove';
import Mediaandsociety from './Components/English11/Eng11_contex/Mediaandsociety';
import Powerandpolitics11 from './Components/English11/Eng11_contex/Powerandpolitics';
import Refund from './Components/English11/Eng11_contex/Refund';
import Scienceandtechnology from './Components/English11/Eng11_contex/Scienceandtechnology';
import Scientificresearch from './Components/English11/Eng11_contex/Scientificresearch';
import Sharingtradition from './Components/English11/Eng11_contex/Sharingtradition';
import Thegiftinwartime from './Components/English11/Eng11_contex/Thegiftinwartime';
import Theovalportrait from './Components/English11/Eng11_contex/Theovalportrait';
import Theselfishgiant from './Components/English11/Eng11_contex/Theselfishgiant';
import Thewish from './Components/English11/Eng11_contex/Thewish';
import Travelandtourism from './Components/English11/Eng11_contex/Travelandtourism';
import Trifles from './Components/English11/Eng11_contex/Trifles';
import Twolittlesoldiers from './Components/English11/Eng11_contex/Twolittlesoldiers';
import Warandpeace11 from './Components/English11/Eng11_contex/Warandpeace';
import Whatirequirefromlife from './Components/English11/Eng11_contex/Whatirequirefromlife';
import Whatispoverty from './Components/English11/Eng11_contex/Whatispoverty';
import Whoareyoulittlei from './Components/English11/Eng11_contex/Whoareyoulittlei';

import Birpurkha from './Components/Nepali11/Nep11_contex/Birpurkha';
import Gaukomaya from './Components/Nepali11/Nep11_contex/Gaukomaya';
import Sanskritikonayayatra from './Components/Nepali11/Nep11_contex/Sanskritikonayayatra';
import Yogmaya from './Components/Nepali11/Nep11_contex/Yogmaya';
import Sathilaichithi from './Components/Nepali11/Nep11_contex/Sathilaichithi';
import Tyoferifarkala from './Components/Nepali11/Nep11_contex/Tyoferifarkala';
import Paryaparyatankasambhabanaraayam from './Components/Nepali11/Nep11_contex/Paryaparyatankasambhabanaraayam';
import Lauaayotajakhabar from './Components/Nepali11/Nep11_contex/Lauaayotajakhabar';
import Safaltakokatha from './Components/Nepali11/Nep11_contex/Safaltakokatha';
import Krishisalamaekdin from './Components/Nepali11/Nep11_contex/Krishisalamaekdin';
import Raravraman from './Components/Nepali11/Nep11_contex/Raravraman';
import Jalsrotraurja from './Components/Nepali11/Nep11_contex/Jalsrotraurja';
const App = () => {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ticolo" element={<HomePage />} />
        <Route path="/nep12" element={<Nepali12 />} />
        <Route path="/nep11" element={<Nepali11 />} />
        <Route path="/eng12" element={<English12 />} />
<Route path="/eng11" element={<English11 />} />
        <Route path="/criticalthinking" element={<Criticalthinking />} />
        <Route path="/education" element={<Education />} />
        <Route path="/family" element={<Family />} />
        <Route path="/humour" element={<Humour />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/humanculture" element={<HumanCulture />} />
        <Route path="/ecologyandenvironment" element={<Ecologyandenvironment />} />
        <Route path="/moneyandeconomy" element={<Moneyandeconomy />} />
        <Route path="/careeropportunities" element={<Careeropportunities />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/animalworld" element={<Animalworld />} />
        <Route path="/history" element={<History />} />
        <Route path="/humanrights" element={<Humanrights />} />
        <Route path="/leisureandentertainment" element={<Leisureandentertainment />} />
        <Route path="/fantasy" element={<Fantasy />} />
        <Route path="/warandpeace" element={<Warandpeace />} />
        <Route path="/musicandcreation" element={<Musicandcreation />} />
        <Route path="/migrationanddiaspora" element={<Migrationanddiaspora />} /> 
        <Route path="/powerandpolitics" element={<Powerandpolitics />} />
        <Route path="/neighbour" element={<Neighbours />} />
        <Route path="/arespectablewoman" element={<Arespectablewomen />} />
        <Route path="/adevotedson" element={<Adevotedson />} />
        <Route path="/the-treasure-in-the-forest" element={<Thetreasureintheforest />} />
        <Route path="/my-old-home" element={<Myoldhome />} />
        <Route path="/the-half-closed-eyes" element={<Thehalfclosedeyes />} />
        <Route path="/a-very-old-man-with-enormous-wings" element={<Averyoldmanwith />} />
        <Route path="/a-day" element={<Aday />} />
        <Route path="/every-morning-i-wake" element={<Everymorningiwake />} />
        <Route path="/i-was-my-own-route" element={<Iwasmyownroute />} />
        <Route path="/the-awakening-age" element={<Theawakeningage />} />
        <Route path="/soft-storm" element={<Softstorm />} />
        <Route path="/on-libraries" element={<Onlibraries />} />
        <Route path="/marriage-as-a-social-institution" element={<Marriagesasasocialinstitution />} />
        <Route path="/a-day" element={<Aday />} />
        <Route path="/a-matter-for-husband" element={<Amatterofhusbands />} />
        <Route path="/facing-death" element={<Facingdeath />} />
        <Route path="/the-bull" element={<Thebull />} />
        <Route path="/aama-ko-sapana" element={<Aamakosapana />} />
        <Route path="/birahini-damayanti" element={<Birahinidamayanti />} />
        <Route path="/ghanaghasyako-ukalo-katta" element={<Ghanaghasya />} />
        <Route path="/byabasayik-patra" element={<Byabasayikpatra />} />
        <Route path="/ek-chihan" element={<Ekchihan />} />
        <Route path="/stephen-william-hawking" element={<Stephenwilliamhawking />} />
        <Route path="/hamilai-bolaucha-himchuli" element={<Hamilaibolauchahimchuli/>} />
        <Route path="/matrittwo" element={<Matrittwo/>} />
        <Route path="/gorkhe" element={<Gorkhe />} />
        <Route path="/nepali-pahichan" element={<Nepalipahichan />} />
        <Route path="/sahakaari" element={<Sahakaari />} />
        <Route path="/all-the-world-a-stage" element={<Alltheworldsastage />} />
        <Route path="/an-astrologers-day" element={<Anastrologersday />} />
        <Route path="/a-red-red-rose" element={<Aredredrose />} />
        <Route path="/arts-and-creations" element={<Artsandcreations />} />
        <Route path="/a-sunny-morning" element={<Asunnymorning />} />
        <Route path="/career-and-entrepreneurship" element={<Careerandentrepreneurship />} />
        <Route path="/civil-peace" element={<Civilpeace />} />
        <Route path="/communication" element={<Communication />} />
        <Route path="/corona-says" element={<Coronasays />} />
        <Route path="/critical-thinking" element={<Criticalthinking11 />} />
        <Route path="/democracy-and-human-rights" element={<Democracyandhumanrights />} />
        <Route path="/ecology-and-development" element={<Ecologyanddevelopment />} />
        <Route path="/education-and-humanity" element={<Educationandhumanity />} />
        <Route path="/fantasy11" element={<Fantasy11 />} />
        <Route path="/globalisation-and-diaspora" element={<Globalisationanddiaspora />} />
        <Route path="/god-sees-the-truth-but-waits" element={<Godseesthetruthbutwaits />} />
        <Route path="/health-and-exercise" element={<Healthandexercise />} />
        <Route path="/history-and-culture" element={<Historyandculture />} />
        <Route path="/home-life-and-family-relationship" element={<Homelifeandfamilyrelationship />} />
        <Route path="/how-to-live-before-you-die" element={<Howtolivebeforeyoudie />} />
        <Route path="/humour-and-satire" element={<Humourandsatire />} />
        <Route path="/Immigration-and-identity" element={<Immigrationandidentity />} />
        <Route path="/life-and-love" element={<Lifeandlove />} />
        <Route path="/media-and-society" element={<Mediaandsociety />} />
        <Route path="/power-and-politics" element={<Powerandpolitics11 />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/science-and-technology" element={<Scienceandtechnology />} />
        <Route path="/scientific-research-is-a-token-of-humankinds-survival" element={<Scientificresearch />} />
        <Route path="/sharing-tradition" element={<Sharingtradition />} />
        <Route path="/the-gift-in-war-time" element={<Thegiftinwartime />} />
        <Route path="/the-oval-portrait" element={<Theovalportrait />} />
        <Route path="/the-selfish-giant" element={<Theselfishgiant />} />
        <Route path="/the-wish" element={<Thewish />} />
        <Route path="/travel-and-tourism" element={<Travelandtourism />} />
        <Route path="/trifles" element={<Trifles />} />
        <Route path="/two-little-soldiers" element={<Twolittlesoldiers />} />
        <Route path="/war-and-peace" element={<Warandpeace11 />} />
        <Route path="/what-i-require-from-life" element={<Whatirequirefromlife />} />
        <Route path="/what-is-poverty" element={<Whatispoverty />} />
        <Route path="/who-are-you-little-i" element={<Whoareyoulittlei />} />
        <Route path="/fantasy-11" element={<Fantasy11 />} />
        <Route path="/bir-purkha" element={<Birpurkha />} />
        <Route path="/gau-ko-maya" element={<Gaukomaya />} />
        <Route path="/sanskriti-ko-naya-yatra" element={<Sanskritikonayayatra />} />
        <Route path="/yogmaya" element={<Yogmaya />} />
        <Route path="/sathi-lai-chithi" element={<Sathilaichithi />} />
        <Route path="/tyo-feri-farkala" element={<Tyoferifarkala />} />
         <Route path="/safaltako-katha" element={<Safaltakokatha />} />
        <Route path="/paryaparyatanka-sambhabana-ra-ayam" element={<Paryaparyatankasambhabanaraayam />} />
        <Route path="/lau-aayo-taja-khabar" element={<Lauaayotajakhabar />} />
        <Route path="/krishi-sala-ma-ek-din" element={<Krishisalamaekdin />} />
        <Route path="/rara-vraman" element={<Raravraman />} />
        <Route path="/jal-srot-ra-urja" element={<Jalsrotraurja />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;