 

 const container = document.querySelector('.container');

 async function fetchPhoto(numOfImg = 5 ){
    try{
    let response = await fetch('https://api.unsplash.com/photos/?client_id=kM5--yERRF3QC3ywYJyi2RgQwRqWhDVxhs4f7lrzkys&count=${countVal}')
    let data = await response.json()
    console.log('data..',data) 

    data.map((item) =>{
        const img = document.createElement('img')
        img.src= `${item.links.download}`
        container.appendChild(img)
    })
}catch(err){

    const h2 = document.createElement('h2')
    h2.appendChild(document.createTextNode('Somehing Wrong !'))
    container.appendChild(h2)

}
    
 }
 fetchPhoto()

 document.addEventListener('scroll',()=>{
     if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        fetchPhoto()
     }
 })



