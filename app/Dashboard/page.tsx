'use client'
// pages/index.tsx
import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const GIPHY_API_KEY = '0qyPEHJumXXEAhExtAOHX5agqIVLbe0x';
const GIPHY_API_BASE_URL = 'https://api.giphy.com/v1/gifs';

interface Gif {
  id: string;
  images: {
    fixed_height: {
      url: string;
    };
  };
  title: string;
}

const searchGifs = async (query: string): Promise<Gif[]> => {
  try {
    const response = await fetch(
      ${GIPHY_API_BASE_URL}/search?q=${encodeURIComponent(query)}&api_key=${GIPHY_API_KEY}
    );

    if (!response.ok) {
      throw new Error('Failed to fetch GIFs');
    }

    const data = await response.json();
    console.log(JSON.stringify(data));
    return data.data;
  } catch (error) {
    console.error('Error fetching GIFs:', error);
    return [];
  }
};

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const searchedGifs = await searchGifs(searchQuery);
      setGifs(searchedGifs);
    } finally {
      setLoading(false);
      setSearchQuery('');
    }
  };
   const addToFavorites = (gif:any) => {
  console.log('Adding to favorites:', gif);
  toast.success('Added to favorites!' , {
    autoClose:2000,
  });
};

  return (
    <div>
        <div className='w-[1136px] m-16 '>
      <h1 className=' text-center text-blue-400 font-semibold '>GIPHY GIF Gallery</h1>
     <div className='flex justify-around items-center'>
         <input
        type="text"
        className="w-2/3 p-2 border border-gray-300 rounded-md mt-4 text-black ml-14"
        placeholder="Enter your search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        className="p-2 pl-4 pr-4 mt-2 bg-blue-400 text-white rounded-md mr-8"
        onClick={handleSearch}
        disabled={loading} // Disable the button when loading
      >
        Search
      </button>
     </div>

      {loading && <div>Loading...</div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 ml-14">
  {gifs.map((gif) => (
    <div key={gif.id} className="flex justify-center">
      <div className="rounded overflow-hidden shadow-lg">
        <img
          src={gif.images.fixed_height.url}
          alt={gif.title || 'GIF'}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 flex flex-row justify-between">
          <p className="text-lg font-semibold mb-2">{gif.title || 'Untitled'}</p>
           <FaHeart
                    className="cursor-pointer text-red-500 font-medium"
                    onClick={() => addToFavorites(gif)}
                  />
                  <ToastContainer position="top-right" />
          {/* Add more information if needed */}
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
    </div>
  );
};

export default Home;
   