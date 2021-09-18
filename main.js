var attributes = ["Renaissance", "Emergence", "Transformation", "Genesis",
"Evolution", "Revolution", "Political Economy", "Reimagining", "Tragedy", "Aesthetics", "Geography", "Digitalisation", "Origins", "Mechanisation",
"Decarbonization", "Ecology", "Disenchantment", "Fetishisation", "Mainstreaming", "Rise", "Roots", "Critique"]

var topics = ["Wildfires", "Perennial Agriculture", "Salmon Aquaculture", "Capitalism", "Just Transitions", 
"Fossil Fuels", "Plastic Pollution", "Degrowth", "Public Transport", "Food Waste", 
"Light Pollution", "Sea Level Rise", "Fast Fashion", "Sustainable Development", 
"Deforestation", "Eutrophication", "Car Sharing","Ecotourism", "Climate Change", 
"Ecosystem Services", "Heatwaves", "Resistance", "Copper Mining", "Peri-urban Agriculture", 
"Social Movements", "Green Finance", "Geoengineering", "Climate Protests", "Carbon Air Capture", "Biofuels" ]

var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla",
"Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas",
"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan",
"Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei",
"Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands",
"Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire",
"Croatia","Cruise Ship","Cuba","Cyprus","the Czech Republic","Denmark","Djibouti","Dominica",
"Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia",
"Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia",
"the French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece",
"Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti",
"Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland",
"Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya",
"Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya",
"Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi",
"Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco",
"Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands",
"Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway",
"Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines",
"Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda",
"Saint Pierre & Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal",
"Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa",
"South Korea","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent",
"St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan",
"Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago",
"Tunisia","Turkey","Turkmenistan","Turks & Caicos","Uganda","Ukraine", "the United States",
"the United Arab Emirates","the United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam",
"Virgin Islands (US)","Yemen","Zambia","Zimbabwe"]

var adjectives = ["Botanical", "Marxist", "Constructivist", "Feminist", "Decolonial", "Interdisciplinary", 
"Participative", "Emancipatory", "Transformative", "Geological","Critical", 
"Ethnographic", "Empirical", "Astrological", "hegelian", "Quantitative", "Historical", "Comparative", 
"Political", "Rural", "Realist", "Neo-gramscian", "Qualitative", 
"Judicial", "Urban", "Cultural","Systematic", "Polycentric", "Hydrosocial", "Community-Based"]

var methodologies = ["Discourse Analysis", "Case Study", "Content Analysis",
 "Investigation", "Phenomenology", "Account", "Reconstruction", "Epistemology", 
"Ontology", "Literature Review", "Biography", "Histography", "Meta Analysis"]

function startsWithVowel(word){
   var vowels = ("aeiouAEIOU"); 
   return vowels.indexOf(word[0]) !== -1;
}

function newTitle() {
 			document.getElementById('attribute').textContent = attributes[Math.floor(Math.random()*(attributes.length))];
 			document.getElementById('topic').textContent = topics[Math.floor(Math.random()*(topics.length))];
 			document.getElementById('country').textContent = countries[Math.floor(Math.random()*(countries.length))];
 			document.getElementById('adjective').textContent = adjectives[Math.floor(Math.random()*(adjectives.length))];
 			document.getElementById('methodology').textContent = methodologies[Math.floor(Math.random()*(methodologies.length))]; 
 			if (startsWithVowel(document.getElementById('adjective').textContent)) {
 				document.getElementById('article').textContent = "an"
 			} else {document.getElementById('article').textContent = "a"}
 		}
 		