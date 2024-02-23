const printMenu = day => {
    switch (day.toLowerCase()) {
        case 'monday':
            console.log("Monday's Menu: Poha");
            break;
        case 'tuesday':
            console.log("Tuesday's Menu: Sandwitch");
            break;
        case 'wednesday':
            console.log("Wednesday's Menu: Dosa");
            break;
        case 'thursday':
            console.log("Thursday's Menu: Gajar Halwa");
            break;
        case 'friday':
            console.log("Friday's Menu: Maggie");
            break;
        case 'saturday':
            console.log("Saturday's Menu: Parotha");
            break;
        case 'sunday':
            console.log("Sunday's Menu: Chole Bature");
            break;
        default:
            console.log("Invalid day entered.");
    }
}

