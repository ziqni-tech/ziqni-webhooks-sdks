/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Handle notifications
* Example server implementation used to subscribe to webhooks
*
* acceptEncoding String gzip (optional)
* userUnderscoreAgent String Ziqni/1.0 (optional)
* xAccount String Unique identifier of your account (optional)
* xOnEvent String depending which webhook you are selecting (optional)
* body WebhookRequestBody Retrieve Products from Ziqni database by unique Product ID's or any other POST body parameters using the POST method (optional)
* no response value expected for this operation
* */
const onWebhook = ({ acceptEncoding, userUnderscoreAgent, xAccount, xOnEvent, body }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        acceptEncoding,
        userUnderscoreAgent,
        xAccount,
        xOnEvent,
        body,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  onWebhook,
};
