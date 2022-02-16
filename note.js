// steps
/*
SETUP
Nodejs(check version => node --version): at nodejs website, you want to download the LTS option.
 
react developer tools extension: we search for it on google and install

npm(node package manager) commands: a) "npm init"(to create package.json which serves 
as a manifest file that lists all of the depenedencies that we are using. 
we wont have to do this cos react would have done it for us), 
b) "npm install <name of the package> --save"(this installs a package/dependency, 
save and adds it to the package.json file), 
c) "npm install <name of the package> -g"(installs package globally on your machine to use 
anywhere), 
d) "npm install <name of the package> --save-dev"(this says that the package should be used 
only in development)

when we clone or fork a react project repo, we are able to run "npm install" to get all the 
packages that has already been stored in the package.json file

vscode set up and extensions:
- prettier extension, then in the setting, we look for formatting and check the boxes,
'format on save' and 'format on paste'
- we need to set up the emmet to work with react. in our settings, we need open 
the json file of our settings which will be at the upper right side of our 
vscode(just before the split editor icon) after the setting is open.
we want to add this code to it:
"emmet.includeLanguages": {
		"javascript": "javascriptreact"
	},
- next, we have the extension:
ES7+ React/Redux/React-Native snippets. this extension saves us on the boilerplate. 
typing rafce will create an arrow function, 
rfce will create a regular function. N/B: the 'e' adds the export line code to the boilerplate 
*/

/*
CREATE-REACT-APP
it uses webpack and babel. BABEL is a transpiler that makes our js backward compabitble. 
this means that it transpiles new js features to ES5 so that it can run on older browsers.
WEBPACK is a module bundler. it bundles our resources and watches for changes, 
then running the babel transpiler. we set up an entry point(js file) for our app where 
we must have imported our different js files, it then bundles it into a file which 
we will name in the output(we do not have to worry about all of this since create-react-app 
already handles this). 

to install, we use the command - 'npx create-react-app name-of-the-app'.
this will produce a lot of files. we have the index.html file in the public folder 
but most of our work will be done in the src folder.

in the source folder, we have the App.js where all our components will meet. 
there's is app.css for our css. we have the index.js where we will write 
the code for our application
*/

/*
BASICS
we will start by deleting all the files in the src folder except the index.js. 
we will also remove all the contents of the index.js file.
- we want to import react from the react dependencies.

- we want to write our component and it has to start our function name with capital letter. 
it is technically called JSX. to see changes made to our code on the browser, we open our
integrated terminal and run the command, 'npm start'. a note of warning though, if your system
is slow, remove the auto-save feature before running the command. another important thing to
note is that you do not need to run 'git init' since git has already been initialized by
default. you skip this step and start from 'git add'.

- we render using the syntax - ReactDOM.render(<SayHi />, document.getElementById("root"));
syntax must be closed(either in a tag or self-closing)
*/
