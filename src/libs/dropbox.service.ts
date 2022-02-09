import { Dropbox } from "dropbox";

const dropboxV2Api = require("dropbox-v2-api");

class DropBoxService {
  private readonly dbxV2 = dropboxV2Api.authenticate({
    client_id: process.env.DBX_APP_KEY,
    client_secret: process.env.DBX_APP_SECRET,
    redirect_uri: process.env.DBX_APP_REDIRECT_URL,
  });

  authURL() {
    return this.dbxV2.generateAuthUrl();
  }

  getTokenByAuthCode(code: string) {
    return new Promise((resolve, reject) =>
      this.dbxV2.getToken(code, (err: any, result: any, response: any) => {
        if (err) reject(err);
        resolve(result);
      })
    );
  }

  initialize(accessToken: string) {
    return new Dropbox({ accessToken });
  }
}

export { DropBoxService };
