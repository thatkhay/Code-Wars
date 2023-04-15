function filterGeese(arr) {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return arr.filter((str) => !geese.includes(str));