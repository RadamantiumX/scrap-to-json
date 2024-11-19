import puppeteer from "puppeteer"
import fs from 'fs'

export async function getParams() {
    const browser =  await puppeteer.launch({
        headless:false,
      })
      const page = await browser.newPage()
      await page.goto('https://www.twpornstars.com/?page=1') 
      const results = await page.evaluate(()=>{
        
        const content = document.querySelectorAll('.thumb__link')
        const data = [...content].map(con=>{
            const source = { url: con.getAttribute('href')}
            return source
           
        })
        
        
        return data
    })

    fs.writeFile('some-json.json',JSON.stringify(results),(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('Data scraped')
        }
    })
    await browser.close()
}

