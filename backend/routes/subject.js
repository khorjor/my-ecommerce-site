const express = require('express');
const router = express.Router();

const subject = require('../data/contact_subject.json')

router.get('/', (req, res) => {
    // res.end('{"contactSubject": ["General Enquiry","Class","Schedule","Instructor","Price","Location","Other","kj"]}');
    res.json(subject);
});

module.exports = router;0