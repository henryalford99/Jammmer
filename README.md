## Purpose
This project allows users to search the Spotify library from their account, create a custom playlist, and save it to their Spotify account. The intention of this project was to build knowledge of React components, importing and exporting, separation of concerns, passing state, and making HTTP requests.

## Technologies Used
- **React:** For building the user interface
- **JavaScript:** Core programming language for the app
- **CSS:** For styling the application
- **HTML:** Structure of the web application
- **Spotify API:** For fetching song data and managing playlists

## Features
- **Search Bar**: Filters song searches based on the user's Spotify profile.
- **Clickable Search Results**: Users can click on search results to add them to a new playlist.
- **Save to Spotify**: Users can save the created playlist to their Spotify account.
- **Responsive Design:** The application and its styles are designed to be responsive and work on various devices.

## Future Work
- **Web Playback SDK**: Implementing the Spotify Web Playback SDK to allow users to stream searched tracks before adding them to a new playlist.
- **Enhanced Search Filters:** Add filters for searching by artist, genre, album, etc.
- **Playlist Sharing:** Allow users to share their playlists with others.
- **Improved UI/UX:** Continuously enhance the user interface for a better experience.
- **Error Handling:** Improve error handling and provide user feedback for various actions.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Getting Started

1. **Clone the Repository**: Clone this repository to your local machine.
   ```sh
   git clone https://github.com/your-username/jammming.git
   ```
2. **Install Dependencies**: Navigate to the project directory and install the necessary dependencies.
   ```sh
   cd jammming
   npm install
   ```
3. **Run the Application**: Start the development server.
   ```sh
   npm start
   ```
4. **Run Tests**: Run the test suite to ensure everything is working correctly.
   ```sh
   npm test
   ```

## Project Structure

```
jammming-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├
│   ├── App.js
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   ├── App.css
│   ├── App.test.js
│   ├── index.css
│   └── index.js
│   ├── sub-components
|   |   └── Playlist.js
|   |   └── SaveToSpotifyButton.js
|   |   └── Search.js
│   │   └── SearchBar.js
│   │   └── SearchResults.js
│   │   └── Spotify.js
│   │   └── Track.js
│   │   └── Tracklist.js
|   │   └── spotify_logo.png
├── package-lock.json
├── package.json
├── README.md
└── ...
```


## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. Your contributions are always welcome!

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

Happy coding! If you have any questions or need further assistance, feel free to open an issue on the repository.
