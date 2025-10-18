import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
const app = express();
dotenv.config();
app.use(cors(
    {
    origin:`${process.env.cors_origin}`,
    credentials:true
    }
));


const jokes=[
  {
    "type": "general",
    "setup": "Why don't scientists trust atoms?",
    "punchline": "Because they make up everything!",
    "id": 1
  },
  {
    "type": "general",
    "setup": "What do you call a bear with no teeth?",
    "punchline": "A gummy bear!",
    "id": 2
  },
  {
    "type": "general",
    "setup": "Why did the scarecrow win an award?",
    "punchline": "He was outstanding in his field!",
    "id": 3
  },
  {
    "type": "general",
    "setup": "What do you call a fake noodle?",
    "punchline": "An impasta!",
    "id": 4
  },
  {
    "type": "general",
    "setup": "Why don't eggs tell jokes?",
    "punchline": "They'd crack each other up!",
    "id": 5
  },
  {
    "type": "general",
    "setup": "What did the ocean say to the beach?",
    "punchline": "Nothing, it just waved!",
    "id": 6
  },
  {
    "type": "general",
    "setup": "Why did the math book look sad?",
    "punchline": "Because it had too many problems!",
    "id": 7
  },
  {
    "type": "general",
    "setup": "What do you call cheese that isn't yours?",
    "punchline": "Nacho cheese!",
    "id": 8
  },
  {
    "type": "general",
    "setup": "Why did the bicycle fall over?",
    "punchline": "Because it was two-tired!",
    "id": 9
  },
  {
    "type": "general",
    "setup": "What do you call a fish wearing a bowtie?",
    "punchline": "Sofishticated!",
    "id": 10
  },
  {
    "type": "general",
    "setup": "Why don't skeletons fight each other?",
    "punchline": "They don't have the guts!",
    "id": 11
  },
  {
    "type": "general",
    "setup": "What do you call a sleeping bull?",
    "punchline": "A bulldozer!",
    "id": 12
  },
  {
    "type": "general",
    "setup": "Why did the coffee file a police report?",
    "punchline": "It got mugged!",
    "id": 13
  },
  {
    "type": "general",
    "setup": "What do you call a dinosaur that crashes his car?",
    "punchline": "Tyrannosaurus Wrecks!",
    "id": 14
  },
  {
    "type": "general",
    "setup": "Why did the golfer bring two pairs of pants?",
    "punchline": "In case he got a hole in one!",
    "id": 15
  },
  {
    "type": "general",
    "setup": "What do you call a pile of cats?",
    "punchline": "A meowtain!",
    "id": 16
  },
  {
    "type": "general",
    "setup": "Why don't oysters donate to charity?",
    "punchline": "Because they're shellfish!",
    "id": 17
  },
  {
    "type": "general",
    "setup": "What do you call a belt made of watches?",
    "punchline": "A waist of time!",
    "id": 18
  },
  {
    "type": "general",
    "setup": "Why did the tomato turn red?",
    "punchline": "Because it saw the salad dressing!",
    "id": 19
  },
  {
    "type": "general",
    "setup": "What do you call a fashionable lawn statue with an excellent sense of rhythm?",
    "punchline": "A metro-gnome!",
    "id": 20
  }
];
const port = process.env.PORT || 8001;

app.use(express.json());
app.get('/', (req, res) => {
    console.log('Request received at /');
  res.send(jokes);
});
app.listen(port, () => {
  console.log(`Server is running on port${port} `);
});

