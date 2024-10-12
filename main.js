 const clientId = `kM5--yERRF3QC3ywYJyi2RgQwRqWhDVxhs4f7lrzkys`
  const URL = `https://api.unsplash.com/photos` 

 const container = document.querySelector('.container');
 
 async function fetchPhoto(countVal = 5 ){
    try{
        let loader = document.querySelector('.loader')
     loader.style.visibility = "visible";
    let response = await fetch(`${URL}/?client_id=${clientId}&count=${countVal}`)
    let data = await response.json()
    data.map((item) =>{
        const img = document.createElement('img')
        img.src= `${item.links.download}`
        img.alt = `Image`
        container.appendChild(img)
    })

}catch(err){  

    const h2 = document.createElement('h2')
    h2.appendChild(document.createTextNode('Something wrong while api call !'))
    document.querySelector('.container').appendChild(h2)

}finally{
    let loader = document.querySelector('.loader')
     loader.style.display = "none";
}
    
 }

 fetchPhoto()

 document.addEventListener('scroll',()=>{
     if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        console.log('total',window.scrollY + window.innerHeight)
        fetchPhoto()
     }
 })


 //  The read-only scrollY property of the Window interface returns the number of pixels by which
 //   the document is currently scrolled vertically.

 // The value of innerHeight is taken from the height of the window's layout viewport. 
 // The width can be obtained using the innerWidth property.

 // The Element.scrollHeight read-only property is a measurement of the height of an element's content,
 //  including content not visible on the screen due to overflow.


