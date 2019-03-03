fun main (args : Array<String>) {

    //print(reverseString("Vivekanand !!"))

    print(reverseString2("Vivekanand !!"))

}


fun reverseString (inputStr : String, pos: Int = inputStr.length,  output : String = "" ) : String {
    //println(output)

    if (pos == 0) {
        return output
    } else {
        return reverseString(inputStr, pos-1,  output + inputStr[pos -1])
    }
}

fun reverseString2(inputStr : String) : String {
    var charStr =  inputStr.toCharArray();
    charStr.reverse();
    return String(charStr);
}