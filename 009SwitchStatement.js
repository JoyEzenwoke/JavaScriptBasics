//Monday --- 6am
//Tuesday --- 7am
//wednesday to friday --- 5am
//saturdays and sundays ---8am

let Day = "Holiday"

switch (Day){
    case "Monday":
        console.log("6am");
        break;

    case "Tuesday":
        console.log("7am");
        break;

    case "Wednesday":

    case "Thursday":

    case "Friday":
        console.log("5am");
        break;

    case "Saturday":
        console.log("8am");

    case "Sunday":
        console.log("8am");
        break;

        default:
        console.log("1pm-Have some rest");

}