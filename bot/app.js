function copiarAlPortapapeles(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  }

  function numeroAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  text=["gorka","kiko","samuel","david","clemente","diego","pablo","claudio","facundo","edgar","santiago","enrique","imanol","lucas","uriel","julien","gabriel","luis","abel","jonatan","jose","blas","alvaro","agustin","gerard","sebastian","joaquin","roman","jaime","esteban","albert","ricardo","patxi","camilo","damian","adolfo","rafael","marcos","hector","javier","santos","marco","cayetano","rodrigo","francisco","flavio","juan","andoni","martin","mateo","pedro","unai","eduardo","isaac","ernesto","cristian","miquel","ruben","gonzalo","samael","mario","oscar","simon","fernando","moises","fabian","felix","adrian","paco","andres","constantino","jorge","mauricio","jairo","arturo","tiago","tomas","gerardo","sergio","borja","fabio","matias","sebastian","iker","cristobal","santiago","humberto","","ariel","luca","izan","ian","kaled","cristiano","leandro","noah","aleixo","guido","aleix","caleb","igor","eithan","ezequiel","asier","joel","silas","antolino","unai","boris","enzo","anxo","dylan","adel","sasha","dionis","ibai","enio","didac","aitor","abel","julen","aquiles","thiago","kael","tadeo","gael","eloi(oeloy)","edric","jon","dorian","iu","iren","esteve","adam","noel","aldo","dan","arnald","pol","conrad","saul","eissa","dario","leo","dante","trevor","oriol","arnau","naim","jadel","wilfrido","jeronimo","patricio","elam","batista","judas","bartolome","bautista","levi","abelardo","damaso","carmelo","adan","placido","salvador(osalva)","isidoro","tobias","koldo","abiel","genaro","rodolfo","elias","omar","josef","ovidio","livio","eros","aser","norberto","nuño","benedicto","amadeo","cirilo","bernat","eugenio","jeremias","narciso","marcelino","leopoldo","armando","timoteo","demetrio","isaias","josue","oliver","maximiliano","valentin","fausto","dionisio","maximo","ametz","tristan","alejo","adonis","benito","ulises","bernardo","raimon","gaston","adalberto","aurel","abraham","isidro","rayan","baltasar","froilan","adonai","jacinto","osvaldo","kurt","tyron","arsenio","joseba","justo","stefano","nicasio","zacarias","eladio","calixto","octavio","arseni","axel","karim"]
  apellidos=["garcia","gonzalez","rodriguez","fernandez","lopez","martinez","sanchez","perez","gomez","martin","jimenez","ruiz","hernandez","diaz","moreno","muñoz","alvarez","romero","alonso","gutierrez","navarro","torres","dominguez","vazquez","ramos","gil","ramirez","serrano","blanco","molina","morales","suarez","ortega","delgado","castro","ortiz","rubio","marin","sanz","nuñez","iglesias","medina","garrido","cortes","castillo","santos","lozano","guerrero","cano","prieto","mendez","cruz","calvo","gallego","vidal","leon","marquez","herrera","peña","flores","cabrera","campos","vega","fuentes","carrasco","diez","caballero","reyes","nieto","aguilar","pascual","santana","herrero","lorenzo","montero","hidalgo","gimenez","ibañez","ferrer","duran","santiago","benitez","mora","vicente","vargas","arias","carmona","crespo","roman","pastor","soto","saez","velasco","moya","soler","parra","esteban","bravo","gallardo","rojas"]
  correos = ["gmail.com","yahoo.es","outlook.com","hotmail.com"]
function generar(){
n = numeroAleatorio(1970, 2020);
   i= numeroAleatorio(0, text.length);
   a = numeroAleatorio(0, apellidos.length);
   c = numeroAleatorio(0, 3);
   d = numeroAleatorio(1, 5)
   v = numeroAleatorio(100, 999)
   f = numeroAleatorio(1, 30)
   texto=""
   if(d==3){
    texto = `${text[i]}${n}@${correos[c]}`
   }else if(d==2){
    texto = `${text[i]}${apellidos[a]}${v}@${correos[c]}`
   }else if(d==1){
    texto = `${apellidos[a]}${f}${text[i]}${n}@${correos[c]}`
   }else if(d==4){
    texto = `${apellidos[a]}${n}${f}@${correos[c]}`
   }else{
    texto = `${text[i]}${n}${f}@${correos[c]}`
   }
document.getElementById('generado').innerHTML=texto
  }
  