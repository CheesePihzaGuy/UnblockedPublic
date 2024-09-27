<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Access Beta</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            background-color: #f0f4ff;
            color: #333;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: auto;
            padding: 20px;
            border-radius: 8px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        label {
            display: block;
            margin: 10px 0 5px;
        }
        select, input[type="text"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
        }
        .button {
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            padding: 10px 20px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        .button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>

    <div class="container">
        <h2>User Settings</h2>
        <form id="settings-form">
            <label for="language">Language:</label>
            <select id="language">
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="russian">Russian</option>
                <option value="korean">Korean</option>
                <option value="japanese">Japanese</option>
                <option value="chinese">Chinese</option>
                <option value="german">German</option>
                <option value="polish">Polish</option>
                <option value="portuguese">Portuguese</option>
            </select>

            <label for="default-url">Default URL:</label>
            <input type="text" id="default-url" placeholder="Enter default URL">

            <label for="save-local">Save Local:</label>
            <select id="save-local">
                <option value="true">True</option>
                <option value="false">False</option>
            </select>

            <label for="save-global">Save Global:</label>
            <select id="save-global">
                <option value="true">True</option>
                <option value="false">False</option>
            </select>

            <label for="allow-dev-beta">Allow Dev Beta:</label>
            <select id="allow-dev-beta" disabled>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>

            <button type="button" class="button" onclick="saveSettings()">Save Settings</button>
        </form>
    </div>

    <script>
        // Function to save settings to Local Storage
        function saveSettings() {
            const settings = {
                language: document.getElementById('language').value,
                defaultURL: document.getElementById('default-url').value,
                saveLocal: document.getElementById('save-local').value === 'true',
                saveGlobal: document.getElementById('save-global').value === 'true',
            };

            localStorage.setItem('userSettings', JSON.stringify(settings));
            alert('Settings saved successfully!');
        }

        // Populate settings fields if they exist
        document.addEventListener('DOMContentLoaded', () => {
            const savedSettings = JSON.parse(localStorage.getItem('userSettings'));
            if (savedSettings) {
                document.getElementById('language').value = savedSettings.language || 'english';
                document.getElementById('default-url').value = savedSettings.defaultURL || '';
                document.getElementById('save-local').value = savedSettings.saveLocal ? 'true' : 'false';
                document.getElementById('save-global').value = savedSettings.saveGlobal ? 'true' : 'false';
            }
        });
    </script>

</body>
</html>
