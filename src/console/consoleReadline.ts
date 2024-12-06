import readline from 'readline'
import { loadElements } from '../lib/loadElements.js';
import colors from 'ansi-colors'
import { validateUserPromptSchema } from '../zod-validations/validations.js';

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      
      let values:string[] = []; // Array to store the values

export async function consoleReadLine (param:string, mode: string){
    try{
        rl.question(colors.cyan(`Enter a ${param}: `), (input) => {
          
          if (values.length >= 2) {
            values.push(input);
            const validate = validateUserPromptSchema({ url: values[0], element: values[1], file: values[2] }) // Validate user prompt
            if(!validate.success){
              console.log(`Error log: ${colors.bgRed(validate.error.message)}`)
              rl.close()
              return
            }
            loadElements(values[0], values[1],values[2], mode)
            rl.close();
          } else {
            values.push(input); // Add input to the array
                if(values.length <= 1){
                    consoleReadLine('DOM Element tag (without "<>") or selector', mode); // Ask again
                }
                consoleReadLine('File Name (omit *json* extension)', mode)
                
            
          }
        });
       }catch(error){
         console.error(error)
       }
    
      
}