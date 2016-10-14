[![Stories in Ready](https://badge.waffle.io/geosolutions-it/csi-sira.png?label=ready&title=Ready)](https://waffle.io/geosolutions-it/csi-sira)
CSI-SIRA
==========

Quick Start
------------

Clone the repository with the --recursive option to automatically clone submodules:

`git clone --recursive https://github.com/geosolutions-it/csi-sira.git`

Install NodeJS, if needed, from [here](https://nodejs.org/en/blog/release/v0.12.7/).

Start the development application locally:

`npm install`

`npm start`

The application runs at `http://localhost:8081` afterwards.

To have backend services working, you should do a full build with:

`mvn clean install`

and deploy the generated war (web/target/sira.war) into a Tomcat container.

You also need to:
 - create a folder for configuration files (e.g. sira_config)
 - copy the aua.properties file from root folder of the source code to the configuration folder
 - add a configuration parameter to Tomcat setenv file with the configuration folder (-Dqueryform.config.dir= path to sira-config folder)

The internal proxy is configured to look for backend services on http://localhost:8080/sira, if you change the Tomcat port, please update the devServer -> proxy section in webpack.config.js

Read more on the [wiki](https://github.com/geosolutions-it/csi-sira/wiki).
