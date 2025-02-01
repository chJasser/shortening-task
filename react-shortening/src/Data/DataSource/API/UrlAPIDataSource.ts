import { Url } from "../../../Domain/Model/Url";
import UrlDataSource from "../UrlDataSource";
import axios from "axios";

export default class UrlAPIDataSourceImpl implements UrlDataSource {
  private baseUrl = "http://localhost:3000/url";

  async createUrl(value: string): Promise<Url> {
    try {
      const response = await axios.post(`${this.baseUrl}`, {
        originalUrl: value,
      });
      const shortenedUrl = response.data.props.shortCode;
      const res: Url = {
        originalUrl: value,
        shortCode: shortenedUrl,
      };

      return res;
    } catch (error) {
      console.error("Error creating URL:", error);
      throw new Error("Failed to create URL");
    }
  }

  async getUrls(): Promise<Url[]> {
    try {
      const response = await axios.get(`${this.baseUrl}`);
      const urls: Url[] = response.data.map((item: any) => ({
        id: item.props.id,
        originalUrl: item.props.originalUrl,
        shortCode: item.props.shortCode,
      }));

      return urls;
    } catch (error) {
      console.error("Error fetching URLs:", error);
      throw new Error("Failed to fetch URLs");
    }
  }
}
