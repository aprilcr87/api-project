const Cats = ({ getCat, cat }) => {
    return (
    <div>
        <h2>Are you feline lucky?</h2>
        <button onClick={getCat}>Launch new cat</button>
        <div className="cat-display">
            {cat !== '' ? <img className="cat" src={cat} alt="small cute cat doing a thing" /> : ''}
        </div>
    </div>    
)
};

export default Cats;