import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  Actionmovie,
  Adventuremovie,
  Animemovie,
  FantacyMovie,
  Horrormovie,
} from "./MovieSlice";

const Movie = () => {
  const fantacydata = useSelector((state) => state.movies.fantacy);
  const actiondata = useSelector((state) => state.movies.action);
  const adventuredata = useSelector((state) => state.movies.adventure);
  const horrordata = useSelector((state) => state.movies.horror);
  const animedata = useSelector((state) => state.movies.anime);

  const dispatch = useDispatch();

  useEffect(() => {
    // harry potter
    fetch("https://omdbapi.com/?s=Harry Potter&apikey=74e9a1d2")
      .then((res) => res.json())
      .then((data) => {
        dispatch(FantacyMovie(data.Search));
      })
      .catch((err) => console.log(err));

    //  action
    fetch("https://omdbapi.com/?s=avengers&apikey=74e9a1d2")
      .then((res) => res.json())
      .then((data) => {
        dispatch(Actionmovie(data.Search));
      })
      .catch((err) => console.log(err));

    //  adventure
    fetch("https://omdbapi.com/?s=Pirates of the Caribbean&apikey=74e9a1d2")
      .then((res) => res.json())
      .then((data) => {
        dispatch(Adventuremovie(data.Search));
      })
      .catch((err) => console.log(err));

    //  hrror
    fetch("https://omdbapi.com/?s=The Conjuring&apikey=74e9a1d2")
      .then((res) => res.json())
      .then((data) => {
        dispatch(Horrormovie(data.Search));
      })
      .catch((err) => console.log(err));

    //  horror
    fetch("https://omdbapi.com/?s=Demon slayer&apikey=74e9a1d2")
      .then((res) => res.json())
      .then((data) => {
        dispatch(Animemovie(data.Search));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-dark text-white">
      <div className="mx-5 pt-3 d-flex justify-content-between">
        <h1>OMDP</h1>
        <div className="d-flex">
          <input className="form-control w-100" />
          <button className="btn btn-success">Search</button>
        </div>
      </div>

      <section className="container-fluid pt-2">
        {/* fantacy */}
        <div className="py-3">
          <strong>Fantacy</strong>
          <hr></hr>

          <div className="Home_box">
            {fantacydata?.map((e, index) => {
              return (
                <div key={index}>
                  <img src={e.Poster} className="movie_poster" alt={e.Title} />
                  <p>{e.Title}</p>
                  <small>{e.Year}</small>
                </div>
              );
            })}
          </div>
        </div>

        {/* action */}
        <div className="py-3">
          <strong>Action</strong>
          <hr></hr>

          <div className="Home_box">
            {actiondata?.map((e, index) => {
              return (
                <div key={index}>
                  <img src={e.Poster} className="movie_poster" alt={e.Title} />
                  <p>{e.Title}</p>
                  <small>{e.Year}</small>
                </div>
              );
            })}
          </div>
        </div>

        {/*adventure  */}
        <div className="py-3">
          <strong>Adventure</strong>
          <hr></hr>

          <div className="Home_box">
            {adventuredata?.map((e, index) => {
              return (
                <div key={index}>
                  <img src={e.Poster} className="movie_poster" alt={e.Title} />
                  <p>{e.Title}</p>
                  <small>{e.Year}</small>
                </div>
              );
            })}
          </div>
        </div>

        {/*Horror  */}
        <div className="py-3">
          <strong>Horror</strong>
          <hr></hr>

          <div className="Home_box">
            {horrordata?.map((e, index) => {
              return (
                <div key={index}>
                  <img src={e.Poster} className="movie_poster" alt={e.Title} />
                  <p>{e.Title}</p>
                  <small>{e.Year}</small>
                </div>
              );
            })}
          </div>
        </div>

        {/*Anime */}
        <div className="py-3">
          <strong>Anime</strong>
          <hr></hr>
          <div className="Home_box">
            {animedata?.map((e, index) => {
              return (
                <div key={index}>
                  <img src={e.Poster} className="movie_poster" alt={e.Title} />
                  <p>{e.Title}</p>
                  <small>{e.Year}</small>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Movie;
