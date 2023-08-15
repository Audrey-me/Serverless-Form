const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const { v4: uuidv4 } = require('uuid');

function generateUUID() {
  return uuidv4();
}

// on API gateway trigger, the lambda function accepts our inputs
exports.handler = async (event) => {
  try {
    console.log('Raw inputted data:', event); 

    const formData = {
      name: event.name,
      email: event.email,
      phone: event.phone
    };
    
    // generates a Unique identity for each user response
    const item = {
      SubmissionId: generateUUID(), 
      ...formData, 
    };
    
    // pass each user response to the storeFormData, await was used here to make sure the promise has been resolved.
    await storeFormData(item);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully' }),
    };
  } catch (error) {

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error submitting the form', error: error.message }),
    };
  }
};

//  pass the parameters to the DynamoDB table "ContactFormEntries" table
async function storeFormData(item) {
  const params = {
    TableName: 'ContactFormEntries',
    Item: item,
  };

  await dynamodb.put(params).promise();
}
