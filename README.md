# Similar Home Assignment

In this assignment, you are asked to create a web application that visualizes data
using two different components: A time-series graph and a table.

Approach this project as you would for a large-scale implementation. Pay
meticulous attention to the architectural layers and ensure the code is scalable
and of high quality. Feel free to incorporate comments, particularly on edge cases
that you might not handle but believe deserve attention.

## Table of Contents

- [Installation](#installation)
- [Justifications](#Justifications)
- [Usage](#usage)
- [Documentation](#documentation)
- [Contact](#contact)

## Installation

### Backend

Before proceeding, ensure Docker is installed on your environment. The server and MySQL database run within Docker containers.

To set up the server and database, execute the `init-project.sh` script located in the project directory using the command:

```sh
sh init-project.sh
```

that doing this next steps:

1. npm install to backend.
2. run docker-compose up.

Docker containers:

- mysql port "3306"
- adminer port "9090"
- backend port "8080"

if from some reason the script wont work.

### Frontend

Please run `npm i` to install the node_modules packages, and then run `npm start`.

To learn React, check out the [React documentation](https://reactjs.org/).

## Justifications

### Designing Query to Fetch and Serve Data:

1. Use of Indexes: Design the database schema with appropriate indexes on columns frequently used in queries, in our case for example `date` column can be index. This helps speed up data retrieval.

2. Use of Views: Views to pre-calculate and store aggregated metrics. This reduces the computational load during query execution.

### Technologies for Storing and Serving Data:

1. Distributed Databases: Consider using distributed databases for horizontally scalable storage of large datasets such as partitioning.

2. In-Memory Caching: Implement in-memory caching solutions like Redis to cache frequently accessed data and reduce latency in serving requests.

### Solutions for Client-Side Table Display:

1. Pagination: Implement server-side pagination to limit the number of records returned per page, reducing the amount of data transferred over the network and improving performance.

2. Client-Side Filtering and Sorting: Allow users to interactively filter and sort data without needing to fetch additional data from the server. for example I have implemented date range filter for this assignment.

## Usage

returning categories using date range and present an aggregated sum result in graph and table.

## Documentation

[API Documentation](http://localhost:8080/api-docs) - The server must be up for this documentation.

## Contact

For questions, feedback, or support, contact [Amit Shwartz](shwartzamit17@email.com).
