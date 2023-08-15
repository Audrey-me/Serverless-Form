# Serverless Contact Form using DynamoDB, Lambda Function, S3 Bucket, and API Gateway

## Prerequisites

- AWS account
- Basic understanding of API Gateway
- Development Environment (VSCode)
- Familiarity with AWS Lambda
- Familiarity with DynamoDB

## Get Started on the Project

1. **Clone the Repository:**
   Clone the project repository to your local machine using the following command:

2. **Create an API Gateway URL:**
- Within the AWS Console, create an API Gateway with a POST method.
- Copy the invoke URL of the newly created API Gateway.

3. **Replace API Gateway URL:**
- In your code, locate the `SubmitDataAction` function.
- Replace `'your-api-gateway-invoke-url-goes-here'` with the copied API Gateway invoke URL.

4. **Create an S3 Bucket:**
- Create an S3 bucket to store your static assets (HTML, CSS, and JavaScript).
- Enable static website hosting for the S3 bucket.

5. **Create DynamoDB Table:**
- Create a DynamoDB table named "Contact Entries."
- Use "SubmissionID" as the partition key.

6. **Create an S3 Bucket for Lambda Code:**
- Create a new S3 bucket to store your Lambda function code.

7. **Prepare and Upload Lambda Code:**
- Navigate to the Lambda directory in the project.
- Run the following command to install the AWS SDK:
  ```
  npm install
  ```
- Zip the necessary files using the command:
  ```
  zip -r lambda.zip *
  ```
- Upload the `lambda.zip` file to the S3 bucket created in step 6.

8. **Testing:**
- Test your project by interacting with the API Gateway URL.
- The API Gateway will trigger the Lambda function, which will store form data in DynamoDB and utilize the S3 bucket for static assets.

## Conclusion

Congratulations! You have successfully set up a serverless contact form using DynamoDB, Lambda Function, S3 Bucket, and API Gateway. This project demonstrates the power of serverless architecture in building scalable and efficient applications.
