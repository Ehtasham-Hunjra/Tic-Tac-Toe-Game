function Winner({ winner, nextMove }) {
    return (
            winner ? (
                <h1>{winner} is the Winner</h1>
            ) : (
                <h1>Next move is {nextMove ? 'X' : 'O'}</h1>
            )
    );
}

export default Winner;
