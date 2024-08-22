CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL,
  isVerified BOOLEAN NOT NULL,
  profile_picture VARCHAR(255),
  preferences JSON NOT NULL,
  joined_at TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS artists (
  id INT AUTO_INCREMENT PRIMARY KEY,
  artist_name VARCHAR(255) NOT NULL,
  bio TEXT,
  artist_image VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS genres (
  id INT AUTO_INCREMENT PRIMARY KEY,
  genre_name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS albums (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  release_date DATE NOT NULL,
  cover_image VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS tracks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  duration INT NOT NULL,
  file_path VARCHAR(255) NOT NULL,
  album_id INT NOT NULL,
  genre_id INT NOT NULL,
  release_date DATE NOT NULL,
  track_number INT,
  FOREIGN KEY (album_id) REFERENCES albums(id),
  FOREIGN KEY (genre_id) REFERENCES genres(id)
);

CREATE TABLE IF NOT EXISTS tracks_artists (
  track_id INT NOT NULL,
  artist_id INT NOT NULL,
  PRIMARY KEY (track_id, artist_id),
  FOREIGN KEY (track_id) REFERENCES tracks(id),
  FOREIGN KEY (artist_id) REFERENCES artists(id)
);

CREATE TABLE IF NOT EXISTS albums_artists (
  album_id INT NOT NULL,
  artist_id INT NOT NULL,
  PRIMARY KEY (album_id, artist_id),
  FOREIGN KEY (album_id) REFERENCES albums(id),
  FOREIGN KEY (artist_id) REFERENCES artists(id)
);

CREATE TABLE IF NOT EXISTS playlists (
  id INT AUTO_INCREMENT PRIMARY KEY,
  playlist_name VARCHAR(255) NOT NULL,
  isPublic BOOLEAN NOT NULL,
  user_id INT NOT NULL,
  playlist_description TEXT,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS playlists_tracks (
  playlist_id INT NOT NULL,
  track_id INT NOT NULL,
  added_at TIMESTAMP NOT NULL,
  PRIMARY KEY (playlist_id, track_id),
  FOREIGN KEY (playlist_id) REFERENCES playlists(id),
  FOREIGN KEY (track_id) REFERENCES tracks(id)
);

CREATE TABLE IF NOT EXISTS liked_songs (
  user_id INT NOT NULL,
  track_id INT NOT NULL,
  liked_at TIMESTAMP NOT NULL,
  PRIMARY KEY (user_id, track_id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (track_id) REFERENCES tracks(id)
);

-- Indexes
CREATE INDEX idx_album_id ON tracks(album_id);
CREATE INDEX idx_genre_id ON tracks(genre_id);
CREATE INDEX idx_track_id ON tracks_artists(track_id);
CREATE INDEX idx_artist_id ON tracks_artists(artist_id);
CREATE INDEX idx_album_id_artists ON albums_artists(album_id);
CREATE INDEX idx_artist_id_artists ON albums_artists(artist_id);
CREATE INDEX idx_user_id ON playlists(user_id);
CREATE INDEX idx_playlist_id ON playlists_tracks(playlist_id);
CREATE INDEX idx_track_id_playlists ON playlists_tracks(track_id);
CREATE INDEX idx_user_id_liked ON liked_songs(user_id);
CREATE INDEX idx_track_id_liked ON liked_songs(track_id);
CREATE INDEX idx_track_title ON tracks(title);
CREATE INDEX idx_artist_name ON artists(artist_name);
CREATE INDEX idx_playlist_name ON playlists(playlist_name);
CREATE INDEX idx_genre_name ON genres(genre_name);
CREATE INDEX idx_album_title ON albums(title);

