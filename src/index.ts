import puppeteer from "puppeteer"
import fs from 'fs'
/**
 * @author  Radamantium <eduardo.arede@gmail.com>
 * 
 * 
 * @param {Object} params - The parameters for the function.
 * @param {string} params.url - The URL of the webpage to scrape.
 * @param {string} params.selector - The CSS selector to target elements.
 * @param {string} params.attr - The attribute of the targeted elements to scrape.
 * @param {string} params.jsonFileName - The name of the JSON file where results will be saved.
 */
class ScrapToJson {
     async getScrapAllElementsAttr({url, selector, attr, jsonFileName}:{url:string, selector:string, attr: string, jsonFileName:string}) {
    try{
    const browser =  await puppeteer.launch({
        headless:false,
      })
      const page = await browser.newPage()
      await page.goto(url) 
      const results = await page.evaluate(()=>{
        
        const content = document.querySelectorAll(selector)
        const data = [...content].map(con=>{
            const source = { url: con.getAttribute(attr)}
            return source
           
        })
        
        
        return data
    })

    fs.writeFile(jsonFileName,JSON.stringify(results),(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('JSON created')
        }
    })
    await browser.close()
}catch(err){
    console.log('Something went wrong!',err)
}
}

async getScrapAllElementsInnerHTML({url, selector, jsonFileName}:{url:string, selector:string, jsonFileName:string}) {
    try{
    const browser =  await puppeteer.launch({
        headless:false,
      })
      const page = await browser.newPage()
      await page.goto(url) 
      const results = await page.evaluate(()=>{
        
        const content = document.querySelectorAll(selector)
        const data = [...content].map(con=>{
            const source = { url: con.innerHTML }
            return source
           
        })
        
        
        return data
    })

    fs.writeFile(jsonFileName,JSON.stringify(results),(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('JSON created')
        }
    })
    await browser.close()
}catch(err){
    console.log('Something went wrong!',err)
}
}
}

export default new ScrapToJson

