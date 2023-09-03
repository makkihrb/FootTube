import React from 'react';
import { FaHome, FaFire } from 'react-icons/fa';
import premierLeagueIcon from '../assets/permier.png';
import laLigaIcon from '../assets/liga.png';
import serieAIcon from '../assets/seriea.png';
import ligue1Icon from '../assets/l1.png';
import rslIcon from '../assets/rsl.png';
import bundesliga from '../assets/bundesliga.png';

const LeftNav = ({ onCompetitionClick }) => {
    const handleCompetitionClick = (competition) => {
      if (onCompetitionClick) {
        onCompetitionClick(competition);
      }
    };
return (
    <div className="bg-gray-900 text-white w-72 p-3 ml-[-80px]"> {/* Adjust the left margin */}
      <ul>
        <li className="mb-2">
          <a href="/" className="flex items-center text-lg ">
            <FaHome className="w-9 h-6 mr-2" /> Home
          </a>
          
        </li>
        <li className="mb-2">
          <a href="/" className="flex items-center text-lg">
            <FaFire className="w-10 h-6 mr-2" /> Trending
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="flex items-center text-lg hover:text-violet-500 focus:text-violet-500" onClick={() => handleCompetitionClick('ENGLAND: Premier League')}>
          <img src={premierLeagueIcon} alt="Premier League" className="w-10 h-9 mr-2  "  /> Premier League
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="flex items-center text-lg hover:text-violet-500 focus:text-violet-500" onClick={() => handleCompetitionClick('Spain: La Liga')}>
          <img src={laLigaIcon} alt="La Liga" className="w-10 h-9 mr-2" /> La Liga
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="flex items-center text-lg hover:text-violet-500 focus:text-violet-500" onClick={() => handleCompetitionClick('ITALY: Serie A')}>

          <img src={serieAIcon} alt="Serie A" className="w-10 h-9 mr-2" /> Serie A
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="flex items-center text-lg hover:text-violet-500 focus:text-violet-500" onClick={() => handleCompetitionClick('GERMANY: BUNDESLIGA')}>
          <img src={bundesliga} alt="BUNDESLIGA" className="w-10 h-9 mr-2" /> Bundesliga
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="flex items-center text-lg hover:text-violet-500 focus:text-violet-500" onClick={() => handleCompetitionClick('FRANCE: Ligue 1')}>
          <img src={ligue1Icon} alt="Ligue 1" className="w-10 h-9 mr-2" /> Ligue 1
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="flex items-center text-lg hover:text-violet-500 focus:text-violet-500" onClick={() => handleCompetitionClick('SAUDI ARABIA: Pro League')}>
          <img src={rslIcon} alt="Roshin Saudi Pro League" className="w-10 h-9 mr-2" /> Saudi League
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LeftNav;
