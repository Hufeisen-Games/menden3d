/*
I know... the program code looks bad.... I had only one week time. Please just ignore :)

Copyright 2022 Lion K.
hufeisen@hufeisen-games.de
*/
const panoImage = document.querySelector('.pano-image');

let spinnerWrapper = document.querySelector('.spinner-wrapper');

panoImage.setAttribute('height', window.innerHeight);

document.querySelector(".foyer_button").addEventListener("click", function () {

    document.querySelector(".foyer_popup").style.display = "block";

});

document.querySelector(".foyer_popup_close_button").addEventListener("click", function () {

    document.querySelector(".foyer_popup").style.display = "none";

});

document.querySelector(".info_popup_close_button").addEventListener("click", function () {

    document.querySelector(".info_popup").style.display = "none";

});

document.querySelector(".sources_button").addEventListener("click", function () {

    document.querySelector(".sources_popup").style.display = "block";

});

document.querySelector(".sources_popup_close_button").addEventListener("click", function () {

    document.querySelector(".sources_popup").style.display = "none";

});

document.querySelector(".credits_button").addEventListener("click", function () {

    document.querySelector(".credits_popup").style.display = "block";

});

document.querySelector(".credits_popup_close_button").addEventListener("click", function () {

    document.querySelector(".credits_popup").style.display = "none";

});

//Sources

var oXHR = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

oXHR.open("GET", "assets/data/sources.json", false);
oXHR.send();

var tBody = document.querySelector(".sources_popup > div .content > tbody")

var arrItems = [];
arrItems = JSON.parse(oXHR.responseText);

for (var i = 0; i < arrItems.length; i++) {

    var bRow = document.createElement("tr");

    var td = document.createElement("td");
    td.className = "counterCell"
    var td2 = document.createElement("td");
    td2.innerHTML = arrItems[i];
    bRow.appendChild(td);
    bRow.appendChild(td2);

    tBody.appendChild(bRow);
}

//Credits

oXHR = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

oXHR.open("GET", "assets/data/credits.json", false);
oXHR.send();

tBody = document.querySelector(".credits_popup > div .content > tbody")

arrItems = [];
arrItems = JSON.parse(oXHR.responseText);

for (var i = 0; i < arrItems.length; i++) {

    var bRow = document.createElement("tr");

    var td = document.createElement("td");
    td.innerHTML = arrItems[i][0]
    var td2 = document.createElement("td");
    td2.innerHTML = arrItems[i][1];
    bRow.appendChild(td);
    bRow.appendChild(td2);

    tBody.appendChild(bRow);
}

document.querySelector(".credits_popup > div .content") .appendChild(tBody);

function removeLoadingScreen() {
    setTimeout(function () {
        spinnerWrapper.style.display = "none";
    }, 500)
}

function addLoadingScreen() {
    spinnerWrapper.style.display = "grid";
}

function showInformation(heading, text) {

    document.querySelector(".info_popup > div .heading").textContent = heading;
    document.querySelector(".info_popup > div .text").innerHTML = text;
    document.querySelector(".info_popup").style.display = "block";

}

//Panoramas
const marktplatz = new PANOLENS.ImagePanorama('assets/img/Marktplatz.jpg');
const altestRathaus = new PANOLENS.ImagePanorama('assets/img/AltesRathaus.jpg');
const kirche = new PANOLENS.ImagePanorama('assets/img/Vinzenzkirche.jpg');
const museum = new PANOLENS.ImagePanorama('assets/img/Museum.jpg');
const aufgang = new PANOLENS.ImagePanorama('assets/img/AufgangJosefsschuleMenden.jpg');
const krankenhaus = new PANOLENS.ImagePanorama('assets/img/Krankenhausauffahrt.jpg');
const kapelle = new PANOLENS.ImagePanorama('assets/img/Kapelle.jpg');
const rhodenburg = new PANOLENS.ImagePanorama('assets/img/Rhodenburg.jpg');
const zone = new PANOLENS.ImagePanorama('assets/img/Zone.jpg');
const naziDenkmal = new PANOLENS.ImagePanorama('assets/img/NAZI-Denkmal.jpg');
const caritas = new PANOLENS.ImagePanorama('assets/img/Caritas.jpg');
const turm = new PANOLENS.ImagePanorama('assets/img/Turm.jpg');
const muehle = new PANOLENS.ImagePanorama('assets/img/Muehle.jpg');
const neuesRathaus = new PANOLENS.ImagePanorama('assets/img/NeuesRathaus.jpg');
const archiv = new PANOLENS.ImagePanorama('assets/img/Archiv.jpg');
const amtsgericht = new PANOLENS.ImagePanorama('assets/img/Amtsgericht.jpg');

//Loader
marktplatz.addEventListener("load", function (){
    removeLoadingScreen()
})
altestRathaus.addEventListener("load", function (){
    removeLoadingScreen()
})
kirche.addEventListener("load", function (){
    removeLoadingScreen()
})
museum.addEventListener("load", function (){
    removeLoadingScreen()
})
aufgang.addEventListener("load", function (){
    removeLoadingScreen()
})
krankenhaus.addEventListener("load", function (){
    removeLoadingScreen()
})
kapelle.addEventListener("load", function (){
    removeLoadingScreen()
})
rhodenburg.addEventListener("load", function (){
    removeLoadingScreen()
})
zone.addEventListener("load", function (){
    removeLoadingScreen()
})
naziDenkmal.addEventListener("load", function (){
    removeLoadingScreen()
})
caritas.addEventListener("load", function (){
    removeLoadingScreen()
})
turm.addEventListener("load", function (){
    removeLoadingScreen()
})
muehle.addEventListener("load", function (){
    removeLoadingScreen()
})
neuesRathaus.addEventListener("load", function (){
    removeLoadingScreen()
})
archiv.addEventListener("load", function (){
    removeLoadingScreen()
})
amtsgericht.addEventListener("load", function (){
    removeLoadingScreen()
})



//Add Loading Screen
marktplatz.addEventListener("progress", function (){
    addLoadingScreen()
})
altestRathaus.addEventListener("progress", function (){
    addLoadingScreen()
})
kirche.addEventListener("progress", function (){
    addLoadingScreen()
})
museum.addEventListener("progress", function (){
    addLoadingScreen()
})
aufgang.addEventListener("progress", function (){
    addLoadingScreen()
})
krankenhaus.addEventListener("progress", function (){
    addLoadingScreen()
})
kapelle.addEventListener("progress", function (){
    addLoadingScreen()
})
rhodenburg.addEventListener("progress", function (){
    addLoadingScreen()
})
zone.addEventListener("progress", function (){
    addLoadingScreen()
})
naziDenkmal.addEventListener("progress", function (){
    addLoadingScreen()
})
caritas.addEventListener("progress", function (){
    addLoadingScreen()
})
turm.addEventListener("progress", function (){
    addLoadingScreen()
})
muehle.addEventListener("progress", function (){
    addLoadingScreen()
})
neuesRathaus.addEventListener("progress", function (){
    addLoadingScreen()
})
archiv.addEventListener("progress", function (){
    addLoadingScreen()
})
amtsgericht.addEventListener("progress", function (){
    addLoadingScreen()
})

//Spots - Marktplatz
const marktplatz1 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Arrow);
marktplatz1.position.set(3000, 0, 1000);
marktplatz1.addEventListener('click', function () {
    viewer.setPanorama(altestRathaus);
});
const marktplatz2 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Arrow);
marktplatz2.position.set(100, -100, -2700);
marktplatz2.addEventListener('click', function () {
    viewer.setPanorama(zone);
});
const marktplatz3 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Arrow);
marktplatz3.position.set(-3000, 0, 300);
marktplatz3.addEventListener('click', function () {
    viewer.setPanorama(muehle);
});
const marktplatz4 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Info);
marktplatz4.position.set(3000, -500, 1500);
marktplatz4.addEventListener('click', function () {
    showInformation("Marktrecht / Handel", "")
});
marktplatz.add(marktplatz1);
marktplatz.add(marktplatz2);
marktplatz.add(marktplatz3);
//marktplatz.add(marktplatz4);


const altesRathaus1 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Arrow);
altesRathaus1.position.set(-500, -200, 3000);
altesRathaus1.addEventListener('click', function () {
    viewer.setPanorama(marktplatz);
});
const altesRathaus2 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Arrow);
altesRathaus2.position.set(0, 0, -3000);
altesRathaus2.addEventListener('click', function () {
    viewer.setPanorama(kirche);
});
const altesRathaus3 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Info);
altesRathaus3.position.set(3000, -100, -120);
altesRathaus3.addEventListener('click', function () {
    showInformation("Stadterhebung Menden", "In der Mitte des 12. Jahrhunderts hatte Menden bereits, obwohl noch immer als Dorf angesehen, schon Merkmale einer Stadt, sei es das Gericht oder eine Befestigung. Dies war auch dringend n??tig, da das Dorf, welches zu den Kurf??rsten K??lns geh??rte, nah am Territorium vom Grafen von der Mark lag, welcher sein Gebiet ausweiten wollte und Menden immer wieder angriff.<br><br>" +
        "Gleichzeitig erh??lt Goswin von Rodenberg nach Streitigkeiten mit dem Erzbischof Engelbert neben umliegenden Siedlungen und Feldern auch Menden als Vergleich. Als der Nachfolger von Erzbischof Engelbert in einen Krieg mit dem Grafen der Mark in Gefangenschaft ger??t und so den Krieg verliert, hat das schwere Konsequenzen f??r Menden, da Menden immer zum Erzbischof gehalten hatte.<br><br>" +
        "Wichtig ist dies f??r die Stadterhebung, weil in diesem Zusammenhang Menden das erste Mal als ???Stadt??? benannt wird, in einer Nachricht des sp??teren Landesherrn der Stadt Menden ??ber die Zerst??rung der Stadt Werl und der Stadt Menden vom Grafen der Mark. Tats??chliche Belege f??r den Aufstieg zur Stadt fehlen aber zu dieser Zeit noch.<br><br>" +
        "Um die Freiheit wiederzuerlangen, musste der Nachfolger Engelberts allerdings versprechen, Menden nicht wieder aufzubauen und der Graf von der Mark war die n??chsten Jahre auch stark genug, um dies sicherzustellen.<br><br>" +
        "Der Streit um Menden und Umgebung lebt wieder auf, als ein Graf der Mark 1298 erkl??rt, die Rodenburg zu ??bernehmen. Bald darauf wird die Burg bei einer Eroberung desselben zerst??rt und Menden bleibt schutzlos zur??ck. Um dies zu kompensieren, wurde Menden 1307 urkundlich als Stadt anerkannt wurde und neben Bewaffneten Verteidigern auch unter anderem eine Stadtmauer und das Marktrecht erhielt<sub>26</sub>.")
});
altestRathaus.add(altesRathaus1)
altestRathaus.add(altesRathaus2)
altestRathaus.add(altesRathaus3)


const kirche1 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Arrow);
kirche1.position.set(3000, -100, -1000);
kirche1.addEventListener('click', function () {
    viewer.setPanorama(turm);
});
const kirche2 = new PANOLENS.Infospot(250, PANOLENS.DataImage.Arrow);
kirche2.position.set(2000, 0, 3000);
kirche2.addEventListener('click', function () {
    viewer.setPanorama(aufgang);
});
const kirche3 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Arrow);
kirche3.position.set(-3000, -200, -200);
kirche3.addEventListener('click', function () {
    viewer.setPanorama(museum);
});
const kirche4 = new PANOLENS.Infospot(160, PANOLENS.DataImage.Arrow);
kirche4.position.set(-1000, -300, -2000);
kirche4.addEventListener('click', function () {
    viewer.setPanorama(altestRathaus);
});
const kirche5 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Info);
kirche5.position.set(3000, -100, 110);
kirche5.addEventListener('click', function () {
    showInformation("Die Hexenverfolgung und Hinrichtung in Menden", "Die Hexenverfolgung ist ein dunkles Kapitel der Geschichte Mendens. Ihre Anf??nge lassen sich bis in das fr??he 17. Jahrhundert verfolgen. <br><br>" +
        "Das wohl bekannteste Opfer der Hexenverfolgung in Menden war Dorte Hilleke. Sie wurde am 4. M??rz 1631 von einem Diener der Stadt Menden der Zauberei beschuldigt und festgenommen. Um ein Gest??ndnis aus ihr herauszubekommen, lie?? man sie im Keller des alten Rathauses foltern. Sie hielt aber stand und gab kein Gest??ndnis ab. Ob sie freigelassen wurde oder w??hrend der Folter starb, ist nicht ??berliefert. <br><br>" +
        "In den Archiven der Kirche wird von ungef??hr 80 Opfern in Menden gesprochen. Sie wurden ebenfalls wegen Hexerei oder Teufelsergebenheit festgenommen. Die meisten der Opfer wurden auch, so wie Dorte Hilleke, gefoltert. Die Knechte qu??lten  ihre Opfer so lange, bis sie ein Gest??ndnis machten. Viele der Opfer wurden so misshandelt, dass sie einfach alles zugegeben haben, was ihnen vorgeworfen wurde und sich freiwillig der Hinrichtung durch den Schafrichter unterwarfen. Der Teufelsturm, wie er heute noch zu finden ist, war das Gef??ngnis, in dem die Hexen sp??ter eingesperrt und gefoltert wurden.<br><br>" +
        "Durch die Umst??nde im 17. Jahrhundert und dem Chaos, das in der Zeit herrschte, wurden sehr viele Unschuldige ermordet. Man galt als Hexe, sobald das die Masse sagte. Man wurde dann festgenommen und hingerichtet. Von den Methoden, wie man hingerichtet wird, ganz zu schweigen, war die Hexenverfolgung ein d??steres Kapitel in Menden, das sein Ende erst am Ende des 17. Jahrhundert erreicht.<sub>7</sub>")
});
kirche.add(kirche1)
kirche.add(kirche2)
kirche.add(kirche3)
kirche.add(kirche4)
kirche.add(kirche5)


const museum1 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Arrow);
museum1.position.set(-3000, 0, 0);
museum1.addEventListener('click', function () {
    viewer.setPanorama(kirche);
});
const museum2 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Info);
museum2.position.set(3000, 0, 430);
museum2.addEventListener('click', function () {
    showInformation("Mittelalter", "Zu Beginn muss erw??hnt werden, dass es nicht viele Texte bez??glich des Mittelalters gibt, da Originalurkunden fast ausschlie??lich erst ab dem 16. Jahrhundert vorhanden sind. Und auch diese tragen meist nicht zu der allgemeinen Geschichte der Stadt Menden bei. Neben unserem sauerl??ndischen Menden gibt es au??erdem auch ???Menden bei M??hlheim an der Ruhr??? und ???Menden an der Sieg Rheinland???. Da die gegebenen Urkunden ??fters den Ort nicht genau angeben, wird es umso schwerer, die Orte zu unterscheiden<sub>12</sub>.<br><br>" +
        "Menden gilt als einer der Urpfarreien, die zeitnah nach der Christianisierung durch die Franken des Sachsenlandes gegr??ndet worden war. Dies wurde nie urkundlich bewiesen, aber darauf ist durch sp??tere Beziehungen zu schlie??en. Fr??her geh??rten n??rdlich der Ruhr Gebiete von Dellwig bis Baumhagen, als auch die in der unmittelbaren Umgebung S??mmern, Gerkendahl, Hennen, Hemer, Deilinghofen und Echthausen zur Pfarrei Menden. Diese Orte wurden jedoch im Laufe des Mittelalters zu eigenen Orten mit eigenen Pfarreien, entsprechend dem hohen Bev??lkerungszuwachs<sub>13</sub>.<br><br>" +
        "Fr??her waren zwei M??chte um die Stadtbildung Mendens ausschlaggebend: die Erzbisch??fe von K??ln und die Grafen von der Mark. Die Erzbisch??fe versuchten damals, ihre westf??lischen Gebiete zu einem eigenen Territorium vom Rest des Einflussbereiches abzutrennen, was durch den Sturz eines Herzogs erm??glicht wurde. Da diese Bisch??fe nach dem Sturz den Herzogtitel in Westfalen und Engern erhielten, nannte man das Gebiet auch ???Herzogtum Westfalen???. Dieser Versuch erhielt jedoch viel Widerstand, besonders von den Grafen von der Mark, die nun auch begannen, geschlossene Territorien zu gr??nden. Menden hatten bei diesem Konflikt durch ihre Grenzlage besonders zu k??mpfen. Allm??hlich verlagerte jedoch sich die Interessen von den Grafen von Mark, sodass nach einem Konflikt mit den Grafen von Arnsberg das Territorium gesichert werden konnte<sub>14</sub>.")
});
museum.add(museum1)
museum.add(museum2)

const aufgang1 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Arrow);
aufgang1.position.set(3000, -200, 0);
aufgang1.addEventListener('click', function () {
    viewer.setPanorama(kirche);
});
const aufgang2 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Arrow);
aufgang2.position.set(-1000, 0, 3000);
aufgang2.addEventListener('click', function () {
    viewer.setPanorama(krankenhaus);
});
aufgang.add(aufgang1)
aufgang.add(aufgang2)


const krankenhaus1 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Arrow);
krankenhaus1.position.set(-3000, -200, -1000);
krankenhaus1.addEventListener('click', function () {
    viewer.setPanorama(aufgang);
});
const krankenhaus2 = new PANOLENS.Infospot(160, PANOLENS.DataImage.Arrow);
krankenhaus2.position.set(2000, 100, 1500);
krankenhaus2.addEventListener('click', function () {
    viewer.setPanorama(kapelle);
});
const krankenhaus3 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Arrow);
krankenhaus3.position.set(3000, -200, -1000);
krankenhaus3.addEventListener('click', function () {
    viewer.setPanorama(zone);
});
krankenhaus.add(krankenhaus1)
krankenhaus.add(krankenhaus2)
krankenhaus.add(krankenhaus3)


const kapelle1 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Arrow);
kapelle1.position.set(3000, -300, 300);
kapelle1.addEventListener('click', function () {
    viewer.setPanorama(krankenhaus);
});
const kapelle2 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Arrow);
kapelle2.position.set(-3000, 600, 0);
kapelle2.addEventListener('click', function () {
    viewer.setPanorama(rhodenburg);
});
const kapelle3 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Info);
kapelle3.position.set(1900, -100, 2000);
kapelle3.addEventListener('click', function () {
    showInformation("Kreuztracht", " Die Kreuztracht in Menden existiert schon mindestens seit 1790, ob es schon davor Prozessionen gab, ist nicht ??berliefert und auch wenn in Kirchendokumenten der Karfreitag vorher schon erw??hnt wird, ist dies nicht im Zusammenhang mit einer Prozession<sub>31</sub>. Es werden allerdings kleine Gruppen erw??hnt, die ???Abendwallfahrten???<sub>32</sub> veranstalten und dabei zur Kapelle wandern, was nahelegt, dass es den Brauch der Wanderung zur Kapelle schon vor der eigentlichen Kreuztracht gab. <br><br>" +
        "Um das Jahr 1790 wurde die Prozession in den Kirchendokumenten nun also das erste Mal erw??hnt. Zu dem Zeitpunkt wurde die Kreuztracht als sogenannte ???Stundenprozession???<sub>33</sub> durchgef??hrt, in der die Kreuztr??ger in einer Stunde ein gro??es (Holz-)Kreuz von der Vinzenzkirche zur Kapelle ??ber dem heutigen Krankenhaus und zur??ck brachten und dabei Gl??ubige hinter ihnen hergingen, welche, jeder f??r sich, eigene Andachten und Gebete durchf??hrten.<br><br>" +
        "Der Pfarrer schien aber mit dieser Form der Prozession unzufrieden zu sein, denn er ??nderte bereits f??nf Jahre sp??ter den Aufbau der Prozession und schuf somit die Art der Prozession, die auch noch bis heute in ??hnlicher Struktur durchgef??hrt wird. So liefen nach den Kreuztr??gern, welche zu Beginn noch in kirchlichen Kost??men das Kreuz trugen, die Schulkinder, danach die weiblichen Bewohner, wobei die besten S??nger am Ende liefen und einen ??bergang zum folgenden Chor bildeten, zum Schluss kamen die m??nnlichen Bewohne<sub>34</sub>.<br><br>" +
        "Heutzutage gibt es mehrere Kreuztrachten, hier werden wir uns auf die gro??e Kreuztracht beschr??nken, es gibt allerdings auch die Jugendkreuztracht sowie Stundenprozessionen. Bei der Gro??en Kreuztracht tragen ein verkleideter Christusdarsteller und ein Darsteller des Simon von Cyrene das gro??e, h??lzerne Kreuz zwei Stunden lang entlang der Fu??fallstationen bis zur Kapelle im Wald und wieder zur??ck zur Vinzenzkirche. Folgen tuen ihnen nach Zahlen des Pastoralverbundes Menden ??ber 10.000 Menschen<sub>35</sub>.")
});
kapelle.add(kapelle1)
kapelle.add(kapelle2)
kapelle.add(kapelle3)


const rhodenburg1 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Arrow);
rhodenburg1.position.set(-2300, 0, 2000);
rhodenburg1.addEventListener('click', function () {
    viewer.setPanorama(kapelle);
});
const rhodenburg2 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Info);
rhodenburg2.position.set(-3000, 380, -70);
rhodenburg2.addEventListener('click', function () {
    showInformation("Die Rodenburg", "Die Rodenburg wurde etwa 1250 von Goswin, Sohn von Heinrich und Elisabeth Villicus, erbaut. Die Burganlage wurde auf dem benachbarten Bergvorsprung vom damaligen Amtssitz in Menden Oberhof erbaut. Kurz nach der Erbauung nannte Goswin sich nicht mehr ???Goswin, Schulthei?? von Menden???, sondern nahm den Titel ???Goswin de Rodenburg???<sub>23</sub> an.\n" +
        "<br><br>" +
        "Nach der Zerst??rung der Burg im Jahr 1301, wurde sie nicht mehr neu erbaut. Es verblieb nichts au??er der Ruine des Burgturmes, welcher noch immer auf dem Rodenberg steht. Der Rodenberg befindet sich am H??hnenk??pfchen in Menden.\n")
});
rhodenburg.add(rhodenburg1)
rhodenburg.add(rhodenburg2)


const zone1 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Arrow);
zone1.position.set(3000, 0, 100);
zone1.addEventListener('click', function () {
    viewer.setPanorama(marktplatz);
});
const zone2 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Arrow);
zone2.position.set(3000, 0, -800);
zone2.addEventListener('click', function () {
    viewer.setPanorama(caritas);
});
const zone3 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Arrow);
zone3.position.set(-3000, 0, -200);
zone3.addEventListener('click', function () {
    viewer.setPanorama(naziDenkmal);
});
zone.add(zone1)
zone.add(zone2)
zone.add(zone3)


const naziDenkmal1 = new PANOLENS.Infospot(180, PANOLENS.DataImage.Arrow);
naziDenkmal1.position.set(-2000, 0, -2000);
naziDenkmal1.addEventListener('click', function () {
    viewer.setPanorama(zone);
});
const naziDenkmal2 = new PANOLENS.Infospot(150, PANOLENS.DataImage.Info);
naziDenkmal2.position.set(1000, 0, -2000);
naziDenkmal2.addEventListener('click', function () {
    showInformation("Nazi-Denkmal", "1945 endete der zweite Weltkrieg und mit ihm die Herrschaft der Nationalsozialisten ??ber Deutschland. Zur??ck blieben Millionen tote, traumatisierte und verst??rte Menschen, die noch jahrzehntelang mit den Folgen zu k??mpfen hatten. Und auch in Menden war dies nicht anders. In Menden starben 793 Menschen, die als Soldat im Kampf gefallen, als Zivilist in einem Angriff umgekommen oder als Juden misshandelt und ermordet wurden<sub>17</sub>. <br><br>" +
        "Die NSDAP-Ortsgruppe Menden war schon 1922 aktiv. Sie organisierte sich zun??chst in einer ???Lesegesellschaft???, da schon zur damaligen Zeit alle NS-Organisationen verboten waren. Unter verschiedenen Tarnungen ??berwand die Gruppe mehrere Versuche der Zerschlagung, ob als Lesegruppe, Antisemitenbund oder Freiheitsbund, bis sie 1928 das erste Mal zu einer Wahl im preu??ischen Landtag zugelassen wurden und antraten. Zur gegebenen Zeit fand die Partei aber kaum Anklang bei der Bev??lkerung, nicht einmal 1 % der Wahlberechtigten stimmten in Menden f??r die NSDAP<sub>18</sub>.<br><br>" +
        "Unter der Weltwirtschaftskrise und den Reparationssch??den des Versailler Vertrages gedeihte aber Hitlers Propaganda auf und so gewann die NSDAP st??ndig an Aufmerksamkeit und Einfluss<sub>15</sub>.<br><br>" +
        "Nach Hitlers ??bernahme der Macht 1933 wurden Gemeindewahlen angesetzt, von denen sich die Nationalisten sicher waren, gewinnen zu werden. Auf Gewalt wurde noch weitestgehend verzichtet und das Ergebnis traf die Ortsgruppe ins Gesicht: Sie bekam nur 6 der 24 Stadtverordneten zugeschrieben<sub>19</sub>. <br><br>" +
        "Aber recht schnell ??nderte sich die Stimmung im Ratssaal, ob aus Demokratieverdrossenheit oder aus der Hoffnung, so schlimmeres verhindern zu k??nnen. Geholfen hat den Nationalsozialisten aber bestimmt auch eine Rede des Ortsvorsitzenden, in der er davor warnt, Entscheidungen zu treffen, die der Ortsgruppe in der Minderheit nicht gef??llt, da die NSDAP f??r die Politik in Deutschland zust??ndig sei. So wurde langsam, aber sicher die Macht der NSDAP gesichert16. Schlie??lich wurden alle Parteien bis auf die NSDAP aufgel??st und verboten, eine Zeit der Unterdr??ckung und Diskriminierung begann, mit Fackelm??rschen durch die Stadt Menden und den typischen Boykottierungen j??discher Gesch??fte sowie der Reichsprogromnacht am 09.11.1933, die auch in Menden begangen wurde<sub>16</sub>.<br><br>" +
        "Am 01.09.1939 brach schlie??lich der zweite Weltkrieg aus. Die Stimmung in Menden war zwiegespalten zwischen denjenigen, die entschlossen an den Sieg glaubten und diejenigen, die unbegeistert einem weiteren Krieg entgegenblickten. Etwa 90% der wehrf??higen M??nner wurden in der Kriegszeit in Menden eingezogen und die Frauen zum Arbeitsdienst verpflichtet<sub>20</sub>. Schon 15-16-J??hrige wurden an Flakgesch??tzen in der Umgebung eingeteilt, um die Heimat zu sch??tzen<sub>20</sub>. <br><br>" +
        "1943 wurde Menden dann Opfer der M??hnekatastrophe, in der die M??hnetalsperre gesprengt wurde und das aufgestaute Wasser ungehindert das Ruhrtal ??berschwemmte. Bis nach Fr??ndenberg waren Sch??den an Elektrik und Technik zu verzeichnen<sub>21</sub>. <br><br>" +
        "Im M??rz 1945 wurde Menden dann von amerikanischen Alliierten besetzt. Es gab zwar Kapitulations??berlegungen vom B??rgermeister und seinen Beigeordneten, welche aber nie durchgef??hrt werden konnte, aus Angst vor der Racheorganistation ???Werwolf???, die die Kapitulation verhindern sollte. Schlie??lich hissten allerdings Privatpersonen eine wei??e Fahne an der Vinzenzkirche und schlie??lich trafen die Alliierten ein. Menden wurde sowohl von Ihnen als auch von den deutschen Artilleriebesch??ssen nur mild getroffen, obwohl die befreiten Kriegsgefangenen Gesch??fte und Lager pl??nderten<sub>22</sub>.")
});
naziDenkmal.add(naziDenkmal1)
naziDenkmal.add(naziDenkmal2)


const caritas1 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Arrow);
caritas1.position.set(700, 0, -3000);
caritas1.addEventListener('click', function () {
    viewer.setPanorama(zone);
});
const caritas2 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Arrow);
caritas2.position.set(0, 200, 3000);
caritas2.addEventListener('click', function () {
    viewer.setPanorama(turm);
});
const caritas3 = new PANOLENS.Infospot(230, PANOLENS.DataImage.Info);
caritas3.position.set(3000, 0, 500);
caritas3.addEventListener('click', function () {
    showInformation("Die Frauenbewegung in Menden", "Die Frauen waren in der Geschichte schon immer benachteiligt, in der Gesellschaft und auf dem Arbeitsmarkt. In der Geschichte in Menden gab es aber dagegen eine Frauenbewegung, die sich f??r Selbstbestimmung und Gleichheit einsetzten.<br><br>" +
        "Seit dem 19. Jahrhundert gibt es in Deutschland gro??e Frauenbewegungen, die mehr Rechte, Freiheit und Gleichheit f??r Frauen fordert. Aber auch schon davor fordern einzelne Gruppen von Frauen mehr Rechte. Dabei gibt es zwei verschiedene Frauenbewegung in Menden: die b??rgerliche und die proletarische Frauenbewegung, ihre Ziele waren aber gr????tenteils gleich. Proletarier waren f??r gleichen Lohn und h??herer Positionen im Arbeitsmarkt, die B??rger f??r besser Bildung und Chancengleichheit. Aber nicht nur die Frauenbewegungen sorgten f??r mehr Rechte, auch der 1. Und 2. Weltkrieg, in denen viele Frauen in Fabriken arbeiten mussten, da die M??nner an der Front waren brachte ihnen mehr Gleichheit.<sub>3</sub>")
});
caritas.add(caritas1)
caritas.add(caritas2)
caritas.add(caritas3)


const turm1 = new PANOLENS.Infospot(150, PANOLENS.DataImage.Arrow);
turm1.position.set(-2000, -100, 1000);
turm1.addEventListener('click', function () {
    viewer.setPanorama(kirche);
});
const turm2 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Arrow);
turm2.position.set(-1100, -100, -3000);
turm2.addEventListener('click', function () {
    viewer.setPanorama(caritas);
});
const turm3 = new PANOLENS.Infospot(230, PANOLENS.DataImage.Info);
turm3.position.set(3000, 1000, -500);
turm3.addEventListener('click', function () {
    showInformation("Die Stadtbr??nde in Menden", "In der Stadt Menden gab es in den vergangenen Jahrhunderten mehrere Stadtbr??nde. Die meisten und relevantesten der Br??nde fanden im sp??ten Anfang bis Mitte des 17. Jahrhunderts statt.<br><br>" +
        "Im August des Jahres 1637 wurde die Stadt Menden das erste Mal Opfer eines Stadtbrandes. Neben 80 Wohnh??usern wurden auch der Kirchturm, das Rathaus und die Schule zerst??rt. Durch den nebenbei tobenden 30-j??hrigen Krieg verz??gerten sich die Wiederaufbauarbeiten der zerst??rten und verbrannte H??user. Erst nach dem Frieden von M??nster und Osnabr??ck 1648 kamen die Wiederaufbauarbeiten in Menden in Schwung.<br><br>" +
        "Nur vier Jahre sp??ter 1652 kam es zum n??chsten gro??en Brand in der Stadt. Hier zeigte das Feuer keine Gnade und zerst??rte fast alles. ???Nur 10 H??user???<sub>14</sub> sollen ??briggeblieben sein. Die Schule wurden ein weiteres Mal zerst??rt und mit ihr das Rathaus, Hospital und die Stadttore. Zu dem brannte das Stadt- und das Pfarrarchiv und mit ihnen fast alle Aufzeichnungen, die es vor dem Jahr 1652 gab, ab. Um den Schaden zu bew??ltigen, erhielt die Stadt Menden Hilfe von au??en, in Form von Geld und Korn. Au??erdem erlie??en die Landesherren f??r zwei Jahre die Hofpacht und sonstige Abgaben.<br><br>" +
        "Im M??rz des Jahres 1663 schlugen zum dritten Mal die Feueralarmglocken. In einem Bericht des B??rgermeisters, in dem er die Ereignisse schildert, steht das ???die gantze Stadt???<sub>15</sub> erneut zerst??rt wurde, au??er erneut ???10 H??user???<sub>15</sub>. Wie nach dem letzten Brand von 1652 konnte Menden keine Gelder f??r die Reparatur aufbringen und musste wieder um Hilfe von au??en bitten. Die Stadt bekam erneut Hilfe, aber diese mal nur unter den Bedingungen, dass sie jedes Haus aus Ziegeln bauen sollen und L??schwerkzeuge wie Eimer in jedem Haus bereitstehen hatten. Seitdem hatte die Stadt Menden keinen Gro??brand mehr, nur noch kleine H??userbr??nde, die nicht ??bergreifen konnten.")
});
turm.add(turm1)
turm.add(turm2)
turm.add(turm3)


const muehle1 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Arrow);
muehle1.position.set(100, 0, 3000);
muehle1.addEventListener('click', function () {
    viewer.setPanorama(marktplatz);
});
const muehle2 = new PANOLENS.Infospot(130, PANOLENS.DataImage.Arrow);
muehle2.position.set(-900, 0, 1500);
muehle2.addEventListener('click', function () {
    viewer.setPanorama(neuesRathaus);
});
const muehle3 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Arrow);
muehle3.position.set(250, -50, -3000);
muehle3.addEventListener('click', function () {
    viewer.setPanorama(archiv);
});
const muehle4 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Info);
muehle4.position.set(3000, 0, 0);
muehle4.addEventListener('click', function () {
    showInformation("Industrialisierung", "Zur Zeit der Industrialisierung haben sich in Menden viele neue Produktionszweige und Produkte* gebildet. Bekannt war Menden dabei vor allem f??r das Handwerk und die Metallfirmen.*<br><br>" +
        "Ein wichtiges Zeichen f??r die wirtschaftliche Entwicklung zur Zeit der Industrialisierung sind die M??hlen<sub>8</sub>, die in Menden standen. Dort wurden verschiedenste G??ter hergestellt, von der ??lm??hle an der H??nne in der N??he der Kirche<sub>8,9</sub>, ??ber die N??hnadelm??hle zwischen Lendringsen und Menden an einem Ausl??ufer der H??nne<sub>8,9</sub> bis zur Papierm??hle hinter Oberr??dinghausen<sub>8,9</sub>, die auch heute noch steht. Zur Erkl??rung: Fr??her wurden die meisten Industriegeb??ude, die als Funktion Zerkleinerung oder teilweise Umformung hatten, als M??hlen10. Die ???kurf??rstliche Schlossm??hle???, die tats??chlich Korn zu Mehl gemahlen hat, steht gegen??ber dem alten Schloss in der N??he des neuen Rathauses<sub>8,9</sub>, das M??hlrad steht heute noch hinter dem M??hlengeb??ude.<br><br>" +
        "W??hrend der Weltwirtschaftskrise von 1929 waren auch die Mendener Betriebe stark gesch??digt und brauchten mehrere Jahre, um Massenarbeitslosigkeit und Verarmung zumindest teilweise hinter sich zu lassen. Erst im Sp??tsommer 1932 fing der Mendener Einzelhandel an, sich zu erholen, was in den Jahren 1933/34 auch auf andere Industriebereiche ??berschwappte, auch wenn Auftr??ge nur aus dem Inland kamen und ausl??ndische Kunden wegen Schutzz??llen und Boykotten wegfielen. Die Aufr??stung in Deutschland trug im weiteren Verlauf ma??geblich an der Erholung der Mendener Wirtschaft bei<sub>11</sub>.")
});
muehle.add(muehle1)
muehle.add(muehle2)
muehle.add(muehle3)
muehle.add(muehle4)


const neuesRathaus1 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Arrow);
neuesRathaus1.position.set(-3000, 0, -100);
neuesRathaus1.addEventListener('click', function () {
    viewer.setPanorama(muehle);
});
const neuesRathaus2 = new PANOLENS.Infospot(180, PANOLENS.DataImage.Info);
neuesRathaus2.position.set(-2500, 0, 800);
neuesRathaus2.addEventListener('click', function () {
    showInformation("Stadtteile Mendens", "W??hrend es heutzutage in Menden 23 Stadtteile gibt, zum Beispiel gr????ere Stadtteile wie Halingen, Oesbern oder Osts??mmern, aber auch kleine wie der Heimkerweg oder Asbeck<sub>28</sub>, sah es in der Geschichte schon ganz anders aus. <br><br>" +
        "Um das Jahr 1100 herum umfasste Menden die Stadtteile Freundenberg (Heutzutage vermutlich Fr??ndenberg), S??mmern, Halingen, Holthause, Schwitten, Brockhausen, Wingberen (Wimbern), Echthausen, Oesbern und Boinghausen (Boingsen)<sub>27</sub>. Damit lag Menden weiter nord??stlich als es heute ist.<br><br>" +
        "Wenige Jahrhunderte sp??ter war das Amt Menden, von Kriegen zwischen benachbarten F??rsten gepr??gt, mit einigen Ritterschaften ausgestattet, die bestimmte Bereiche sch??tzten. So gab es das Haus R??dinghausen, welche in Lendringsen angesiedelt war und auch heute noch existiert, so wie das Haus Kotten in B??sperde, H??dinghausen in H??ingsen, S??mmern, Lahr und Dahlhausen, welches ebenfalls in der N??he von Halingen liegt. So kann man hier schon erkennen, dass sich Menden weiter nach S??dwesten ausgebreitet hat und sich etwas der heutigen Form angen??hert hat<sub>27</sub>.<br><br>" +
        "Erneuten, bedeutenden Wandel gab es im Jahre 1975. Zum 01.01 wurden die eigenst??ndigen Gemeinden Lendringsen, B??sperde, Asbeck so wie einige andere Gemeinden in die Stadt Menden eingegliedert, was einem Gebiets??nderungsvertrages der Stadt Menden und der Gemeinden des Amtes Mendens zu Grunde lag.<br><br>" +
        "Mit dieser Vereinigung wurde die neue Stadt Menden gegr??ndet. Dabei wurde das Wappen der Stadt Menden, einen wei??en Turm mit gelben Falltor auf schwarzem Grund, ??bernommen. Dieses Siegel ist bis in das 14. Jahrhundert zur??ckverfolgbar<sub>30</sub>. Die einzelnen Wappen der meisten Stadtteile h??ngen in der Eingangshalle des neuen Rathauses.")
});
neuesRathaus.add(neuesRathaus1)
neuesRathaus.add(neuesRathaus2)


const archiv1 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Arrow);
archiv1.position.set(1000, 200, -2500);
archiv1.addEventListener('click', function () {
    viewer.setPanorama(muehle);
});
const archiv2 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Arrow);
archiv2.position.set(-700, 200, -2500);
archiv2.addEventListener('click', function () {
    viewer.setPanorama(amtsgericht);
});
const archiv3 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Info);
archiv3.position.set(3000, 200, -180);
archiv3.addEventListener('click', function () {
    showInformation("Die Geschichte des Archives in Menden", "Das Mendener Stadtarchiv hat eine lange Geschichte. <br><br>" +
        "Die ??lteste Urkunde im Archiv ist die Stadtrechturkunde, die 1276 verliehen wurden. Dem Archiv wurde in den Jahrhunderten aber wenig Beachtung geschenkt und da die Archivarien eine lange Zeit im Rathaus deponiert wurden, fielen sie dem Stadtbrand 1652 zum Opfer.<br><br>" +
        "Im 19. Jahrhundert hatte das Stadtarchiv noch immer kein eigenes Zimmer und bewahrte nur k??nigliche und wertvolle Akten auf. Diese Daten waren allerdings zun??chst unbeaufsichtigt, da es kein Archivar gab. Sie wurden lediglich von einem Herrn Dr. Kranz geordnet, der aber zeitnah verstarb. J??hrlich sendete er ein Berichterstattungschreiben an die Stadt, in dem er ??ber die Vorg??nge und neue Archivalien informierten, die im Archivar eingetroffen waren.<br><br>" +
        "In einer Versammlung in der Musikschule im Jahre 1937 wurde ??ber den Bericht aus dem Archiv des Jahres debattiert, denn es gab zu viele Archivalien und der Platz reichte nicht mehr aus. Man beschloss daraufhin, ein eigenes Zimmer im alten Rathaus f??r das Stadtarchiv freizumachen und eine Person ehrenamtlich zu beauftragen, die Quellen zu besichtigen und dies einzuordnen. Vor allem die Quellen, die vor 1815 geschrieben wurden, erhielten eine hohe Priorit??t.<br><br>" +
        "Das Archiv im alten Rathaus erhielt noch zwei weiter R??ume in den 1950er Jahren, da der Platz nicht mehr reichte.<sub>1</sub><br><br>" +
        "Erst in j??ngster Zeit zog das Archiv in das Geb??ude an der Bushaltestelle Bahnhof, in dem es auch jetzt stationiert ist. Problem hierbei ist aber immer noch, dass der Platz fehlt, weil es einfach zu viele Archivarien gibt.<sub>2</sub>")
});
archiv.add(archiv1)
archiv.add(archiv2)
archiv.add(archiv3)


const amtsgericht1 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Arrow);
amtsgericht1.position.set(-2500, -250, 1000);
amtsgericht1.addEventListener('click', function () {
    viewer.setPanorama(archiv);
});
const amtsgericht2 = new PANOLENS.Infospot(170, PANOLENS.DataImage.Info);
amtsgericht2.position.set(2000, 0, 1000);
amtsgericht2.addEventListener('click', function () {
    showInformation("Gerichtsbarkeit", "Schon im dreizehnten Jahrhundert gibt es in Menden, damals noch eine Pfarrei, Gerichte, die f??r Recht und Ordnung sorgen. So gab es ein Hofesgericht, ein Freigericht, ein Gogericht, ein Vogteigericht, so wie ein Sendgericht. Alle diese Gerichte hatten unterschiedliche Zust??ndigkeiten und Auftraggeber. <br><br>" +
        "Das Hofesgericht zum Beispiel hatte nur Bedeutung, wenn es Streitigkeiten mit dem erzbisch??flichen Hof in Menden ging. Das Freigericht, sp??ter auch Femegericht genannt, war f??r schwere Straftaten zust??ndig, die meist den Tod nach sich zogen. Das Gogericht war das Gericht f??r niedere Straftaten und Vergehen gegen das Gesetz, welche leichtere Strafen nach sich zog. Sp??ter entwickelte sich das Gogericht zum allgemeinen Landgericht, welches auch schwere Straftaten behandelte. ??ber das Vogteigericht ist kaum etwas bekannt und das Sendgericht war f??r kirchliche Rechtsprechung zust??ndig.<br><br>" +
        "Als Menden im 13. Jahrhundert schlie??lich zur Stadt ernannt wurde, bekam es ein eigenes Stadtgericht, welches vom B??rgermeister und Ratsmitgliedern gef??hrt wurde. Es kam bei innerst??dtischen Straftaten geringeren Ausma??es zum Einsatz und regelte so Zivilsachen bis hinunter zu Beleidigungen. ??ber die Zeit ??bernahm das Gericht aber immer mehr Aufgaben von ??berst??dtischen Gerichten, was sanktioniert wurde, so dass das Gericht zum Schluss kaum noch Aufgaben innehatte.<br><br>" +
        "Die Politik in Menden wurde seit der Stadterhebung durch einen B??rgermeister und den Stadtrat vertreten. Diese wurden j??hrlich gew??hlt und bestanden zumeist aus rechtskundigen B??rgern, da der Rat auch gesetzgebende/ gerichtliche Macht innehatte.<sub>4</sub><br><br>" +
        "Mit der preu??ischen Verwaltung ab 1816 entstand die ???revidierte St??dteordnung???<sub>1</sub>, welche dem Rat weniger Rechte zusprach und so die bislang ausgepr??gten Selbstverwaltung stoppte. Unter anderem ??bertrug sie einige Rechte der St??dte zur??ck auf den K??nig ??bertrugen und auch Regeln f??r Wahlen vorschrieb, die alles andere als gleich waren: So durften nur noch wenige B??rger gew??hlt werden, da sie Grundbesitzer sein mussten oder ein Jahreseinkommen von mindestens 200 Reichstalern<sub>5</sub> bekommen mussten.<br><br>" +
        "Schlie??lich entstand 1856 das Dreiklassenwahlrecht. In diesem wurden alle M??nner in ???Abteilungen???<sub>6</sub> eingeteilt, die nach Steuerleistungen aufgeteilt waren und unterschiedliche Stimmgewichtungen hatten.<sub>6</sub>")
});
amtsgericht.add(amtsgericht1)
amtsgericht.add(amtsgericht2)

const viewer = new PANOLENS.Viewer({
    container: panoImage,
    controlBar: false,
    autoHideInfospot: false,
});

//Query
const params = new URLSearchParams(window.location.search);
const page = params.get("page");

switch (page) {
    case "altes_rathaus": viewer.setPanorama(altestRathaus); break;
    case "kirche": viewer.setPanorama(kirche); break;
    case "museum": viewer.setPanorama(museum); break;
    case "aufgang": viewer.setPanorama(aufgang); break;
    case "krankenhaus": viewer.setPanorama(krankenhaus); break;
    case "kapelle": viewer.setPanorama(kapelle); break;
    case "rhodenburg": viewer.setPanorama(rhodenburg); break;
    case "zone": viewer.setPanorama(zone); break;
    case "denkmal": viewer.setPanorama(naziDenkmal); break;
    case "caritas": viewer.setPanorama(caritas); break;
    case "turm": viewer.setPanorama(turm); break;
    case "muehle": viewer.setPanorama(muehle); break;
    case "neues_rathaus": viewer.setPanorama(neuesRathaus); break;
    case "archiv": viewer.setPanorama(archiv); break;
    case "amtsgericht": viewer.setPanorama(amtsgericht); break;
}

viewer.add(marktplatz, altestRathaus, kirche, museum, aufgang, krankenhaus, kapelle, rhodenburg, zone, naziDenkmal, caritas, turm, muehle, neuesRathaus, archiv, amtsgericht);
panoImage.style.backgroundColor = "#151515"