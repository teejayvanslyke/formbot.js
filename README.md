# Formbot

![Formbot](https://cdn.rawgit.com/teejayvanslyke/formbot.js/master/logo.svg)

Formbot alerts you when your visitors submit your contact form.

* Get notified by email and in your team's Slack channel
* Create forms without a backend server
* Built-in spam prevention
* Great for contact forms, quote requests, and more
* Just $9/mo for unlimited use

For more information and to sign up for a free trial, visit
https://formbotapp.com

## Install

### npm

    $ npm install formbot --save

### yarn

    $ yarn add formbot

## Usage

### Sign up for Formbot

Start your free Formbot trial at https://formbotapp.com.

### Configure your domains

Configure your CORS domain setting with your website's domain(s) on
the Formbot settings page:

### Post away!

Post forms using JavaScript:

```javascript
// ES5
var Formbot = require('formbot');

// ES6
import Formbot from 'formbot';

Formbot.config('FORMBOT_API_KEY');

Formbot.submit({
    email: "yourcustomer@example.com",
    message: "I just visited your website and now I want to talk to you!"
});
```
