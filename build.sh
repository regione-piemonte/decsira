#!/bin/bash
set -e

cd frontend
npm install
npm run compile
npm run lint
npm test
cd ..
mvn clean install
