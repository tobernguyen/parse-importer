# parse-importer

An utility helps import data into ParseServer or Parse.com.
The data format should follow the format when you export data from Parse:

```json
{
  "results": [
    {
      "email": "foo@baz.com"
    }
  ]
}
```

## How to use

**1. Install dependencies:**
```
npm install
```

**2. Copy your data file to root of `parse-importer` directory**

**3. Fill in parse credentials and ParseServer URL by editting `parse-config.js` file**
```javascript
module.exports = {
  PARSE_APP_ID: 'XXXX',
  PARSE_MASTER_KEY: 'XXXX',
  PARSE_JAVASCRIPT_KEY: 'XXXX',
  PARSE_SERVER_URL: 'https://api.parse.com/1' // Leave it if you dont use ParseServer
}
```

**4. Run the application and follow the instruction**
```bash
node index.js
```

# License
The MIT License (MIT)

Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
