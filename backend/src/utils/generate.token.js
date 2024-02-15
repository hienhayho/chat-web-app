import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '15d',
    });
    res.cookie('token', token, {
        httpOnly: true, // JS cannot access the cookie -> prevent XSS attack (cross-site scripting attacks)
        maxAge: 15 * 24 * 60 * 60 * 1000, // milliseconds -> 15 days
        sameSite: "strict", // CSRF attack cross-site request forgery
        secure: process.env.NODE_ENV !== "development" // HTTPS
    });
};

export default generateTokenAndSetCookie;