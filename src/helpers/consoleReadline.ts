import readline from 'readline'
import { loadElements } from './loadElements';
import colors from 'ansi-colors'

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      
      let values:any[] = []; // Array to store the values

export async function consoleReadLine (param = "url", mode: string | null){
    try{
        rl.question(colors.cyan(`Enter a ${param}: `), (input) => {
          
          if (values.length >= 2) {
            values.push(input);
            loadElements(values[0], values[1],values[2], mode)
            rl.close();
          } else {
            values.push(input); // Add input to the array
                if(values.length < 1){
                    consoleReadLine('DOM Element tag (without "<>") or selector', null); // Ask again
                }
                consoleReadLine('File Name (omit *json* extension)', null)
                
            
          }
        });
       }catch(error){
         console.error(error)
       }
    
      
}