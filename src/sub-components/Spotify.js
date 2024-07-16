const clientId = '23799668173249a7ba2696a5547d1e7c';
const redirectUri = 'http://localhost:3000/';

let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    // Check for access token match in the URL
    const tokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (tokenMatch && expiresInMatch) {
      accessToken = tokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);

      // Clear the parameters from the URL
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
      // Redirect to Spotify authorization page
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },
  search(term) {
    const accessToken = Spotify.getAccessToken();
    console.log(`AccessToken: ${accessToken}`); // Debug: Check access token
    console.log(`Search Term: ${term}`); // Debug: Check term
  
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(term)}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then((response) => {
      console.log(`Response Status: ${response.status}`); // Debug: Log response status
      if (response.ok) {
        return response.json();
      } else {
        return response.json().then(errorInfo => {
          console.error('Error Info:', errorInfo); // Debug: Log error info
          throw new Error('Request Failed.');
        });
      }
    }).then(jsonResponse => {
      console.log('JSON Response:', jsonResponse); // Debug: Log JSON response
      if (!jsonResponse.tracks) {
        return [];
      }
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));
    }).catch(error => {
      console.error('Fetch Error:', error); // Debug: Log fetch error
      return [];
    });
  }
  
};

export default Spotify;
