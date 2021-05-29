/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieRow from './componetes/MovieRow';
import './App.css';
import FeaturedMovie from './componetes/FeaturedMovie';
import Header from './componetes/Header';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  const [ movieList, setMovieList ] = useState([]);
  const [ featuredData, setFeaturedData] =  useState(null);
  const [ blackHeader, setBlackHeader] =useState(false);
  
  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

      setFeaturedData(chosenInfo);

    }

    loadAll();
  }, []);

  useEffect(() => {
    
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true);
      }else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  
  return (
    <div className='page'>

      <Header black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      
      <footer>
        <h3>Projeto pessoal um clone da Netflix</h3>
        <h3>Direitos de imagem para Netflix</h3>
        <h3>Dados pegos do site themoviedb.org</h3>
      </footer>

      {movieList.length <= 0 && 

      <div className="loading">
          <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif" />
      </div>
      }
    </div>
  );
}