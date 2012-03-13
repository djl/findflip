function findflip(openit) {
    var findbar = document.getElementById("FindToolbar");
    if (openit == null && (findbar == null || findbar.hidden)) {
        gFindBar.onFindCommand();
    } else {
        if (findbar) {
            findbar.close();
        }
    }
}

window.addEventListener('click', function() { findflip(false) }, false);
