import { consoleReadLine } from "./helpers/consoleReadline";

class ScrapToJson {
  async getScrapAllElements() {
    try {
      consoleReadLine('url','all')
    } catch (err) {
      console.log("Something went wrong!", err);
    }
  }

  async getScrapSingleElement() {
    try {
      consoleReadLine('url','single')
    } catch (err) {
      console.log("Something went wrong!", err);
    }
  }
}

export default ScrapToJson