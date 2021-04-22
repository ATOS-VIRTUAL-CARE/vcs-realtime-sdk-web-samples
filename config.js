// ************************************************************
// EDIT THESE CONSTANTS WITH THE VCS DOMAIN AND THE ROOM TOKEN
// YOU CREATED AS DESCRIBED HERE: https://sdk.virtualcareservices.net/sdks/rest/#create-a-room
let VCS_DOMAIN = '';
let ROOM_TOKEN = '';
// ************************************************************

// Don't change this code. This provides the domain and token to
// the sample apps.

const updateLinks = () => {
  // Update links to samples by adding domain and token as query parameter
  for (let ls = window.document.links, numLinks = ls.length, i = 0; i < numLinks; i++) {
    if (ls[i].href.startsWith(window.origin)) {
      ls[i].href = `${ls[i].href}?domain=${VCS_DOMAIN}&token=${ROOM_TOKEN.replaceAll('+', '%2b')}`;
    }
  }
};

window.vcs = async () => {
  if (VCS_DOMAIN && ROOM_TOKEN) {
    // Use globally defined domain and token above.
  } else if (location.search) {
    // Use domain and token in the query params
    const params = new URLSearchParams(location.search);
    VCS_DOMAIN = params.get('domain');
    ROOM_TOKEN = params.get('token');
  } else {
    // This is for the live examples hosted github.io
    let response = await fetch('https://sdk-demo.virtualcareservices.net/api/room', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'    
      }
    });
    response = await response.json();
    // eslint-disable-next-line require-atomic-updates
    VCS_DOMAIN = response.domain;
    // eslint-disable-next-line require-atomic-updates
    ROOM_TOKEN = response.room?.token;
  }

  updateLinks();

  return {
    VCS_DOMAIN,
    ROOM_TOKEN
  };
};

