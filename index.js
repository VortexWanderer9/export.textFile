import { log } from 'console';
import fs from 'fs'

fs.writeFile('name.txt', 'This is a test file.', (err) =>{
    if(err) throw Error(err)
    console.log('File created successfully.');
})

fs.appendFile('index.txt', 'File appended successfully \n', (err) =>{
    if(err) return
    console.log('File appended successfully !');
})

fs.readFile('index.txt', 'utf-8', (err , data) => {
    if(err){
     console.error('Error reading file:', err);
     return
    }
    console.log(data);
})
//%%

fs.open('main.txt', 'w', (err, file) =>{
    if(err) throw err
    console.log('new file created');
})

// fs.unlink('main.txt', (err) =>{
//     if(err) throw err
//         console.log('File deleted!');
// })

// $$
fs.mkdir('new-dir', (err) =>{
    if(err) throw err
    console.log('Created Directory');
})

// fs.rmdir('new-dir', (err) =>{
//     if(err) throw err
//     console.log("Directory Deleted");  
// })

fs.readdir('.', (err, file) => {
    if(err) throw err
    console.log('Directory', file);
    
} )