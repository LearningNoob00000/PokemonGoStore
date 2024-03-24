// pageHeader.js

if (profile) {
    document.write('<a href="registration.html" class="sign-icons">Sign Up</a>');
    document.write('<a href="registration.html" class="sign-icons">Sign In</a>');
} else {
    document.write('<a href="logout.html" class="sign-icons">Logout</a>');
    document.write('<a href="profile.html" class="sign-icons">Profile</a>');
}
