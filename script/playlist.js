// Spotify API credentials (replace with your own credentials)
const clientId = 'c49cde61062b4cf9b744f3e0edc95fcd';
const clientSecret = '4fb29faca8064148acf6c3a3aaca3779';

// Function to get Spotify access token
async function getAccessToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
    },
    body: 'grant_type=client_credentials',
  });

  const data = await response.json();
  return data.access_token;
}

// Function to fetch featured playlists
async function fetchFeaturedPlaylists(accessToken) {
  const apiUrl = 'https://api.spotify.com/v1/browse/featured-playlists?limit=10';
  const response = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await response.json();
  return data.playlists.items; // Array of playlists
}

// Function to display playlists on the webpage
function displayPlaylists(playlists) {
  const container = document.getElementById('playlist-container');
  container.innerHTML = ''; // Clear previous content

  playlists.forEach((playlist) => {
    const playlistHTML = `
      <div class="playlist">
        <a href="${playlist.external_urls.spotify}" target="_blank">
          <img src="${playlist.images[0]?.url}" alt="${playlist.name}" style="width: 150px; height: 150px;">
          <p>${playlist.name}</p>
        </a>
      </div>
    `;
    container.innerHTML += playlistHTML;
  });
}

// Main function to load playlists
async function loadPlaylists() {
  const accessToken = await getAccessToken();
  const playlists = await fetchFeaturedPlaylists(accessToken);
  displayPlaylists(playlists);
}

// Call the main function on page load
loadPlaylists();
