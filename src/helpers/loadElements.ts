import puppeteer from "puppeteer";
import { fileWriter } from "./fileWriter.js";
import colors from 'ansi-colors'

export async function loadElements(webUrl:string, element:string, jsonFileName: string,mode: string) {
    console.log(colors.bgBlue('Loading...'))
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(webUrl); // Replace with your target URL

    // Function to get all attributes of a specific element
  const getAllElementsAttributes = async (selector: any) => {
    return await page.evaluate((sel) => {
      try{
        const arrayElement = [] 
      const elements = document.querySelectorAll(sel); // Select all elements
      if (!elements) return null;

      
      for(let i = 0; i < [...elements].length;i++){
       let innerText = [...elements][i]
       let nodeMap = [...elements][i].attributes
       const extractedData:any = {};
        for(let y = 0; y < nodeMap.length; y++){
             // Extract all attributes into an object
            
             extractedData[nodeMap[y].name] = nodeMap[y].value
             extractedData['inner_html'] = innerText.innerHTML
        }
        arrayElement.push(extractedData) 
      }
      return arrayElement
      }catch(error){
        console.error('message',error)
      }
      
    }, selector);
  };

  const getSingleElementAttributes = async (selector:any) => {
    return await page.evaluate((sel) => {
      try{
         const arrayElement = []
      const element = document.querySelector(sel);
      if (!element) return null;

       let nodeMap = element.attributes
       const extractedData:any = {};
        for(let y = 0; y < nodeMap.length; y++){
             // Extract all attributes into an object
            
             extractedData[nodeMap[y].name] = nodeMap[y].value
             extractedData['inner_html'] = element.innerHTML
            
        }
        arrayElement.push(extractedData) 
      
      return arrayElement
      }catch(error){
         console.error(error)
      }
      
    }, selector);
  }

  if(mode.includes('all')){
    // All data element //
   const all_data_element = await getAllElementsAttributes(element); // Replace 'h1' with the desired selector
   const results_length = all_data_element?.length

// All data element //
  fileWriter(jsonFileName, {all_data_element, results_length})
   console.log((colors.bgGreen('Done! 😊')))
  await browser.close();
}else{
  // Single Element //
  const single_data_element = await getSingleElementAttributes(element);
  
  fileWriter(jsonFileName, single_data_element)
  console.log((colors.bgGreen('Done! 😊')))
  await browser.close();
  // Single Element //
}
}