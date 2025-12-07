import { useState } from 'react';
import { addMovie } from '../movieSlice';
import { useDispatch } from 'react-redux';

const MovieInput = () => {
  const [newMovie, setNewMovie] = useState('');

  const dispatch = useDispatch();

  const handleAddMovie = () => {
    if (newMovie) {
      dispatch(addMovie(newMovie));
      setNewMovie('');
    }
  };

  return (
    <div className='flex flex-col sm:flex-row gap-3'>
      <input
        onChange={(e) => setNewMovie(e.target.value)}
        value={newMovie}
        placeholder='Enter movie title...'
        className='flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 text-sm'
      />
      <button
        onClick={handleAddMovie}
        className='rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-black hover:bg-emerald-600 transition'
      >
        Add Movie
      </button>
    </div>
  );
};

export default MovieInput;
