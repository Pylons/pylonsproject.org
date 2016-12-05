# pylonsproject.org
The future home of the Pylons Project marketing website.

This website shall describe the Pylons Project organization and its projects.

Examples include [Pallets](https://www.palletsprojects.com/) and its projects.

See [Issue #7](https://github.com/Pylons/pylonsproject.org/issues/7) for the proposed structure of this website.

## Environment

At the bare minimum you'll need the following for doing development:

- NodeJS with npm

## Installing

Assuming you have all the recommended tools listed above installed:

### 1. Clone the project
```
  $ git clone git@github.com:Pylons/pylonsproject.org.git
  $ cd pylonsproject.org
```

### 2. Install package dependencies
```
  $ npm install
```

### 3. Run the project

If you are in development mode and need hot reload and assets compiling run:
```
  $ npm run dev
```

This will let you view the local site at http://localhost:8080/

If you just want to output a build run
```
  $ npm run build
```

And if you want a new dist optimized for production run
```
  $ npm run dist
```
