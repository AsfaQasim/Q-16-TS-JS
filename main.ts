let guestslist: string[] = ["Sundas","Faria","Nazish"];
let canNotAttend : string = "Faria";
let newGuest = "Zeeshan";
guestslist[guestslist.indexOf(canNotAttend)] = newGuest;

let guestBeg : string = "Faizan"
guestslist.unshift(guestBeg)

let midGuest:string = "Mohsin"
 let midIndex = guestslist.length/3
guestslist.splice(midIndex,0,midGuest)
guestslist.push("Talha")
guestslist.map((items)=> console.log(`Dear ${items}, You Are Invited In The More Guest List In My House For Dinner`));


