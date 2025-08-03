import { useState, useEffect } from 'react';

const NotFoundPage = () => {
  const [bgColor, setBgColor] = useState('#00ff77');
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);

  const imagePool = [
    'https://icon.icepanel.io/Technology/svg/React.svg',
    'https://icon.icepanel.io/Technology/svg/Angular.svg',
    'https://icon.icepanel.io/Technology/svg/Vue.svg',
    'https://icon.icepanel.io/Technology/svg/Node.svg',
    'https://icon.icepanel.io/Technology/svg/Express.svg',
    'https://icon.icepanel.io/Technology/svg/MongoDB.svg',
    'https://icon.icepanel.io/Technology/svg/Firebase.svg',
    'https://icon.icepanel.io/Technology/svg/GraphQL.svg',
    'https://icon.icepanel.io/Technology/svg/Next.svg',
    'https://icon.icepanel.io/Technology/svg/Gatsby.svg',
    'https://icon.icepanel.io/Technology/svg/Svelte.svg',
    'https://icon.icepanel.io/Technology/svg/TypeScript.svg',
    'https://icon.icepanel.io/Technology/svg/Jest.svg',
    'https://icon.icepanel.io/Technology/svg/Cypress.svg',
    'https://icon.icepanel.io/Technology/svg/Redux.svg',
    'https://icon.icepanel.io/Technology/svg/Bootstrap.svg',
  ];

  // Sample popular designs data
  const popularDesigns = [
    { id: 1, name: 'Nature Vibes', color: '#00ff77' },
    { id: 2, name: 'Electric Green', color: '#00ff99' },
    { id: 3, name: 'Mint Fresh', color: '#00ffaa' },
    { id: 4, name: 'Spring Leaf', color: '#00ff66' },
    { id: 5, name: 'Neon Grass', color: '#00ff88' },
  ];

  // Coordinates to form "404" shape with icons
  const get404ShapeCoordinates = () => {
    // This creates positions for icons to form "404"
    const positions = [];
    
    // Number 4 (first digit)
    for (let y = 0; y < 5; y++) {
      for (let x = 0; x < 3; x++) {
        if (x === 1 || y === 2 || (x === 2 && y > 2)) {
          positions.push({ x: x * 200 + 50, y: y * 200 + 100 });
        }
      }
    }
    
    // Number 0 (middle digit)
    for (let y = 0; y < 5; y++) {
      for (let x = 0; x < 3; x++) {
        if (x === 0 || x === 2 || y === 0 || y === 4) {
          positions.push({ x: x * 200 + 700, y: y * 200 + 100 });
        }
      }
    }
    
    // Number 4 (last digit)
    for (let y = 0; y < 5; y++) {
      for (let x = 0; x < 3; x++) {
        if (x === 1 || y === 2 || (x === 2 && y > 2)) {
          positions.push({ x: x * 200 + 1350, y: y * 200 + 100 });
        }
      }
    }
    
    return positions;
  };

  const handleColorChange = (e) => {
    setBgColor(e.target.value);
    setIsColorPickerOpen(false);
  };

  const matchingDesigns = popularDesigns.filter(design => 
    design.color !== bgColor && design.color.startsWith('#00ff')
  );

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-300 overflow-hidden relative"
      style={{ backgroundColor: bgColor }}
    >
      {/* 404 Shape with Technology Icons */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {get404ShapeCoordinates().map((pos, index) => (
          <img
            key={index}
            src={imagePool[index % imagePool.length]}
            alt="Technology icon"
            className="absolute w-[200px] h-[200px] opacity-30 hover:opacity-70 transition-opacity duration-300"
            style={{
              left: `${pos.x}px`,
              top: `${pos.y}px`,
              transform: `rotate(${index * 5}deg)`,
            }}
          />
        ))}
      </div>

      <div className="bg-white bg-opacity-90 rounded-xl p-8 max-w-2xl w-full shadow-2xl text-center z-10">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">Whoops, that page is gone.</h1>
        
        <div className="mb-8">
          <p className="text-xl text-gray-600 mb-6">
            While you're here, feast your eyes upon these tantalizing popular designs matching the color 
            <span 
              className="font-bold mx-2 cursor-pointer relative"
              onClick={() => setIsColorPickerOpen(!isColorPickerOpen)}
              style={{ color: bgColor }}
            >
              {bgColor}
              {isColorPickerOpen && (
                <input
                  type="color"
                  value={bgColor}
                  onChange={handleColorChange}
                  className="absolute top-full left-0 mt-2 opacity-0 w-full h-8 cursor-pointer"
                />
              )}
            </span>
          </p>
          
          <div className="flex justify-center">
            <div 
              className="w-12 h-12 rounded-full border-4 border-white shadow-md cursor-pointer"
              style={{ backgroundColor: bgColor }}
              onClick={() => setIsColorPickerOpen(!isColorPickerOpen)}
            />
          </div>
        </div>

        {matchingDesigns.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Popular Matching Designs</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {matchingDesigns.map(design => (
                <div 
                  key={design.id} 
                  className="p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  style={{ backgroundColor: design.color }}
                  onClick={() => setBgColor(design.color)}
                >
                  <p className="text-white font-medium text-center">{design.name}</p>
                  <p className="text-white text-opacity-80 text-sm text-center">{design.color}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotFoundPage;