# Template with react-bootstrap

A template built with react-bootstrap.

## Installation

+ git clone https://github.com/ianmharvey/react-bootstrap.git
+ chdir into this project's root directory `chdir react-bootstrap`
+ Run `npm install --save` to install the app's dependencies

## Usage

+ In console window type `chdir react-bootstrap` 
+ Run `npm start`
+ Access the running app in a browser at `localhost:xxxx`
+ Run `yarn build` to build production version. If `yarn` is not installed then run the following command `npm install --global yarn`.
+ Once the `build` process has completed you can view it locally with the following command `serve -s build`. If this step has not been done before then you may need to run this once `npm install -g serve`.

## Using .htacess

The .htaccess file in the `/public` directory prevents users from getting a 404 error when attempting to load a url path directly, or page reload. This is not a problem when running localhost, but the issue occurs on the external web server running a production build.

## Demo

View demo at https://react-bootstrap.ianharvey.ca/
