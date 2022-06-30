# DECSIRA
==========

# Descrizione del prodotto
------
Il Sistema Conoscenze Ambientali è una piattaforma di fruizione delle conoscenze alfanumeriche e geografiche prodotte nel contesto del SIRA Piemonte (Sistema Informativo Ambientale della Regione Piemonte). Si configura come una rete di cooperazione tra soggetti produttori e/o detentori di informazioni di interesse ambientale (Regione, Province e ARPA) e nasce allo scopo di supportare lo sviluppo delle conoscenze ambientali per le attività di: governo e pianificazione partecipata; promozione della competitività del territorio; sensibilizzazione e coinvolgimento (empowerment); accessibilità alle informazioni pubbliche.

Per ogni dato viene resa disponibile:
      - la descrizione sintetica del singolo dato/dataset e vista tematica;
      - la scheda metadati pubblicata sul Geoportale dell’ente fornitore e/o distributore del dato (servizio CSW);

con le specifiche funzioni di consultazione quali:

      - semplice consultazione su Mappa dei dati geografici (servizi WMS)
      - consultazione di informazioni di dettaglio sui dataset basate su ricerche alfanumeriche e/o geografiche sui dati che restituiscono viste di tipo reportistico e singole schede di dettaglio sugli oggetti (servizi WFS anche di tipo complex feature)
      - tematizzazione di indicatori: numero delle classi statistiche, colori tematizzazione, range delle classi, tipo di classificazione statistica da utilizzare per la tematizzazione sono configurabili da utente (usa servizi WFS)
      - accesso ad allegati tramite url a servizi di archiviazione documentale
      - I dati della vista report - dati di sintesi/elenco risultati della ricerca - sono configurabili da utente ed esportabili in formato csv e/o formato vettoriale;
      - la scheda di dettaglio è esportabile in formato pdf

Tutti i dati messi a disposizione nella piattaforma sono esposti e/o usano servizi di interoperabilità standard OGC (Open Spatial Consortium) come previsto dalla Direttiva INSPIRE.
--------

# Getting Started
2022-03-16 (6.4.0.)

# Copyrights
 © Copyright Regione Piemonte – 2022
 
# License 
SPDX-License-Identifier: GPL-2.0


# Getting Started
------
To start, you need to download the application source code and install some tools. Here are the steps to follow:
 
 * Clone the repository with the --recursive option to automatically clone submodules:

    `git clone --recursive https://github.com/regione-piemonte/decsira.git

 * Ensure that you have **NodeJS** version >= 12 and an NPM version >= 6 installed. A compatible version can be downloaded from [here](https://nodejs.org/en/blog/release/v12.16.1/). You can check the current versions using the following commands:

    `node -v`

    `npm -v`

 * Ensure that you have Java JDK >=1.8 installed. A compatible version can be downloaded from [here](https://www.oracle.com/it/java/technologies/javase/javase-jdk8-downloads.html).You can check the current versions using the following command:

    `java -version`

    `javac -version`

 * Ensure that you have Maven >= 3.6 installed. A compatible version can be downloaded from [here](https://archive.apache.org/dist/maven/maven-3/3.6.3/binaries/).You can check the current versions using the following commands:

    `mvn -v`

## Building the application
------
To build the application you can run the build script (**build_web.sh**) from a shell or command prompt:

```sh
./build_web.sh <environment>
```

The <environment> parameter allows building with different configurations. The available environments are:
 * *produzione Accesso libero*: CSI-Piemonte production environment (https://conoscenzaambientale.sistemapiemonte.it/decsiraweb/map.html#/)  * *produzione Accesso Autenticato*: CSI-Piemonte production environment (https://servizi.regione.piemonte.it/catalogo/sistema-conoscenze-ambientali)
 
New environments can be created easily editing the 
frontend/web/pom.xml file, in particular the **profiles** section.

The script builds both the frontend (using NPM) and the backend (using Maven) and produces a Java Web Archive file (war) that can be run on a Java Web Container (e.g. Apache Tomcat).

The final war is available as frontend/web/target/decsiraweb.war.

##  The build_web.sh script
The script content is the following:

```sh
#!/bin/bash
set -e

cd frontend

# install frontend dependencies
npm install
# compile the frontend javascript and css bundles
npm run compile

cd ..
# compile java backend services and create the final war
# using the $1 configuration (demo or produzione)
mvn clean install -Pweb,$1
```

##  Deploying the application
The application can be deployed by simply copying the war in the Tomcat webapps folder, and eventually restarting Tomcat. After the deploy, the application will be available as:

    http://<host>:<port>/decsiraweb/

Any Tomcat version >= 7 should work. A compatible version can be downloaded [here](https://tomcat.apache.org/download-70.cgi) 

##  Starting a local development environment
To develop the application locally, you will need:

 * a running backend
 * a running GeoServer
 * a text editor or IDE (we suggest Visual Studio Code)

Start the development application locally:

`cd frontend`

`npm install`

`npm start`

The application runs at `http://localhost:8082` afterwards.

##  Connecting to a running backend
You can either use an already deployed backend (e.g. our dev-test instance) or deploy a local backend on Tomcat (as we have seen in the *Deploying the application* section).

To switch the backend to be used, you can edit the frontend/webpack.config.js file, changing all the target urls to point to the desired host/port (use http://localhost:8080 to switch to the local backend):

```javascript
...
[{
    ...
}, {
    path: '/proxy',
    pathRewrite: {'^/proxy': '/decsiraweb/proxy'},
    host: "localhost",
    target: "http://decsira-dev.geo-solutions.it/"
}, {
    path: '/services/metadata',
    pathRewrite: {'^/services/metadata': '/decsiraweb/services/metadata'},
    host: "localhost",
    target: "http://decsira-dev.geo-solutions.it"
}, {
    path: '/services/iride',
    pathRewrite: {'^/services/iride': '/decsiraweb/services/iride'},
    host: "localhost",
    target: "http://decsira-dev.geo-solutions.it"
}, {
    path: '/decsiraweb/services/queryformconfig',
    host: "localhost",
    target: "http://decsira-dev.geo-solutions.it"
}, {
    path: '/geoserver/ows',
    host: "localhost",
    target: "http://decsira-dev.geo-solutions.it"
}, {
    path: '/territoriosliv1sisp',
    host: "localhost",
    target: "https://tst-conoscenzaambientale.sistemapiemonte.it"
}]
```
Remember to restart the frontend application (npm start) when you change this file.

##  Connecting to a running GeoServer

The GeoServer to be used can be configured in the frontend/localConfig.json file. Just replace all ${url...} variables with a valid URL:

```json
{
  "geoserverUrl": "${url.geoserver}/geoserver",
  "secureGeoserverUrl": "${url.secure.geoserver}/geoserver",
  ...
}
```
```

##   Ensure that your GeoServer instance has CORS enabled for your local client, so that the application requests are not blocked due to cross origin issues, or use a browser extension to simulate fake CORS headers (for example, for Chrome use can use ModHeader).
-------------


