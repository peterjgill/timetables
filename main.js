"use strict"

let people = [
	["Abhijay", "ma", "gg", "pi", "ec", "ss"],
	["Adam", "pd", "fa", "ss", "fp", "ec"],
	["Afraaz", "ph", "ps", "ss", "ch", "bi1"],
	["Agno", "fp", "fa", "ph1", "ch", "bi2"],
	["Alex Gillespie", "fp", "ch", "ph2", "ss", "fa"],
	["Alex North", "co", "ss", "ph1", "fp", "fa"],
	["Alex Petrov", "ph", "ss", "sp", "ma", "ch2"],
	["Ammar", "ps", "ch", "ph1", "ma", "ss"],
	["Andrez", "ph", "ss", "ma1", "pe", "ss"],
	["Anehan", "fp", "gg", "ss", "ph", "fa"],
	["Anish", "pd", "ma", "ss", "ph", "ec"],
	["Aniya", "ss", "ps", "bi", "ss", "ch1"],
	["Anoopp", "fp", "ss", "ph2", "ec", "fa"],
	["Anton", "pd", "ma", "ss", "ph", ""],
	["Aradhya", "fp", "fa", "ss", "ec", "ch1"],
	["Arangan", "fp", "fa", "ss", "ec", "ch2"],
	["Arthur", "ss", "fr", "ph1", "fp", "fa"],
	["Ayman", "hi", "ss", "bi", "ma", "ch2"],
	["Ben Blunt", "ph", "ss", "ma1", "bi", "ch2"],
	["Ben Jordan", "ss", "ps", "hi", "el", "ss"],
	["Ben Lowhing", "ph", "ss", "ma2", "bi", "ec"],
	["Ben Smith", "hi", "gp", "ss", "", "ec"],
	["Calum", "hi", "ma", "", "ph", "ss"],
	["Chris", "ma", "gg", "ss", "ph", "ec"],
	["Dan Welsh", "ph", "ma", "hi", "el", "ss"],
	["Daniel Evans", "ph", "gp", "ss", "ma", "ec"],
	["Daniel Nielson", "ph", "ss", "ma2", "el", "de"],
	["Dawud", "ph", "ss", "ma2", "ch", "bi1"],
	["Dilan", "co", "ss", "ph2", "ma", "de"],
	["Dimitri", "ps", "gp", "hi", "bu", "ss"],
	["Dominic", "hi", "ps", "ph2", "ma", "ss"],
	["Don", "ss", "ps", "hi", "el", "ec"],
	["Edie", "ss", "ps", "ss", "bi", "ts"],
	["Elilan", "ps", "ss", "ma2", "ad", "bi2"],
	["Elinor", "ss", "ma", "bi", "", "ch2"],
	["Ella Raper", "pd", "ss", "ph2", "pe", "mu"],
	["Ella Samouel", "ps", "gp", "pi", "el", "ss"],
	["Ellie", "ps", "", "bi", "ss", "ch2"],
	["Emma Far", "ss", "ma", "bi", "ph", "ch1"],
	["Feezan", "pd", "ss", "ma1", "ec", "ch1"],
	["George HE", "ss", "fr", "", "ec", "de"],
	["George Palmer", "ph", "ps", "hi", "ss", "ss"],
	["Ghajaanan", "ps", "ss", "ma1", "ch", "bi1"],
	["Greg", "ps", "ss", "sp", "ec", ""],
	["Haider", "fp", "ss", "ss", "ph", "fa"],
	["Ilyas", "ps", "gp", "hi", "ss", ""],
	["Jake Seward", "hi", "fa", "ph1", "fp", "ss"],
	["Jake Thakur", "co", "fr", "ph1", "fp", "fa"],
	["James Richards", "hi", "ss", "ss", "el", "de"],
	["James Spalek", "ss", "ma", "", "bi", "ch2"],
	["Jamie", "ma", "gp", "pi", "el", "ss"],
	["Jed", "ph", "ss", "hi", "fp", "fa"],
	["Jevan", "ma", "ch", "", "bu", "ss"],
	["Jinu", "ss", "fa", "bi", "fp", "ch2"],
	["Joe Levine", "fp", "ss", "sp", "ch", "fa"],
	["Joe McEvilly", "ma", "ss", "hi", "pe", "bi2"],
	["Joe Palmer", "ps", "gg", "", "bi", "ss"],
	["Jonny", "", "", "ma2", "bi", "ch1"],
	["Josh Paintsil", "ph", "gp", "ma1", "bu", "ss"],
	["Katya", "ss", "ps", "sp", "ad", ""],
	["Kelvin", "co", "ss", "ph2", "fp", "fa"],
	["Kushal", "ma", "ch", "", "ss", "bi2"],
	["Lennon", "ps", "ch", "ss", "ma", "bi2"],
	["Leo", "ss", "ps", "ss", "ch", "bi1"],
	["Lewis", "ss", "ss", "gg", "bi", "mu"],
	["Lokesh", "ph", "ch", "gg", "ma", "ss"],
	["Louis Bishop", "co", "", "ph1", "ma", "ss"],
	["Lucas Dutton", "ps", "gg", "hi", "ss", "bi2"],
	["Lucas Heys", "pd", "fa", "ph2", "fp", "ss"],
	["Luke St Clair", "", "fr", "pi", "ma", "ss"],
	["Luke Wainwright", "", "ss", "ph1", "fp", "fa"],
	["Mahin", "fp", "fa", "ph2", "ec", "ss"],
	["Mahrooshah", "ss", "ma", "sp", "ch", "bi1"],
	["Michael", "ps", "ss", "hi", "el", "bi1"],
	["Minh", "ss", "ch", "ma1", "ec", "bi2"],
	["Mrunal", "ph", "ss", "ma2", "ch", "bi2"],
	["Muqarab", "ma", "ps", "ss", "bi", "ch1"],
	["Nathaniel", "hi", "ss", "pi", "el", "ts"],
	["Nayan", "ss", "gp", "hi", "el", "ss"],
	["Nid", "co", "fa", "ph2", "fp", "ss"],
	["Niraj", "ss", "ma", "ph1", "ma", "ch2"],
	["Nitesh", "pd", "ps", "bi", "bu", "ss"],
	["Olivia Brattsparks", "ss", "ss", "hi", "el", "ts"],
	["Oscar Chong", "ph", "gg", "ma2", "ss", "ch1"],
	["Patrick", "ph", "ss", "ma2", "ad", "ch1"],
	["Peter Crookes", "fp", "gg", "ph2", "ss", "fa"],
	["Peter Gill", "ss", "fa", "ph1", "fp", "ss"],
	["Prem", "ss", "ma", "hi", "ph", "ch2"],
	["Rachel", "ma", "gg", "ss", "bi", "ss"],
	["Rana", "hi", "ma", "pi", "el", "ss"],
	["Ravshan", "pd", "fa", "ph2", "fp", "ss"],
	["Richit", "ss", "ps", "ss", "bi", "ts"],
	["Ryan Jung", "fp", "fa", "ph1", "bu", "ss"],
	["Ryan Page", "hi", "ss", "ma1", "ph", "ss"],
	["Sadeed", "ma", "gp", "bi", "ss", "ch1"],
	["Saffron", "hi", "ch", "ma1", "ad", "ss"],
	["Sai", "ph", "fa", "pi", "fp", "ss"],
	["Sajee", "ma", "ps", "ss", "bi", "ch1"],
	["Sam", "ps", "", "hi", "ad", "ss"],
	["Sammer", "ma", "ch", "ph2", "ss", "bi2"],
	["Sanjay", "fp", "fr", "ss", "ph", "fa"],
	["Sean", "hi", "gp", "", "ss", "ts"],
	["Seb", "hi", "ss", "pi", "el", "ss"],
	["Sharan", "ps", "ss", "ma2", "ph", "ch2"],
	["Shayaan", "ma", "ch", "bi", "bu", "ss"],
	["Simran", "ss", "ma", "sp", "bi", "ch2"],
	["Stefan", "hi", "fa", "ph2", "fp", "ss"],
	["Sumayyah", "ps", "ss", "hi", "ad", "bi1"],
	["Sung-Jay Cho", "ps", "ss", "ma1", "pe", ""],
	["Tatiana", "hi", "gg", "sp", "ss", "de"],
	["Taufique", "ph", "ps", "hi", "ma", "ss"],
	["Thu-Nga", "fp", "gg", "ss", "ec", "fa"],
	["Toby", "ma", "ss", "ph1", "pe", "bi1"],
	["Tom Dulson", "ps", "ma", "ss", "pe", "bi1"],
	["Tom Perkins", "ss", "", "ma2", "ph", "bi2"],
	["Varad", "fp", "fa", "ss", "ph", "ch2"],
	["Vardy", "ss", "ma", "ph2", "ch", "bi1"],
	["Vishnu", "ss", "ch", "ph1", "fp", "fa"],
	["Wesley", "hi", "fa", "ph1", "fp", "ch2"],
	["Wilf", "fp", "fa", "ph2", "ss", "de"],
	["Will", "co", "ss", "ph2", "ma", "ch2"],
	["Yousif", "ps", "ch", "ma2", "ss", "bi1"],
	["Zak Lilani", "fp", "ch", "ss", "ph", "fa"],
	["Zak Ravalia", "ps", "", "ss", "ch", "bi2"],
	["Zohaib", "ma", "ss", "ph2", "bi", "ch1"],
]

let names = [];
for (let i = 0; i < people.length; i++) {
	names.push(people[i][0]);
	document.getElementById("name").innerHTML += "<option value="+i+">"+people[i][0]+"</option>";
}

let options;
let lessons;

document.getElementById("name").onchange = function () {
	options = [];
	lessons = [[],[],[],[],[],[],[],[],[],[]];
	options.push(people[document.getElementById("name").value][1]);
	options.push(people[document.getElementById("name").value][2]);
	options.push(people[document.getElementById("name").value][3]);
	options.push(people[document.getElementById("name").value][4]);
	options.push(people[document.getElementById("name").value][5]);
	fill();
}

let fill = function () {
	lessons[0].push(options[4]==="fa"?"JCA 71":options[4]==="ts"?"LV 55":options[4]==="ch1"?"DV 75":options[4]==="ch2"?"DMA 72":options[4]==="de"?"CR 73":options[4]==="ss"?"SS":"");
	lessons[0].push(options[1]==="ch"?"DMA 21":options[1]==="fa"?"JRI 71":options[1]==="fr"?"PW 73":options[1]==="gp"?"NB 72":options[1]==="ma"?"JCA 74":options[1]==="ss"?"SS":"");
	lessons[0].push(options[1]==="ch"?"DMA 21":options[1]==="fr"?"PW 73":options[1]==="gg"?"MA 69":options[1]==="ma"?"TZ 75":options[1]==="ss"?"SS":options[1]==="fa"?"CHO 71":options[1]==="gp"?"GM 72":options[1]==="ps"?"MM 74":"");
	lessons[0].push(options[2]==="bi"?"MSG 30":options[2]==="gg"?"RP 72":options[2]==="ma1"?"TZ 71":options[2]==="ma2"?"LH 74":options[2]==="ph1"?"AM 75":options[2]==="ph2"?"JC 69":options[2]==="sp"?"CH 73":"");
	lessons[0].push(options[4]==="bi1"?"PDA 75":options[4]==="ts"?"LL 49":options[4]==="mu"?"SBR 52":options[4]==="bi2"?"EKG 71":options[4]==="ch1"?"PWO 74":options[4]==="de"?"RDZ 73":options[4]==="ec"?"NB 72":"");
	lessons[0].push(options[0]==="ps"?"MM 60":"");
	lessons[0].push(options[4]==="fa"?"LH 71":options[4]==="ts"?"LL 49":options[4]==="mu"?"SBR 52":options[4]==="bi2"?"EKG 65":options[4]==="ch1"?"DV 95":options[4]==="ch2"?"DMA 69":options[4]==="de"?"RDZ 74":options[4]==="ec"?"NB 72":options[4]==="bi1"?"PDA 75":"");
	lessons[0].push(options[3]==="ma"?"CHO 95":options[3]==="ph"?"JC 69":options[3]==="fp"?"MDB 72":options[3]==="bi"?"EKG 60":options[3]==="ch"?"PWO 65":options[3]==="ec"?"NB 71":options[3]==="el"?"SK 74":"");
	lessons[1].push(options[3]==="bu"?"PD 68":options[4]==="bi1"?"DMC 75":options[4]==="ss"?"SS":options[4]==="ts"?"LV 55":options[4]==="mu"?"RD 16":options[4]==="bi2"?"RM 74":options[4]==="ch1"?"DV 71":options[4]==="ch2"?"DMA 72":options[4]==="de"?"CR 73":"");
	lessons[1].push(options[2]==="bi"?"MSG 69":options[2]==="ma1"?"TZ 95":options[2]==="ma2"?"MBD 74":options[2]==="ph1"?"AM 75":options[2]==="ph2"?"RT 72":options[2]==="pi"?"ARA 71":options[2]==="sp"?"LMC 73":"");
	lessons[1].push(options[3]==="ad"?"RDE 63":options[3]==="pe"?"AB 69":options[3]==="ph"?"JC 23":options[3]==="fp"?"JS 72":options[3]==="bi"?"RM 31":options[3]==="ch"?"PWO 17":options[3]==="ec"?"NB 71":options[3]==="el"?"KRO 74":"");
	lessons[1].push(options[3]==="ad"?"RDE 63":options[3]==="bi"?"RM 31":options[3]==="pe"?"AB 69":options[3]==="ph"?"JC 23":options[3]==="fp"?"JS 72":options[3]==="ma"?"CHO 95":options[3]==="bu"?"TBE 68":options[3]==="ch"?"PWO 17":options[3]==="ec"?"NB 71":options[3]==="el"?"KRO 74":"");
	lessons[1].push(options[1]==="ch"?"DV 75":options[1]==="gg"?"RP 69":options[1]==="ss"?"SS":options[1]==="fa"?"CHO 71":options[1]==="gp"?"GM 72":options[1]==="ma"?"JCA 95":options[1]==="ps"?"RF 74":"");
	lessons[1].push(options[2]==="hi"?"SS 75":options[2]==="pi"?"ARA 71":options[2]==="ma2"?"LH 74":options[2]==="sp"?"CH 61":"");
	lessons[1].push(options[0]==="co"?"DW 42":options[0]==="fp"?"MDB 71":options[0]==="hi"?"SS W 74":options[0]==="ma"?"JCA 95":options[0]==="ps"?"MM 72":options[0]==="pd"?"KB 50":options[0]==="ph"?"OJ 75":"");
	lessons[1].push(options[0]==="co"?"DW 42":options[0]==="fp"?"JS 71":options[0]==="ph"?"OJ 75":options[0]==="ma"?"JCA 95":options[4]==="ts"?"LV 55":"");
	lessons[2].push(options[2]==="bi"?"DMC 66":options[2]==="gg"?"MA 72":options[2]==="gg"?"RP 72":options[2]==="hi"?"GM 69":options[2]==="ma1"?"TZ 95":options[2]==="ma2"?"LH 74":options[2]==="ph1"?"OJ 75":options[2]==="pi"?"ARA 71":options[2]==="sp"?"LMC 73":options[4]==="ec"?"NB 40":options[2]==="ss"?"SS":"");
	lessons[2].push(options[0]==="co"?"DW 42":options[0]==="fp"?"MDB 71":options[0]==="hi"?"SS W 74":options[0]==="ma"?"AP 95":options[0]==="ss"?"SS":options[0]==="pd"?"AD 54":options[0]==="ph"?"RT 66":options[0]==="ps"?"MM 72":"");
	lessons[2].push(options[0]==="co"?"DW 42":options[0]==="hi"?"SS W 74":options[0]==="ma"?"AP 95":options[0]==="ss"?"SS":options[0]==="pd"?"AD 54":options[0]==="ph"?"RT 66":options[0]==="ps"?"MM 72":"");
	lessons[2].push(options[1]==="ch"?"DMA 66":options[1]==="fa"?"JRI 71":options[1]==="fr"?"PW 73":options[1]==="gg"?"MA 75":options[1]==="ss"?"SS":options[1]==="gp"?"NB 72":options[1]==="ma"?"TZ 95":options[1]==="ps"?"MM 74":"");
	lessons[2].push(options[3]==="ad"?"NT 64":options[3]==="bi"?"EKG 71":options[3]==="pe"?"AB 66":options[3]==="ph"?"RT 75":options[3]==="ss"?"SS":options[3]==="ma"?"AP 95":options[3]==="bu"?"PD 73":options[3]==="ch"?"SP 72":options[3]==="el"?"KRO 74":"");
	lessons[2].push("");	//
	lessons[2].push("");	//	GAMES
	lessons[2].push("");	//
	lessons[3].push(options[2]==="bi"?"DMC 31":options[2]==="gg"?"MA 72":options[2]==="hi"?"SS 69":options[2]==="ma1"?"TZ 95":options[2]==="ma2"?"LH 74":options[2]==="ph1"?"AM 21":options[2]==="ph2"?"JC 75":options[2]==="pi"?"ARA 71":options[2]==="sp"?"LMC 73":options[2]==="ss"?"SS":"");
	lessons[3].push(options[2]==="bi"?"DMC 31":options[2]==="gg"?"MA 72":options[2]==="hi"?"SS 69":options[2]==="ma1"?"JS 95":options[2]==="ma2"?"LH 74":options[2]==="ph1"?"AM 21":options[2]==="ph2"?"JC 75":options[2]==="pi"?"ARA 71":options[2]==="sp"?"CH 73":options[2]==="ss"?"SS":"");
	lessons[3].push(options[4]==="bi1"?"DMC 75":options[4]==="ss"?"SS":options[4]==="mu"?"RD 16":options[4]==="fa"?"LH 71":options[4]==="bi2"?"EKG 74":options[4]==="ch2"?"SP 72":options[4]==="de"?"CR 73":"");
	lessons[3].push(options[3]==="ad"?"RDE 63":options[3]==="pe"?"AH 60":options[3]==="ss"?"SS":options[3]==="fp"?"JS 72":options[3]==="ma"?"AP 95":options[3]==="bu"?"TBE 73":options[3]==="ec"?"NB 71":options[3]==="el"?"KRO 74":"");
	lessons[3].push(options[3]==="ad"?"NT 63":options[3]==="bi"?"RM 64":options[3]==="pe"?"AH 60":options[3]==="ph"?"RT 75":options[3]==="ss"?"SS":options[3]==="fp"?"MDB 72":options[3]==="ma"?"CHO 95":options[3]==="bu"?"TBE 73":options[3]==="ch"?"PWO 69":options[3]==="ec"?"NB 71":options[3]==="el"?"SK 74":"");
	lessons[3].push(options[0]==="co"?"DW 42":options[0]==="hi"?"SS C 74":"");
	lessons[3].push(options[1]==="ch"?"DV 71":options[1]==="fr"?"CH 73":options[1]==="gg"?"SBA 69":options[1]==="ps"?"MM 74":options[1]==="gp"?"GM 72":options[1]==="ma"?"JCA 95":"");
	lessons[3].push(options[1]==="ch"?"DV 71":options[1]==="fr"?"CH 73":options[1]==="gg"?"SBA 69":options[1]==="ps"?"MM 74":options[1]==="gp"?"GM 72":options[1]==="ma"?"JCA 95":"");
	lessons[4].push(options[4]==="bi1"?"PDA 31":options[4]==="ss"?"SS":options[4]==="ts"?"LV 55":options[4]==="mu"?"SBR 52":options[4]==="fa"?"JCA 71":options[4]==="bi2"?"RM 75":options[4]==="ch1"?"PWO 20":options[4]==="ch2"?"SP 19":options[4]==="ec"?"NB 72":"");
	lessons[4].push(options[4]==="bi1"?"PDA 31":options[4]==="ss"?"SS":options[4]==="ts"?"LV 55":options[4]==="mu"?"SBR 52":options[4]==="bi2"?"RM 75":options[4]==="ch1"?"PWO 20":options[4]==="ch2"?"SP 19":options[4]==="de"?"CR 73":options[4]==="ec"?"NB 72":"");
	lessons[4].push(options[1]==="fr"?"PW 73":options[1]==="gg"?"RP 75":options[1]==="ss"?"SS":options[1]==="fa"?"CHO 71":options[1]==="gp"?"NB 72":options[1]==="ma"?"JCA 95":options[1]==="ps"?"MM 74":"");
	lessons[4].push(options[0]==="co"?"DW 42":options[0]==="hi"?"SS W 74":options[0]==="ma"?"AP 95":options[0]==="ss"?"SS":options[0]==="pd"?"KB 54":options[0]==="ph"?"OJ 75":options[0]==="ps"?"MM 72":"");
	lessons[4].push(options[0]==="co"?"DW 42":options[0]==="fp"?"MDB 71":options[0]==="hi"?"SS W 74":options[0]==="ma"?"JCA 95":options[0]==="ss"?"SS":options[0]==="pd"?"KB 50":options[0]==="ph"?"OJ 75":options[0]==="ps"?"MM 72":"");
	lessons[4].push(""); // no lunch lessons
	lessons[4].push(options[2]==="bi"?"MSG 60":options[2]==="gg"?"RP 72":options[2]==="ma1"?"TZ 95":options[2]==="ma2"?"MDB 74":options[2]==="ph1"?"OJ 75":options[2]==="ph2"?"RT 23":options[2]==="sp"?"CH 73":"");
	lessons[4].push(options[2]==="bi"?"MSG 74":options[2]==="gg"?"SBA 72":options[2]==="hi"?"GM 60":options[2]==="ma1"?"JS 95":options[2]==="ph2"?"RT 23":options[2]==="pi"?"ARA 71":options[2]==="sp"?"CH 73":"");
	lessons[5].push(options[1]==="ch"?"DMA 19":options[1]==="fr"?"PW 73":options[1]==="gg"?"MA 75":options[1]==="ss"?"SS":options[1]==="fa"?"CHO 71":options[1]==="gp"?"GM 72":options[1]==="ma"?"TZ 95":options[1]==="ps"?"MM 74":"");
	lessons[5].push(options[1]==="ch"?"DMA 19":options[1]==="fr"?"CH 73":options[1]==="ss"?"SS":options[1]==="ma"?"JCA 95":options[1]==="ps"?"MM 74":options[1]==="gg"?"RP 75":"");
	lessons[5].push(options[3]==="ad"?"RDE 63":options[3]==="bi"?"EKG 31":options[3]==="pe"?"SB 64":options[3]==="ph"?"JC 75":options[3]==="fp"?"JS 72":options[3]==="ma"?"CHO 95":options[3]==="bu"?"PD 73":options[3]==="ch"?"PWO 19":options[3]==="ec"?"NB 71":options[3]==="el"?"KRO 74":"");
	lessons[5].push(options[3]==="ad"?"RDE 64":options[3]==="bi"?"EKG 31":options[3]==="pe"?"AB 72":options[3]==="ph"?"RT 75":options[3]==="ss"?"SS":options[3]==="bu"?"PD 73":options[3]==="ch"?"PWO 19":options[3]==="ec"?"NB 71":options[3]==="el"?"SK 74":"");
	lessons[5].push(options[4]==="ss"?"SS":options[4]==="ts"?"LV 55":options[4]==="mu"?"SBR 52":options[4]==="fa"?"JCA 71":options[4]==="bi2"?"EKG 31":options[4]==="ch2"?"DMA 19":options[4]==="de"?"CR 73":options[4]==="ec"?"NB 72":"");
	lessons[5].push(""); // no lunch lessons
	lessons[5].push(options[4]==="bi1"?"PDA 75":options[4]==="fa"?"LH 71":options[4]==="ts"?"LV 55":options[4]==="mu"?"RD 16":options[4]==="bi2"?"EKG 31":options[4]==="ch1"?"DV 69":options[4]==="ch2"?"DMA 17":options[4]==="de"?"RDZ 73":options[4]==="ec"?"NB 72":"");
	lessons[5].push(options[2]==="gg"?"MA 72":options[0]==="pd"?"KB 54":options[2]==="hi"?"GM 60":options[2]==="ph1"?"OJ 71":"");
	lessons[6].push(options[3]==="ad"?"RDE 63":options[3]==="bi"?"RM 69":options[3]==="pe"?"SB 65":options[3]==="ph"?"RT 23":options[3]==="ss"?"SS":options[3]==="fp"?"MDB 72":options[3]==="ma"?"CHO 95":options[3]==="bu"?"PD 73":options[3]==="ch"?"PWO 75":options[3]==="ec"?"NB 71":options[3]==="el"?"KRO 74":"");
	lessons[6].push(options[3]==="ad"?"RDE 63":options[3]==="bi"?"RM 69":options[3]==="pe"?"SB 60":options[3]==="ph"?"RT 23":options[3]==="ss"?"SS":options[3]==="fp"?"MDB 72":options[3]==="ma"?"CHO 95":options[3]==="bu"?"PD 73":options[3]==="ec"?"NB 71":options[3]==="el"?"SK 74":"");
	lessons[6].push(options[2]==="bi"?"MSG 68":options[2]==="gg"?"SBA 72":options[2]==="hi"?"GM 60":options[2]==="ma1"?"JS 95":options[2]==="ma2"?"LH 74":options[2]==="ph1"?"AM 75":options[2]==="ph2"?"RT 69":options[2]==="pi"?"ARA 71":options[2]==="sp"?"LMC 73":options[2]==="ss"?"SS":"");
	lessons[6].push(options[1]==="ch"?"DV 19":options[1]==="fr"?"CH 73":options[1]==="gg"?"RP 60":options[1]==="ps"?"MM 74":options[1]==="gp"?"GM 72":options[3]==="pe"?"AH 65":"");
	lessons[6].push(options[1]==="ch"?"DMA 19":options[1]==="fr"?"PW 73":options[1]==="gg"?"SBA 60":options[1]==="ss"?"SS":options[1]==="gp"?"NB 72":options[1]==="ma"?"JCA 95":options[1]==="ps"?"RF 74":"");
	lessons[6].push(options[0]==="fp"?"JS 71":"");
	lessons[6].push(options[4]==="bi1"?"PDA 31":options[4]==="ts"?"LV 55":options[4]==="mu"?"RD 16":options[4]==="bi2"?"RM 75":options[4]==="ch1"?"DV 20":options[4]==="ch2"?"DMA 71":options[4]==="de"?"CR 73":options[4]==="ec"?"NB 72":"");
	lessons[6].push(options[4]==="ts"?"LV 55":options[4]==="mu"?"RD 16":options[4]==="ch1"?"PWO 20":options[4]==="ec"?"NB 72":options[4]==="bi1"?"DMC 31":"");
	lessons[7].push("Form Tutor");
	lessons[7].push(options[2]==="hi"?"GM 60":options[2]==="ma1"?"TZ 95":options[2]==="ma2"?"MDB 74":options[2]==="ph1"?"OJ 72":options[2]==="ph2"?"JC 75":options[2]==="pi"?"ARA 71":options[2]==="sp"?"LMC 73":options[2]==="ss"?"SS":"");
	lessons[7].push(options[3]==="ad"?"NT 64":options[3]==="pe"?"AH 60":options[3]==="ph"?"JC 75":options[3]==="ss"?"SS":options[3]==="ma"?"AP 95":options[3]==="bi"?"RM 71":options[3]==="ch"?"SP 72":options[3]==="el"?"KRO 74":"");
	lessons[7].push(options[4]==="bi1"?"DMC 75":options[4]==="mu"?"RD 16":options[4]==="bi2"?"RM 21":options[4]==="ch1"?"DV 20":options[4]==="ch2"?"DMA 71":options[4]==="de"?"CR 73":options[4]==="ec"?"NB 72":"");
	lessons[7].push(options[4]==="bi1"?"DMC 75":options[4]==="ss"?"SS":options[4]==="mu"?"RD 16":options[4]==="fa"?"JCA 71":options[4]==="bi2"?"RM 21":options[4]==="ch1"?"DV 20":options[4]==="ch2"?"DMA 95":options[4]==="ec"?"NB 72":options[4]==="de"?"CR 73":"");
	lessons[7].push(options[1]==="fa"?"JRI 71":"");
	lessons[7].push(options[0]==="co"?"DW 42":options[0]==="fp"?"MDB 71":options[0]==="hi"?"SS C 74":options[0]==="ma"?"AP 95":options[0]==="ps"?"MM 72":options[0]==="pd"?"KB 50":options[0]==="ph"?"OJ 24":"");
	lessons[7].push(options[0]==="co"?"DW 42":options[0]==="fp"?"JS 71":options[0]==="hi"?"SS C 74":options[0]==="ma"?"AP 95":options[0]==="ps"?"MM 72":options[0]==="pd"?"KB 50":options[0]==="ph"?"RT 75":"");
	lessons[8].push(options[0]==="fp"?"JS 71":options[0]==="hi"?"SS W 74":options[0]==="ma"?"AP 95":options[0]==="ss"?"SS":options[0]==="pd"?"KB 50":options[0]==="ph"?"OJ 75":options[0]==="ps"?"RF 72":"");
	lessons[8].push(options[0]==="co"?"DW 42":options[0]==="fp"?"MDB 71":options[0]==="hi"?"SS W 74":options[0]==="ma"?"AP 95":options[0]==="ss"?"SS":options[0]==="pd"?"KB 50":options[0]==="ph"?"RT 75":options[0]==="ps"?"MM 72":"");
	lessons[8].push(options[2]==="bi"?"MSG 31":options[2]==="gg"?"RP 72":options[2]==="hi"?"GM 75":options[2]==="ma1"?"TZ 95":options[2]==="ma2"?"LH 74":options[2]==="ph2"?"RT 23":options[2]==="pi"?"ARA 71":options[2]==="sp"?"LMC 73":options[2]==="ss"?"SS":"");
	lessons[8].push(options[2]==="bi"?"DMC 31":options[2]==="gg"?"RP 72":options[2]==="hi"?"GM 75":options[2]==="ma1"?"TZ 95":options[2]==="ma2"?"MDB 74":options[2]==="ph1"?"OJ 15":options[2]==="ph2"?"RT 23":options[2]==="pi"?"ARA 71":options[2]==="sp"?"CH 73":"");
	lessons[8].push(options[3]==="ad"?"RDE 63":options[3]==="pe"?"AB 71":options[3]==="ss"?"SS":options[3]==="fp"?"JS 72":options[3]==="ma"?"AP 95":options[3]==="bu"?"PD 73":options[3]==="ch"?"SP 75":options[3]==="el"?"SK 74":"");
	lessons[8].push(options[3]==="bu"?"TBE 68":options[3]==="ec"?"NB 71":"");
	lessons[8].push(options[1]==="ch"?"DV 19":options[1]==="fr"?"CH 73":options[1]==="gg"?"SBA 75":options[1]==="ps"?"MM 74":options[1]==="gp"?"GM 72":options[1]==="ma"?"JCA 95":"");
	lessons[8].push(options[1]==="ch"?"DV 19":options[1]==="fa"?"JRI 71":options[1]==="fr"?"CH 73":options[1]==="gg"?"MA 75":options[1]==="ps"?"MM 74":options[1]==="gp"?"GM 72":options[1]==="ma"?"TZ 95":"");
	lessons[9].push(options[4]==="bi1"?"DMC 75":options[4]==="ss"?"SS":options[4]==="ts"?"LV 55":options[4]==="fa"?"LH 71":options[4]==="bi2"?"EKG 95":options[4]==="ch1"?"DV 60":options[4]==="ch2"?"SP 74":options[4]==="de"?"RDZ 73":options[4]==="ec"?"NB 72":"");
	lessons[9].push(options[2]==="bi"?"DMC 69":options[2]==="gg"?"SBA 72":options[2]==="hi"?"SS 60":options[2]==="ma1"?"JS 95":options[2]==="ma2"?"LH 74":options[2]==="ph1"?"AM 15":options[2]==="ph2"?"JC 75":options[2]==="pi"?"ARA 71":options[2]==="ss"?"SS":"");
	lessons[9].push(options[2]==="bi"?"DMC 69":options[2]==="gg"?"SBA 72":options[2]==="hi"?"SS 60":options[2]==="ph1"?"OJ 15":options[2]==="ph2"?"JC 75":options[2]==="pi"?"ARA 71":options[2]==="ss"?"SS":"");
	lessons[9].push(options[0]==="co"?"DW 42":options[0]==="fp"?"MDB 71":options[0]==="hi"?"SS C 74":options[0]==="ma"?"JCA 95":options[0]==="ss"?"SS":options[0]==="pd"?"LT 50":options[0]==="ph"?"RT 23":options[0]==="ps"?"MM 72":"");
	lessons[9].push(options[0]==="co"?"SC 44":options[0]==="fp"?"JS 71":options[0]==="hi"?"SS C 74":options[0]==="ma"?"AP 95":options[0]==="ss"?"SS":options[0]==="pd"?"LT 50":options[0]==="ph"?"RT 23":options[0]==="ps"?"RF 72":"");
	lessons[9].push(""); // no lunch lessons
	lessons[9].push(options[3]==="ma"?"CHO 75":options[3]==="ph"?"JC 95":options[3]==="fp"?"MDB 72":options[3]==="bi"?"EKG 58":options[3]==="ch"?"SP 74":options[3]==="ec"?"NB 71":"");
	lessons[9].push(options[3]==="ad"?"NT 63":options[3]==="bi"?"EKG 58":options[3]==="ma"?"CHO 95":options[3]==="ph"?"RT 61":options[3]==="fp"?"JS 72":options[3]==="bu"?"PD 73":options[3]==="ch"?"PWO 74":options[3]==="ec"?"NB 71":"");

	// fill in the table
	let els = document.getElementsByTagName("td");
	for (let i = 5; i < 20; i++) {
		els[i].innerText = lessons[i%5][Math.floor(i/5)-1];
	}
	for (let i = 25; i < 50; i++) {
		els[i].innerText = lessons[i%5][Math.floor(i/5)-2];
	}
	for (let i = 55; i < 70; i++) {
		els[i].innerText = lessons[i%5+5][Math.floor(i/5)-11];
	}
	for (let i = 75; i < 100; i++) {
		els[i].innerText = lessons[i%5+5][Math.floor(i/5)-12];
	}

	// free and ss
	for (let i = 0; i < els.length; i++) {
		if((els[i].innerText === "SS" || els[i].innerText === "") && (![4,7,14,17].includes(Math.floor(i/5)))) {
			els[i].style.backgroundColor = "var(--bg)";
		}
		else {
			els[i].style.backgroundColor = "";
		}
	}

	// lunch lessons

	// Monday A
	if (els[35].innerText !== "") {
		els[35].style.backgroundColor = "var(--a1)"; // purple
	}

	// Tuesday A
	if (els[36].innerText !== "") {
		els[36].style.backgroundColor = "var(--a3)"; // blue
	}

	// Thursday A
	if (els[38].innerText !== "") {
		els[38].style.backgroundColor = "var(--a1)"; // purple
	}

	// Tuesday B
	if (els[86].innerText !== "") {
		els[86].style.backgroundColor = "var(--a1)"; // purple
	}

	// Wednesday B
	if (els[87].innerText !== "") {
		els[87].style.backgroundColor = "var(--a2)"; // yellow
	}

	// Thursday B
	if (els[88].innerText !== "") {
		els[88].style.backgroundColor = "var(--a4)"; // red
	}
}

document.getElementById("colorselector").ondragstart = function (e) {
	e.dataTransfer.setData("text", "fill");
}

document.ondrop = function(e) {
	if (e.target.id !== "colorselector" && e.target.id !== "textselector") {
		let variable;
		let type;
		if (e.dataTransfer.getData("text") === "fill") {
			type = "colorselector";
			if (e.target.tagName !== "TD") {
				if (e.target.id === "name") {
					variable = "--name";
				}
				else {
					variable = "--background";
				}
			}
			else {
				if (e.target.classList[0] === undefined) {
					variable = "--header";
				}
				else if ((e.target.innerText === "SS" || e.target.innerText === "") && (document.getElementById("name").value !== "")) {
					variable = "--bg";
				}
				else {
					variable = "--"+e.target.classList[0];
				}
			}
		}
		else {
			type = "textselector";
			if (e.target.id === "name") {
				variable = "--nametext";
			}
			else if (e.target.tagName === "TD") {
				if (e.target.classList[0] === undefined) {
					variable = "--headertext";
				}
				else {
					variable = "--td";
				}
			}
		}
		document.documentElement.style.setProperty(variable, document.getElementById(type).value);
	}
}
