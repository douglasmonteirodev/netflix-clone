import React from "react";
import "./FeaturedMovie.css";

export default ({ item }) => {
  console.log(item);

  const lorem =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  let firstDate = new Date(item.first_air_date);
  let genres = [];

  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  return (
    <section
      className='featured'
      style={{
        backgroundSize: "cover",
        backgroundOrigin: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className='featured--vertical'>
        <div className='featured--horizontal'>
          <div className='featured--name'>{item.original_name}</div>
          <div className='featured--info'>
            <div className='featured--points'>
              {item.vote_average} Pontos
            </div>
            <div className='featured--year'>
              {firstDate.getFullYear()}
            </div>
            <div className='featured--seasons'>
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? "s" : ""}
            </div>
            <div className='featured--description'>
              {item.overview !== "" ? item.overview : lorem}
            </div>
            <div className='featured--buttons'>
              <a
                className='featured--watchbutton'
                href={`/watch/${item.id}`}
              >
                ► Assistir
              </a>
              <a
                className='featured--mylistbutton'
                href={`/list/add${item.id}`}
              >
                + Minha lista
              </a>
            </div>
            <div className='featured--genres'>
              <strong>Gêneros: </strong>
              {genres.length === 0
                ? "Lorem Ipsum, Lorem Ipsum"
                : genres.join(", ")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
