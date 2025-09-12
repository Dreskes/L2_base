
function domainName(url) {
    return url.replace(/https?:\/\//, '')
              .replace(/www\./, '')
              .split('.')[0];
}


console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("http://www.zombie-bites.com"));         
console.log(domainName("https://www.cnet.com"));                
console.log(domainName("www.xakep.ru"));                       
console.log(domainName("https://youtube.com"));               