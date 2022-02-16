# ITG
ITG validation form


Implementing some of the optional points:

Google reCAPTCHA - As a baseline I would add reCAPTCHA v3 as this is alot less intrusive for the user experience so you won't be blocked by the pop-up clicking the images asked for and will be checked based on a score system provided by google. Once I have registered reCAPTCHA on google i would then use the cod provided to let the form and reCAPTCHA talk to each other.

Regex - I would use Regex on any fields that need specific string validation such as email, phone number and postcode so these would have specific formats that I would define so that the user would not be able to submit the form in any other way.

Pre-populating fields - Getting the values from a query string I could then pre-populate the fields with any values passed through the URL.

Netlify - https://practical-franklin-3a3458.netlify.app/
