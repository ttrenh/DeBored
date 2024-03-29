import {MongoClient} from 'mongodb'

const client = new MongoClient(process.env.MONGODB_URI)

export const handler = async (event, context) => {
    // This line allows us to return from the function before the connection to MongoDB Atlas is closed
    context.callbackWaitsForEmptyEventLoop = false;
    try{
        console.log(`Received event: ${JSON.stringify(event)}`)
        const {email, password} = JSON.parse(event.body)
        console.log(`email: ${email}, password: ${password}`)
        await client.connect()
        const result = await client.db("DeBored").collection('Users').findOne({email: email})
        if (!result) {
            throw new Error('User not found')
        }
        if (result.password !== password) {
            throw new Error('Invalid password')
        }
        return {
            statusCode: 200,
            body: JSON.stringify({message: 'User logged in successfully', user: result})
        }
    } catch(error) {
        console.log(`Error: ${error}`)
        return {
            statusCode: 400,
            body: JSON.stringify({message: `Error logging in user: ${error}`})
        }
    }
}