I have created user Auth endpoints and Book endpoints

For Auth use  api/auth/register  for register   and api/auth/login   for login   get the token from here for the access of book endpoints    "BOTH ENDPOINTS ARE POST"

For book use   api/books "Get" For getting all the books      

               api/books?author=Author  "GET"  For getting books with author matching query

               api/books?publicationYear=4  "GET"  For getting books with PublicationYear matching query

               api/books?publicationYear=4&author=a4  "GET"  For getting books with PublicationYear matching "AND" the author matching  query

               api/books      "POST"   For Adding Books it has "input validation" it throws error accordingly when you enter wrong Input

               api/books/id   "PUT"    For Updating or Chnaging the Book Data it has "input validation" it throws error accordingly when you enter wrong Input

               api/books/id   "DELETE" For Deleting a Book

"MAKE SURE TO USE THE TOKEN GENERATED WHILE LOGIN FOR EACH OF THE ENDPOINTS OTHER WISE IT WILL THROW ERROR"  and Use the credetials or the secret key to run the application  like the mongodb connection , JWT Signing Key , and the PORT VALUE FOR THE ENDPOINT
