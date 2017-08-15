// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBcM0rN2upMyimqtrXNS72wU-dr6H_wItw",
    authDomain: "pesacheck.firebaseapp.com",
    databaseURL: "https://pesacheck.firebaseio.com",
    projectId: "pesacheck",
    storageBucket: "pesacheck.appspot.com",
    messagingSenderId: "430543961576"
  }
};
