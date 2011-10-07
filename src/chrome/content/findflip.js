function findflip() {
    var findbar = document.getElementById("FindToolbar");
    if (findbar == null || findbar.hidden) {
        gFindBar.onFindCommand();
    } else {
        findbar.close();
    }
}
