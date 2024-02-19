

let rows=7;
// let col
const midpoint = Math.floor(rows / 2) + 1;

for (let counter = 1; counter <= rows; counter++) {
    let pattern = "";
    const spaces = midpoint - counter;
    const stars = rows - 2 * spaces;

    for (let counter2 = 0; counter2 < spaces; counter2++) {
        pattern += " ";
    }

    for (let counter3 = 0; counter3 < stars; counter3++) {
        pattern += "*";
    }

    console.log(pattern);
}
