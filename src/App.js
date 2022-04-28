import React, { useEffect, useState } from "react";
import "./App.css";

import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackheader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Pegar filme em destaque
      let orginals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * orginals[0].items.results.length - 1
      );
      let chosen = orginals[0].items.results[randomChosen];

      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo);
    };
    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 15) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className='page'>
      <Header black={blackheader} />
      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <footer>
        Feito com{" "}
        <span role='img' aria-label='coração'>
          ❤
        </span>{" "}
        por Douglas Monteiro <br />
        Direitos de imagem para netflix <br />
        Dados pegos do site Themoviedb.org <br />
        Feito exclusivamente para fins de estudo.
      </footer>

      {movieList.length <= 0 && (
        <div className='loading'>
          <img src='./assets/loadTime.gif' alt='carregando'></img>
        </div>
      )}
    </div>
  );
};
