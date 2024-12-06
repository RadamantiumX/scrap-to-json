import fs from 'fs'
import colors from 'ansi-colors'
/**
 * Creates the JSON file with the raw data.
 * @param fileName alphanumeric file name can be only one character
 * @param toParseData raw data provided from the scraping
 */
export async function fileWriter(fileName:string, toParseData:any [] | any) {
    // first, the data will be parsed to write on named JSON file
    fs.writeFile(`${fileName}.json`, JSON.stringify(toParseData), err =>{
        if(err) {
            throw new Error
        }
        // Success file creation
        console.log(colors.bgBlueBright(`${fileName}.json has been created!`))
       })
      console.log((colors.bgGreen('Done! 😊'))) // Work ending
}