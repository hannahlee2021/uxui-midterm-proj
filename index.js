

GetList();
async function GetList() {


    try {
    const apikey2 = 'LZb0m0RaLKgdNrXaf77KVtDX8RFEOrI2'; 
    
    
       const res = await fetch('  https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=' + apikey2);
       
          if (res.ok) {
               console.log("sucess")
               } else {
               console.log("fail");
               }
               
           const data2 = await res.json();
             const lists = data2.results;
             
              let listContent = "";
                       for (let j = 0; j < lists.length; j++) {
                        
                    
        
                const list = lists[j];
              
    
                listContent += `
                    
                        <option value = ${list.list_name_encoded}> ${list.list_name}</option>
                    
                `;
                console.log(listContent);
           
                
               }
               
              document.getElementById("genre").innerHTML = listContent;
               
    }
    catch (error){
    console.error(error)
    }
    
    
    
    }
        
    
window.onload = async function () {
    
       try {
        //authentication protocol  (key necessary to access secured data)
        const apikey = 'LZb0m0RaLKgdNrXaf77KVtDX8RFEOrI2'; 
        //pulls the value that is inputed by the user in the textbox (in this cas, it is the date to see bestsellers on that date)
        // const dateEntry = document.getElementById("date");
        // const genreEntry = document.getElementById("genre-dropdown")
        const urlParams = new URLSearchParams(window.location.search);
    const dateEntry = urlParams.get('date');
    const genreEntry = urlParams.get('genre');
    
        //const dateEntry = document.getElementById("date").value;

        //calls the api and also inputs the date user inputed into the text box inside of the query
        // const response1 = await fetch('  https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=LZb0m0RaLKgdNrXaf77KVtDX8RFEOrI2');
        const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/${dateEntry}/${genreEntry}.json?api-key=` + apikey);


           //if the call happens successfully (data is able to be retreived from the API database), then the console will print a success message
           //if the call does not happen successfully (data cannot be accessed), then the console will print a failure message
           if(response.ok) {
               console.log("SUCCESS");
           
           }
           else {
               console.log("FAIL");
           }

           //initialized variable "data" that takes the data retrieved from the API and converts it into a json object for easy usage within js
           const data = await response.json();
           //initializes variable storing the "books" key? within the retrieved object
        //    const lists = data.results;
        //    console.log(lists)
           const books = data.results.books;
          
        //initializing global variables to be used throughout code
         
       
           let content = "";
      

           


    //        //looping through each component of the books key/object and subtracting the results by 7 entries in order to display 3 book for categories with 10 items and 8 items for categories with 15 items in object
           for (let i = 0; i < books.length - 5; i++) {

           //initialized variable storing the books object for each loop?
            const book = books[i];
            //concantenates certain components of books object (title, author, image) so that the information is displayed in that order and this same process happens for every time the loop occurs
            //these components are accessed by taking the variable storing the books object and specifying the key?name containing each component 
            content += `
            
                <div class = "title-author">
                <img src="title-circle.svg">
                <h1 id ="title">${book.title}</h1>
                <h1 id = "author">${book.author}</h1> 
                </div>
                <div class = "description">
                <p id = "description"> ${book.description} </p> </div>
                <div class = "image-link">
                <a href = "${book.amazon_product_url}"> <img id = "book-img" src="${book.book_image}" alt="${book.title}"></a>
                </div>
                
            
            
            
        
        `;
            console.log(content)

            
           }
        //    const buys = data.results.books.buy_links;
        //    let content2="";

        //    for (let x = 0; x < buys.length; x++) {
        //     const buy = buys[x];

        //     content2 += `
        //     <a href = "${buy.url}" > ${buy.name} </a>
        //     `
        //    }

    //       //the dissected data gets pushed onto the DOM and displayed after the loop ends. 
          document.querySelector(".data").innerHTML = content;
        //   document.getElementById("links").innerHTML = content2;
  
          
           
    

       }
       //tells program to display error message in console if an exception/error occurs in the try block
       catch(error) {
           console.error(error);
       }

   }


