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
          let dataStuff = "";
           let bookImg = "";
           //let content = "";
           
           for (let i = 0; i < books.length; i++) {

             dataStuff += `title: ${books[i].title} <br> author: ${books[i].author.toUpperCase()}<br><br>`;
             
             
             bookImg = books[0].book_image;

            //const book = books[i];
        //     content += `
        //     <div>
        //         <p>Title: ${book.title}</p>
        //         <p>Author: ${book.author}</p>
        //         <p>Description: ${book.description}
        //         <img src="${book.book_image}" alt="${book.title}">
        //     </div>
        // `;

            

            // const imgElement = document.createElement("img");
            // imgElement.src = books[i].book_image;

            //imgElement.alt = book.title;
            // imgElement.style.display = "block";
           // console.log(books[i].title, books[i].author)
            // const dataStuff = `title: ${books[i].title}, <br>author: ${books[i].author.toUpperCase()}`;

            // dataStuff += `title: ${books[i].title} <br> author: ${books[i].author.toUpperCase() <br>  } <br><br>`;

            //bookImg = books[i].book_image;
            // console.log(dataStuff);

            // const imgElement = document.createElement("img");
            // imgElement.src = books[i].book_image;
            
            // imgElement.style.display = "block";

          //  document.getElementById("book-img").appendChild(imgElement);
      
           
        
        //    console.log(books[i].title, books[i].author)
           
           }
           document.getElementById("data").innerHTML = dataStuff;
           
           const imgElement = document.getElementById("book-img");
           imgElement.src=bookImg;
           imgElement.style.display = "block";
           console.log(dataStuff)
           
           //document.getElementById("data").innerHTML = content;

        //    const bookImg = books[i].book_image;

           //document.getElementById("data").innerHTML = dataStuff
           

        //    const imgElement = document.getElementById("book-img");
        //    imgElement.src = books[0].book_image;
        //    imgElement.style.display = "block";
           

            // const data2 = document.getElementById("data");
            // data2.innerHTML = dataStuff;
     /*      console.log(data.results.books);  */
           

       }
       catch(error) {
           console.error(error);
       }

   }


