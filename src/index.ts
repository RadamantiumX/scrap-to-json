import puppeteer from "puppeteer"
import fs from 'fs'

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


}

export default ScrapToJson

