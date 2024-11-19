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
    url: string;
    selector: string;
    jsonFileName: string;
    constructor(url:string, selector:string, jsonFileName:string){
        this.url = url;
        this.selector = selector;
        this.jsonFileName = jsonFileName;
    }
     async getScrapAllElementsAttr(attr:string) {
    try{
    const browser =  await puppeteer.launch({
        headless:false,
      })
      const page = await browser.newPage()
      await page.goto(this.url) 
      const results = await page.evaluate(()=>{
        
        const content = document.querySelectorAll(this.selector)
        const data = [...content].map(con=>{
            const source = { content: con.getAttribute(attr) }
            return source
           
        })
        
        
        return data
    })

    fs.writeFile(`${this.jsonFileName}.json`,JSON.stringify(results),(err)=>{
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

async getScrapAllElementsInnerHTML() {
    try{
    const browser =  await puppeteer.launch({
        headless:false,
      })
      const page = await browser.newPage()
      await page.goto(this.url) 
      const results = await page.evaluate(()=>{
        
        const content = document.querySelectorAll(this.selector)
        const data = [...content].map(con=>{
            const source = { content: con.innerHTML }
            return source
           
        })
        
        
        return data
    })

    fs.writeFile(`${this.jsonFileName}.json`,JSON.stringify(results),(err)=>{
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

async getScrapElementAttr(attr:string){
    try{
        const browser =  await puppeteer.launch({
            headless:false,
          })
          const page = await browser.newPage()
          await page.goto(this.url) 
          const results = await page.evaluate(()=>{
            const content = document.querySelector(this.selector)
            const data = { content:content?.getAttribute(attr) }
            return data
          })
          fs.writeFile(`${this.jsonFileName}.json`,JSON.stringify(results),(err)=>{
            if(err){
                console.log(err)
            }else{
                console.log('JSON created')
            }
        })
        await browser.close()

    }catch(error){
        console.log('Something went wrong!',error)
    }
}
async getScrapElementInnerHTML(){
    try{
        const browser =  await puppeteer.launch({
            headless:false,
          })
          const page = await browser.newPage()
          await page.goto(this.url) 
          const results = await page.evaluate(()=>{
            const content = document.querySelector(this.selector)
            const data = { content: content?.innerHTML }
            return data
          })
          fs.writeFile(`${this.jsonFileName}.json`,JSON.stringify(results),(err)=>{
            if(err){
                console.log(err)
            }else{
                console.log('JSON created')
            }
        })
        await browser.close()

    }catch(error){
        console.log('Something went wrong!',error)
    }
}
}

export default ScrapToJson

