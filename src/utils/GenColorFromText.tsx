export function getNumberFromString(str: string) {
    // Create a variable to store the total value of the string
    let total = 0;

    // Iterate through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Add the ASCII value of the character to the total
        total += str.charCodeAt(i);
    }

    // Divide the total by the length of the string and round down to the nearest integer
    let avg = Math.floor(total / str.length);

    // Return a number between 0 and 11 by taking the modulo of the average
    return avg % 12;
}

export default function GenColorFromText(str: string) {
    const randomColors = [
        '#FE5F55',
        '#EDAD62',
        '#00B295',
        '#4ABD5C',
        '#CB769E',
        '#BD814A',
        '#786F52',
        '#A3C4BC',
        '#4A64BD',
        '#D6A2AD',
        '#413C58',
        '#BD4A4A',
    ]

    let color = randomColors[getNumberFromString(str ? str : "HydrogenHR") - 1]
    if (!color || color?.length <= 3) {
        color = "#BD4A4A"
    }

    return color
}