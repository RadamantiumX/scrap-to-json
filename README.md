# Scrap To JSON ✔️

¡Welcome everyone!

## Intro

This's the easy way to **scrap** a web page, and get the deseable data (*attributes and inner text*) into **JSON** file. With a few steps, you can obtain the selected element contain, and using in to wherever you prefer (an API maybe). Only do you need is some few code lines and interacting with you favorite bash terminal.


## *Install the package*

```bash
npm i @complements/scrap-to-json
```

## *Usage example*

First at all, you must initialize the **ScrapToJson** class, then, select the method for start this library:

```js
import ScrapToJson from "@complements/scrap-to-json"

async function scrapWebPage(){
   const scrap = new ScrapToJson()
   const getSingleElementData = await scrap.getScrapSingleElement() // Get a Single DOM element data
   const getAllElementsData = await scrap.getScrapAllElements()  // Get all DOM element data
}
```

Then, when the functions is executed, the terminal will be opened (*i recommend use NODE environment*). 

Write the web page URL from you desire get some data.

```bash
Enter the url: https://yourselectedwebpage.com
```
*Press Enter to next*

Add the DOM element (for eg. the anchor tag "a") or class.

```bash
Enter a DOM Element tag (without "<>") or selector: a
```

*Press Enter to next*

Choose the name for the output **JSON** file.

```bash
Enter a File Name (omit *json* extension): myFileName
```

*Press Enter to next*

And that's it, the file will be saved on the root folder.


## Contributions

You may contributing, all the improvement is very welcome. This is only a complement to make more easy the basic scrap. I hope can be useful. 

**Regards!**