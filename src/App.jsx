import './assets/css/main.css';

function App() {
    return (
        <main>
            <div className="wrapper">
                <div className='box-1'>
                    <h1>Join our community</h1>
                    30-day, hassle-free money back guarantee
                    Gain access to our full library of tutorials along with expert code reviews. 
                    Perfect for any developers who are serious about honing their skills.
                </div>
                <div className='box-2'>
                    <h2>Monthly Subscription</h2>
                    &dollar;29 per month
                    Full access for less than &dollar;1 a day
                    <button>Sign Up</button>
                </div>
                <div className='box-3'>
                    <h2>Why Us</h2>
                    Tutorials by industry experts
                    Peer &amp; expert code review
                    Coding exercises
                    Access to our GitHub repos
                    Community forum
                    Flashcard decks
                    New videos every week
                </div>
            </div>
        </main>
    );
}

export default App;