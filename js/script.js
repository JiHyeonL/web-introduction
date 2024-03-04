function btn() {
    const name = document.getElementById(`visitor_name`);
    const selectedFavorites = document.getElementsByName(`favorite`);
    let count = 0;
    for (var i = 0; i < selectedFavorites.length; i++) {
        if (selectedFavorites[i].checked) {
            count += 1;
        }
    }
    alert(name.value + `님, 저와 ` + count +`개의 취향이 같으시네요!`);
}

