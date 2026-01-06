let subs :  number | string = "1M";

let apiRequestStatus : 'pending' | 'success' | 'error' = "pending";

let airlineSeat : 'aisle' | 'middle' | 'window' = 'window';
airlineSeat = 'aisle';

const orders = [ '12' , '13' , '25' , '28'];

let currentorder : string | undefined;

for( let order of orders){
    if ( order === '28'){
        currentorder = order;
        break;
    }
    currentorder = '44'
}

console.log(currentorder)