import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    id:String,
    name: String,
    authorfirst: String,
    authorlast: String,
    mark:String,
    type:String,
    large:String,
    publishdate:String,
    publishinghouse:String,
    introduction:String,
    picture:String,
    updated: {
      type: Date,
      default: Date.now,
    },
  });
  
  export default mongoose.model('Book', BookSchema);