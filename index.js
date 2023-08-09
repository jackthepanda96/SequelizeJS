const db = require('./models');
const prompt = require('prompt-sync')({sigint: true});
const ctl = require('../sequi/controllers/users.controller');

var isRunning = true;

(async () => {
    // Jalankan ini di awal 
    await db.sequilize.sync().then((_) => {
        
    }).catch((err) => {
       console.error(err) 
    });


    while (isRunning) {
        console.log('1. Insert new User');
        console.log('2. Show all user data');
        console.log('3. Delete User');
        console.log('10. Show all user data');
        
        let input = prompt('Please input menu ');
    
        if(Number(input) === 1){
            let name = prompt('Please input your name');
    
            const user = {
                name: name,
            };
        
            await ctl.insert(user);
        }

        if(Number(input) === 2){
            let res = await ctl.getAll();
            res.forEach(element => {
                console.log(element.dataValues);
                
            });
        }

        if(Number(input) === 3){
            let deleteID = prompt('Masukkan ID user untuk dihapus: ');
            await ctl.delete(Number(deleteID));
        }
    
    
        if(Number(input) === 10){
            isRunning = !isRunning;
        }
    }
})();




