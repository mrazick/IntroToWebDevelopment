function displayEvens() {
    /**
     * @param   {HTMLFormElement} form
     */
    var form = document.forms["evensForm"];
    var numStart = form["numStart"].valueAsNumber;
    var numEnd = form["numEnd"].valueAsNumber;
    var numStep = form["numStep"].valueAsNumber;
    var evens = new Array();

    for (var i = numStart; i <= numEnd; i+=numStep) {
        if (i % 2 == 0) {
            evens.push(i);
        }
    }
    console.log(evens);
}