## Smart Lamp Website for SUNSHINE Company

The website contains information about a new product (smart lamp) launched by SUNSHINE company.
The website is coded in HTML with CSS for the design and JavaScript for making it interactive.

The purpose of this website is to share information on the smart lamp created by the Sunshine Company, including pictures, descriptions, customer reviews, and external links associated with the program

## Getting Started and Running

### Installing
First you must install the required node modules

Type:
```
npm install
```

### Running
To start the server running, type:
```
npm run start
```

To access the site, in your browser navigate to:
http://localhost:3000/

## The API
There is an API provided with this application

### Main page
Endpoint: /

Purpose: Displays the index page for the  site

Response type: text/html

Response codes: (200) = success

Example request: 
```
localhost:3000/
```

### Amazon Link
Endpoint: /amazon

Purpose: Returns a link to the item page on amazon where you can buy the lamp

Response type: text/plain

Response codes: (200) = success

Example request: 
```
localhost:3000/amazon
```

Example response:
```
https://www.amazon.com/
```

### Description
Endpoint: /description

Purpose: Return the description of the lamp

Response codes: (200) = success; (400) = error for invalid parameters

Parameter: json = true | false

#### JSON Format
Example request: 
```
localhost:3000/description?json=true
```

Response type: application/json

Example response:
```
{"description":"- Use of solar energy\n- Adapted to your 
biological cycle\n- Brighter in the morning and it decreases
with the time\n- Differents lights colours\n- Long 
lasting\n- LED bulbs have a life expectancy of operational 
work up to 100, 000 hours or eleven years of non-stop 
operation."}
```

#### Text Format
Example request:
```
localhost:3000/description?json=false
```

Response type: text/plain
	
Example response:
```
- Use of solar energy\n- Adapted to your biological cycle\n-
Brighter in the morning and it decreases with the time\n-
Differents lights colours\n- Long lasting\n- LED bulbs have
a life expectancy of operational work up to 100, 000 hours
or eleven years of non-stop operation.
```

##### Invalid Parameters
Example request:
```
localhost:3000/description?json=invalid
```

Response type: application/json

Example response:
```
{"error":
    {"code":400,
    "description":"Invalid parameters"
    }
}
```

## Development Team
    - Vrittika Bagadia
    - Yash Sheth
    - Melanie Brandl
    - Tony Sax
    - Emily Pazienza

## Documentation 
[Full documentation available here](https://docs.google.com/document/d/1WiFJUoHTbSOh1RnHKYGkismYeLR2tLQ-WMArTAol2HM/edit?usp=sharing)