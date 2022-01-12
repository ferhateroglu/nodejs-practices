const fs = require('fs');


let employee = {"name": "Employee 1", "salary": 2000};

//Create
const fsCreate = (employeeObject) => {
    fs.writeFile('employees.json', JSON.stringify(employeeObject), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');  
        console.log('************************************************');
        fsRead();
    });
}

//Read 
const fsRead = () => {
    fs.readFile('./employees.json', (err, data) => {
        if (err) throw err;
        console.log('file read:')
        console.log(JSON.parse(data));
        console.log('************************************************');
        fsUpdate()
    });
}

//Update
const fsUpdate = async (newEmployeeObject) =>{
    fs.readFile('./employees.json', (err, data) => {
        if (err) throw err;
        let jsData = JSON.parse(data);
        jsData.salary = 4000;

        fs.writeFile('employees.json', JSON.stringify(jsData), (err) => {
            if (err) throw err;
            console.log('Salary has been Updeted!');
            console.log(jsData);
            console.log('************************************************');
            console.log('file will be deleted in 5 seconds');
            setTimeout(()=>{
                fs.unlink('./employees.json', (err) => {
                    if (err) throw err;
                    console.log('file was deleted');
                    console.log('************************************************');
                });
            },5000);
        });

    });
}

fsCreate(employee);

