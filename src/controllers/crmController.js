import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel'

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save().then(contact => {
        res.json(contact);
    }).catch(err => {
        res.send(err);
    })
}

export const getAllContacts = (req, res) => {
    Contact.find({}).then(contacts => {
        res.json(contacts)
    }).catch(err => {
        res.send(err);
    })
}

export const getContactByID = (req, res) => {
    Contact.findById(req.params.contactId).then(contact => {
        res.json(contact)
    }).catch(err => {
        res.send(err);
    })
}

export const updateContact = (req, res) => {
    Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: false }).then(contact => {
        res.json(contact)
    }).catch(err => {
        res.send(err);
    })
}

export const deleteContact = (req, res) => {
    Contact.findByIdAndDelete(req.params.contactId).then(() => {
        res.json({ message: `Contact with ${contactId} has been deleted!!` })
    }).catch(err => {
        res.send(err);
    })
}