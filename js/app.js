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

// var obama=document.createElement("http://68.media.tumblr.com/537e8e980f1ebc85ce66301a757da2d5/tumblr_ndvk59aQEs1u226bko1_400.jpg");
// obama.id="alias9";
// obama.innerHTML="Hawaii's President";
// block3 col-sm-4.appendChild(obama);

var obama=document.getElementsByClassName("block3 col-sm-4")[2];
// document.getElementById("img").src = "http://68.media.tumblr.com/537e8e980f1ebc85ce66301a757da2d5/tumblr_ndvk59aQEs1u226bko1_400.jpg";
obama.innerHTML="Obama";
block3[2].appendChild(obama);

console.log(obama);

