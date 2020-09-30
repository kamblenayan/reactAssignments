import Axios from 'axios'
const apiKey='05jMmcAT3KvLEsl4tpWbg'
//dispatch actions 
export function searchBooks(data){
   return function(dispatch){
    let url = 'https://cors-anywhere.herokuapp.com/'+'https://www.goodreads.com/search/index.xml?key='+apiKey+'&q='+data;
       //api to fetch results
       Axios.get(url).then((response)=>{
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(response.data,"text/xml");
        let works= xmlDoc.getElementsByTagName("work");
        works = Array.from(works);
         //fetch fields from xml document <work element contains book data>
         let books =works.map(work => xmlToJSON(work))
         //update state in store
         dispatch({type:'SEARCHED_BOOKS',data:books})
         
       },(err)=>{
      
             
            
       
       })
   }
}


 const xmlToJSON = (xmlElement) =>{
        
    var arr = Array.from(xmlElement.children)
    let obj ={}
    arr.forEach(node =>{
        if(node.children.length > 0){
            //sublement
            obj[node.nodeName] = xmlToJSON(node)
        }else{
            obj[node.nodeName] = node.innerHTML
        }
    })
    return obj
   
}

export function showBook(bookData){
    return function(dispatch){
       
        console.log(bookData)
        if(!bookData.description){
            bookData.description = getDescription(bookData,dispatch)
        }
        
    }
}

const getDescription = (bookData,dispatch) =>{
    let url =  `https://cors-anywhere.herokuapp.com/`+
    `https://www.goodreads.com/book/show?key=${apiKey}&id=${bookData.best_book.id}&format=xml`;
    Axios.get(url).then((response)=>{
      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(response.data,"text/xml");
      var description = xmlDoc.getElementsByTagName('description');
      description = (description[0].innerHTML).replace('<![CDATA[',"").replace("]]>", "")
      bookData.description = (description.length> 0) ? description : "No description given for the book";
      const book = bookData;
      dispatch({type:'SHOW_BOOK',data:book})
     
    },(err)=>{
        return "Error fetching description"
    })

}