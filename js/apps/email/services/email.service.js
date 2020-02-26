import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

const EMAILS_KEY = 'emails'
const gEmails = [
    { id: 'adasd', sender: 'Daniel', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 },
    { id: 'toasdids', sender: 'Omer', subject: 'How are you?', body: 'See you in a while', isRead: false, sentAt: 1551133930594 },
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
