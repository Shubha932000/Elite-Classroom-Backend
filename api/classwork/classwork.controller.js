const { getClasswork, updatework, deletework, creatework } = require('./classwork.service');

module.exports = {
    get: (req, res) => {
        getClasswork(req.params)
            .then((result) => {
                if (!result) {
                    res.status(500);
                    return res.json({
                        success: 0,
                        message: 'Error occurred while getting the notes',
                    });
                } else {
                    res.status(200);
                    return res.json(result);
                }
            })
            .catch((e) => {
                res.status(e.status);
                res.send(e);
                res.end();
            });
    },

    update: (req, res) => {
        updatework(req.body, req.params)
            .then((result) => {
                if (!result) {
                    res.status(500);
                    return res.json({
                        success: 0,
                        message: 'Error occurred while updating notes',
                    });
                } else {
                    res.status(200);
                    return res.json(result);
                }
            })
            .catch((e) => {
                res.status(e.status);
                res.send(e);
                res.end();
            });
    },

    del: (req, res) => {
        deletework(req.params)
            .then((result) => {
                if (!result) {
                    res.status(500);
                    return res.json({
                        success: 0,
                        message: 'Error occurred while deleting the notes',
                    });
                } else {
                    res.status(200);
                    return res.json(result);
                }
            })
            .catch((e) => {
                res.status(e.status);
                res.send(e);
                res.end();
            });
    },

    create: (req, res) => {
        creatework(req.body)
            .then((result) => {
                if (!result) {
                    res.status(500);
                    return res.json({
                        success: 0,
                        message: 'Error occurred while creating the notes',
                    });
                } else {
                    res.status(200);
                    return res.json(result);
                }
            })
            .catch((e) => {
                res.status(e.status);
                res.send(e);
                res.end();
            });
    },

};