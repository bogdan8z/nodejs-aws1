## Local run:
>set DEBUG=myapp:* & npm start

## Deployment to AWS
you have to options:
1. [Manually deploy to aws using AWS Elastic Beanstalk](https://www.honeybadger.io/blog/node-elastic-beanstalk#step-3-manual-deployment)
2. [Continuous Integration and Deployment(CI/CD)](https://www.honeybadger.io/blog/node-elastic-beanstalk#continuous-integration-and-deployment-ci-cd)

## API endpoints
1. get all tweets
   ```
   GET /tweets/tweets
   ```
2. add a tweet
   ```
   POST tweets/send
   {
    "tweet":"2222"
    }
    ```
3. POST index
    ``` 
    POST / 
    ```
4. get all users
    ```
    GET /users
    ```