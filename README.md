# challenge-bk-nodejs
This repository has the backend development for the nodejs challenge.

## Requirements
- You must have nodejs installed v16+
## Steps to run the project
1. Clone or download the project from the following [link](https://github.com/tatianaserrano/challenge-bk-nodejs)
2. Install dependencies with the command:
```sh
npm install
```
3. Run the app with the command:
```sh
npm run start
```
4. For firebase authentication it is necessary to create a user with the following curl:
```sh
curl --location --request POST 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAvnSwDxk9dAGuzK8KpKjNZeBnN64X3XgU' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "YOUR_EMAIL",
    "password": "YOUR_PASSWORD",
    "returnSecureToken": true
}'
```
5. You must change the current token of the headers for the idToken generated with the previous curl, then with postman or similar applications execute the following curl:
```sh
curl --location --request GET 'http://localhost:3000/sorted-courses' \
--header 'authorization: Bearer <YOUR TOKEN>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "userId": "AL4BbXmr1Ie7V4JCRATOyWSl7pv1",
    "courses": [
        {
            "desiredCourse": "PortfolioConstruction",
            "requiredCourse": "PortfolioTheories"
        },
        {
            "desiredCourse": "InvestmentManagement",
            "requiredCourse": "Investment"
        },
        {
            "desiredCourse": "Investment",
            "requiredCourse": "Finance"
        },
        {
            "desiredCourse": "PortfolioTheories",
            "requiredCourse": "Investment"
        },
        {
            "desiredCourse": "InvestmentStyle",
            "requiredCourse": "InvestmentManagement"
        }
    ]
}'
```

## Run unit tests
```sh
npm run test
```

## Results

1. Success response
![](https://github.com/tatianaserrano/challenge-bk-nodejs/blob/main/images/response200.png)
2. Response without authentication token header
![](https://github.com/tatianaserrano/challenge-bk-nodejs/blob/main/images/response401.png)
3. Response with expired or wrong authentication token
![](https://github.com/tatianaserrano/challenge-bk-nodejs/blob/main/images/response403.png)
