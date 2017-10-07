module.exports = function Route(app, server, counter) {
    app.get('/', function(request, response) {
        response.render('index');
    });

    var io = require('socket.io').listen(server);
    io.sockets.on('connection', function(socket) {
        console.log("Client/socket is connected!");
        console.log("Client/socket id is: ", socket.id);
        socket.on("epic_button", function(data){
            counter += 1;
            data = counter;
            console.log('My data is: ' + data);
            io.emit('update_counter', {response: data});
        })
        socket.on("reset_button", function(data){
            counter = 0;
            data = counter;
            console.log('My data is: ' + data);
            io.emit('update_counter', {response: data});
        })
    })
};