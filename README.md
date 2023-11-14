# Global Tours & Tickets Case Mobile November 2023

#### **Hello everyone** 👋
- This document provides information about the development and evaluation of the sample application.

- As part of the testing, we expect you to prepare the sample application (**App Preview**) at the bottom of the document.

- The application must be developed using **Typescript**. It should work on **Android** and **Ios** platforms. It should include all the features in the **App Preview** section.
    - Navigation elements (Tabbar, Drawer etc.)
    - Form validations
    - Theme support
    - Continuing the session (If logged in, do not show the login screen.)
    - State storage (If there is added data, store it.)
    - Map operations

- After preparing your application, you can send us an e-mail in the format specified in the **Contact** field.

**Note:** If you do not own a Mac computer to develop on the iOS platform, please inform us in the notes section of the e-mail.

Thanks for your time. **Happy coding.** 🎈<br/>
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
Some of the packages we added as dependencies to the project require installation. Complete the installation of these packages by reviewing their documentation.<br/>
- **Note:** The **react-native-config** package is already configured to set environment variables. You can skip this package.<br/>
- **Note:** Use your api keys with **react-native-config**. You can learn how to do this from the package documentation.<br/>


## What needs to be done?
- Navigation configuration with **React Navigation**.
- Theme configuration with **React Navigation**.
- Global state configuration with **Redux**.
- Form operations with **Yup** and **Formik**.
- Map operations with **React Native Map**.


## What will be evaluated?
You must develop the project using **TYPESCRIPT**.<br/>

- Code quality.
- Project structure.
- Typescript usages.
- Package installations.
- Package usages. (Navigation, Redux, hooks usage etc.)

## Contact
Please use this format when emailing us.<br/>

- **Mail:** toursandticketsparis@gmail.com
- **Title:** GtCaseMobileNov2023 - Name Surname
- **Description:**
    - **Project Repository Url:**
    - **Note:**

## App preview
<table style="width: 100%">
  <tr>
    <th style="width: 33%">01-Login</th>
    <th style="width: 33%">02-App</th>
    <th style="width: 33%">03-Create Location</th>
  </tr>
  <tr>
    <td style="text-align: center">
        <video src="https://github.com/global-tour-rd/GtCaseMobileNov2023/assets/150152135/7e89e4d4-1d2f-43d7-b901-e2c488b4188c"></video>
    </td>
    <td style="text-align: center">
        <video src="https://github.com/global-tour-rd/GtCaseMobileNov2023/assets/150152135/f9579a08-ffea-42a0-b512-32cd2ebd1847"></video>
    </td>
    <td style="text-align: center">
        <video src="https://github.com/global-tour-rd/GtCaseMobileNov2023/assets/150152135/d068d9cb-4ac4-4367-b09c-c101922a337d"></video>
    </td>
  </tr>
</table>

<table style="width: 100%">
  <tr>
    <th style="width: 33%">04-Delete Location</th>
    <th style="width: 33%">05-Update Location</th>
    <th style="width: 33%">06-Logout</th>
  </tr>
  <tr>
    <td style="text-align: center">
        <video src="https://github.com/global-tour-rd/GtCaseMobileNov2023/assets/150152135/491a7e84-f5d4-413d-98d5-cd74202433f1"></video>
    </td>
    <td style="text-align: center">
        <video src="https://github.com/global-tour-rd/GtCaseMobileNov2023/assets/150152135/0a016af2-bcad-4d4b-8207-f9cbe71ec7e3"></video>
    </td>
    <td style="text-align: center">
        <video src="https://github.com/global-tour-rd/GtCaseMobileNov2023/assets/150152135/db92c5c4-e239-46c8-b88e-0757f2f5a0dd"></video>
    </td>
  </tr>
</table>
