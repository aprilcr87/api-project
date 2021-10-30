const Quote = ({ getQuote, quote, picUrl }) => {

    return (
        <div>
            <h2>Not doing your kayne best?</h2>
            <button onClick={getQuote}>Inspire me</button>
            <div>
                {quote !== '' ? <div className="quote-container">
                    <span className="quote-text">{quote}</span>
                    <img src={picUrl} alt="random grey background" />
                </div> : ''}
            </div>
        </div>
    )
};

export default Quote;