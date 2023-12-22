import './assets/css/main.css';

function App() {
    return (
        <main>
            <div className="wrapper">
                <div className='box-1'>
                    <h1>Join our community</h1>
                    <span>30-day, hassle-free money back guarantee</span>
                    <p>Gain access to our full library of tutorials along with expert code reviews.</p>
                    <p>Perfect for any developers who are serious about honing their skills.</p>
                </div>
                <div className='box-2'>
                    <h2>Monthly Subscription</h2>
                    <p id='price'><span>$29</span> per month</p>
                    <p>Full access for less than $1 a day</p>
                    <button>Sign Up</button>
                </div>
                <div className='box-3'>
                    <h2>Why Us</h2>
                    <p>Tutorials by industry experts
                    Peer &amp; expert code review
                    Coding exercises
                    Access to our GitHub repos
                    Community forum
                    Flashcard decks
                    New videos every week</p>
                </div>
            </div>
        </main>
    );
}

export default App;