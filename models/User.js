const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            Type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

UserSchema.virtual('friendCount').get(function () {
    return this.Thoughts.reduce(
        (total, Thought) => total + Thought.replies.length + 1,
        0
    );
});

    const User = model('User', UserSchema);

    module.exports = User;