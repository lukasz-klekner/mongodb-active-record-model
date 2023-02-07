const { TodoRecord } = require('./records/TodoRecord');
const { client } = require('./utils/db');

(async () => {
    try {
        
        const todo = new TodoRecord({
            title: 'Rebuild repository model to active record'
        })

        // await todo.insert()

        // console.log(await TodoRecord.findAll())
        const recordToUpdate = await TodoRecord.find('63e2aa2d38a18b839554cdc8')
        // recordToUpdate.title = 'Rebuild repository model to active record [updated]'
        // await recordToUpdate.update()
        await recordToUpdate.delete()
        console.log(await TodoRecord.findAll())
        

    } finally {
        client.close()
    }
  })()