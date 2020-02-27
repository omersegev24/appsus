import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

const EMAILS_KEY = 'emails'
const gEmails = [
    { id: 'adaa3sd', from: 'Daniel', subject: 'Wassap?', body: 'sodaleSsodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum psodales suscipit tellus tincidunt mauris elits suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum p!', isRead: false, sentAt: 1551133930594 },
    { id: 'ada31sd', from: 'Daniel', subject: 'Wassap?', body: 'sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum p!', isRead: false, sentAt: 1551133930594 },
    { id: 'adas2apod', from: 'Daniel', subject: 'Wassap?', body: 'sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum p!', isRead: false, sentAt: 1551133930594 },
    { id: 'ada2sd', from: 'Daniel', subject: 'Wassap?', body: 'sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum p!', isRead: false, sentAt: 1551133930594 },
    { id: 'adasdgdfh', from: 'Daniel', subject: 'Wassap?', body: 'sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum p!', isRead: false, sentAt: 1551133930594 },
    { id: 'ahhgfdasd', from: 'Daniel', subject: 'Wassap?', body: 'sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum p!', isRead: false, sentAt: 1551133930594 },
    { id: 'adtaweswd', from: 'Daniel', subject: 'Wassap?', body: 'sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum p!', isRead: false, sentAt: 1551133930594 },
    { id: 'aeryhd', from: 'Daniel', subject: 'Wassap?', body: 'sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum p!', isRead: false, sentAt: 1551133930594 },
]

export const emailService = {
    getEmails,
    getEmailById,
    addEmail,
    updateIsRead,
    deleteEmail
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


function addEmail(subject, body, sentAt) {
    var emails = storageService.load(EMAILS_KEY)
    var newEmail = _createEmail(subject, body, sentAt)
    emails.unshift(newEmail)
    storageService.store(EMAILS_KEY, emails)
    return Promise.resolve(newEmail)
}
// id: 'adasd', from: 'Daniel', subject: 'Wassap?', body: '\ p!', isRead: false, sentAt: 1551133930594 },
function _createEmail(subject, body, sentAt) {
    const email = {
        id: utilService.makeId(),
        from: 'Daniel',
        subject: subject,
        body: body,
        isRead: false,
        isStarred: false,
        sentAt: sentAt
    }
    return email
}

function updateIsRead(email) {
    const emails = storageService.load(EMAILS_KEY)
    const idx = emails.findIndex(currEmail => currEmail.id === email.id);
    email.isRead = true
    emails.splice(idx, 1, email)
    storageService.store(EMAILS_KEY, emails)
    return Promise.resolve(email)
}

function deleteEmail(emailId) {
    const emails = storageService.load(EMAILS_KEY)
    const idx = emails.findIndex(currEmail => currEmail.id === emailId)
    if (idx === -1) return Promise.reject('DID NOT REMOVE EMAIL')
    emails.splice(idx, 1);
    storageService.store(EMAILS_KEY, emails)
    return Promise.resolve('EMAIL REMOVED')
}