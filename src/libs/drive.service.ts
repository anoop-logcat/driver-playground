import { Credentials } from "google-auth-library";
import { google } from "googleapis";

class DriveService {
  getAuthClient() {
    return new google.auth.OAuth2(
      process.env.GCP_CLIENT_ID,
      process.env.GCP_CLIENT_SECRET,
      process.env.GCP_REDIRECT_URL
    );
  }

  async getTokenByAuthCode(code: string): Promise<Credentials> {
    const client = this.getAuthClient();
    return (await client.getToken(code)).tokens;
  }

  async logOut() {
    await this.getAuthClient().revokeToken(
      "1//0gM3WMrAKNL3bCgYIARAAGBASNwF-L9IrAtW9ahxPMrPfpdTGfxDtMuNZ0vSCpCmHVJ2JCcc6-qepqZqz9mE29-cyLcxhCVffKC0"
    );
  }

  authURL() {
    const client = this.getAuthClient();
    return client.generateAuthUrl({
      access_type: "offline",
      scope: ["https://www.googleapis.com/auth/drive"],
    });
  }

  async getDriveFiles(token: Credentials) {
    const service = google.drive("v3");
    const client = this.getAuthClient();
    client.setCredentials(token);
    const response = await service.files.list({
      auth: client,
      pageSize: 10,
      fields: "nextPageToken, files(id, name)",
    });
    return response.data;
  }
}

export { DriveService };
