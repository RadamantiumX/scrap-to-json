import fs from 'fs'
import colors from 'ansi-colors'

export async function fileWriter(fileName:string, toParseData:any [] | any) {
    fs.writeFile(`${fileName}.json`, JSON.stringify(toParseData), err =>{
        if(err) {
            throw new Error
        }
    
        console.log(colors.bgBlueBright(`${fileName}.json has been created!`))
       })
      console.log((colors.bgGreen('Done! 😊')))
}