function findflip(openit) {
    var findbar = document.getElementById("FindToolbar");
    if (typeof openit == 'undefined' && (findbar == null || findbar.hidden)) {
        gFindBar.onFindCommand();
    } else {
        findbar.close();
    }
}

window.addEventListener('click', function() { findflip(false) }, false);
