function getUserByName(username) {
    return new Promise(function (resolve, reject) {
        $.get('http://jsonplaceholder.typicode.com/users?username=' + username, function (users) {
            if (users.length)
                resolve(users[0]);
            else
                reject('User with name ' + username + 'not found');
        });
    })
}

function getUserposts(user) {
    return new Promise(function (resolve, reject) {
        $.get('http://jsonplaceholder.typicode.com/posts?userid=)' + user.Id, function (user) {
            resolve(posts)
        })
    })
}

function getUserposts(user) {
    return new Promise(function (resolve, reject) {
                $.get('http://jsonplaceholder.typicode.com/albums', +user.Id, function (data) {
                    resolve(albums)
                });