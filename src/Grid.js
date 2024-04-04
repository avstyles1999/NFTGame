class Grid{
    dimension;
    bombs;
    board;
    initialAmount;
    bombLocations;

    constructor(dimension, bombs, initialAmount){
        this.dimension = dimension;
        this.bombs = bombs;
        this.initialAmount = initialAmount;
        this.bombLocations = new Set();

        this.board = [];
        for(let i=0;i<dimension;i++){
            this.board.push([0,0,0,0,0]);
        }

        for(let i=0;i<bombs;i++){

            while(true){
                let row = Math.floor(Math.random()*dimension);
                let col = Math.floor(Math.random()*dimension);

                if(this.bombLocations.has(JSON.stringify({row,col})))
                    continue;
                else{
                    this.bombLocations.add(JSON.stringify({row,col}));
                    this.board[row][col]=1;
                    break;
                }
            }

        }
    }

    
};

export default Grid;