
let accesKey="gAkMPA_j3hqczVPCtI-ugjPWET8AzNXkcjb6pcH1tk4";
let search=document.getElementById("name");
let submit=document.getElementById("submit");
let data=document.getElementById("result1");
let read_more=document.getElementById("read_more")
let keyword="";
let page=1;

async function clickHandler(){
    
    keyword=search.value;
    console.log(keyword);
    let url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=gAkMPA_j3hqczVPCtI-ugjPWET8AzNXkcjb6pcH1tk4&per_page=12`
    const response=await fetch(url)
    const parseResponse=await response.json();
   
   keyword=""

    // console.log(parseResponse);
    if(page===1){
        data.innerHTML=""
    }
    const result=parseResponse.results;
    
    result.map((element)=>{
       
        const div=document.createElement('div');
        div.classList.add("show_result")
        const image=document.createElement("img");
        image.src=element.urls.small;
        const imageLInk=document.createElement('a');
        imageLInk.href=element.links.html;
        imageLInk.target="_blank"

        const discreption=document.createElement("p");
        discreption.classList.add("para");
        let desc=element.alt_description;
        discreption.innerText=desc;

        console.log(element.alt_description);
        imageLInk.appendChild(image);
        div.appendChild(imageLInk);
        div.append(discreption);
        data.appendChild(div);
        
        // console.log(div);
        

    })
  
  
read_more.style.display="block"


}


submit.addEventListener("click",(e)=>{
    e.preventDefault;
    page=1;
    clickHandler();

})

read_more.addEventListener("click",(e)=>{
    // e.preventDefault;
    page++;
    clickHandler();

})
