import React, {useEffect, useState} from 'react';
import {API, graphqlOperation} from 'aws-amplify';
import {StyleSheet, FlatList, View} from 'react-native';
import {listMovies} from '../graphql/queries';
import MovieCard from '../components/MovieCard';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies() {
    try {
      const movieData = await API.graphql(graphqlOperation(listMovies));
      const moviesList = movieData.data.listMovies.items;
      setMovies(moviesList);
    } catch (err) {
      console.log('error fetching movies');
    }
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={movie => <MovieCard movie={movie.item} />}
        keyExtractor={movie => movie.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {width: 400, flex: 1, padding: 20, alignSelf: 'center'},
  movie: {marginBottom: 15},
  movieName: {fontSize: 20, fontWeight: 'bold'},
});

export default MoviesList;
