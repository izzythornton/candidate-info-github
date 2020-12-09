'use strict';

function findRepoList() {
    const username = document.getElementById("github-handle").value;
    const url = "https://api.github.com/users/" + username + "/repos";
    console.log(username);
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
}

function displayResults(responseJson, url) {
    console.log(responseJson);
    for (let i = 0; i < responseJson.length; i++) {
        $("#results-list").append(`
        <li><p><a href=${responseJson[i].html_url}>${responseJson[i].name}</a></p>
        `)};
}

function watchForm() {
    $("form").submit(event => {
        event.preventDefault();
        findRepoList();
    });
}

$(function() {
    console.log("Waiting for input")
    watchForm();
});