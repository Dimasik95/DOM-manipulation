let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"Be yourself, everyone else is already taken."`,
    person: ` Oscar Wilde`
}, {
    quote: `"Why do I feel like I'm 75 at 25?"`,
    person: `Marina Semenets`
}, {
    quote: `"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."`,
    person: `Albert Einstein`
}, {
    quote: `"So many books, so little time."`,
    person: `Frank Zappa`
}, {
    quote: `"A room without books is like a body without a soul."`,
    person: `Marcus Tullius Cicero`
}, {
    quote: `"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."`,
    person: `Bernard M. Baruch`
}, {
    quote: `"University years are the best of your life, rest while you can."`,
    person: `Dmytro Yaroshenko`
}, {
    quote: `"You know you're in love when you can't fall asleep because reality is finally better than your dreams."`,
    person: `Dr. Seuss`
}, {
    quote: `"You only live once, but if you do it right, once is enough."`,
    person: `Mae West`
}, {
    quote: `"Be the change that you wish to see in the world."`,
    person: `Mahatma Gandhi`
}, {
    quote: `"“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals."`,
    person: `J.K. Rowling, Harry Potter and the Goblet of Fire`
}, {
    quote: `"Dont walk in front of me… I may not follow
    Dont walk behind me… I may not lead
    Walk beside me… just be my friend"`,
    person: `Albert Camus`
}, {
    quote: `"If you tell the truth, you don't have to remember anything"`,
    person: `Mark Twain`
}, {
    quote: `"Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . ."`,
    person: `C.S. Lewis, The Four Loves`
}, {
    quote: `"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."`,
    person: `Maya Angelou`
}, {
    quote: `"A friend is someone who knows all about you and still loves you."`,
    person: `Elbert Hubbard`
}, {
    quote: `"In three words I can sum up everything I've learned about life: it goes on."`,
    person: `Robert Frost`
}];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})