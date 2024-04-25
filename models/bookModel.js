import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publicationYear: {
        type: Number,
        required: true
    }
});

const Book = mongoose.model('Book', bookSchema);

export default Book;

// import mongoose from 'mongoose';

// const bookSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true
//   },
//   authors: {
//     type: [String], // Array of strings
//     required: true
//   },
//   publicationYear: {
//     type: Number,
//     required: true
//   }
// });

// const Book = mongoose.model('Book', bookSchema);

// export default Book;