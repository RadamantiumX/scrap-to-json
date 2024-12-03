import { consoleReadLine } from "./helpers/consoleReadline";

class ScrapToJson {
  async getScrapAllElements() {
    try {
      consoleReadLine(null,'all')
    } catch (err) {
      console.log("Something went wrong!", err);
    }
  }

  async getScrapSingleElement() {
    try {
      consoleReadLine(null,'single')
    } catch (err) {
      console.log("Something went wrong!", err);
    }
  }
}

export default ScrapToJson