# REISystems-Hackathon2015-Velocity

#-----Build Instructions-----
1. Install NODE JS (https://nodejs.org/en/)
2. Clone Velocity GIT Repository to local
3. Open the "app.js" file and uncomment this block of code:
        var Server = http.createServer(app);
            Server.listen(app.get('port'), function () {
            console.log('Express server listening on port ' + app.get('port'));
                });
4. Open CMD (Command Prompt)
5. use CD command to Navigate to repository's location ( such as--> cd y:\Velocity\REI-Hackathon)
6. type in : "node app.js"   (without quotation marks)
7. Open web browser and go to this url: "localhost:1337" (Without quotation marks)


#-----Working Demo-----
http://rei-velocity.azurewebsites.net/
