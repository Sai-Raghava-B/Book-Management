import Book from '../models/bookModel.js';

const bookController = {
  // Create a new book
  createBook: async (req, res) => {
    try {
      const { title, author, publicationYear } = req.body;
      const newBook = new Book({
        title,
        author,
        publicationYear,
      });
      const savedBook = await newBook.save();
      res.status(201).json(savedBook);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // createBook: async (req, res) => {
  //   try {
  //     const { title, authors, publicationYear } = req.body;

  //     // Create a new book instance
  //     const newBook = new Book({
  //       title,
  //       authors,
  //       publicationYear
  //     });

  //     // Save the book to the database
  //     const savedBook = await newBook.save();

  //     res.status(201).json(savedBook);
  //   } catch (error) {
  //     res.status(400).json({ error: error.message });
  //   }
  // },


  getAllBooks: async (req, res) => {
    try {
      let query = {};
      // Check if author query parameter is provided
      if (req.query.author) {
        query.author = req.query.author;
        // console.log(req.query.author);
      }

      // Check if publicationYear query parameter is provided
      if (req.query.publicationYear) {
        query.publicationYear = req.query.publicationYear;
      }

      // Fetch books based on query
      // console.log(query)
      const books = await Book.find(query);

      if (books.length === 0) {
        return res.status(404).json({ error: 'No books found' });
      }

      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get book by ID
  getBookById: async (req, res) => {
    try {
      const { id } = req.params;
      const book = await Book.findById(id);
      if (!book) {
        return res.status(404).json({ error: 'Book not found' });
      }
      res.status(200).json(book);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update a book
  updateBook: async (req, res) => {
    try {
      const { id } = req.params;
      const { title, author, publicationYear } = req.body;
      const updatedBook = await Book.findByIdAndUpdate(
        id,
        { title, author, publicationYear },
        { new: true }
      );
      if (!updatedBook) {
        return res.status(404).json({ error: 'Book not found' });
      }
      res.status(200).json(updatedBook);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Delete a book
  deleteBook: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedBook = await Book.findByIdAndDelete(id);
      if (!deletedBook) {
        return res.status(404).json({ error: 'Book not found' });
      }
      res.status(200).json(deletedBook);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default bookController;
