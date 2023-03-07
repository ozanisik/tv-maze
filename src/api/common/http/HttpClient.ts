export interface HttpClientConfig {
  baseURL: string;
  headers?: { [key: string]: string };
}

export interface HttpError extends Error {
  status: number;
  response?: Response;
}

export default class HttpClient {
  private baseURL: string;
  private headers?: { [key: string]: string };

  constructor(config: HttpClientConfig) {
    this.baseURL = config.baseURL;
    this.headers = config.headers;
  }

  public async get<T>(url: string): Promise<T> {
    const response = await this.fetchUrl(url, "GET");
    return response.json();
  }

  public async post<T>(url: string, data?: any): Promise<T> {
    const response = await this.fetchUrl(url, "POST", data);
    return response.json();
  }

  public async put<T>(url: string, data?: any): Promise<T> {
    const response = await this.fetchUrl(url, "PUT", data);
    return response.json();
  }

  public async delete<T>(url: string): Promise<T> {
    const response = await this.fetchUrl(url, "DELETE");
    return response.json();
  }

  private async fetchUrl(
    url: string,
    method: string,
    data?: any
  ): Promise<Response> {
    const options: RequestInit = {
      method,
      headers: this.headers,
      body: data ? JSON.stringify(data) : undefined,
    };
    const response = await fetch(`${this.baseURL}${url}`, options);
    if (response.ok) {
      return response;
    } else {
      const httpError: HttpError = new Error(response.statusText) as HttpError;
      httpError.status = response.status;
      httpError.response = response;
      throw httpError;
    }
  }
}
