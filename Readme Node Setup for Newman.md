# Node.js Setup Guide

## Prerequisites
Ensure you have the following installed before proceeding:
- **Node.js** (Recommended: Latest LTS version)  
- **npm** (Node Package Manager, comes with Node.js)

You can check your installed versions using:
```sh
node --version
npm --version
```

## Installation Steps

### 1. Initialize Node.js Project
If not already initialized, create a `package.json` file:
```sh
npm init -y
```

### 2. Install Required Dependencies
Run the following command to install necessary packages:
```sh
npm install dotenv newman newman-reporter-htmlextra
```

**Note:** During installation, you might see warnings about deprecated packages. These warnings do not necessarily affect functionality but should be noted for future updates.

### 3. Update npm (Optional but Recommended)
To upgrade npm to the latest stable version:
```sh
npm install -g npm@latest
```

### 4. Modify `package.json`
Ensure your `package.json` includes the following:

```json
{
  "dependencies": {
    "dotenv": "^x.x.x",
    "newman": "^x.x.x",
    "newman-reporter-htmlextra": "^x.x.x"
  },
  "scripts": {
    "test": "node report.js"
  }
}
```

### 5. Running the Tests
Execute the test script:
```sh
npm test
```
This will run `report.js` and execute the Newman collection tests.

## Additional Notes
- To check for packages that need funding:
  ```sh
  npm fund
  ```
- To update specific dependencies, use:
  ```sh
  npm update <package-name>
  ```
- If facing issues, try clearing the npm cache:
  ```sh
  npm cache clean --force
  ```

## Conclusion
Your Node.js setup for Newman and related dependencies is now complete. Happy testing! 🚀
