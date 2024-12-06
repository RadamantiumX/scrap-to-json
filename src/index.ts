import { consoleReadLine } from "./console/consoleReadline.js";

// Define the ScrapToJson class to handle web scraping and data conversion to JSON
class ScrapToJson {
  /**
   * Fetches and processes all elements.
   * Uses the `consoleReadLine` utility to specify the scraping context.
   * @async
   * @param {string} param - Only for explain text on console.
   * @param {string} mode - "all" mode means, all elements of DOM
   * @throws Logs an error message if the operation fails.
   */
  async getScrapAllElements() {
    try {
      // Invoke consoleReadLine with parameters for scraping all elements
      consoleReadLine("url", "all");
    } catch (err) {
      // Log any errors that occur during the operation
      console.log("Something went wrong!", err);
    }
  }
  /**
   * Fetches and processes a single element.
   * Uses the `consoleReadLine` utility to specify the scraping context.
   * @async
   * @param {string} param - Only for explain text on console.
   * @param {string} mode - "single" mode means, single element of DOM
   * @throws Logs an error message if the operation fails.
   */
  async getScrapSingleElement() {
    try {
      // Invoke consoleReadLine with parameters for scraping a single element
      consoleReadLine("url", "single");
    } catch (err) {
      // Log any errors that occur during the operation
      console.log("Something went wrong!", err);
    }
  }
}

// Export the ScrapToJson class as the default export
export default ScrapToJson;
