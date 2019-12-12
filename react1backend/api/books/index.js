import express from 'express';
import Book from './bookModel';
import asyncHandler from 'express-async-handler';

const router = express.Router();

router.get('/home', asyncHandler(async(req, res) => {
  try{
    const books = await Book.find();
    return res.status(200).json({books});
  }catch (error) {
    handleError(res, error.message);
  }
}));


router.get('/book/:id', asyncHandler(async(req, res) => {
  try{
    const book = await Book.findOne({publishdate:req.params.id});
    return res.status(200).json(book);
  }catch (error) {
    handleError(res, error.message);
  }
}));


router.put('/home/:id', asyncHandler(async(req, res) => {
  if(req.body._id) delete req.body._id;
  const book = await Book.update({
    id:req.params.id,
  },req.body,{upsert:false});
  if(!book)return res.sendStatus(404);
  return res.json(200,{book});
}));

//   if(updateBook && DataAPI.update(updateBook.prev,updateBook.name,updateBook.type,updateBook.mark)){
//     return res.status(201).send({message: 'Update success'});
//   }
//   return res.status(400).send({message: 'Unable to find book in request.'});
// });



router.delete('/home/:id', asyncHandler(async(req, res) => {
  const book = await Book.findOneAndRemove({id:req.params.id});
  if(!book) return res.send(404);
  return res.status(204).send({book});
}));
//   const key = req.params.id;
//   if(DataAPI.delete(key)){
//     return res.status(204).send({message:'delete success'});
//   }
//   return res.status(400).send({message:'failfailfail'})
// });


/**
 * Handle general errors.
 * @param {object} res The response object
 * @param {object} err The error object.
 * @return {object} The response object
 */
function handleError(res, err) {
  return res.send(500, err);
}

export default router;