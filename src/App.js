import React, {useEffect, useState} from 'react';
import './App.css';
import Tmdb from './Tmdb';
import Header from './components/Header/Header'
import MovieRow from './components/List/MovieRow'
import Features from './components/Destaque/Features';
import Loading from './assets/loading.gif';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect (() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

      setFeatureData(chosenInfo);
    }

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true);
      }else {
        setBlackHeader(false)
      };
    }

    window.addEventListener('scroll', scrollListener);
      return () => {
        window.removeEventListener('scroll', scrollListener);
      }
  }, []);

  return (
    <div className='page'>

    <Header black={blackHeader}/>

      {featuredData &&
       <Features item={featuredData}/>
      }

      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>  
        ))}
      </section>

      <footer>
        Todos os Direitos reservados <span> &copy;</span>
        <p>Developer in Training <span>&reg;</span></p>
      </footer>

      {movieList.length <= 0  &&
      <div className='loading'>
        <img src={Loading} alt='Carregando... aguarde'></img>
      </div>
      }
    </div>
  );
}