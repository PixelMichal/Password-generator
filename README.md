# Random Password Generator

https://pixelmichal.github.io/Password-generator/

A simple web application for generating random passwords. The user can choose the password length, select required character types, generate a password, and copy it to the clipboard.

## Features

- Generate random passwords instantly
- Choose password length from 4 to 24 characters
- Include uppercase letters
- Include numbers
- Include special characters
- Copy the generated password to the clipboard
- Show a visual confirmation after copying
- Responsive layout built with Bootstrap 5

## How It Works

The generator creates a password by:

1. Reading the selected password length.
2. Filling the password with lowercase letters.
3. Checking which character groups are selected.
4. Replacing random password positions with characters from the selected groups.
5. Returning the final password.

## Technologies

- HTML5
- CSS3
- JavaScript
- Bootstrap 5

## Project Structure

```text
.
+-- index.html
+-- style.css
+-- app.js
`-- README.md
```

## Usage

Choose the password options, and click **Generate Password**.
