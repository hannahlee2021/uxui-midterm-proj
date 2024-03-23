GetData();
      
 
async function GetData() {
       try {
      /*  const apikey = 'LZb0m0RaLKgdNrXaf77KVtDX8RFEOrI2'; */
        const dateEntry = document.getElementById("date").value;

           const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/${dateEntry}/hardcover-fiction.json?api-key=LZb0m0RaLKgdNrXaf77KVtDX8RFEOrI2`);

           if(response.ok) {
               console.log("SUCCESS");
           
           }
           else {
               console.log("FAIL");
           }

           const data = await response.json();
           const books = data.results.books;
          //let dataStuff = "";
          let titleData = "";
          let authorData = "";
           let bookImg = "";
           let content = "";
           
           for (let i = 0; i < books.length - 10; i++) {

           
            const book = books[i];
            
            content += `
            <div>
                <p id ="title">Title: ${book.title}</p>
                <p>Author: ${book.author}</p>
                <p>Description: ${book.description}
                <img src="${book.book_image}" alt="${book.title}">
            </div>
        `;

            
           }
          document.getElementById("data").innerHTML = content;
          
           
    

       }
       catch(error) {
           console.error(error);
       }

   }


