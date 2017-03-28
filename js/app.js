/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Replace the n/a with the following:

Tay-Tay*/

var changeName = document.getElementById("name1");
changeName.innerHTML = "Tay-Tay";

/*2. Replace the n/a with the following: 

Project Manager*/

var changePosition = document.getElementById("position2");
changePosition.innerHTML = "Project Manager";

/*3. Replace the n/a with the following:

Concatenation*/

var changeAlias = document.getElementById("alias3");
changeAlias.innerHTML = "Concatenation";

/*4. Replace the n/a for Snoop with the gangsta lorem ipsum*/

var changeProfile = document.getElementsByClassName("profile")[0];
//or add [0] here: changeProfile[0].innerHTML " "
changeProfile.innerHTML = "Lorizzle ipsizzle dolor boom shackalack amizzle, consectetuer adipiscing elit. Nullam owned gangsta, aliquet for sure, dawg crackalackin, shut the shizzle up vizzle, arcu. Pellentesque eget mammasay mammasa mamma oo sa. Sizzle erizzle. Bizzle izzle dolor dapibizzle turpis tempizzle dizzle. Maurizzle pellentesque nibh black turpizzle. We gonna chung bow wow wow boofron. Pellentesque eleifend rhoncizzle nisi. Bizzle bow wow wow away platea dictumst. Tellivizzle dapibizzle. Uhuh ... yih! tellus pizzle, pretizzle eu, mattizzle ac, eleifend gangsta, things. Brizzle suscipit. Integizzle izzle velizzle sed sheezy.";

/*5. Relace the n/a for Samuel L Jackson with his lorem ipsum*/

var changeProfile = document.getElementsByClassName("profile")[2];
changeProfile.innerHTML = "My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?";


/*6. Create a div element for Chuck Norris and give it an id of "name7". Inside this div element, give it the contents of "Chuck Norris".

Append this div element to the nameBox div*/

 var chucky=document.createElement("div");
 chucky.id="name7";
 chucky.innerHTML="Chuck Norris";
 nameBox.appendChild(chucky);

/*7. Create a div element for Grimmace and give it an id of "alias8". Inside this div element, give it the contents of "The Purple Monster".

Append this div element to the aliasBox div.*/

var grimmy=document.createElement("div");
grimmy.id="alias8";
grimmy.innerHTML="The Purple Monster";
aliasBox.appendChild(grimmy);


//Final Boss
/*8. Create your own profile.*/

var obamaName=document.createElement("div");
obamaName.id="name9";
obamaName.innerHTML="Barack Obama";
document.getElementsByClassName("block3 col-sm-4")[2].appendChild(obamaName);

var obamaPosition=document.createElement("div");
obamaPosition.id="position9";
obamaPosition.innerHTML="BOB";
document.getElementsByClassName("block3 col-sm-4")[2].appendChild(obamaPosition);

var obamaBio=document.createElement("div");
obamaBio.id="bio9";
obamaBio.innerHTML="New economy idea shower. Moving the goalposts innovation is hot right now yet get all your ducks in a row open door policy please use solutionise instead of solution ideas! Anti-pattern guerrilla marketing, yet good optics for knowledge is power. Those options are already baked in with this model back to the drawing-board, fire up your browser. That jerk from finance really threw me under the bus i also believe it's important for every member to be involved and invested in our company and this is one way to do so and first-order optimal strategies so gain traction goalposts are we in agreeance, and we need to button up our approach. Herding cats moving the goalposts.";
document.getElementsByClassName("block3 col-sm-4")[2].appendChild(obamaBio);

