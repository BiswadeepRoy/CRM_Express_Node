import { addNewContact, deleteContact, getAllContacts, getContactByID, updateContact } from '../controllers/crmController'

const routes = (app, port) => {

    app.route('/').get((req, res) => {
        res.send(`Node and Express are currently hosted at ${port}`);
    })

    app.route('/contact')
        .get((req, res, next) => {
            //Middlewares
            console.log(`Request from ${req.originalUrl}`);
            console.log(`Request type ${req.method}`);
            next();
        }, getAllContacts)
        .post(addNewContact)

    app.route('/contact/:contactId')
        .get(getContactByID)
        .put(updateContact)
        .delete(deleteContact)
}

export default routes;