var userKey = require('./users-controller');



//GET
function index(req, res, next) {
    var allUsers = [];
    for (var i = 0; i < userKey.users.length; i++) {
        for (var j = 0; j < userKey.users[i].notes.length; j++) {
            allUsers.push(userKey.users[i].notes[j]);
        }
    }
    res.json({ usersNotes: allUsers });
}

//POST
function create(req, res, next) {
    for (var i = 0; i < userKey.users.length; i++) {
        if (userKey.users[i].id == req.params.id) {
            var tempUserNote = req.body.note;
            userKey.users[i].pushNote(tempUserNote);
            res.json({ newNote: tempUserNote });
        }
    }
}

//GET
function show(req, res, next) {
    for (var i = 0; i < userKey.users.length; i++) {
        if (userKey.users[i].id == req.params.id) {
            res.json({ user: userKey.users[i].notes })
        }
    }
    res.json({ error: "Sorry notes for that user do not exist." });
}

//PUT
function update(req, res, next) {
    for (var i = 0; i < userKey.users.length; i++) {
        if (userKey.users[i].id == req.params.id) {
            for (var j = 0; j < userKey.users[i].notes.length; j++) {
                if (userKey.users[i].notes[j].postId == req.params.id2) {
                    userKey.users[i].notes.splice(j, 1, parseInt(req.params.postId), req.body.postedBy, req.body.postedOn, req.body.note);
                    res.json({ user: userKey.users[i].notes[j] });
                }
            }
        }
    }
}

//DELETE
function destroy(req, res, next) {
    for (var i = 0; i < userKey.users.length; i++) {
        if (userKey.users[i].id == req.params.id) {
            for (var j = 0; j < userKey.users[i].notes.length; j++) {
                if (userKey.users[i].notes[j].postId == req.params.id2) {
                    userKey.users[i].notes.splice(j, 1);
                    res.json({ user: userKey.users[i].notes });
                }
            }
        }
    }
    res.json({ error: "Sorry that user didn't exist." });
}

module.exports = {
    index: index,
    create: create,
    show: show,
    update: update,
    destroy: destroy
}