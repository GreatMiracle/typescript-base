const sum = (a: number, b: number): number => {
    return a + b;
}

const handleLogs = (message: string): void => {
    console.log(">>> message: ", message)

}



console.log(sum(5,6));
console.log(handleLogs("kien"));