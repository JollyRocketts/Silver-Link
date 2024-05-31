const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/';

// Database and collection names
const dbName = 'linkedin_jobs';
const collectionName = 'job_postings';

// Function to insert data from a JSON file into MongoDB
async function insertDataFromFile(filePath) {
    
    // Read JSON data from file
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const client = new MongoClient(uri,  {
        serverApi: {
            version: "7.0.2",
            strict: true,
            deprecationErrors: true,
            }
        }
    );
    console.log(client);
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const database = client.db(dbName);
        const collection = database.collection(collectionName);
        //await client.db("admin").collection("noob").insert({ tel : 2 });
        //await collection.insertOne({tel:1});
        //Insert data into MongoDB
        const result = await collection.insertMany(jsonData);
        console.log(`${result.insertedCount} documents inserted into ${collectionName}`);

    } catch (err) {
        console.error('Error inserting data from file:', err);
    } finally {
        if (client) {
            // Close the connection
            await client.close();
            console.log('Disconnected from MongoDB');
        }
    }
}

// Function to insert data from all JSON files in a folder into MongoDB
export async function insertDataFromFolder(folderPath) {
    try {
        // Get list of files in the folder
        const files = fs.readdirSync(folderPath);

        // Iterate over each file
        for (const file of files) {
            if (path.extname(file) === '.json') { // Check if it's a JSON file
                const filePath = path.join(folderPath, file);
                console.log(`Processing file: ${filePath}`);

                // Insert data from the file into MongoDB
                await insertDataFromFile(filePath);
            }
        }

    } catch (err) {
        console.error('Error reading files from folder:', err);
    }
}