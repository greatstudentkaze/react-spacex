export default class FetchData {
  baseURL = 'https://api.spacexdata.com/v4';

  async getData(url) {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error status ${response.status}`);
    }

    return await response.json();
  }

  async getRocket() {
    return await this.getData(`${this.baseURL}/rockets`)
  }

  async getLaunches() {
    return await this.getData(`${this.baseURL}/launches/past`)
  }

  async getCompany() {
    return await this.getData(`${this.baseURL}/company`)
  }
}
