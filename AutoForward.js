function AutoForward() //Don't forget to add a trigger to the project!
{
	var threads = GmailApp.search('is:unread');
	
    for (var h = 0; h < threads.length; h++)
	{
		var messages = threads[h].getMessages();
		
        for (var i = 0; i < messages.length; i++)
		{
			if (messages[i].isUnread())
          {
			  var subject = messages[i].getSubject();
			  var from = messages[i].getFrom();
			  var body = messages[i].getBody();
			  var id = messages[i].getId();
			  var GmailAttachment = messages[i].getAttachments();
	
			  MailApp.sendEmail
			  ({
			      replyTo: from, //reply to the original sender
			      to: "mail1@example.com, mail2@example.com, etc@example.com", //an array of email addresses can also be used
                  subject: subject,
                  htmlBody: "<blockquote>email sent by <b>"+from+"</b><br></blockquote>"+body,attachments:GmailAttachment,
		      }); 
          }
		}
	}
    GmailApp.markThreadsRead(threads); //mark sent messages as read
}
