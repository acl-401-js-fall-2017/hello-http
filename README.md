My API has one accepted method "get" and 2 intended routes /paths : greeting and fact.

get greeting will generate a greeting based on url request. if pathname includes a name, greeting will address that name. if query of url includes a salutation in the form of ?salutation = x greeting will also use that salutation. 

get fact will generate and respond with random fact about http

incase of invalid method or path API will respond with the message containing the path and method that was requested.