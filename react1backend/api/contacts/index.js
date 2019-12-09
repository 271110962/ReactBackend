import express from 'express';
import DataAPI from './contacts';

const router = express.Router();

router.get('/home', (req, res) => {
  const books = DataAPI.getAll();
  res.send({books: books});
});

router.put('/home/:id', (req, res) => {
  const id = req.params.id;
  const updateContact = req.body;

  if(updateContact && DataAPI.update(id,updateContact.name,updateContact.type)){
    return res.status(201).send({message: 'Update success'});
  }
  return res.status(400).send({message: 'Unable to find book in request.'});
});

router.delete('/home/:id', (req, res) => {
  const key = req.params.id;
  if(DataAPI.delete(key)){
    return res.status(204).send({message:'delete success'});
  }
  return res.status(400).send({message:'failfailfail'})
});

export default router;