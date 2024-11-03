const axios = require('axios');
const outlook = require('node-outlook');

// Replace this with your access token after OAuth authentication
const accessToken = 'YOUR_ACCESS_TOKEN';

// Step 1: Fetch latest emails
axios.get('https://graph.microsoft.com/v1.0/me/messages', {
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
})
  .then(response => {
    const messages = response.data.value;
    
    // Step 2: Check if there's an email from zekelman@service-now.com
    const targetEmail = 'zekelman@service-now.com';
    const emailFromZekelman = messages.find(msg => msg.from.emailAddress.address === targetEmail);

    if (emailFromZekelman) {
      // Step 3: Send an auto-reply
      const newMessage = {
        Subject: `Re: ${emailFromZekelman.subject}`,
        Body: {
          ContentType: 'Text',
          Content: 'Hello This is Levon from Zekeklman IT , im reaching out in regard to your request/incident, feel free to reach out to me at 724-704-8003 for me to assist , Thanks'
        },
        ToRecipients: [
          {
            EmailAddress: {
              Address: targetEmail
            }
          }
        ]
      };

      outlook.mail.sendNewMessage({
        token: accessToken,
        message: newMessage,
        user: { email: 'Levon.hill@zekelman.com' }
      }, function(error, result) {
        if (error) {
          console.error('Error sending email:', error);
        } else {
          console.log('Auto-reply sent to zekelman@service-now.com');
        }
      });
    } else {
      console.log('No email from zekelman@service-now.com found.');
    }
  })
  .catch(error => {
    console.error('Error fetching emails:', error);
  });
