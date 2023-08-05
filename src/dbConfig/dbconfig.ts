"use server"
import mongoose from 'mongoose';


export default async function connect() {
    try {
        mongoose.connect(process.env.DB_URI!);   //--> '!' sign is a way to say ts that the parameter will always be defined, No need to worry about it ;)

        const dbConnection = mongoose.connection;
        dbConnection.on('connected', () => {
            console.log("Database connected succesfully!");
        })

        dbConnection.on('error', (err) => {
            console.log("Error connecting the database");
            console.log(err);
        })
    } catch (error) {
        console.log("Error in dbConfig");
        console.log(error);
    }
}