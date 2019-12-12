import bookModel from '../api/books/bookModel';

const books = [
    {
        "id":"0",
        "name": "Pride and Prejudice",
        "authorfirst": "Jane",
        "authorlast": "Austen",
        "mark" : "9.8",
        "type" : "Romantic",
        "large": "../../images/pride.jpg",
        "publishdate":"19880127",
        "publishinghouse": "new york Press",
        "introduction":"The novel describes the daughter of Bennard’s five benevolent monks, and the protagonist is the second daughter, Elizabeth. She met Darcy at the ball, but she heard that he was arrogant. He had always been repelled by his heart. After some twists and turns, Elizabeth lifted his prejudice against Darcy. Darcy also put down arrogance, and the lover finally became a genus. This work uses daily life as the material. The content of the sentimental novels popular in the society and the writing methods of the artificial creation vividly reflect the British township life and the world situation in the conservative and occluded state from the end of the 18th century to the early 19th century. And has been adapted into movies and TV series many times.",
        "picture":"./images/pride.jpg"
    },
    {
        "id":"1",
        "name": "Three Body",
        "authorfirst": "Cixin",
        "authorlast": "Liu",
        "mark" : "5",
        "type" : "Science",
        "large": "../../images/threebody.jpg",
        "publishdate":"19920918",
        "publishinghouse": "tokyo Press",
        "introduction":"The novel describes the daughter of Bennard’s five benevolent monks, and the protagonist is the second daughter, Elizabeth. She met Darcy at the ball, but she heard that he was arrogant. He had always been repelled by his heart. After some twists and turns, Elizabeth lifted his prejudice against Darcy. Darcy also put down arrogance, and the lover finally became a genus. This work uses daily life as the material. The content of the sentimental novels popular in the society and the writing methods of the artificial creation vividly reflect the British township life and the world situation in the conservative and occluded state from the end of the 18th century to the early 19th century. And has been adapted into movies and TV series many times.",
        "picture":"./images/threebody.jpg"
    },
    {
        "id":"2",
        "name": "Goosebumps",
        "authorfirst": "Eric",
        "authorlast": "Affabee",
        "mark" : "6.7",
        "type" : "Children",
        "large": "../../images/goosebumps.jpg",
        "publishdate":"19890912",
        "publishinghouse": "bei jing Press",
        "introduction":"The novel describes the daughter of Bennard’s five benevolent monks, and the protagonist is the second daughter, Elizabeth. She met Darcy at the ball, but she heard that he was arrogant. He had always been repelled by his heart. After some twists and turns, Elizabeth lifted his prejudice against Darcy. Darcy also put down arrogance, and the lover finally became a genus. This work uses daily life as the material. The content of the sentimental novels popular in the society and the writing methods of the artificial creation vividly reflect the British township life and the world situation in the conservative and occluded state from the end of the 18th century to the early 19th century. And has been adapted into movies and TV series many times.",
        "picture": "./images/goosebumps.jpg"
    },
    {
        "id":"3",
        "name": "Twenty Thousand Leagues Under The Sea",
        "authorfirst": "Jules",
        "authorlast": "Verne",
        "mark" : "8.1",
        "type" : "Science",
        "large": "../../images/twentysea.jpg",
        "publishdate":"19611201",
        "publishinghouse": "nan king Press",
        "introduction":"The novel describes the daughter of Bennard’s five benevolent monks, and the protagonist is the second daughter, Elizabeth. She met Darcy at the ball, but she heard that he was arrogant. He had always been repelled by his heart. After some twists and turns, Elizabeth lifted his prejudice against Darcy. Darcy also put down arrogance, and the lover finally became a genus. This work uses daily life as the material. The content of the sentimental novels popular in the society and the writing methods of the artificial creation vividly reflect the British township life and the world situation in the conservative and occluded state from the end of the 18th century to the early 19th century. And has been adapted into movies and TV series many times.",
        "picture":  "./images/twentysea.jpg"
    },
    {
        "id":"4",
        "name": "Walden",
        "authorfirst": "Henry David",
        "authorlast": "Thoreau",
        "mark" : "4.3",
        "type" : "Romantic",
        "large": "../../images/walden.jpg",
        "publishdate":"19990325",
        "publishinghouse": "shen zhen Press",
        "introduction":"The novel describes the daughter of Bennard’s five benevolent monks, and the protagonist is the second daughter, Elizabeth. She met Darcy at the ball, but she heard that he was arrogant. He had always been repelled by his heart. After some twists and turns, Elizabeth lifted his prejudice against Darcy. Darcy also put down arrogance, and the lover finally became a genus. This work uses daily life as the material. The content of the sentimental novels popular in the society and the writing methods of the artificial creation vividly reflect the British township life and the world situation in the conservative and occluded state from the end of the 18th century to the early 19th century. And has been adapted into movies and TV series many times.",
        "picture":"./images/walden.jpg"
    },
    {
        "id":"5",
        "name": "Kinder-und Hausmärchen",
        "authorfirst": "Wilhelm",
        "authorlast": "Grimm",
        "mark" : "5.8",
        "type" : "Children",
        "large": "../../images/grimm.jpg",
        "publishdate":"20161205",
        "publishinghouse": "dublin Press",
        "introduction":"The novel describes the daughter of Bennard’s five benevolent monks, and the protagonist is the second daughter, Elizabeth. She met Darcy at the ball, but she heard that he was arrogant. He had always been repelled by his heart. After some twists and turns, Elizabeth lifted his prejudice against Darcy. Darcy also put down arrogance, and the lover finally became a genus. This work uses daily life as the material. The content of the sentimental novels popular in the society and the writing methods of the artificial creation vividly reflect the British township life and the world situation in the conservative and occluded state from the end of the 18th century to the early 19th century. And has been adapted into movies and TV series many times.",
        "picture":"./images/grimm.jpg"
    }

];


export default async function loadBook() {
    try {
      await bookModel.deleteMany();
      await bookModel.collection.insertMany(books);
      console.info(`${books.length} books were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load Book Data: ${err}`);
    }
  }