
## Running

- To run the server 'npm run start'

- To run the test 'npm run test'

- To develop, it require nodemon installed globally then run 'npm run dev'<br/>
or you can change 'script.dev' in package.json accordingly to execute file 'src/Server.js'

## Assumption 
- When dental clinic & vet clinic have same name,
the api will return both

- API will return clinic data with following property :<br/>
 Dental clinic contain property name, stateName, availability<br/>
 Vet clinic contain property clinicName, stateCode, opening<br/>

- API search filter 'name' will search clinic start with, end with, contain with the desired name (NOT case sensitive).<br/>
i.e: 'watch' will match watchFoo, fooWatchfoo, fooWatch

- API search filter ’state’ will work for state name and state code<br/>
i.e: state ‘CA’ will return<br/>
dental clinic containing stateName ‘California’ and<br/>
vet clinic containing stateCode ‘CA’

- API search filter 'availability' must in format 'HH:MM' 00:00 to 23.59

- Developer familiar with JOI validation <a href="https://github.com/sideway/joi">(ref)</a>
to know what arguments to pass in 'Service' function (Perhaps this is wrong assumption)

## Available API
url:<br/>
GET /rest/public/clinics<br/>

query params:<br/>
name (optional)<br/>
search clinic by name<br/>

state (optional)<br/>
search clinic by stateName or stateCode<br/>

availability (optional)<br/>
search clinic by availability<br/>