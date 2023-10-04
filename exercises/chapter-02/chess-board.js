const LINE_SIZE = 8;
const COLUMN_SIZE = 8;

const constructLine = (...pattern) => {
    let line = '';
    while (line.length < LINE_SIZE) {
        line += line = pattern.join('');
    }
    line += '\n';
    return line;
}

const constructBoard = (...lines) => {
    let board = ''
    while (board.length < (LINE_SIZE * COLUMN_SIZE)) {
        board += lines.join('');
    }
    return board
}

const primaryLine = constructLine(' ', '#');
const secondaryLine = constructLine('#', ' ');
const chessBoard = constructBoard(primaryLine, secondaryLine);

console.log(chessBoard);