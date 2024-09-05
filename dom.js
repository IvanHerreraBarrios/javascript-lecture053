console.log("Document elements")
console.log(window.document)
console.log(document) //doctype and HTML
console.log(document.head)
console.log(document.body)
console.log(document.documentElement) //HTML
console.log(document.doctype)
console.log(document.characterSet) //UTF 8 
console.log(document.title)
console.log(document.links) //ITS NOT AN ARRAY
console.log(document.images)
console.log(document.forms)
console.log(document.styleSheets)
console.log(document.scripts) //1 = dom, 2 = liveServer
setTimeout(() => {
    console.log(document.getSelection().toString) //What I select
}, 2000);

//Obsolete
document.write("<h2>Hello World from DOM</h2>")

