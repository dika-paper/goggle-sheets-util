function columnToNumber(column) {
    const base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = 0;
    let i = 0;
    let j = column.length - 1;

    while (i < column.length) {
        result += Math.pow(base.length, j) * (base.indexOf(column[i]) + 1);

        i += 1;
        j -= 1;
    }

    return result - 1;
}

module.exports = columnToNumber;
