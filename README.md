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

The internal proxy is configured to look for backend services on http://localhost:8080/sira, if you change the Tomcat port, please update the devServer -> proxy section in webpack.config.js

Read more on the [wiki](https://github.com/geosolutions-it/csi-sira/wiki).
