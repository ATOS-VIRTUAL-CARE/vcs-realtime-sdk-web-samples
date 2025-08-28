# VCS Realtime SDK JavaScript code samples

This is a repository for the vcs-realtime-sdk code samples.

## Run samples locally

To run these examples you need to clone this repo, then edit the vcs-domain and room-token in the `config.js` file, and finally serve the root folder of the repo.

### Clone repo

```bash
git clone https://github.com/atos-virtual-care/vcs-realtime-sdk-web-samples
cd vcs-realtime-sdk-web-samples
```

### Create room token

1. Obtain an API key and VCS domain from your system administrator.
2. Create a room token using the [REST API](https://sdk.virtualcareservices.net/sdks/rest/).

    ```bash
    $ curl -X POST https://<vcs-domain>/api/realtime/room \
        -H "x-vcs-token: <api-key>" \
        -H "Content-Type: application/json"
    ```

3. Edit the `config.js` file to contain the VCS domain provided to you, and the room token created in the step above.

### Serve the repo

Use your favorite tool to serve the root folder of the repo. E.g. [ws](https://www.npmjs.com/package/local-web-server).

```bash
npm install -g local-web-server
npx ws --https --open
```

## More information

For more information on the VCS SDK family, see the [VCS Realtime SDK documentation](https://sdk.virtualcareservices.net/)
