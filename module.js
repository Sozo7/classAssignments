const moment = require('moment');
const Request = require('reques-promise);

    class DataAcceess {
        getPost(postId) {
            return Request('http://jsonplaceholder.typicode.com/post/' + postID).then(response + > console.log(response));
            class TimeStamp {
                getTime() {
                    console.log(new moment().format('h:mm:ss'))
                }
            }
        }
    })