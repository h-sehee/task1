/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let newNumbers: number[] = [];
    if (numbers.length > 1) {
        const tempArr = [...numbers];
        newNumbers = [tempArr[0], tempArr[tempArr.length - 1]];
    } else if (numbers.length === 1) {
        newNumbers = [...numbers, ...numbers];
    }
    return newNumbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const intNumbers = numbers.map((strNum: string): number =>
        !isNaN(parseInt(strNum)) ? parseInt(strNum) : 0
    );
    return intNumbers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const noDollars = amounts.map((amount: string): string =>
        amount[0] === "$" ? amount.slice(1) : amount
    );
    const intNumbers = noDollars.map((strNum: string): number =>
        !isNaN(parseInt(strNum)) ? parseInt(strNum) : 0
    );
    return intNumbers;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let newMessages = messages.map((message: string): string =>
        message[message.length - 1] === "!" ? message.toUpperCase() : message
    );
    newMessages = newMessages.filter(
        (message: string): boolean => message[message.length - 1] !== "?"
    );
    return newMessages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    } else {
        const allRGBColors = colors.filter(
            (color: string): boolean =>
                color === "red" || color === "blue" || color === "green"
        );
        if (allRGBColors.length === colors.length) {
            return true;
        } else {
            return false;
        }
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    } else {
        const sum = addends.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const addPlus = addends.join("+");
        return sum + "=" + addPlus;
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const newValues = [...values];
    const negativeIndex = values.findIndex(
        (value: number): boolean => value < 0
    );
    let sum = 0;
    if (negativeIndex === -1) {
        sum = newValues.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        newValues.splice(values.length, 0, sum);
    } else {
        const tempArr = [...values];
        const previousValues = tempArr.splice(0, negativeIndex);
        sum = previousValues.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        newValues.splice(negativeIndex + 1, 0, sum);
    }
    return newValues;
}
