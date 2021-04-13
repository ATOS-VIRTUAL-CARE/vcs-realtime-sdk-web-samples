# realtime-sdk-samples

This is a repository for the vcs-realtime-sdk code samples.

> The examples are running live on [github.io](https://glb-ucc-vcs.github.io/realtime-sdk-samples/).

## Run samples locally

To run these examples you need to clone this repo, then edit the vcs-domain and room-token in the `config.js` file, and finally serve the root folder of the repo.

### Clone repo

```bash
git clone https://github.com/atos-virtual-care/realtime-sdk-samples
cd realtime-sdk-samples
```

### Create room token

1. Obtain an API key and VCS domain from your system administrator.
2. Create a room token using the [REST API](https://sdk.virtualcareservices.net/sdks/rest/).
3. Edit the `config.js` file to contain the VCS domain provided to you, and the room token created in the step above.

### Serve the repo

Use your favorite tool to serve the root folder of the repo. E.g. [ws](https://www.npmjs.com/package/local-web-server).

```bash
npm install -g local-web-server
ws --https --open
```
