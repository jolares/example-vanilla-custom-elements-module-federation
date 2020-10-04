# Custom Elements Module Federation

## About

**Module Federation** allows us to reference program parts not yet known at compile time. This project leverages
the Module Federation concept, where these program parts are self-compiled micro-frontends. For this, Webpack 5
is used to build the different microfront-ends, each consisting of a standalone application implemented as
custom-elements.

The different Micro-frontends overcome dependency duplication issues by sharing common libraries with each other.

Each micro-frontend can be build, deployed, and tested in isolation from each other.


## Scaffolding

A shell application loads the individual, separately built and provided microfrontends as needed.

## Building the Project

1. Build the shell app: `npm run build:shell`
2. Build the remote micro-frontend apps:
    <br>`npm run build:{MICRO_FRONTEND_NAME}`>
    <br>For instance, to build micro-frontend-1, run: `npm run build:mf1`

* To build all micro-frontend apps, run: `npm run build:all`

## Running the Project

1. Run the shell app: `npm run serve:dist:shell`
2. Build the remote micro-frontend apps:
    <br>`npm run serve:dist:{MICRO_FRONTEND_NAME}`>
    <br>For instance, to build micro-frontend-1, run: `npm run serve:dist:mf1`

* To serve all micro-frontend apps from /dist, run: `npm run serve:all`
* To run all micro-frontend app using the webpack-dev-server, run:
   <br>`npm run serve:dist:all`


## References

1. [The Microfrontend Revolution: Module Federation in Webpack 5](https://www.angulararchitects.io/aktuelles/the-microfrontend-revolution-module-federation-in-webpack-5/)
2. [Using Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
3. [Webpack](https://webpack.js.org/)
4. [TypeScript Lang](https://www.typescriptlang.org/)