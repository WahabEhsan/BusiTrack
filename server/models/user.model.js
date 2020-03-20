const userSchema = new userSchema({
    username: String,
    id: String,
    email: String,
    phone: String,
    lastMsg: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;