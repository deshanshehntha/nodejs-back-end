//importing express framework and creating an instance
const express = require('express');
const app = express();

//importing bodyParser and cors
const bodyParser = require('body-parser');
const cors = require('cors');

//importing mongooes to work with mongodb
const mongoose = require('mongoose');
//making router instance from express
const courseRoutes = require('./routes/course.server.routes');
const userRoutes = require('./routes/user.server.routes');
const submmissionRoutes = require('./routes/submission.server.routes');
const assignmentRoutes =require('./routes/assignment.server.routes');
/*if the environment port variable is set service run on that
 port else service run on port 4000 */
const PORT = process.env.PORT || 4030;

//add middleware cors and bodyParser to express
app.use(cors());
app.use(bodyParser.json());

//crate connection
mongoose.connect('mongodb://root:root@cluster0-shard-00-00-pbjoq.mongodb.net:27017,cluster0-shard-00-01-pbjoq.mongodb.net:27017,cluster0-shard-00-02-pbjoq.mongodb.net:27017/Course_Web?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority\n',{useNewUrlParser:true});
//get a instance of a connection

const connection =mongoose.connection;

//check DB connection
connection.once('open',function(){
    console.log("MongoDB databse connection established successfully");
})

//creating url and adding router to the server.Every http end point extend this url
app.use('/api/courses',courseRoutes);
app.use('/api/users',userRoutes);
app.use('/api/submission',submmissionRoutes);
app.use('/api/assignments',assignmentRoutes);


//start the server using express
app.listen(PORT,function(){
    console.log("Server is running on PORT: "+PORT);
});