import HttpService from "./http-request";

class ExampleService extends HttpService {
  async getExample() {
    this.configRequest("/example");

    return this.get();
  }
}

export default new ExampleService();
