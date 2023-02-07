const { client, todos } = require('./utils/db');

(async () => {
    try {
        
        console.log(await todos.find().toArray())
        

    } finally {
        client.close()
    }
  })()