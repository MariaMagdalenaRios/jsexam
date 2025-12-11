// 6.1  (2p) Använd filter för att returnera en ny array 
// "updatedTweets" utan kommentaren med id 823423 

const tweets = [
    { text: 'Elon Musk is ...', id: 523423 },
    { text: 'Sam Altman is missing since one week ..', id: 823423 },
    { text: 'The future of AI ...', id: 2039842 },
    { text: 'SpaceX is planning human Mars missions...', id: 123523 },
    { text: 'The future is now: Neuralink’s ...', id: 542328 }
  ];

// Din kod här:


// 6.2 (2p) 
// Utgå från arrayen "updatedTweets"
// Använd map för att skapa en ny array "tweetsHtml" med endast texten från varje tweet inom <li>-taggar 
// Omvandla arrayen till en sträng med metoden join('') på arrayen.
// Visa  listan med tweets på sidan inuti <ul id="tweets"></ul>  

// Din kod här:







// Test
//console.log(updatedTweets); // Ska logga en array utan kommentaren med id 823423
// [
//   { text: 'Elon Musk is ...', id: 523423 },
//   { text: 'The future of AI ...', id: 2039842 },
//   { text: 'SpaceX is planning human Mars missions...', id: 123523 },
//   { text: 'The future is now: Neuralink’s ...', id: 542328 }
// ]

// I webbläsaren ska denna lista visas
// ‧ Elon Musk is ...
// ‧ The future of AI ...
// ‧ SpaceX is planning human Mars missions...
// ‧ The future is now: Neuralink’s ...
