/**
 * read the csv file
 *
 * @param {*} input
 */
 function read_csv(input) {
    let file = input.files[0];
    //let file = "utils/INR_GR491-Plus-Automaton-11-2021.xlsx";
    let fileReader = new FileReader();

    fileReader.readAsText(file);

    fileReader.onload = function () {
        alert(fileReader.result);
    };

    fileReader.onerror = function () {
        alert(fileReader.error);
    };
}