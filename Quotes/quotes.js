let arrayQuotes = [
    {
        'author': "Oscar Wilde",
        'quote': "Be yourself; everyone else is already taken."
    },
    {
        'author': " Frank Zappa",
        'quote': "So many books, so little time."
    },
    {
        'author': "Marcus Tullius Cicero",
        'quote': "A room without books is like a body without a soul."
    },
    {
        'author': "Dr. Seuss",
        'quote': "You know you're in love when you can't fall asleep because reality is finally better than your dreams."
    },
    {
        'author': "Mae West",
        'quote': "You only live once, but if you do it right, once is enough."
    }
];



function createQuote() {
    const random = Math.floor(Math.random() * arrayQuotes.length );
    document.getElementById('quoteContent').innerHTML = `\" ${arrayQuotes[random].quote} \"`;
    document.getElementById('quoteAuthor').innerHTML = `-- ${arrayQuotes[random].author} \"`;
    console.log(random);
}

