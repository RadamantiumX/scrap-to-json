import puppeteer from "puppeteer"

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

    console.log(results)
}

