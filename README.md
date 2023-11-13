# Global Tours & Tickets Case Mobile November 2023

#### **Hello everyone** 👋
Here, information is given about the things to consider when developing the sample application.<br/>
Our expectation is that you send examples that work smoothly on Android and iOS platforms.<br/>

- **Note:** If you do not have a Mac to develop the iOS side, please specify in the description field.<br/>

#### **Email format** ✉️
After preparing your project.<br/>
You can send an e-mail to the e-mail address below by following this format.<br/>

- **Mail:** toursandticketsparis@gmail.com
- **Title:** GtCaseMobileNov2023 - Name Surname
- **Description:**
    - **Project Repository Url:**
    - **Note:**

<br/>
Thank you to everyone who attended for your time. **Happy Coding**. 🎈 <br/>
Tolgahan Çelik<br/>

## Getting started
1. Fork this project.<br/>
2. Clone the forked project to your computer..<br/>
   ```bash
   git clone https://github.com/YOUR_USERNAME/GtCaseMobileNov2023.git
   ```

3. Go to the root directory of the project.<br/>
   ```bash
   cd YOUR_PATH/GtCaseMobileNov2023
   ```

4. Install project dependencies.<br/>
   ```bash
   npm install
   ```

5. Setting environment variables. Create **.env** file in the project's main directory. Fill this file according to the **.env.example** file.<br/>
   ```bash
   touch .env
   open .env
   ```

6. **[For Mac users only]** Install pods.<br/>
   ```bash
   cd ios
   pod install
   ```


## Mandatory extra steps

### Things to consider when creating a Google Maps API key.
Google Maps APIs will be used in the sample application. You need to generate api keys for Android and Ios. For your safety, pay attention to the following items.<br/>

- You need to create a Google payment account. (It is free until a certain request.)
- When creating your API key, do not forget to add application filters and API filters to be used.
- Store the API keys in the .env file.

### Completion of integrations.
Some of the packages we added as dependencies to the project require installation. Complete the installation of these packages by reviewing their documentation.<br/><br/>
**Note:** The **react-native-config** package is already configured to set environment variables. You can skip this package.<br/>
**Note:** Use your api keys with **react-native-config**. You can learn how to do this from the package documentation.<br/>


## What needs to be done?
- Navigation configuration with **React Navigation**.
- Theme configuration with **React Navigation**.
- Global state configuration with **Redux**.
- Form operations with **Yup** and **Formik**.
- Map operations with **React Native Map**.


## What will be evaluated?
**Note:** You must develop the project using **TYPESCRIPT**.<br/>

- Code quality.
- Project structure.
- Typescript usages.
- Package installations.
- Package usages. (Navigation, Redux, hooks usage etc.)

## App preview
It will be filled.
