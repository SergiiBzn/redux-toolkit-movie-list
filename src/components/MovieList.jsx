import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeMovie } from '../movieSlice';

const MovieList = () => {
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();

  const handleRemoveMovie = (id) => {
    dispatch(removeMovie(id));
  };

  return (
    <div className='space-y-3'>
      <h2 className='text-lg font-medium text-slate-800'>Movies</h2>
      {movies.length === 0 && (
        <p className='text-sm text-slate-500'>
          No movies yet. Add your first one!
        </p>
      )}
      {movies.map((movie) => (
        <div
          key={movie.id}
          className='flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2'
        >
          <span className='text-slate-800 text-sm'>{movie.title}</span>
          <button
            className='text-xs text-rose-600 hover:text-rose-700'
            onClick={() => handleRemoveMovie(movie.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
