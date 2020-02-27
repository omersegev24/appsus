import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

const EMAILS_KEY = 'emails'
const gEmails = [
    { id: 'adasd', from: 'Daniel', subject: 'Wassap?', body: 'sodaleSsodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum psodales suscipit tellus tincidunt mauris elits suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum p!', isRead: false, sentAt: 1551133930594 },
    { id: 'adasd', from: 'Daniel', subject: 'Wassap?', body: 'sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum p!', isRead: false, sentAt: 1551133930594 },
    { id: 'adasd', from: 'Daniel', subject: 'Wassap?', body: 'sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum p!', isRead: false, sentAt: 1551133930594 },
    { id: 'adasd', from: 'Daniel', subject: 'Wassap?', body: 'sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum p!', isRead: false, sentAt: 1551133930594 },
    { id: 'adasd', from: 'Daniel', subject: 'Wassap?', body: 'sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum p!', isRead: false, sentAt: 1551133930594 },
    { id: 'adasd', from: 'Daniel', subject: 'Wassap?', body: 'sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum p!', isRead: false, sentAt: 1551133930594 },
    { id: 'adasd', from: 'Daniel', subject: 'Wassap?', body: 'sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum p!', isRead: false, sentAt: 1551133930594 },
    { id: 'adasd', from: 'Daniel', subject: 'Wassap?', body: 'sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum p!', isRead: false, sentAt: 1551133930594 },
]

export const emailService = {
    getEmails,
    getEmailById
}

function getEmails() {
    var emails = storageService.load(EMAILS_KEY)
    if (emails) return Promise.resolve(emails)
    emails = gEmails
    storageService.store(EMAILS_KEY, emails)
    return Promise.resolve(emails)
}




function getEmailById(id) {
    var emails = storageService.load(EMAILS_KEY);
    if (!emails) emails = gEmails
    var email = emails.find(currEmail => currEmail.id === id)
    return Promise.resolve(email);
}
