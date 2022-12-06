exports.getNotFound = (req, res) => {
    res.status(404).render('notFound');
};