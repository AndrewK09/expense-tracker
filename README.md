# Expense-tracker

Expense-Tracker is an application that keeps track of your expenses and displays all the expenses in a chart as well as an interactive pie graph. 

### Prerequisites

Beyond the npm modules in package.json, you should have the following installed:

- Postgress v11.4 (LTS as of August 2019) or higher 

### Initial Config

After cloning the repository:

1. Replace the postgres URI in config/dev.js

2. Load the schema located in database/db.sql:
```
  psql -f database/schema.sql -p 5432 -U <user> <database>
```

### Installing
Install dependencies:

```
npm install
```

To create a development build:

```
npm run build
```

To create a production build:

```
npm run production
```

To start the server:

```
npm run start
```

To start the server and continuously build webpack:

```
npm run dev
```

## Built With
* [React] (https://reactjs.org/) - The web framework used
* [Redux] (https://redux.js.org/) - For state management
* [Postgres] (https://www.postgresql.org/) - The relational database used
* [Material UI] (https://material-ui.com/) - The design framework
* [React ChartJs 2] (https://www.npmjs.com/package/react-chartjs-2) - Used to generate pie graph 





