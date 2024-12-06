import readline from "readline";
import colors from "ansi-colors";
import { validateUserPromptSchema } from "../zod-validations/validations.js";
import { loadElements } from "../lib/loadElements.js";

// Create a readline interface for capturing user input from the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let values: string[] = []; // Array to store user input values for URL, DOM element, and file name

/**
 * Handles terminal prompts to gather user input and performs operations based on the input.
 *
 * This function interacts with the user in the terminal, prompting them to input a website URL,
 * a DOM element tag or selector, and a file name. It validates the collected input and, if valid,
 * processes the data using the `loadElements` function. Different prompts are displayed depending
 * on the `mode` parameter.
 *
 * @async
 * @param {string} param - A description of the input the user should provide (e.g., 'URL').
 * @param {string} mode - The mode of operation ('single' or 'all'), indicating the type of scraping to perform.
 * @throws Will log any unexpected errors to the console.
 */
export async function consoleReadLine(param: string, mode: string) {
  try {
    rl.question(colors.cyan(`Enter a ${param}: `), (input) => {
      if (values.length >= 2) {
        values.push(input);
        const validate = validateUserPromptSchema({
          url: values[0], // First value: Website URL
          element: values[1],  // Second value: DOM element tag or selector
          file: values[2], // Third value: File name (without extension)
        }); 
        // Validate user prompt
        if (!validate.success) {
          console.log(`Error log: ${colors.bgRed(validate.error.message)}`);
          rl.close();
          return;
        }
        // Call the `loadElements` function with the collected inputs
        loadElements(values[0], values[1], values[2], mode);
        rl.close();
      } else {
        // If not enough values have been collected, add the current input and ask for the next one
        values.push(input);
        values.push(input); // Add input to the array
        if (values.length <= 1) {
          consoleReadLine('DOM Element tag (without "<>") or selector', mode); // Ask again
        }
        consoleReadLine("File Name (omit *json* extension)", mode);
      }
    });
  } catch (error) {
    console.error(error);
  }
}
