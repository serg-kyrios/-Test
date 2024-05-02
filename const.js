'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const namerOfFilms = prompt('Один из последних просмотренных фильмов?', '');
const ratingOfFilms = prompt('На сколько оцените его?', '');
const namerOfFilms2 = prompt('Один из последних просмотренных фильмов?', '');
const ratingOfFilms2 = prompt('На сколько оцените его?', '');
const movies = {
    namerOfFilms: ratingOfFilms,
    namerOfFilms2: ratingOfFilms2,
};
console.log(personalMovieDB);
console.log(personalMovieDB);
personalMovieDB.movies[namerOfFilms] = ratingOfFilms;
personalMovieDB.movies[namerOfFilms2] = ratingOfFilms2;
