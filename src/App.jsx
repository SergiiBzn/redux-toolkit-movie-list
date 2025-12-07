import './App.css';
import MovieInput from './components/MovieInput';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className='bg-slate-50 flex items-start justify-center px-4 py-8'>
      <div className='w-full max-w-xl bg-white rounded-xl shadow-md border border-slate-200 p-6 space-y-6'>
        <h1 className='text-2xl font-semibold text-slate-800 text-center'>
          Movie List
        </h1>
        <MovieInput />
        <MovieList />
      </div>
    </div>
  );
}

export default App;
