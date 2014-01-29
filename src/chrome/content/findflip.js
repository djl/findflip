function findflip(openit) {
    if (gFindBar.hidden) {
        gFindBar.onFindCommand();
    } else {
        gFindBar.close();
    }
}
