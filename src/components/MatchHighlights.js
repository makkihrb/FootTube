import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import LeftNav from './LeftNav';
import { FaBolt, FaFutbol } from 'react-icons/fa';

function MatchHighlights() {
  const [popularHighlights, setPopularHighlights] = useState([]);
  const [otherHighlights, setOtherHighlights] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    async function fetchHighlights() {
      try {
        const response = await fetch(
          'https://www.scorebat.com/video-api/v3/feed/?token=MTEwODEwXzE2OTMyODMxMTlfYzNlNGMxNTI3YmNhZDEwMzE4Mzg3ODI0Y2JhNjM2NWY2ZGU5NGVhNA=='
        );
        const data = await response.json();

        const sortedHighlights = data.response.sort((a, b) => {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();
          return dateB - dateA;
        });

        const popularLeagues = [
          'ENGLAND: Premier League',
          'ENGLAND: FA Cup',
          'EUROPE: Champions League',
          'EUROPE: Europa League',
          'GERMANY: Bundesliga',
          'FRANCE: Ligue 1',
          'ITALY: Serie A',
          'SPAIN: La Liga',
          'NETHERLANDS: Eredivisie',
          'SAUDI ARABIA: Pro League',
          'PORTUGAL: Liga Portugal',
        ];
        const popular = [];
        const other = [];

        sortedHighlights.forEach((highlight) => {
          if (popularLeagues.includes(highlight.competition)) {
            popular.push(highlight);
          } else {
            other.push(highlight);
          }
        });

        setPopularHighlights(popular);
        setOtherHighlights(other);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchHighlights();
  }, []);

  useEffect(() => {
    if (searchTerm === '') {
      setSearchResults([]);
      return;
    }

    const filteredResults = popularHighlights
      .concat(otherHighlights)
      .filter((highlight) => {
        const lowerSearchTerm = searchTerm.toLowerCase();
        return (
          highlight.title.toLowerCase().includes(lowerSearchTerm) ||
          highlight.competition.toLowerCase().includes(lowerSearchTerm)
        );
      })
      .filter((value, index, self) => {
        return self.findIndex((highlight) => highlight.title === value.title) === index;
      });

    setSearchResults(filteredResults);
  }, [searchTerm, popularHighlights, otherHighlights]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleBack = () => {
    setSearchTerm('');
    setSearchResults([]);
  };

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const filterHighlightsByCompetition = (competition) => {
    setSearchTerm(competition);
  };

  const renderHighlights = (highlights, isTopLeagues) => {
    const filteredHighlights = highlights.filter((highlight) => {
      const existsInOtherSection = isTopLeagues
        ? otherHighlights.some((otherHighlight) => otherHighlight.title === highlight.title)
        : popularHighlights.some((otherHighlight) => otherHighlight.title === highlight.title);
      return !existsInOtherSection;
    });

    return (
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredHighlights.map((highlight, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <div className="p-4">
              <h2 className="text-lg md:text-xl font-semibold text-white mb-2 truncate">
                {highlight.title}
              </h2>
              <p className="text-gray-300 mb-4 truncate">{highlight.competition}</p>
              <div dangerouslySetInnerHTML={{ __html: highlight.videos[0].embed }} />
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans">
      <div className="container mx-auto py-8">
        <div className="min-h-screen text-white font-mono">
          <div className="container mx-auto py-8 flex">
            {isMobile ? null : <LeftNav onCompetitionClick={filterHighlightsByCompetition} />}
            <div className="border-l border-white/[0.3] pl-5 ml-1 flex-1">
              <div className="flex justify-end mb-4 pr-4">
                <SearchBar onSearch={handleSearch} onBack={handleBack} />
              </div>
              <div className="flex items-center mb-4 p-2 bg-gray-800 rounded-md w-[fit-content]">
                <FaBolt className="text-xl md:text-2xl mr-2" />
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold">Most Viewed</h2>
                </div>
              </div>
              {searchTerm === '' ? (
                <div>{renderHighlights(popularHighlights, true)}</div>
              ) : (
                <div>{renderHighlights(searchResults, true)}</div>
              )}
              <div className="flex items-center mt-8 mb-4 p-4 bg-gray-800 rounded-md w-[fit-content]">
                <FaFutbol className="text-xl md:text-2xl mr-2" />
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold">More Highlights</h2>
                </div>
              </div>
              {searchTerm === '' ? (
                <div>{renderHighlights(otherHighlights, false)}</div>
              ) : (
                <div>{renderHighlights(searchResults, false)}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchHighlights;
