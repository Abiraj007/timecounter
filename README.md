# timecounter
# 🕒 Time Converter Web App

This is a simple, interactive **Time Converter** web application built using **HTML**, **CSS (Bootstrap)**, and **JavaScript**. It allows users to input hours and minutes, and converts the total time into seconds.

---

## 🔧 Features

- Accepts user input for hours and minutes.
- Validates user input (checks for empty or non-numeric values).
- Calculates the total time in seconds.
- Displays the result dynamically without refreshing the page.
- Uses Bootstrap for styling and responsiveness.
- All elements are created dynamically using JavaScript.

---

## 📦 Technologies Used

- **HTML5**
- **CSS3**
- **Bootstrap 4.5**
- **JavaScript (Vanilla)**

---

## 🛠️ How It Works

1. The page loads a background and UI elements dynamically using JavaScript.
2. The user inputs:
   - `Hours`
   - `Minutes`
3. When the **"Convert to Seconds"** button is clicked:
   - Inputs are validated to ensure they are not empty and are valid numbers.
   - If valid, the time is converted to seconds using the formula:

     ```
     total_seconds = (hours * 3600) + (minutes * 60)
     ```

   - The result is displayed in a styled container.

4. If invalid input is detected, an error message is shown and the result container is hidden.

---

## ✅ Validation Logic

- Input is considered invalid if:
  - It is an empty string (`""`)
  - It cannot be converted to a number (`isNaN(input.value)`)

---

## 📸 Screenshot

> _(Add a screenshot of your app here if you'd like)_

---

## 📁 File Structure

