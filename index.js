//calls the async GetData function
//GetData();
     
//creating a function to retrieve data from NYT Book API via async await GET method

    
window.onload = async function () {
       try {
        //authentication protocol  (key necessary to access secured data)
        const apikey = 'LZb0m0RaLKgdNrXaf77KVtDX8RFEOrI2'; 
        //pulls the value that is inputed by the user in the textbox (in this cas, it is the date to see bestsellers on that date)
        const urlParams = new URLSearchParams(window.location.search);
    const dateEntry = urlParams.get('date');
        //const dateEntry = document.getElementById("date").value;

        //calls the api and also inputs the date user inputed into the text box inside of the query
        const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/${dateEntry}/hardcover-fiction.json?api-key=` + apikey);

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
          
        //initializing global variables to be used throughout code
          let titleData = "";
          let authorData = "";
           let bookImg = "";
           let content = "";
           
           //looping through each component of the books key/object and subtracting the results by 10 entries? in order to only display 5 books
           for (let i = 0; i < books.length - 10; i++) {

           //initialized variable storing the books object for each loop?
            const book = books[i];
            //concantenates certain components of books object (title, author, image) so that the information is displayed in that order and this same process happens for every time the loop occurs
            //these components are accessed by taking the variable storing the books object and specifying the key?name containing each component 
            content += `
            <div>
                <p id ="title">Title: ${book.title}</p>
                <p>Author: ${book.author}</p>
                <p>Description: ${book.description}
                <img src="${book.book_image}" alt="${book.title}">
            </div>
        `;

            
           }

          //the dissected data gets pushed onto the DOM and displayed after the loop ends. 
          document.getElementById("data").innerHTML = content;
          
           
    

       }
       //tells program to display error message in console if an exception/error occurs in the try block
       catch(error) {
           console.error(error);
       }

   }


