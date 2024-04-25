import express from 'express';
import { body, validationResult } from 'express-validator';
import bookController from '../controllers/bookController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);
// Create a new book
router.post('/', 
  [
    body('title').notEmpty().withMessage('Title cannot be empty').trim().escape(),
    body('author').notEmpty().withMessage('Author cannot be empty').trim().escape(),
    body('publicationYear').isNumeric().withMessage('Publication year must be numeric')
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const validationErrors = {};
        errors.array().forEach(error => {
          if (!validationErrors[error.param]) {
            validationErrors[error.param] = [];
          }
          validationErrors[error.param].push(error.msg);
        });
      return res.status(400).json({ errors: validationErrors });
    }

    bookController.createBook(req, res);
  }
);

// router.post('/', 
   
//   [
    
//     body('title').notEmpty().withMessage('Title cannot be empty').trim().escape(),
//     body('authors').isArray().withMessage('Authors must be an array'),
//     body('authors.*').notEmpty().withMessage('Author cannot be empty').trim().escape(),
//     body('publicationYear').isNumeric().withMessage('Publication year must be numeric')
//   ],
//   (req, res) => {
//     // Check for validation errors
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       const validationErrors = {};
//       errors.array().forEach(error => {
//         if (!validationErrors[error.param]) {
//           validationErrors[error.param] = [];
//         }
//         validationErrors[error.param].push(error.msg);
//       });
//       return res.status(400).json({ errors: validationErrors });
//     }

    
//     bookController.createBook(req, res);
//   }
// );
// Get all books
router.get('/', bookController.getAllBooks);

// Get book by ID
router.get('/:id', bookController.getBookById);

// Update a book
router.put('/:id',  
  [
    body('title').notEmpty().withMessage('Title cannot be empty').trim().escape(),
    body('author').notEmpty().withMessage('Author cannot be empty').trim().escape(),
    body('publicationYear').isNumeric().withMessage('Publication year must be numeric')
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const validationErrors = {};
        errors.array().forEach(error => {
          if (!validationErrors[error.param]) {
            validationErrors[error.param] = [];
          }
          validationErrors[error.param].push(error.msg);
        });
      return res.status(400).json({ errors: validationErrors });
    }

    bookController.updateBook(req, res);
  }
);
// router.put('/:id', 
  
//   [
    
//     body('title').notEmpty().withMessage('Title cannot be empty').trim().escape(),
//     body('authors').isArray().withMessage('Authors must be an array'),
//     body('authors.*').notEmpty().withMessage('Author cannot be empty').trim().escape(),
//     body('publicationYear').isNumeric().withMessage('Publication year must be numeric')
//   ],
//   (req, res) => {
//     // Check for validation errors
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       const validationErrors = {};
//       errors.array().forEach(error => {
//         if (!validationErrors[error.param]) {
//           validationErrors[error.param] = [];
//         }
//         validationErrors[error.param].push(error.msg);
//       });
//       return res.status(400).json({ errors: validationErrors });
//     }

    
//     bookController.updateBook(req, res);
//   }
// );

// Delete a book
router.delete('/:id', bookController.deleteBook);

export default router;
