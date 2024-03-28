//calling the function that pulls list data from api
GetList();
//function for pulling api data
async function GetList() {

    
    try {
     //authentication protocol  (key necessary to access secured data)
    const apikey2 = 'LZb0m0RaLKgdNrXaf77KVtDX8RFEOrI2'; 
    
        //pulls the value that is inputed by the user in the textbox (in this cas, it is the list of genres)
       const res = await fetch('  https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=' + apikey2);
       
        //if the call happens successfully (data is able to be retreived from the API database), then the console will print a success message
           //if the call does not happen successfully (data cannot be accessed), then the console will print a failure message
          if (res.ok) {
               console.log("sucess")
               } else {
               console.log("fail");
               }
               
           //initialized variable "data" that takes the data retrieved from the API and converts it into a json object for easy usage within js
           const data2 = await res.json();
           //initializes variable storing the "books" key? within the retrieved object
             const lists = data2.results;

             
             //initialize variable that wiill store the content populated within for loop
              let listContent = "";
                        //loops through the results pulled from api call
                       for (let j = 0; j < lists.length; j++) {
                        
                    
                //initialize variable to store each genre listed in the api
                const list = lists[j];
              
                // creating the html value to be stored in listContent variable so that it can be pushed to DOM
                listContent += `
                    
                        <option value = ${list.list_name_encoded}> <span style = "font-size: 12px;">${list.list_name}</span></option>
                    
                `;
               
                
               }

               //injects the content of listContent variable into the "genre" select id part of HTML
              document.getElementById("genre").innerHTML = listContent;
               
    }
    //tells program to display error message in console if an exception/error occurs in the try block
    catch (error){
    console.error(error)
    }
    
    
    
    }
        
//loads the second api call function onto result page when it loads
window.onload = async function () {
    
       try {
        //authentication protocol  (key necessary to access secured data)
            //storing it twice because it is part of a new function
        const apikey = 'LZb0m0RaLKgdNrXaf77KVtDX8RFEOrI2'; 
       
   
    //initializing variable to stoe the url information (the url that leads to results page when user clicks generate button on index page)
        const urlParams = new URLSearchParams(window.location.search);
    //initializing variables to pull the information in the url that specifies the date and genre entry
    const dateEntry = urlParams.get('date');
    const genreEntry = urlParams.get('genre');
    
        //const dateEntry = document.getElementById("date").value;

        //calls the api and also inputs the date user inputed into the text box and selected genre inside of the query
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
           const books = data.results.books;

           //checking to see if there is no data within these different parts of the object and defining what happens if that is true
           if (!data || !data.results || !data.results.books || data.results.books.length === 0) {

           // creating the html value to be stored in errorContent variable so that it can be pushed to DOM
            let errorContent = "";
      
            errorContent += 
            
            `<h1 id = "error-message">
            <span style = "color: red">
                sorry!!!!!!!!!
                </span><br>
                no bestsellars here
                <br>
                <span style = "color: blue; font-size: 30px">
                other options will be waiting...
                </span> 
               <br>
                <span style="font-size: 300px; line-height: 1;">
                ˙◠˙
                </span>
            
            </h1>`
            
            //injects the content of errorContent variable into the "error-screen" class part of HTML if there are no results
            document.querySelector(".error-screen").innerHTML = errorContent;
           }

          
        //initializing global variables to be used throughout code
           let content = "";
            //looping through each component of the books key/object and subtracting the results by 7 entries in order to display 3 book for categories with 10 items and 8 items for categories with 15 items in object
           for (let i = 0; i < books.length - 5; i++) {
           
              
           //initialized variable storing the books object for each loop?
            const book = books[i];
            //concantenates certain components of books object (title, author, image) so that the information is displayed in that order and this same process happens for every time the loop occurs
            //these components are accessed by taking the variable storing the books object and specifying the key?name containing each component 
            content += `

          
            
                <div class = "title-author">
                <img id = "title-circle" src="title-circle.svg">
                <h1 id ="title">${book.title}</h1>
                <img id = "author-circle" src="author-cirlce.svg">
                <h1 id = "author">${book.author}</h1> 
                </div>
                <div class = "description">
                <p id = "description"> ${book.description} </p> </div>
                <div class = "image-link">
                <a href = "${book.amazon_product_url}"> <img id = "book-img" src="${book.book_image}" alt="${book.title}"></a>
                </div>  
        `;
     
            
           }
    
        //the dissected data gets pushed onto the DOM and displayed after the loop ends. 
          document.querySelector(".data").innerHTML = content;

       }
       //tells program to display error message in console if an exception/error occurs in the try block
       catch(error) {
           console.error(error);
       }

   }


