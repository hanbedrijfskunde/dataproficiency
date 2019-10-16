function clickLog(clicked_id) {
    let item = clicked_id
    url = "https:" + "//us-central1-clicklogs-29132.cloudfunctions.net/addClicks?item=" + item
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();
    console.log(item)
}