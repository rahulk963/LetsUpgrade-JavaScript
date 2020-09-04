//============ LetsUpgrade JavaScript DAY 2 Assignment ==================

//============================== Program 1 ==============================
//Program to search for a particular character in a string
function search_character(str) {
    return str.search("Developer")
}

console.log(search_character("I am a JavaScript Developer"))

//============================== Program 2 ==============================
//Program to convert minutes to seconds
function convert_min_to_sec(min) {
    return min * 60
}

console.log(convert_min_to_sec(5))

//============================== Program 3 ==============================
//Program to search for an element in an array of strings
function search_element(arr) {
    return arr.indexOf('A')
}

console.log(search_element(['B', 'O', 'A', 'M']))

//============================== Program 4 ==============================
//Program to display only elements containing 'a' in them from a array
function containing_elements_a(arr) {
    return arr.includes('A')
}

console.log(containing_elements_a(['B', 'M', 'A', 'O']))

//============================== Program 5 ==============================
//Print an array in reverse order
function reverse_array(arr) {
    return arr.reverse()
}

console.log(reverse_array(['End', 'The']))

//============================== THE END =================================