# Feature Request: Sample Track Audio

#### July 20th 2024

## OBJECTIVE

To give users the ability to preview a sample of each track that populates the Search Results.

## BACKGROUND 

Jamming currently allows users to log in to their Spotify account and search for Spotify tracks through the Jammming platform. Users can then add desired tracks to a neighboring playlist component. This playlist can eventually be saved to the user’s Spotify account. 

The proposed feature, an audio preview of each track in the Search Results, would aid users in deciding which tracks to add to their growing playlist. This feature would significantly upgrade the functionality of Jammming by:

- Transforming each track’s album cover into an interactive button 
- Loading and playing a preview of the track audio when the user clicks on the interactive button. On the user’s click, the button will transform to an “isPlaying” setting, and the audio will play
- Allowing the user to pause audio playback by clicking the same interactive button

## TECHNICAL DESIGN

### Create Interactive Play Button

First, the Track component will need to be updated to return a button element representing the play/pause button for this feature. This button should be nested in an “album-cover” div that incudes the “album-cover” image element. 

To make the Play button functional, we will need to initialize a state hook to contain a key for currentPlayingTrack that monitors which track is playing and defaults to null if no preview has been selected. We will also need to initialize a state hook to contain a key for currentAudio which will hold an Audio object (created by the Audio constructor). This Audio object will be used for playing back the audio from the preview URL. 

In the Track.js component, these state hooks will interact to create the button’s functionality. If a currentPlayingTrack exists and contains an .id property that equals track.id, the track’s play button elements should be set to a pause icon (▐▐ ) that prompts the user to pause the preview if they wish. If the condition is not met, a play symbol (▶) should be displayed to prompt the user to play the preview. A ternary operator can effectively control what is displayed in the Play button element.

Meanwhile, in the App.js component (higher-level), a click handler, named handlePlayPause, must be set up to control these state variables. If currentPlayingTrack exists and contains an .id property that equals track.id, meaning a preview is already playing, the click handler can pause the preview through the .pause() Audio method applied to currentAudio. After the pause, the setter will reset currentPlayingTrack back to null. In the else case, meaning no track is currently playing, a user click will store a new Audio object that points to the track’s preview URL. The play() method can then be called on this Audio object, which will start playing the track preview on the user’s device. Setters can then reset the state of currentPlayingTrack and currentAudio.

### Retrieving and Storing Preview Data

When we fetch tracks from the Spotify API through the Spotify.search() method, we are already receiving the Preview URL in the JSON response object. Therefore, we simply have to add a “preview_url” key to the array of objects that is returned at the end of the Spotify.search() method. The corresponding value for each object can be determined through the .map Array method, evaluating to track.preview_url for each track.

Meanwhile, in the Track component, props have already been passed to include the entire Track object. The click handler should reside in App.js and is responsible for creating the new Audio object that points to the preview_url, which can be accessed through Spotify.search() as elucidated above. This click handler must also be passed as props down to Track.js, and assigned to an onClick attribute to tie together the full functionality of this update.

## Track Play Button Style Update

Lastly, we will need to update our CSS to style the album cover and the play button overlay, making the user experience with the play button as seamless as possible. The album cover can be accessed through the JSON response object returned from the Spotify.search() method as well. We can simply add an “image” key to the array of objects returned by Spotify.search() with a value of track.album.images[0].url for each track. This key-value pair can be accessed later by the Track component, rendering to the page the first-listed album cover for each track. 

A div element with the class name “album-cover” will be set up to contain an image element featuring the album cover, as well as the play button element. A constant height and width can be set for the “album-cover” div, with the child image element filling the parent div completely. The button element can then be offset using transform: translate syntax to render on top of the album cover image for each track.

When complete, the interactive play button should look like this (play-icon and pause-icon states both shown below:

    ![play icon](/feature-requests/play-icon.png)
    ![pause icon](/feature-requests/pause-icon.png)


## CAVEATS

### Edge Case: Preview URL is null or undefined

Reviewing sample data from calls to the Spotify API, it is clear that a large percentage of Spotify tracks possess a null or undefined preview_url value. Before attempting to play the audio, with the Audio.play() method, we must add a check to handle null/undefined values and conditionally render the play button based on the availability of the preview_url. The best way to set this up would be to use the && operator in the JSX encoded for the play button. The play button will be set up to only render if track.preview_url evaluates to true. 

### Playing One Track Preview at a Time

Functionality must be implemented to ensure that multiple audio previews do not play at the same time. Within the else case of handlePlayPause, a new if statement can be created to check whether currentAudio exists, i.e. whether a preview is already playing. If the condition evaluates to true, the click handler will apply .pause() to currentAudio, then continue to .play() the new Audio object, which is created through the new track’s track.preview_url value. This will ensure that any ongoing audio preview pauses before a new audio preview plays, maintaining a clean listening experience. 

### Resetting the Play Button after Audio Preview Concludes

The play button from Track.js will continue to display a pause icon (▐▐ ), even after the audio preview has concluded. This problem can be addressed by adding an event listener to the Audio object newAudio, found in the handlePlayPause click handler. This event listener should listen for a ‘ended’ event on newAudio and set currentAudio and currentPlayingTrack back to null after the ‘ended’ event. This will ensure that currentPlayingTrack && currentPlayingTrack.id === track.id evaluates to false and the ternary operator at the play button element is able to evaluate to the play icon (▶), rendering  ▶ and signaling to the user that the track preview has concluded and can be replayed if desired.
