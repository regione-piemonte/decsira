#!/bin/bash
set -e

cd frontend
npm install
npm run compile

cd ..
mvn clean install -DskipTests
