# BeatScape
This project is a web/desktop music player. It's a solo project that I'm working on in my free time. The goal is to create a music player, where the user can listen to music, have a library, create playlists, like songs, and more. The project is still in the early stages of development, with the frontend being the main focus at the moment. 

## Technologies
- React
- TypeScript
- Django
- MySQL
- Docker

# Features from top to bottom (UI/UX)

## Top Bar

On the left side of the top bar, there are 2 buttons :
- "File menu" button: This button will open a dropdown menu with options like "Settings", "About", "Playback", etc.
- Logo button: This button is to toggle the display of the center panel. When the center panel is hidden, the logo button will show the center panel. When the center panel is shown, the logo button will hide the center panel. The logo in the center will be reacting to the music playing. 

On the right side of the top bar, there are 2 buttons:
- Profile button: This button will open the center panel with the profile page.
- Settings button: This button will open the center panel with the settings page.

On the center of the top bar, there is a search bar. The search bar will search for songs, albums, artists, playlists, and display the results in the center panel.

## Panels

Left Panel
-

In the left panel, is the user's library. The library contains the user's playlists, , liked songs, followed artists and albums, and more. The user can start playing a playlist, album, or artist from this panel.

Center Panel
-

The center panel is where the main content is displayed. The content can be the user's search results, the profile page, the settings page, a playlist, an artist, an album. The center panel can be hidden by clicking the logo button in the top bar.

Right Panel
-

The right panel is the now playing panel. The now playing panel contains the song that is currently playing, the album cover, the song's name, the artist's name.
There is also a like button and a plus button to add the song to a playlist.

Bottom Bar
-

The bottom bar contains the playback controls, the volume control, and the full-screen button. The playback controls are the play/pause button, the previous button, the next button, the shuffle button, and the repeat button. There are 3 modes for the repeat button: repeat all, repeat one, and repeat off. The volume control is a slider that controls the volume of the music. The full-screen button will make the player full screen.

This design is made for web/desktop only. The mobile version will have a different design.