const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blacklistTokenSchema = new Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },

    createdAt: {
        type: Date,
        default: Date.now,
        
        expires: '1d' // Token will be removed after 1 day
    }
});

const BlacklistToken = mongoose.model('BlacklistToken', blacklistTokenSchema);

module.exports = BlacklistToken;