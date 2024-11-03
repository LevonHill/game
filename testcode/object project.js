//wants me to create an object with the following
//street
//city
//zipCode

const address  = {
    
        Street: 'a',
        City:'b',
        zipCode:'c'     
};
function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}
showAddress (address);