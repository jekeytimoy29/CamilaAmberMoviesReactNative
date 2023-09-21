import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Text} from 'react-native-paper';

const MovieCard = ({movie}) => {
  const {title, plot, poster} = movie;
  return (
    <Card style={styles.container}>
      <Card.Cover
        source={{uri: poster}}
        style={styles.poster}
        resizeMode="stretch"
      />
      <Card.Content>
        <Text variant="titleLarge">{title}</Text>
        <Text variant="bodyMedium">{plot}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {marginVertical: 14, marginHorizontal: 5},
  poster: {
    flex: 0.3,
    height: 370,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
});

export default MovieCard;
