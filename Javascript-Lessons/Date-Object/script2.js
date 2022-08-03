//  we can display the full date year 

// let date = new Date();
// let day = date.getFullYear();

// console.log(day);

// month 
let date = new Date();
let day = date.getDay();

switch(day){
    case 1:
        console.log('its monday');
        break;
    case 2:
        console.log('its tuesday');
        break;
    case 3:
        console.log('its wednesday');
        break;
    case 4:
        console.log('its thursday');
        break;
    case 5:
        console.log('its friday');
        break;
    case 6:
        console.log('its saturday');
        break;
        
    default:
        console.log('itsnot valid');
        
}

