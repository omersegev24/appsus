import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

const EMAILS_KEY = 'emails'
const gEmails = [
  {
    id: 'ad4aa3sd',
    from: 'Daniel',
    subject: 'How are you?',
    body:
      'sodaleSsodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum psodales suscipit tellus tincidunt mauris elits suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum p!',
    isRead: false,
    isStarred: false,
    sentAt: 1551133930594
  },
  {
    id: 'ada31sdq',
    from: 'Daniel',
    body:
      'sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum p!',
    isRead: false,
    isStarred: false,
    sentAt: 1551133930594
  },
  {
    id: 'adas2oapod',
    from: 'Daniel',
    subject: 'Wassap?',
    body:
      'sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum p!',
    isRead: false,
    isStarred: false,
    sentAt: 1551133930594
  },
  {
    id: 'adza2sd',
    from: 'Daniel',
    subject: 'ANSWER ME!!!?',
    body:
      'sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum p!',
    isRead: false,
    isStarred: false,
    sentAt: 1551133930594
  },
  {
    id: 'adasdgdfh',
    from: 'Daniel',
    subject: 'YOOOOO?',
    body:
      'sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum p!',
    isRead: false,
    isStarred: false,
    sentAt: 1551133930594
  },
  {
    id: 'ahhgfdasd',
    from: 'Daniel',
    subject: 'Wassap?',
    body:
      'sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum p!',
    isRead: false,
    isStarred: false,
    sentAt: 1551133930594
  },
  {
    id: 'adtaweswd',
    from: 'Daniel',
    subject: 'Wassap?',
    body:
      'sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum p!',
    isRead: false,
    isStarred: false,
    sentAt: 1551133930594
  }
]

export const emailService = {
  getEmails,
  getEmailById,
  saveEmail,
  addEmail,
  updateIsRead,
  deleteEmail,
  getEmailsToDisplay,
  starEmail
}

function getEmails() {
  var emails = storageService.load(EMAILS_KEY)
  if (emails) return Promise.resolve(emails)
  emails = gEmails
  storageService.store(EMAILS_KEY, emails)
  return Promise.resolve(emails)
}

function getEmailById(id) {
  var emails = storageService.load(EMAILS_KEY)
  if (!emails) emails = gEmails
  var email = emails.find(currEmail => currEmail.id === id)
  return Promise.resolve(email)
}

function saveEmail(email) {
  if (email.id) {
    return _updateEmail(email)
  } else {
    return addEmail(email)
  }
}

function _updateEmail(email) {
  const emails = storageService.load(EMAILS_KEY)
  const idx = emails.findIndex(currEmail => currEmail.id === email.id)
  emails.splice(idx, 1, email)
  storageService.store(EMAILS_KEY, emails)
  return Promise.resolve(email)
}

function addEmail(email) {
  var emails = storageService.load(EMAILS_KEY)
  const sentAt = Date.now()
  var newEmail = _createEmail(email.subject, email.body, sentAt)
  emails.unshift(newEmail)
  storageService.store(EMAILS_KEY, emails)
  return Promise.resolve(newEmail)
}

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

function updateIsRead(email, toggleMark) {
  const emails = storageService.load(EMAILS_KEY)
  const idx = emails.findIndex(currEmail => currEmail.id === email.id)
  if (toggleMark) {
    email.isRead = !email.isRead
  } else email.isRead = true
  emails.splice(idx, 1, email)
  storageService.store(EMAILS_KEY, emails)
  return Promise.resolve('isRead updated')
}

function deleteEmail(emailId) {
  const emails = storageService.load(EMAILS_KEY)
  const idx = emails.findIndex(currEmail => currEmail.id === emailId)

  emails.splice(idx, 1)

  storageService.store(EMAILS_KEY, emails)
  return Promise.resolve(idx)
}

function getEmailsToDisplay(filterBy) {
  const emails = storageService.load(EMAILS_KEY)
  const emailsToDisplay = emails.filter(email => {
    if (filterBy.text) {
      var regex = new RegExp(`${filterBy.text}`, 'i')
      return (
        regex.test(email.subject) ||
        regex.test(email.body) ||
        regex.test(email.from)
      )
    }
  })
  return Promise.resolve(emailsToDisplay)
}

function starEmail(email) {
  const emails = storageService.load(EMAILS_KEY)
  email.isStarred = true
  var idx = emails.findIndex(currEmail => currEmail === email)
  emails.splice(idx, 1, email)
  storageService.store(EMAILS_KEY, emails)
  
  return Promise.resolve(idx)
}
