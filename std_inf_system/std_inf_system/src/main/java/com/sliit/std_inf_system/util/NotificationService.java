package com.sliit.std_inf_system.util;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.mail.MailException;


public class NotificationService {

	public void sendNotification(String emailBody, String recieverMail, String emailSubject) throws MailException, MessagingException {

		String to = recieverMail;
		String subject = emailBody;
		String msg =  emailSubject;
		final String from = "it17103732dsassignment@gmail.com";
		final String password = "DSassignment2@32";

		Properties props = new Properties();
		props.setProperty("mail.transport.protocol", "smtp");
		props.setProperty("mail.host", "smtp.gmail.com");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.port", "465");
		props.put("mail.debug", "true");
		props.put("mail.smtp.socketFactory.port", "465");
		props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
		props.put("mail.smtp.socketFactory.fallback", "false");
		Session session = Session.getDefaultInstance(props, new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(from, password);
			}
		});

		// session.setDebug(true);
		Transport transport = session.getTransport();
		InternetAddress addressFrom = new InternetAddress(from);

		MimeMessage message = new MimeMessage(session);
		message.setSender(addressFrom);
		message.setSubject(subject);
		message.setContent(msg, "text/plain");
		message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));

		transport.connect();
		Transport.send(message);
		transport.close();

	}
}
