fun main (args : Array<String>) {

}


fun reverse (inputStr : String, pos : Int ) : String {

    if (pos == 0) {
        return output
    } else {
        output = reverse(inputStr, pos-1) + inputStr[pos -1]
    }
}