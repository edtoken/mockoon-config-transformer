# Routes



## POST /v1/3d\_secure
> <p>Initiate 3D Secure authentication.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/3d_secure/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/3d_secure/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/3d_secure/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/3d_secure/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/3d\_secure/:three\_d\_secure
> <p>Retrieves a 3D Secure object.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/3d_secure/:three_d_secure/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/3d_secure/:three_d_secure/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/3d_secure/:three_d_secure/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/3d_secure/:three_d_secure/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## DELETE /v1/account
> <p>With <a href="/docs/connect">Connect</a>, you can delete accounts you manage.</p>
>
> <p>Accounts created using test-mode keys can be deleted at any time. Custom or Express accounts created using live-mode keys can only be deleted once all balances are zero.</p>
>
> <p>If you want to delete your own account, use the <a href="https://dashboard.stripe.com/account">account information tab in your account settings</a> instead.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/account/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[delete]/v1/account/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/account/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[delete]/v1/account/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/account
> <p>Retrieves the details of an account.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/account/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/account/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/account/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/account/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/account
> <p>Updates a <a href="/docs/connect/accounts">connected account</a> by setting the values of the parameters passed. Any parameters not provided are left unchanged. Most parameters can be changed only for Custom accounts. (These are marked <strong>Custom Only</strong> below.) Parameters marked <strong>Custom and Express</strong> are not supported for Standard accounts.</p>
>
> <p>To update your own account, use the <a href="https://dashboard.stripe.com/account">Dashboard</a>. Refer to our <a href="/docs/connect/updating-accounts">Connect</a> documentation to learn more about updating accounts.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/account/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/account/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/account/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/account/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/account/bank\_accounts
> <p>Create an external account for a given account.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/account/bank_accounts/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/account/bank_accounts/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/account/bank_accounts/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/account/bank_accounts/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## DELETE /v1/account/bank\_accounts/:id
> <p>Delete a specified external account for a given account.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/account/bank_accounts/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[delete]/v1/account/bank_accounts/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/account/bank_accounts/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[delete]/v1/account/bank_accounts/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/account/bank\_accounts/:id
> <p>Retrieve a specified external account for a given account.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/account/bank_accounts/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/account/bank_accounts/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/account/bank_accounts/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/account/bank_accounts/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/account/bank\_accounts/:id
> <p>Updates the metadata, account holder name, account holder type of a bank account belonging to a <a href="/docs/connect/custom-accounts">Custom account</a>, and optionally sets it as the default for its currency. Other bank account details are not editable by design.</p>
>
> <p>You can re-enable a disabled bank account by performing an update call without providing any arguments or changes.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/account/bank_accounts/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/account/bank_accounts/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/account/bank_accounts/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/account/bank_accounts/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/account/capabilities
> <p>Returns a list of capabilities associated with the account. The capabilities are returned sorted by creation date, with the most recent capability appearing first.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/account/capabilities/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/account/capabilities/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/account/capabilities/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/account/capabilities/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/account/capabilities/:capability
> <p>Retrieves information about the specified Account Capability.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/account/capabilities/:capability/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/account/capabilities/:capability/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/account/capabilities/:capability/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/account/capabilities/:capability/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/account/capabilities/:capability
> <p>Updates an existing Account Capability.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/account/capabilities/:capability/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/account/capabilities/:capability/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/account/capabilities/:capability/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/account/capabilities/:capability/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/account/external\_accounts
> <p>List external accounts for an account.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/account/external_accounts/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/account/external_accounts/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/account/external_accounts/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/account/external_accounts/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/account/external\_accounts
> <p>Create an external account for a given account.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/account/external_accounts/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/account/external_accounts/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/account/external_accounts/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/account/external_accounts/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## DELETE /v1/account/external\_accounts/:id
> <p>Delete a specified external account for a given account.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/account/external_accounts/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[delete]/v1/account/external_accounts/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/account/external_accounts/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[delete]/v1/account/external_accounts/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/account/external\_accounts/:id
> <p>Retrieve a specified external account for a given account.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/account/external_accounts/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/account/external_accounts/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/account/external_accounts/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/account/external_accounts/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/account/external\_accounts/:id
> <p>Updates the metadata, account holder name, account holder type of a bank account belonging to a <a href="/docs/connect/custom-accounts">Custom account</a>, and optionally sets it as the default for its currency. Other bank account details are not editable by design.</p>
>
> <p>You can re-enable a disabled bank account by performing an update call without providing any arguments or changes.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/account/external_accounts/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/account/external_accounts/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/account/external_accounts/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/account/external_accounts/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/account/login\_links
> <p>Creates a single-use login link for an Express account to access their Stripe dashboard.</p>
>
> <p><strong>You may only create login links for <a href="/docs/connect/express-accounts">Express accounts</a> connected to your platform</strong>.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/account/login_links/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/account/login_links/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/account/login_links/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/account/login_links/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/account/people
> <p>Returns a list of people associated with the account’s legal entity. The people are returned sorted by creation date, with the most recent people appearing first.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/account/people/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/account/people/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/account/people/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/account/people/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/account/people
> <p>Creates a new person.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/account/people/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/account/people/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/account/people/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/account/people/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## DELETE /v1/account/people/:person
> <p>Deletes an existing person’s relationship to the account’s legal entity. Any person with a relationship for an account can be deleted through the API, except if the person is the <code>account_opener</code>. If your integration is using the <code>executive</code> parameter, you cannot delete the only verified <code>executive</code> on file.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/account/people/:person/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[delete]/v1/account/people/:person/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/account/people/:person/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[delete]/v1/account/people/:person/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/account/people/:person
> <p>Retrieves an existing person.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/account/people/:person/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/account/people/:person/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/account/people/:person/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/account/people/:person/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/account/people/:person
> <p>Updates an existing person.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/account/people/:person/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/account/people/:person/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/account/people/:person/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/account/people/:person/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/account/persons
> <p>Returns a list of people associated with the account’s legal entity. The people are returned sorted by creation date, with the most recent people appearing first.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/account/persons/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/account/persons/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/account/persons/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/account/persons/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/account/persons
> <p>Creates a new person.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/account/persons/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/account/persons/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/account/persons/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/account/persons/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## DELETE /v1/account/persons/:person
> <p>Deletes an existing person’s relationship to the account’s legal entity. Any person with a relationship for an account can be deleted through the API, except if the person is the <code>account_opener</code>. If your integration is using the <code>executive</code> parameter, you cannot delete the only verified <code>executive</code> on file.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/account/persons/:person/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[delete]/v1/account/persons/:person/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/account/persons/:person/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[delete]/v1/account/persons/:person/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/account/persons/:person
> <p>Retrieves an existing person.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/account/persons/:person/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/account/persons/:person/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/account/persons/:person/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/account/persons/:person/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/account/persons/:person
> <p>Updates an existing person.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/account/persons/:person/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/account/persons/:person/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/account/persons/:person/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/account/persons/:person/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/account\_links
> <p>Creates an AccountLink object that includes a single-use Stripe URL that the platform can redirect their user to in order to take them through the Connect Onboarding flow.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/account_links/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/account_links/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/account_links/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/account_links/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/accounts
> <p>Returns a list of accounts connected to your platform via <a href="/docs/connect">Connect</a>. If you’re not a platform, the list is empty.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/accounts/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/accounts/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/accounts/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/accounts/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/accounts
> <p>With <a href="/docs/connect">Connect</a>, you can create Stripe accounts for your users.
> To do this, you’ll first need to <a href="https://dashboard.stripe.com/account/applications/settings">register your platform</a>.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/accounts/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/accounts/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/accounts/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/accounts/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## DELETE /v1/accounts/:account
> <p>With <a href="/docs/connect">Connect</a>, you can delete accounts you manage.</p>
>
> <p>Accounts created using test-mode keys can be deleted at any time. Custom or Express accounts created using live-mode keys can only be deleted once all balances are zero.</p>
>
> <p>If you want to delete your own account, use the <a href="https://dashboard.stripe.com/account">account information tab in your account settings</a> instead.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/accounts/:account/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[delete]/v1/accounts/:account/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/accounts/:account/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[delete]/v1/accounts/:account/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/accounts/:account
> <p>Retrieves the details of an account.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/accounts/:account/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/accounts/:account/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/accounts/:account/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/accounts/:account/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/accounts/:account
> <p>Updates a <a href="/docs/connect/accounts">connected account</a> by setting the values of the parameters passed. Any parameters not provided are left unchanged. Most parameters can be changed only for Custom accounts. (These are marked <strong>Custom Only</strong> below.) Parameters marked <strong>Custom and Express</strong> are not supported for Standard accounts.</p>
>
> <p>To update your own account, use the <a href="https://dashboard.stripe.com/account">Dashboard</a>. Refer to our <a href="/docs/connect/updating-accounts">Connect</a> documentation to learn more about updating accounts.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/accounts/:account/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/accounts/:account/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/accounts/:account/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/accounts/:account/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/accounts/:account/bank\_accounts
> <p>Create an external account for a given account.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/accounts/:account/bank_accounts/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/accounts/:account/bank_accounts/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/accounts/:account/bank_accounts/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/accounts/:account/bank_accounts/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## DELETE /v1/accounts/:account/bank\_accounts/:id
> <p>Delete a specified external account for a given account.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/accounts/:account/bank_accounts/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[delete]/v1/accounts/:account/bank_accounts/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/accounts/:account/bank_accounts/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[delete]/v1/accounts/:account/bank_accounts/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/accounts/:account/bank\_accounts/:id
> <p>Retrieve a specified external account for a given account.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/accounts/:account/bank_accounts/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/accounts/:account/bank_accounts/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/accounts/:account/bank_accounts/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/accounts/:account/bank_accounts/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/accounts/:account/bank\_accounts/:id
> <p>Updates the metadata, account holder name, account holder type of a bank account belonging to a <a href="/docs/connect/custom-accounts">Custom account</a>, and optionally sets it as the default for its currency. Other bank account details are not editable by design.</p>
>
> <p>You can re-enable a disabled bank account by performing an update call without providing any arguments or changes.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/accounts/:account/bank_accounts/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/accounts/:account/bank_accounts/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/accounts/:account/bank_accounts/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/accounts/:account/bank_accounts/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/accounts/:account/capabilities
> <p>Returns a list of capabilities associated with the account. The capabilities are returned sorted by creation date, with the most recent capability appearing first.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/accounts/:account/capabilities/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/accounts/:account/capabilities/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/accounts/:account/capabilities/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/accounts/:account/capabilities/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/accounts/:account/capabilities/:capability
> <p>Retrieves information about the specified Account Capability.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/accounts/:account/capabilities/:capability/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/accounts/:account/capabilities/:capability/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/accounts/:account/capabilities/:capability/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/accounts/:account/capabilities/:capability/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/accounts/:account/capabilities/:capability
> <p>Updates an existing Account Capability.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/accounts/:account/capabilities/:capability/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/accounts/:account/capabilities/:capability/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/accounts/:account/capabilities/:capability/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/accounts/:account/capabilities/:capability/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/accounts/:account/external\_accounts
> <p>List external accounts for an account.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/accounts/:account/external_accounts/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/accounts/:account/external_accounts/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/accounts/:account/external_accounts/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/accounts/:account/external_accounts/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/accounts/:account/external\_accounts
> <p>Create an external account for a given account.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/accounts/:account/external_accounts/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/accounts/:account/external_accounts/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/accounts/:account/external_accounts/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/accounts/:account/external_accounts/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## DELETE /v1/accounts/:account/external\_accounts/:id
> <p>Delete a specified external account for a given account.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/accounts/:account/external_accounts/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[delete]/v1/accounts/:account/external_accounts/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/accounts/:account/external_accounts/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[delete]/v1/accounts/:account/external_accounts/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/accounts/:account/external\_accounts/:id
> <p>Retrieve a specified external account for a given account.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/accounts/:account/external_accounts/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/accounts/:account/external_accounts/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/accounts/:account/external_accounts/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/accounts/:account/external_accounts/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/accounts/:account/external\_accounts/:id
> <p>Updates the metadata, account holder name, account holder type of a bank account belonging to a <a href="/docs/connect/custom-accounts">Custom account</a>, and optionally sets it as the default for its currency. Other bank account details are not editable by design.</p>
>
> <p>You can re-enable a disabled bank account by performing an update call without providing any arguments or changes.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/accounts/:account/external_accounts/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/accounts/:account/external_accounts/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/accounts/:account/external_accounts/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/accounts/:account/external_accounts/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/accounts/:account/login\_links
> <p>Creates a single-use login link for an Express account to access their Stripe dashboard.</p>
>
> <p><strong>You may only create login links for <a href="/docs/connect/express-accounts">Express accounts</a> connected to your platform</strong>.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/accounts/:account/login_links/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/accounts/:account/login_links/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/accounts/:account/login_links/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/accounts/:account/login_links/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/accounts/:account/people
> <p>Returns a list of people associated with the account’s legal entity. The people are returned sorted by creation date, with the most recent people appearing first.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/accounts/:account/people/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/accounts/:account/people/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/accounts/:account/people/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/accounts/:account/people/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/accounts/:account/people
> <p>Creates a new person.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/accounts/:account/people/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/accounts/:account/people/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/accounts/:account/people/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/accounts/:account/people/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## DELETE /v1/accounts/:account/people/:person
> <p>Deletes an existing person’s relationship to the account’s legal entity. Any person with a relationship for an account can be deleted through the API, except if the person is the <code>account_opener</code>. If your integration is using the <code>executive</code> parameter, you cannot delete the only verified <code>executive</code> on file.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/accounts/:account/people/:person/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[delete]/v1/accounts/:account/people/:person/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/accounts/:account/people/:person/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[delete]/v1/accounts/:account/people/:person/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/accounts/:account/people/:person
> <p>Retrieves an existing person.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/accounts/:account/people/:person/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/accounts/:account/people/:person/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/accounts/:account/people/:person/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/accounts/:account/people/:person/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/accounts/:account/people/:person
> <p>Updates an existing person.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/accounts/:account/people/:person/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/accounts/:account/people/:person/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/accounts/:account/people/:person/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/accounts/:account/people/:person/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/accounts/:account/persons
> <p>Returns a list of people associated with the account’s legal entity. The people are returned sorted by creation date, with the most recent people appearing first.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/accounts/:account/persons/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/accounts/:account/persons/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/accounts/:account/persons/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/accounts/:account/persons/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/accounts/:account/persons
> <p>Creates a new person.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/accounts/:account/persons/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/accounts/:account/persons/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/accounts/:account/persons/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/accounts/:account/persons/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## DELETE /v1/accounts/:account/persons/:person
> <p>Deletes an existing person’s relationship to the account’s legal entity. Any person with a relationship for an account can be deleted through the API, except if the person is the <code>account_opener</code>. If your integration is using the <code>executive</code> parameter, you cannot delete the only verified <code>executive</code> on file.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/accounts/:account/persons/:person/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[delete]/v1/accounts/:account/persons/:person/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/accounts/:account/persons/:person/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[delete]/v1/accounts/:account/persons/:person/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/accounts/:account/persons/:person
> <p>Retrieves an existing person.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/accounts/:account/persons/:person/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/accounts/:account/persons/:person/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/accounts/:account/persons/:person/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/accounts/:account/persons/:person/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/accounts/:account/persons/:person
> <p>Updates an existing person.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/accounts/:account/persons/:person/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/accounts/:account/persons/:person/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/accounts/:account/persons/:person/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/accounts/:account/persons/:person/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/accounts/:account/reject
> <p>With <a href="/docs/connect">Connect</a>, you may flag accounts as suspicious.</p>
>
> <p>Test-mode Custom and Express accounts can be rejected at any time. Accounts created using live-mode keys may only be rejected once all balances are zero.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/accounts/:account/reject/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/accounts/:account/reject/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/accounts/:account/reject/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/accounts/:account/reject/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/apple\_pay/domains
> <p>List apple pay domains.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/apple_pay/domains/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/apple_pay/domains/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/apple_pay/domains/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/apple_pay/domains/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/apple\_pay/domains
> <p>Create an apple pay domain.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/apple_pay/domains/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/apple_pay/domains/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/apple_pay/domains/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/apple_pay/domains/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## DELETE /v1/apple\_pay/domains/:domain
> <p>Delete an apple pay domain.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/apple_pay/domains/:domain/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[delete]/v1/apple_pay/domains/:domain/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/apple_pay/domains/:domain/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[delete]/v1/apple_pay/domains/:domain/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/apple\_pay/domains/:domain
> <p>Retrieve an apple pay domain.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/apple_pay/domains/:domain/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/apple_pay/domains/:domain/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/apple_pay/domains/:domain/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/apple_pay/domains/:domain/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/application\_fees
> <p>Returns a list of application fees you’ve previously collected. The application fees are returned in sorted order, with the most recent fees appearing first.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/application_fees/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/application_fees/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/application_fees/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/application_fees/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/application\_fees/:fee/refunds/:id
> <p>By default, you can see the 10 most recent refunds stored directly on the application fee object, but you can also retrieve details about a specific refund stored on the application fee.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/application_fees/:fee/refunds/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/application_fees/:fee/refunds/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/application_fees/:fee/refunds/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/application_fees/:fee/refunds/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/application\_fees/:fee/refunds/:id
> <p>Updates the specified application fee refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
>
> <p>This request only accepts metadata as an argument.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/application_fees/:fee/refunds/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/application_fees/:fee/refunds/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/application_fees/:fee/refunds/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/application_fees/:fee/refunds/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/application\_fees/:id
> <p>Retrieves the details of an application fee that your account has collected. The same information is returned when refunding the application fee.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/application_fees/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/application_fees/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/application_fees/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/application_fees/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/application\_fees/:id/refund

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/application_fees/:id/refund/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/application_fees/:id/refund/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/application_fees/:id/refund/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/application_fees/:id/refund/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/application\_fees/:id/refunds
> <p>You can see a list of the refunds belonging to a specific application fee. Note that the 10 most recent refunds are always available by default on the application fee object. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional refunds.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/application_fees/:id/refunds/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/application_fees/:id/refunds/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/application_fees/:id/refunds/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/application_fees/:id/refunds/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/application\_fees/:id/refunds
> <p>Refunds an application fee that has previously been collected but not yet refunded.
> Funds will be refunded to the Stripe account from which the fee was originally collected.</p>
>
> <p>You can optionally refund only part of an application fee.
> You can do so multiple times, until the entire fee has been refunded.</p>
>
> <p>Once entirely refunded, an application fee can’t be refunded again.
> This method will raise an error when called on an already-refunded application fee,
> or when trying to refund more money than is left on an application fee.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/application_fees/:id/refunds/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/application_fees/:id/refunds/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/application_fees/:id/refunds/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/application_fees/:id/refunds/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/balance
> <p>Retrieves the current account balance, based on the authentication that was used to make the request.
>  For a sample request, see <a href="/docs/connect/account-balances#accounting-for-negative-balances">Accounting for negative balances</a>.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/balance/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/balance/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/balance/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/balance/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/balance/history
> <p>Returns a list of transactions that have contributed to the Stripe account balance (e.g., charges, transfers, and so forth). The transactions are returned in sorted order, with the most recent transactions appearing first.</p>
>
> <p>Note that this endpoint was previously called “Balance history” and used the path <code>/v1/balance/history</code>.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/balance/history/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/balance/history/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/balance/history/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/balance/history/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/balance/history/:id
> <p>Retrieves the balance transaction with the given ID.</p>
>
> <p>Note that this endpoint previously used the path <code>/v1/balance/history/:id</code>.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/balance/history/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/balance/history/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/balance/history/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/balance/history/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/balance\_transactions
> <p>Returns a list of transactions that have contributed to the Stripe account balance (e.g., charges, transfers, and so forth). The transactions are returned in sorted order, with the most recent transactions appearing first.</p>
>
> <p>Note that this endpoint was previously called “Balance history” and used the path <code>/v1/balance/history</code>.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/balance_transactions/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/balance_transactions/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/balance_transactions/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/balance_transactions/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/balance\_transactions/:id
> <p>Retrieves the balance transaction with the given ID.</p>
>
> <p>Note that this endpoint previously used the path <code>/v1/balance/history/:id</code>.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/balance_transactions/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/balance_transactions/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/balance_transactions/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/balance_transactions/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/billing\_portal/configurations
> <p>Returns a list of configurations that describe the functionality of the customer portal.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/billing_portal/configurations/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/billing_portal/configurations/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/billing_portal/configurations/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/billing_portal/configurations/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/billing\_portal/configurations
> <p>Creates a configuration that describes the functionality and behavior of a PortalSession</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/billing_portal/configurations/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/billing_portal/configurations/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/billing_portal/configurations/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/billing_portal/configurations/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/billing\_portal/configurations/:configuration
> <p>Retrieves a configuration that describes the functionality of the customer portal.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/billing_portal/configurations/:configuration/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/billing_portal/configurations/:configuration/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/billing_portal/configurations/:configuration/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/billing_portal/configurations/:configuration/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/billing\_portal/configurations/:configuration
> <p>Updates a configuration that describes the functionality of the customer portal.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/billing_portal/configurations/:configuration/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/billing_portal/configurations/:configuration/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/billing_portal/configurations/:configuration/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/billing_portal/configurations/:configuration/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/billing\_portal/sessions
> <p>Creates a session of the customer portal.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/billing_portal/sessions/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/billing_portal/sessions/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/billing_portal/sessions/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/billing_portal/sessions/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/bitcoin/receivers
> <p>Returns a list of your receivers. Receivers are returned sorted by creation date, with the most recently created receivers appearing first.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/bitcoin/receivers/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/bitcoin/receivers/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/bitcoin/receivers/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/bitcoin/receivers/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/bitcoin/receivers/:id
> <p>Retrieves the Bitcoin receiver with the given ID.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/bitcoin/receivers/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/bitcoin/receivers/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/bitcoin/receivers/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/bitcoin/receivers/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/bitcoin/receivers/:receiver/transactions
> <p>List bitcoin transacitons for a given receiver.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/bitcoin/receivers/:receiver/transactions/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/bitcoin/receivers/:receiver/transactions/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/bitcoin/receivers/:receiver/transactions/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/bitcoin/receivers/:receiver/transactions/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/bitcoin/transactions
> <p>List bitcoin transacitons for a given receiver.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/bitcoin/transactions/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/bitcoin/transactions/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/bitcoin/transactions/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/bitcoin/transactions/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/charges
> <p>Returns a list of charges you’ve previously created. The charges are returned in sorted order, with the most recent charges appearing first.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/charges/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/charges/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/charges/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/charges/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/charges
> <p>To charge a credit card or other payment source, you create a <code>Charge</code> object. If your API key is in test mode, the supplied payment source (e.g., card) won’t actually be charged, although everything else will occur as if in live mode. (Stripe assumes that the charge would have completed successfully).</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/charges/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/charges/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/charges/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/charges/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/charges/:charge
> <p>Retrieves the details of a charge that has previously been created. Supply the unique charge ID that was returned from your previous request, and Stripe will return the corresponding charge information. The same information is returned when creating or refunding the charge.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/charges/:charge/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/charges/:charge/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/charges/:charge/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/charges/:charge/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/charges/:charge
> <p>Updates the specified charge by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/charges/:charge/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/charges/:charge/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/charges/:charge/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/charges/:charge/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/charges/:charge/capture
> <p>Capture the payment of an existing, uncaptured, charge. This is the second half of the two-step payment flow, where first you <a href="#create_charge">created a charge</a> with the capture option set to false.</p>
>
> <p>Uncaptured payments expire exactly seven days after they are created. If they are not captured by that point in time, they will be marked as refunded and will no longer be capturable.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/charges/:charge/capture/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/charges/:charge/capture/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/charges/:charge/capture/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/charges/:charge/capture/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/charges/:charge/dispute
> <p>Retrieve a dispute for a specified charge.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/charges/:charge/dispute/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/charges/:charge/dispute/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/charges/:charge/dispute/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/charges/:charge/dispute/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/charges/:charge/dispute

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/charges/:charge/dispute/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/charges/:charge/dispute/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/charges/:charge/dispute/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/charges/:charge/dispute/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/charges/:charge/dispute/close

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/charges/:charge/dispute/close/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/charges/:charge/dispute/close/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/charges/:charge/dispute/close/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/charges/:charge/dispute/close/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/charges/:charge/refund
> <p>When you create a new refund, you must specify a Charge or a PaymentIntent object on which to create it.</p>
>
> <p>Creating a new refund will refund a charge that has previously been created but not yet refunded.
> Funds will be refunded to the credit or debit card that was originally charged.</p>
>
> <p>You can optionally refund only part of a charge.
> You can do so multiple times, until the entire charge has been refunded.</p>
>
> <p>Once entirely refunded, a charge can’t be refunded again.
> This method will raise an error when called on an already-refunded charge,
> or when trying to refund more money than is left on a charge.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/charges/:charge/refund/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/charges/:charge/refund/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/charges/:charge/refund/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/charges/:charge/refund/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/charges/:charge/refunds
> <p>You can see a list of the refunds belonging to a specific charge. Note that the 10 most recent refunds are always available by default on the charge object. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional refunds.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/charges/:charge/refunds/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/charges/:charge/refunds/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/charges/:charge/refunds/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/charges/:charge/refunds/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/charges/:charge/refunds
> <p>Create a refund.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/charges/:charge/refunds/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/charges/:charge/refunds/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/charges/:charge/refunds/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/charges/:charge/refunds/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/charges/:charge/refunds/:refund
> <p>Retrieves the details of an existing refund.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/charges/:charge/refunds/:refund/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/charges/:charge/refunds/:refund/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/charges/:charge/refunds/:refund/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/charges/:charge/refunds/:refund/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/charges/:charge/refunds/:refund
> <p>Update a specified refund.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/charges/:charge/refunds/:refund/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/charges/:charge/refunds/:refund/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/charges/:charge/refunds/:refund/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/charges/:charge/refunds/:refund/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/checkout/sessions
> <p>Returns a list of Checkout Sessions.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/checkout/sessions/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/checkout/sessions/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/checkout/sessions/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/checkout/sessions/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/checkout/sessions
> <p>Creates a Session object.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/checkout/sessions/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/checkout/sessions/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/checkout/sessions/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/checkout/sessions/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/checkout/sessions/:session
> <p>Retrieves a Session object.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/checkout/sessions/:session/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/checkout/sessions/:session/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/checkout/sessions/:session/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/checkout/sessions/:session/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/checkout/sessions/:session/line\_items
> <p>When retrieving a Checkout Session, there is an includable <strong>line_items</strong> property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/checkout/sessions/:session/line_items/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/checkout/sessions/:session/line_items/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/checkout/sessions/:session/line_items/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/checkout/sessions/:session/line_items/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/country\_specs
> <p>Lists all Country Spec objects available in the API.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/country_specs/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/country_specs/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/country_specs/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/country_specs/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/country\_specs/:country
> <p>Returns a Country Spec for a given Country code.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/country_specs/:country/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/country_specs/:country/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/country_specs/:country/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/country_specs/:country/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/coupons
> <p>Returns a list of your coupons.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/coupons/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/coupons/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/coupons/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/coupons/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/coupons
> <p>You can create coupons easily via the <a href="https://dashboard.stripe.com/coupons">coupon management</a> page of the Stripe dashboard. Coupon creation is also accessible via the API if you need to create coupons on the fly.</p>
>
> <p>A coupon has either a <code>percent_off</code> or an <code>amount_off</code> and <code>currency</code>. If you set an <code>amount_off</code>, that amount will be subtracted from any invoice’s subtotal. For example, an invoice with a subtotal of <currency>100</currency> will have a final total of <currency>0</currency> if a coupon with an <code>amount_off</code> of <amount>200</amount> is applied to it and an invoice with a subtotal of <currency>300</currency> will have a final total of <currency>100</currency> if a coupon with an <code>amount_off</code> of <amount>200</amount> is applied to it.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/coupons/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/coupons/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/coupons/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/coupons/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## DELETE /v1/coupons/:coupon
> <p>You can delete coupons via the <a href="https://dashboard.stripe.com/coupons">coupon management</a> page of the Stripe dashboard. However, deleting a coupon does not affect any customers who have already applied the coupon; it means that new customers can’t redeem the coupon. You can also delete coupons via the API.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/coupons/:coupon/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[delete]/v1/coupons/:coupon/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/coupons/:coupon/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[delete]/v1/coupons/:coupon/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/coupons/:coupon
> <p>Retrieves the coupon with the given ID.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/coupons/:coupon/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/coupons/:coupon/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/coupons/:coupon/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/coupons/:coupon/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/coupons/:coupon
> <p>Updates the metadata of a coupon. Other coupon details (currency, duration, amount_off) are, by design, not editable.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/coupons/:coupon/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/coupons/:coupon/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/coupons/:coupon/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/coupons/:coupon/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/credit\_notes
> <p>Returns a list of credit notes.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/credit_notes/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/credit_notes/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/credit_notes/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/credit_notes/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/credit\_notes
> <p>Issue a credit note to adjust the amount of a finalized invoice. For a <code>status=open</code> invoice, a credit note reduces
> its <code>amount_due</code>. For a <code>status=paid</code> invoice, a credit note does not affect its <code>amount_due</code>. Instead, it can result
> in any combination of the following:</p>
>
> <ul>
> <li>Refund: create a new refund (using <code>refund_amount</code>) or link an existing refund (using <code>refund</code>).</li>
> <li>Customer balance credit: credit the customer’s balance (using <code>credit_amount</code>) which will be automatically applied to their next invoice when it’s finalized.</li>
> <li>Outside of Stripe credit: record the amount that is or will be credited outside of Stripe (using <code>out_of_band_amount</code>).</li>
> </ul>
>
> <p>For post-payment credit notes the sum of the refund, credit and outside of Stripe amounts must equal the credit note total.</p>
>
> <p>You may issue multiple credit notes for an invoice. Each credit note will increment the invoice’s <code>pre_payment_credit_notes_amount</code>
> or <code>post_payment_credit_notes_amount</code> depending on its <code>status</code> at the time of credit note creation.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/credit_notes/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/credit_notes/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/credit_notes/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/credit_notes/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/credit\_notes/preview
> <p>Get a preview of a credit note without creating it.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/credit_notes/preview/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/credit_notes/preview/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/credit_notes/preview/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/credit_notes/preview/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/credit\_notes/preview/lines
> <p>When retrieving a credit note preview, you’ll get a <strong>lines</strong> property containing the first handful of those items. This URL you can retrieve the full (paginated) list of line items.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/credit_notes/preview/lines/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/credit_notes/preview/lines/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/credit_notes/preview/lines/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/credit_notes/preview/lines/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/credit\_notes/:credit\_note/lines
> <p>When retrieving a credit note, you’ll get a <strong>lines</strong> property containing the the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/credit_notes/:credit_note/lines/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/credit_notes/:credit_note/lines/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/credit_notes/:credit_note/lines/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/credit_notes/:credit_note/lines/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/credit\_notes/:id
> <p>Retrieves the credit note object with the given identifier.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/credit_notes/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/credit_notes/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/credit_notes/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/credit_notes/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/credit\_notes/:id
> <p>Updates an existing credit note.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/credit_notes/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/credit_notes/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/credit_notes/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/credit_notes/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/credit\_notes/:id/void
> <p>Marks a credit note as void. Learn more about <a href="/docs/billing/invoices/credit-notes#voiding">voiding credit notes</a>.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/credit_notes/:id/void/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/credit_notes/:id/void/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/credit_notes/:id/void/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/credit_notes/:id/void/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/customers
> <p>Returns a list of your customers. The customers are returned sorted by creation date, with the most recent customers appearing first.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/customers/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/customers/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/customers/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/customers/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/customers
> <p>Creates a new customer object.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/customers/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/customers/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/customers/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/customers/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## DELETE /v1/customers/:customer
> <p>Permanently deletes a customer. It cannot be undone. Also immediately cancels any active subscriptions on the customer.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/customers/:customer/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[delete]/v1/customers/:customer/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/customers/:customer/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[delete]/v1/customers/:customer/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/customers/:customer
> <p>Retrieves the details of an existing customer. You need only supply the unique customer identifier that was returned upon customer creation.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/customers/:customer/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/customers/:customer/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/customers/:customer/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/customers/:customer/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/customers/:customer
> <p>Updates the specified customer by setting the values of the parameters passed. Any parameters not provided will be left unchanged. For example, if you pass the <strong>source</strong> parameter, that becomes the customer’s active source (e.g., a card) to be used for all charges in the future. When you update a customer to a new valid card source by passing the <strong>source</strong> parameter: for each of the customer’s current subscriptions, if the subscription bills automatically and is in the <code>past_due</code> state, then the latest open invoice for the subscription with automatic collection enabled will be retried. This retry will not count as an automatic retry, and will not affect the next regularly scheduled payment for the invoice. Changing the <strong>default_source</strong> for a customer will not trigger this behavior.</p>
>
> <p>This request accepts mostly the same arguments as the customer creation call.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/customers/:customer/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/customers/:customer/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/customers/:customer/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/customers/:customer/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/customers/:customer/balance\_transactions
> <p>Returns a list of transactions that updated the customer’s <a href="/docs/billing/customer/balance">balances</a>.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/customers/:customer/balance_transactions/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/customers/:customer/balance_transactions/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/customers/:customer/balance_transactions/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/customers/:customer/balance_transactions/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/customers/:customer/balance\_transactions
> <p>Creates an immutable transaction that updates the customer’s credit <a href="/docs/billing/customer/balance">balance</a>.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/customers/:customer/balance_transactions/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/customers/:customer/balance_transactions/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/customers/:customer/balance_transactions/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/customers/:customer/balance_transactions/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/customers/:customer/balance\_transactions/:transaction
> <p>Retrieves a specific customer balance transaction that updated the customer’s <a href="/docs/billing/customer/balance">balances</a>.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/customers/:customer/balance_transactions/:transaction/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/customers/:customer/balance_transactions/:transaction/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/customers/:customer/balance_transactions/:transaction/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/customers/:customer/balance_transactions/:transaction/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/customers/:customer/balance\_transactions/:transaction
> <p>Most credit balance transaction fields are immutable, but you may update its <code>description</code> and <code>metadata</code>.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/customers/:customer/balance_transactions/:transaction/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/customers/:customer/balance_transactions/:transaction/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/customers/:customer/balance_transactions/:transaction/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/customers/:customer/balance_transactions/:transaction/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/customers/:customer/bank\_accounts
> <p>You can see a list of the bank accounts belonging to a Customer. Note that the 10 most recent sources are always available by default on the Customer. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional bank accounts.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/customers/:customer/bank_accounts/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/customers/:customer/bank_accounts/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/customers/:customer/bank_accounts/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/customers/:customer/bank_accounts/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/customers/:customer/bank\_accounts
> <p>When you create a new credit card, you must specify a customer or recipient on which to create it.</p>
>
> <p>If the card’s owner has no default card, then the new card will become the default.
> However, if the owner already has a default, then it will not change.
> To change the default, you should <a href="/docs/api#update_customer">update the customer</a> to have a new <code>default_source</code>.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/customers/:customer/bank_accounts/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/customers/:customer/bank_accounts/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/customers/:customer/bank_accounts/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/customers/:customer/bank_accounts/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## DELETE /v1/customers/:customer/bank\_accounts/:id
> <p>Delete a specified source for a given customer.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/customers/:customer/bank_accounts/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[delete]/v1/customers/:customer/bank_accounts/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/customers/:customer/bank_accounts/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[delete]/v1/customers/:customer/bank_accounts/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/customers/:customer/bank\_accounts/:id
> <p>By default, you can see the 10 most recent sources stored on a Customer directly on the object, but you can also retrieve details about a specific bank account stored on the Stripe account.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/customers/:customer/bank_accounts/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/customers/:customer/bank_accounts/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/customers/:customer/bank_accounts/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/customers/:customer/bank_accounts/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/customers/:customer/bank\_accounts/:id
> <p>Update a specified source for a given customer.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/customers/:customer/bank_accounts/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/customers/:customer/bank_accounts/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/customers/:customer/bank_accounts/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/customers/:customer/bank_accounts/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/customers/:customer/bank\_accounts/:id/verify
> <p>Verify a specified bank account for a given customer.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/customers/:customer/bank_accounts/:id/verify/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/customers/:customer/bank_accounts/:id/verify/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/customers/:customer/bank_accounts/:id/verify/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/customers/:customer/bank_accounts/:id/verify/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/customers/:customer/cards
> <p>You can see a list of the cards belonging to a customer.
> Note that the 10 most recent sources are always available on the <code>Customer</code> object.
> If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional cards.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/customers/:customer/cards/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/customers/:customer/cards/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/customers/:customer/cards/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/customers/:customer/cards/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/customers/:customer/cards
> <p>When you create a new credit card, you must specify a customer or recipient on which to create it.</p>
>
> <p>If the card’s owner has no default card, then the new card will become the default.
> However, if the owner already has a default, then it will not change.
> To change the default, you should <a href="/docs/api#update_customer">update the customer</a> to have a new <code>default_source</code>.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/customers/:customer/cards/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/customers/:customer/cards/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/customers/:customer/cards/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/customers/:customer/cards/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## DELETE /v1/customers/:customer/cards/:id
> <p>Delete a specified source for a given customer.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/customers/:customer/cards/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[delete]/v1/customers/:customer/cards/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/customers/:customer/cards/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[delete]/v1/customers/:customer/cards/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/customers/:customer/cards/:id
> <p>You can always see the 10 most recent cards directly on a customer; this method lets you retrieve details about a specific card stored on the customer.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/customers/:customer/cards/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/customers/:customer/cards/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/customers/:customer/cards/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/customers/:customer/cards/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/customers/:customer/cards/:id
> <p>Update a specified source for a given customer.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/customers/:customer/cards/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/customers/:customer/cards/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/customers/:customer/cards/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/customers/:customer/cards/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## DELETE /v1/customers/:customer/discount
> <p>Removes the currently applied discount on a customer.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/customers/:customer/discount/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[delete]/v1/customers/:customer/discount/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/customers/:customer/discount/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[delete]/v1/customers/:customer/discount/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/customers/:customer/discount

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/customers/:customer/discount/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/customers/:customer/discount/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/customers/:customer/discount/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/customers/:customer/discount/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/customers/:customer/sources
> <p>List sources for a specified customer.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/customers/:customer/sources/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/customers/:customer/sources/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/customers/:customer/sources/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/customers/:customer/sources/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/customers/:customer/sources
> <p>When you create a new credit card, you must specify a customer or recipient on which to create it.</p>
>
> <p>If the card’s owner has no default card, then the new card will become the default.
> However, if the owner already has a default, then it will not change.
> To change the default, you should <a href="/docs/api#update_customer">update the customer</a> to have a new <code>default_source</code>.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/customers/:customer/sources/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/customers/:customer/sources/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/customers/:customer/sources/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/customers/:customer/sources/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## DELETE /v1/customers/:customer/sources/:id
> <p>Delete a specified source for a given customer.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/customers/:customer/sources/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[delete]/v1/customers/:customer/sources/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/customers/:customer/sources/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[delete]/v1/customers/:customer/sources/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/customers/:customer/sources/:id
> <p>Retrieve a specified source for a given customer.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/customers/:customer/sources/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/customers/:customer/sources/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/customers/:customer/sources/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/customers/:customer/sources/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/customers/:customer/sources/:id
> <p>Update a specified source for a given customer.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/customers/:customer/sources/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/customers/:customer/sources/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/customers/:customer/sources/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/customers/:customer/sources/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/customers/:customer/sources/:id/verify
> <p>Verify a specified bank account for a given customer.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/customers/:customer/sources/:id/verify/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/customers/:customer/sources/:id/verify/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/customers/:customer/sources/:id/verify/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/customers/:customer/sources/:id/verify/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/customers/:customer/subscriptions
> <p>You can see a list of the customer’s active subscriptions. Note that the 10 most recent active subscriptions are always available by default on the customer object. If you need more than those 10, you can use the limit and starting_after parameters to page through additional subscriptions.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/customers/:customer/subscriptions/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/customers/:customer/subscriptions/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/customers/:customer/subscriptions/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/customers/:customer/subscriptions/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/customers/:customer/subscriptions
> <p>Creates a new subscription on an existing customer.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/customers/:customer/subscriptions/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/customers/:customer/subscriptions/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/customers/:customer/subscriptions/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/customers/:customer/subscriptions/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## DELETE /v1/customers/:customer/subscriptions/:subscription\_exposed\_id
> <p>Cancels a customer’s subscription. If you set the <code>at_period_end</code> parameter to <code>true</code>, the subscription will remain active until the end of the period, at which point it will be canceled and not renewed. Otherwise, with the default <code>false</code> value, the subscription is terminated immediately. In either case, the customer will not be charged again for the subscription.</p>
>
> <p>Note, however, that any pending invoice items that you’ve created will still be charged for at the end of the period, unless manually <a href="#delete_invoiceitem">deleted</a>. If you’ve set the subscription to cancel at the end of the period, any pending prorations will also be left in place and collected at the end of the period. But if the subscription is set to cancel immediately, pending prorations will be removed.</p>
>
> <p>By default, upon subscription cancellation, Stripe will stop automatic collection of all finalized invoices for the customer. This is intended to prevent unexpected payment attempts after the customer has canceled a subscription. However, you can resume automatic collection of the invoices manually after subscription cancellation to have us proceed. Or, you could check for unpaid invoices before allowing the customer to cancel the subscription at all.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/customers/:customer/subscriptions/:subscription_exposed_id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[delete]/v1/customers/:customer/subscriptions/:subscription_exposed_id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/customers/:customer/subscriptions/:subscription_exposed_id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[delete]/v1/customers/:customer/subscriptions/:subscription_exposed_id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/customers/:customer/subscriptions/:subscription\_exposed\_id
> <p>Retrieves the subscription with the given ID.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/customers/:customer/subscriptions/:subscription_exposed_id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/customers/:customer/subscriptions/:subscription_exposed_id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/customers/:customer/subscriptions/:subscription_exposed_id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/customers/:customer/subscriptions/:subscription_exposed_id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/customers/:customer/subscriptions/:subscription\_exposed\_id
> <p>Updates an existing subscription on a customer to match the specified parameters. When changing plans or quantities, we will optionally prorate the price we charge next month to make up for any price changes. To preview how the proration will be calculated, use the <a href="#upcoming_invoice">upcoming invoice</a> endpoint.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/customers/:customer/subscriptions/:subscription_exposed_id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/customers/:customer/subscriptions/:subscription_exposed_id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/customers/:customer/subscriptions/:subscription_exposed_id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/customers/:customer/subscriptions/:subscription_exposed_id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## DELETE /v1/customers/:customer/subscriptions/:subscription\_exposed\_id/discount
> <p>Removes the currently applied discount on a customer.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/customers/:customer/subscriptions/:subscription_exposed_id/discount/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[delete]/v1/customers/:customer/subscriptions/:subscription_exposed_id/discount/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/customers/:customer/subscriptions/:subscription_exposed_id/discount/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[delete]/v1/customers/:customer/subscriptions/:subscription_exposed_id/discount/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/customers/:customer/subscriptions/:subscription\_exposed\_id/discount

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/customers/:customer/subscriptions/:subscription_exposed_id/discount/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/customers/:customer/subscriptions/:subscription_exposed_id/discount/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/customers/:customer/subscriptions/:subscription_exposed_id/discount/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/customers/:customer/subscriptions/:subscription_exposed_id/discount/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/customers/:customer/tax\_ids
> <p>Returns a list of tax IDs for a customer.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/customers/:customer/tax_ids/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/customers/:customer/tax_ids/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/customers/:customer/tax_ids/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/customers/:customer/tax_ids/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/customers/:customer/tax\_ids
> <p>Creates a new <code>TaxID</code> object for a customer.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/customers/:customer/tax_ids/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/customers/:customer/tax_ids/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/customers/:customer/tax_ids/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/customers/:customer/tax_ids/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## DELETE /v1/customers/:customer/tax\_ids/:id
> <p>Deletes an existing <code>TaxID</code> object.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/customers/:customer/tax_ids/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[delete]/v1/customers/:customer/tax_ids/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/customers/:customer/tax_ids/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[delete]/v1/customers/:customer/tax_ids/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/customers/:customer/tax\_ids/:id
> <p>Retrieves the <code>TaxID</code> object with the given identifier.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/customers/:customer/tax_ids/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/customers/:customer/tax_ids/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/customers/:customer/tax_ids/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/customers/:customer/tax_ids/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/disputes
> <p>Returns a list of your disputes.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/disputes/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/disputes/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/disputes/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/disputes/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/disputes/:dispute
> <p>Retrieves the dispute with the given ID.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/disputes/:dispute/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/disputes/:dispute/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/disputes/:dispute/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/disputes/:dispute/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/disputes/:dispute
> <p>When you get a dispute, contacting your customer is always the best first step. If that doesn’t work, you can submit evidence to help us resolve the dispute in your favor. You can do this in your <a href="https://dashboard.stripe.com/disputes">dashboard</a>, but if you prefer, you can use the API to submit evidence programmatically.</p>
>
> <p>Depending on your dispute type, different evidence fields will give you a better chance of winning your dispute. To figure out which evidence fields to provide, see our <a href="/docs/disputes/categories">guide to dispute types</a>.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/disputes/:dispute/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/disputes/:dispute/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/disputes/:dispute/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/disputes/:dispute/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/disputes/:dispute/close
> <p>Closing the dispute for a charge indicates that you do not have any evidence to submit and are essentially dismissing the dispute, acknowledging it as lost.</p>
>
> <p>The status of the dispute will change from <code>needs_response</code> to <code>lost</code>. <em>Closing a dispute is irreversible</em>.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/disputes/:dispute/close/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/disputes/:dispute/close/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/disputes/:dispute/close/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/disputes/:dispute/close/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/ephemeral\_keys
> <p>Creates a short-lived API key for a given resource.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/ephemeral_keys/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/ephemeral_keys/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/ephemeral_keys/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/ephemeral_keys/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## DELETE /v1/ephemeral\_keys/:key
> <p>Invalidates a short-lived API key for a given resource.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/ephemeral_keys/:key/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[delete]/v1/ephemeral_keys/:key/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/ephemeral_keys/:key/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[delete]/v1/ephemeral_keys/:key/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/events
> <p>List events, going back up to 30 days. Each event data is rendered according to Stripe API version at its creation time, specified in <a href="/docs/api/events/object">event object</a> <code>api_version</code> attribute (not according to your current Stripe API version or <code>Stripe-Version</code> header).</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/events/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/events/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/events/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/events/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/events/:id
> <p>Retrieves the details of an event. Supply the unique identifier of the event, which you might have received in a webhook.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/events/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/events/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/events/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/events/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/exchange\_rates
> <p>Returns a list of objects that contain the rates at which foreign currencies are converted to one another. Only shows the currencies for which Stripe supports.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/exchange_rates/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/exchange_rates/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/exchange_rates/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/exchange_rates/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/exchange\_rates/:rate\_id
> <p>Retrieves the exchange rates from the given currency to every supported currency.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/exchange_rates/:rate_id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/exchange_rates/:rate_id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/exchange_rates/:rate_id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/exchange_rates/:rate_id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/file\_links
> <p>Returns a list of file links.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/file_links/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/file_links/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/file_links/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/file_links/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/file\_links
> <p>Creates a new file link object.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/file_links/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/file_links/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/file_links/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/file_links/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/file\_links/:link
> <p>Retrieves the file link with the given ID.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/file_links/:link/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/file_links/:link/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/file_links/:link/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/file_links/:link/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/file\_links/:link
> <p>Updates an existing file link object. Expired links can no longer be updated.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/file_links/:link/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/file_links/:link/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/file_links/:link/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/file_links/:link/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/files
> <p>Returns a list of the files that your account has access to. The files are returned sorted by creation date, with the most recently created files appearing first.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/files/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/files/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/files/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/files/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/files
> <p>To upload a file to Stripe, you’ll need to send a request of type <code>multipart/form-data</code>. The request should contain the file you would like to upload, as well as the parameters for creating a file.</p>
>
> <p>All of Stripe’s officially supported Client libraries should have support for sending <code>multipart/form-data</code>.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/files/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/files/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/files/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/files/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/files/:file
> <p>Retrieves the details of an existing file object. Supply the unique file ID from a file, and Stripe will return the corresponding file object. To access file contents, see the <a href="/docs/file-upload#download-file-contents">File Upload Guide</a>.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/files/:file/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/files/:file/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/files/:file/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/files/:file/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/identity/verification\_reports
> <p>List all verification reports.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/identity/verification_reports/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/identity/verification_reports/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/identity/verification_reports/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/identity/verification_reports/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/identity/verification\_reports/:report
> <p>Retrieves an existing VerificationReport</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/identity/verification_reports/:report/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/identity/verification_reports/:report/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/identity/verification_reports/:report/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/identity/verification_reports/:report/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/identity/verification\_sessions
> <p>Returns a list of VerificationSessions</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/identity/verification_sessions/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/identity/verification_sessions/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/identity/verification_sessions/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/identity/verification_sessions/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/identity/verification\_sessions
> <p>Creates a VerificationSession object.</p>
>
> <p>After the VerificationSession is created, display a verification modal using the session <code>client_secret</code> or send your users to the session’s <code>url</code>.</p>
>
> <p>If your API key is in test mode, verification checks won’t actually process, though everything else will occur as if in live mode.</p>
>
> <p>Related guide: <a href="/docs/identity/verify-identity-documents">Verify your users’ identity documents</a>.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/identity/verification_sessions/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/identity/verification_sessions/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/identity/verification_sessions/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/identity/verification_sessions/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/identity/verification\_sessions/:session
> <p>Retrieves the details of a VerificationSession that was previously created.</p>
>
> <p>When the session status is <code>requires_input</code>, you can use this method to retrieve a valid
> <code>client_secret</code> or <code>url</code> to allow re-submission.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/identity/verification_sessions/:session/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/identity/verification_sessions/:session/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/identity/verification_sessions/:session/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/identity/verification_sessions/:session/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/identity/verification\_sessions/:session
> <p>Updates a VerificationSession object.</p>
>
> <p>When the session status is <code>requires_input</code>, you can use this method to update the
> verification check and options.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/identity/verification_sessions/:session/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/identity/verification_sessions/:session/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/identity/verification_sessions/:session/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/identity/verification_sessions/:session/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/identity/verification\_sessions/:session/cancel
> <p>A VerificationSession object can be canceled when it is in <code>requires_input</code> <a href="/docs/identity/how-sessions-work">status</a>.</p>
>
> <p>Once canceled, future submission attempts are disabled. This cannot be undone. <a href="/docs/identity/verification-sessions#cancel">Learn more</a>.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/identity/verification_sessions/:session/cancel/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/identity/verification_sessions/:session/cancel/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/identity/verification_sessions/:session/cancel/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/identity/verification_sessions/:session/cancel/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/identity/verification\_sessions/:session/redact
> <p>Redact a VerificationSession to remove all collected information from Stripe. This will redact
> the VerificationSession and all objects related to it, including VerificationReports, Events,
> request logs, etc.</p>
>
> <p>A VerificationSession object can be redacted when it is in <code>requires_input</code> or <code>verified</code>
> <a href="/docs/identity/how-sessions-work">status</a>. Redacting a VerificationSession in <code>requires_action</code>
> state will automatically cancel it.</p>
>
> <p>The redaction process may take up to four days. When the redaction process is in progress, the
> VerificationSession’s <code>redaction.status</code> field will be set to <code>processing</code>; when the process is
> finished, it will change to <code>redacted</code> and an <code>identity.verification_session.redacted</code> event
> will be emitted.</p>
>
> <p>Redaction is irreversible. Redacted objects are still accessible in the Stripe API, but all the
> fields that contain personal data will be replaced by the string <code>[redacted]</code> or a similar
> placeholder. The <code>metadata</code> field will also be erased. Redacted objects cannot be updated or
> used for any purpose.</p>
>
> <p><a href="/docs/identity/verification-sessions#redact">Learn more</a>.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/identity/verification_sessions/:session/redact/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/identity/verification_sessions/:session/redact/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/identity/verification_sessions/:session/redact/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/identity/verification_sessions/:session/redact/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/invoiceitems
> <p>Returns a list of your invoice items. Invoice items are returned sorted by creation date, with the most recently created invoice items appearing first.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/invoiceitems/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/invoiceitems/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/invoiceitems/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/invoiceitems/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/invoiceitems
> <p>Creates an item to be added to a draft invoice (up to 250 items per invoice). If no invoice is specified, the item will be on the next invoice created for the customer specified.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/invoiceitems/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/invoiceitems/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/invoiceitems/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/invoiceitems/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## DELETE /v1/invoiceitems/:invoiceitem
> <p>Deletes an invoice item, removing it from an invoice. Deleting invoice items is only possible when they’re not attached to invoices, or if it’s attached to a draft invoice.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/invoiceitems/:invoiceitem/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[delete]/v1/invoiceitems/:invoiceitem/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/invoiceitems/:invoiceitem/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[delete]/v1/invoiceitems/:invoiceitem/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/invoiceitems/:invoiceitem
> <p>Retrieves the invoice item with the given ID.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/invoiceitems/:invoiceitem/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/invoiceitems/:invoiceitem/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/invoiceitems/:invoiceitem/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/invoiceitems/:invoiceitem/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/invoiceitems/:invoiceitem
> <p>Updates the amount or description of an invoice item on an upcoming invoice. Updating an invoice item is only possible before the invoice it’s attached to is closed.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/invoiceitems/:invoiceitem/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/invoiceitems/:invoiceitem/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/invoiceitems/:invoiceitem/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/invoiceitems/:invoiceitem/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/invoices
> <p>You can list all invoices, or list the invoices for a specific customer. The invoices are returned sorted by creation date, with the most recently created invoices appearing first.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/invoices/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/invoices/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/invoices/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/invoices/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/invoices
> <p>This endpoint creates a draft invoice for a given customer. The draft invoice created pulls in all pending invoice items on that customer, including prorations. The invoice remains a draft until you <a href="#finalize_invoice">finalize</a> the invoice, which allows you to <a href="#pay_invoice">pay</a> or <a href="#send_invoice">send</a> the invoice to your customers.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/invoices/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/invoices/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/invoices/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/invoices/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/invoices/upcoming
> <p>At any time, you can preview the upcoming invoice for a customer. This will show you all the charges that are pending, including subscription renewal charges, invoice item charges, etc. It will also show you any discounts that are applicable to the invoice.</p>
>
> <p>Note that when you are viewing an upcoming invoice, you are simply viewing a preview – the invoice has not yet been created. As such, the upcoming invoice will not show up in invoice listing calls, and you cannot use the API to pay or edit the invoice. If you want to change the amount that your customer will be billed, you can add, remove, or update pending invoice items, or update the customer’s discount.</p>
>
> <p>You can preview the effects of updating a subscription, including a preview of what proration will take place. To ensure that the actual proration is calculated exactly the same as the previewed proration, you should pass a <code>proration_date</code> parameter when doing the actual subscription update. The value passed in should be the same as the <code>subscription_proration_date</code> returned on the upcoming invoice resource. The recommended way to get only the prorations being previewed is to consider only proration line items where <code>period[start]</code> is equal to the <code>subscription_proration_date</code> on the upcoming invoice resource.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/invoices/upcoming/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/invoices/upcoming/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/invoices/upcoming/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/invoices/upcoming/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/invoices/upcoming/lines
> <p>When retrieving an upcoming invoice, you’ll get a <strong>lines</strong> property containing the total count of line items and the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/invoices/upcoming/lines/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/invoices/upcoming/lines/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/invoices/upcoming/lines/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/invoices/upcoming/lines/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## DELETE /v1/invoices/:invoice
> <p>Permanently deletes a one-off invoice draft. This cannot be undone. Attempts to delete invoices that are no longer in a draft state will fail; once an invoice has been finalized or if an invoice is for a subscription, it must be <a href="#void_invoice">voided</a>.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/invoices/:invoice/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[delete]/v1/invoices/:invoice/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/invoices/:invoice/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[delete]/v1/invoices/:invoice/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/invoices/:invoice
> <p>Retrieves the invoice with the given ID.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/invoices/:invoice/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/invoices/:invoice/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/invoices/:invoice/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/invoices/:invoice/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/invoices/:invoice
> <p>Draft invoices are fully editable. Once an invoice is <a href="/docs/billing/invoices/workflow#finalized">finalized</a>,
> monetary values, as well as <code>collection_method</code>, become uneditable.</p>
>
> <p>If you would like to stop the Stripe Billing engine from automatically finalizing, reattempting payments on,
> sending reminders for, or <a href="/docs/billing/invoices/reconciliation">automatically reconciling</a> invoices, pass
> <code>auto_advance=false</code>.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/invoices/:invoice/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/invoices/:invoice/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/invoices/:invoice/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/invoices/:invoice/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/invoices/:invoice/finalize
> <p>Stripe automatically finalizes drafts before sending and attempting payment on invoices. However, if you’d like to finalize a draft invoice manually, you can do so using this method.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/invoices/:invoice/finalize/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/invoices/:invoice/finalize/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/invoices/:invoice/finalize/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/invoices/:invoice/finalize/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/invoices/:invoice/lines
> <p>When retrieving an invoice, you’ll get a <strong>lines</strong> property containing the total count of line items and the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/invoices/:invoice/lines/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/invoices/:invoice/lines/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/invoices/:invoice/lines/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/invoices/:invoice/lines/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/invoices/:invoice/mark\_uncollectible
> <p>Marking an invoice as uncollectible is useful for keeping track of bad debts that can be written off for accounting purposes.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/invoices/:invoice/mark_uncollectible/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/invoices/:invoice/mark_uncollectible/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/invoices/:invoice/mark_uncollectible/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/invoices/:invoice/mark_uncollectible/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/invoices/:invoice/pay
> <p>Stripe automatically creates and then attempts to collect payment on invoices for customers on subscriptions according to your <a href="https://dashboard.stripe.com/account/billing/automatic">subscriptions settings</a>. However, if you’d like to attempt payment on an invoice out of the normal collection schedule or for some other reason, you can do so.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/invoices/:invoice/pay/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/invoices/:invoice/pay/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/invoices/:invoice/pay/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/invoices/:invoice/pay/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/invoices/:invoice/send
> <p>Stripe will automatically send invoices to customers according to your <a href="https://dashboard.stripe.com/account/billing/automatic">subscriptions settings</a>. However, if you’d like to manually send an invoice to your customer out of the normal schedule, you can do so. When sending invoices that have already been paid, there will be no reference to the payment in the email.</p>
>
> <p>Requests made in test-mode result in no emails being sent, despite sending an <code>invoice.sent</code> event.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/invoices/:invoice/send/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/invoices/:invoice/send/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/invoices/:invoice/send/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/invoices/:invoice/send/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/invoices/:invoice/void
> <p>Mark a finalized invoice as void. This cannot be undone. Voiding an invoice is similar to <a href="#delete_invoice">deletion</a>, however it only applies to finalized invoices and maintains a papertrail where the invoice can still be found.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/invoices/:invoice/void/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/invoices/:invoice/void/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/invoices/:invoice/void/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/invoices/:invoice/void/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/issuer\_fraud\_records
> <p>Returns a list of issuer fraud records.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/issuer_fraud_records/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/issuer_fraud_records/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/issuer_fraud_records/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/issuer_fraud_records/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/issuer\_fraud\_records/:issuer\_fraud\_record
> <p>Retrieves the details of an issuer fraud record that has previously been created. </p>
>
> <p>Please refer to the <a href="#issuer_fraud_record_object">issuer fraud record</a> object reference for more details.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/issuer_fraud_records/:issuer_fraud_record/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/issuer_fraud_records/:issuer_fraud_record/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/issuer_fraud_records/:issuer_fraud_record/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/issuer_fraud_records/:issuer_fraud_record/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/issuing/authorizations
> <p>Returns a list of Issuing <code>Authorization</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/issuing/authorizations/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/issuing/authorizations/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/issuing/authorizations/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/issuing/authorizations/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/issuing/authorizations/:authorization
> <p>Retrieves an Issuing <code>Authorization</code> object.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/issuing/authorizations/:authorization/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/issuing/authorizations/:authorization/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/issuing/authorizations/:authorization/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/issuing/authorizations/:authorization/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/issuing/authorizations/:authorization
> <p>Updates the specified Issuing <code>Authorization</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/issuing/authorizations/:authorization/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/issuing/authorizations/:authorization/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/issuing/authorizations/:authorization/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/issuing/authorizations/:authorization/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/issuing/authorizations/:authorization/approve
> <p>Approves a pending Issuing <code>Authorization</code> object. This request should be made within the timeout window of the <a href="/docs/issuing/controls/real-time-authorizations">real-time authorization</a> flow.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/issuing/authorizations/:authorization/approve/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/issuing/authorizations/:authorization/approve/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/issuing/authorizations/:authorization/approve/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/issuing/authorizations/:authorization/approve/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/issuing/authorizations/:authorization/decline
> <p>Declines a pending Issuing <code>Authorization</code> object. This request should be made within the timeout window of the <a href="/docs/issuing/controls/real-time-authorizations">real time authorization</a> flow.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/issuing/authorizations/:authorization/decline/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/issuing/authorizations/:authorization/decline/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/issuing/authorizations/:authorization/decline/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/issuing/authorizations/:authorization/decline/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/issuing/cardholders
> <p>Returns a list of Issuing <code>Cardholder</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/issuing/cardholders/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/issuing/cardholders/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/issuing/cardholders/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/issuing/cardholders/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/issuing/cardholders
> <p>Creates a new Issuing <code>Cardholder</code> object that can be issued cards.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/issuing/cardholders/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/issuing/cardholders/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/issuing/cardholders/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/issuing/cardholders/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/issuing/cardholders/:cardholder
> <p>Retrieves an Issuing <code>Cardholder</code> object.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/issuing/cardholders/:cardholder/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/issuing/cardholders/:cardholder/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/issuing/cardholders/:cardholder/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/issuing/cardholders/:cardholder/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/issuing/cardholders/:cardholder
> <p>Updates the specified Issuing <code>Cardholder</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/issuing/cardholders/:cardholder/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/issuing/cardholders/:cardholder/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/issuing/cardholders/:cardholder/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/issuing/cardholders/:cardholder/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/issuing/cards
> <p>Returns a list of Issuing <code>Card</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/issuing/cards/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/issuing/cards/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/issuing/cards/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/issuing/cards/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/issuing/cards
> <p>Creates an Issuing <code>Card</code> object.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/issuing/cards/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/issuing/cards/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/issuing/cards/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/issuing/cards/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/issuing/cards/:card
> <p>Retrieves an Issuing <code>Card</code> object.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/issuing/cards/:card/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/issuing/cards/:card/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/issuing/cards/:card/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/issuing/cards/:card/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/issuing/cards/:card
> <p>Updates the specified Issuing <code>Card</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/issuing/cards/:card/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/issuing/cards/:card/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/issuing/cards/:card/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/issuing/cards/:card/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/issuing/disputes
> <p>Returns a list of Issuing <code>Dispute</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/issuing/disputes/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/issuing/disputes/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/issuing/disputes/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/issuing/disputes/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/issuing/disputes
> <p>Creates an Issuing <code>Dispute</code> object. Individual pieces of evidence within the <code>evidence</code> object are optional at this point. Stripe only validates that required evidence is present during submission. Refer to <a href="/docs/issuing/purchases/disputes#dispute-reasons-and-evidence">Dispute reasons and evidence</a> for more details about evidence requirements.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/issuing/disputes/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/issuing/disputes/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/issuing/disputes/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/issuing/disputes/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/issuing/disputes/:dispute
> <p>Retrieves an Issuing <code>Dispute</code> object.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/issuing/disputes/:dispute/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/issuing/disputes/:dispute/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/issuing/disputes/:dispute/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/issuing/disputes/:dispute/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/issuing/disputes/:dispute
> <p>Updates the specified Issuing <code>Dispute</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Properties on the <code>evidence</code> object can be unset by passing in an empty string.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/issuing/disputes/:dispute/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/issuing/disputes/:dispute/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/issuing/disputes/:dispute/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/issuing/disputes/:dispute/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/issuing/disputes/:dispute/submit
> <p>Submits an Issuing <code>Dispute</code> to the card network. Stripe validates that all evidence fields required for the dispute’s reason are present. For more details, see <a href="/docs/issuing/purchases/disputes#dispute-reasons-and-evidence">Dispute reasons and evidence</a>.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/issuing/disputes/:dispute/submit/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/issuing/disputes/:dispute/submit/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/issuing/disputes/:dispute/submit/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/issuing/disputes/:dispute/submit/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/issuing/settlements
> <p>Returns a list of Issuing <code>Settlement</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/issuing/settlements/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/issuing/settlements/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/issuing/settlements/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/issuing/settlements/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/issuing/settlements/:settlement
> <p>Retrieves an Issuing <code>Settlement</code> object.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/issuing/settlements/:settlement/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/issuing/settlements/:settlement/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/issuing/settlements/:settlement/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/issuing/settlements/:settlement/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/issuing/settlements/:settlement
> <p>Updates the specified Issuing <code>Settlement</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/issuing/settlements/:settlement/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/issuing/settlements/:settlement/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/issuing/settlements/:settlement/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/issuing/settlements/:settlement/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/issuing/transactions
> <p>Returns a list of Issuing <code>Transaction</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/issuing/transactions/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/issuing/transactions/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/issuing/transactions/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/issuing/transactions/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/issuing/transactions/:transaction
> <p>Retrieves an Issuing <code>Transaction</code> object.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/issuing/transactions/:transaction/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/issuing/transactions/:transaction/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/issuing/transactions/:transaction/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/issuing/transactions/:transaction/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/issuing/transactions/:transaction
> <p>Updates the specified Issuing <code>Transaction</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/issuing/transactions/:transaction/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/issuing/transactions/:transaction/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/issuing/transactions/:transaction/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/issuing/transactions/:transaction/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/mandates/:mandate
> <p>Retrieves a Mandate object.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/mandates/:mandate/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/mandates/:mandate/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/mandates/:mandate/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/mandates/:mandate/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/order\_returns
> <p>Returns a list of your order returns. The returns are returned sorted by creation date, with the most recently created return appearing first.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/order_returns/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/order_returns/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/order_returns/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/order_returns/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/order\_returns/:id
> <p>Retrieves the details of an existing order return. Supply the unique order ID from either an order return creation request or the order return list, and Stripe will return the corresponding order information.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/order_returns/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/order_returns/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/order_returns/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/order_returns/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/orders
> <p>Returns a list of your orders. The orders are returned sorted by creation date, with the most recently created orders appearing first.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/orders/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/orders/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/orders/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/orders/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/orders
> <p>Creates a new order object.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/orders/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/orders/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/orders/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/orders/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/orders/:id
> <p>Retrieves the details of an existing order. Supply the unique order ID from either an order creation request or the order list, and Stripe will return the corresponding order information.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/orders/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/orders/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/orders/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/orders/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/orders/:id
> <p>Updates the specific order by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/orders/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/orders/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/orders/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/orders/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/orders/:id/pay
> <p>Pay an order by providing a <code>source</code> to create a payment.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/orders/:id/pay/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/orders/:id/pay/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/orders/:id/pay/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/orders/:id/pay/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/orders/:id/returns
> <p>Return all or part of an order. The order must have a status of <code>paid</code> or <code>fulfilled</code> before it can be returned. Once all items have been returned, the order will become <code>canceled</code> or <code>returned</code> depending on which status the order started in.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/orders/:id/returns/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/orders/:id/returns/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/orders/:id/returns/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/orders/:id/returns/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/payment\_intents
> <p>Returns a list of PaymentIntents.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/payment_intents/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/payment_intents/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/payment_intents/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/payment_intents/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/payment\_intents
> <p>Creates a PaymentIntent object.</p>
>
> <p>After the PaymentIntent is created, attach a payment method and <a href="/docs/api/payment_intents/confirm">confirm</a>
> to continue the payment. You can read more about the different payment flows
> available via the Payment Intents API <a href="/docs/payments/payment-intents">here</a>.</p>
>
> <p>When <code>confirm=true</code> is used during creation, it is equivalent to creating
> and confirming the PaymentIntent in the same call. You may use any parameters
> available in the <a href="/docs/api/payment_intents/confirm">confirm API</a> when <code>confirm=true</code>
> is supplied.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/payment_intents/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/payment_intents/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/payment_intents/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/payment_intents/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/payment\_intents/:intent
> <p>Retrieves the details of a PaymentIntent that has previously been created. </p>
>
> <p>Client-side retrieval using a publishable key is allowed when the <code>client_secret</code> is provided in the query string. </p>
>
> <p>When retrieved with a publishable key, only a subset of properties will be returned. Please refer to the <a href="#payment_intent_object">payment intent</a> object reference for more details.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/payment_intents/:intent/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/payment_intents/:intent/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/payment_intents/:intent/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/payment_intents/:intent/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/payment\_intents/:intent
> <p>Updates properties on a PaymentIntent object without confirming.</p>
>
> <p>Depending on which properties you update, you may need to confirm the
> PaymentIntent again. For example, updating the <code>payment_method</code> will
> always require you to confirm the PaymentIntent again. If you prefer to
> update and confirm at the same time, we recommend updating properties via
> the <a href="/docs/api/payment_intents/confirm">confirm API</a> instead.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/payment_intents/:intent/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/payment_intents/:intent/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/payment_intents/:intent/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/payment_intents/:intent/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/payment\_intents/:intent/cancel
> <p>A PaymentIntent object can be canceled when it is in one of these statuses: <code>requires_payment_method</code>, <code>requires_capture</code>, <code>requires_confirmation</code>, or <code>requires_action</code>. </p>
>
> <p>Once canceled, no additional charges will be made by the PaymentIntent and any operations on the PaymentIntent will fail with an error. For PaymentIntents with <code>status=’requires_capture’</code>, the remaining <code>amount_capturable</code> will automatically be refunded.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/payment_intents/:intent/cancel/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/payment_intents/:intent/cancel/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/payment_intents/:intent/cancel/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/payment_intents/:intent/cancel/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/payment\_intents/:intent/capture
> <p>Capture the funds of an existing uncaptured PaymentIntent when its status is <code>requires_capture</code>.</p>
>
> <p>Uncaptured PaymentIntents will be canceled exactly seven days after they are created.</p>
>
> <p>Learn more about <a href="/docs/payments/capture-later">separate authorization and capture</a>.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/payment_intents/:intent/capture/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/payment_intents/:intent/capture/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/payment_intents/:intent/capture/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/payment_intents/:intent/capture/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/payment\_intents/:intent/confirm
> <p>Confirm that your customer intends to pay with current or provided
> payment method. Upon confirmation, the PaymentIntent will attempt to initiate
> a payment.</p>
>
> <p>If the selected payment method requires additional authentication steps, the
> PaymentIntent will transition to the <code>requires_action</code> status and
> suggest additional actions via <code>next_action</code>. If payment fails,
> the PaymentIntent will transition to the <code>requires_payment_method</code> status. If
> payment succeeds, the PaymentIntent will transition to the <code>succeeded</code>
> status (or <code>requires_capture</code>, if <code>capture_method</code> is set to <code>manual</code>).</p>
>
> <p>If the <code>confirmation_method</code> is <code>automatic</code>, payment may be attempted
> using our <a href="/docs/stripe-js/reference#stripe-handle-card-payment">client SDKs</a>
> and the PaymentIntent’s <a href="#payment_intent_object-client_secret">client_secret</a>.
> After <code>next_action</code>s are handled by the client, no additional
> confirmation is required to complete the payment.</p>
>
> <p>If the <code>confirmation_method</code> is <code>manual</code>, all payment attempts must be
> initiated using a secret key.
> If any actions are required for the payment, the PaymentIntent will
> return to the <code>requires_confirmation</code> state
> after those actions are completed. Your server needs to then
> explicitly re-confirm the PaymentIntent to initiate the next payment
> attempt. Read the <a href="/docs/payments/payment-intents/web-manual">expanded documentation</a>
> to learn more about manual confirmation.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/payment_intents/:intent/confirm/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/payment_intents/:intent/confirm/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/payment_intents/:intent/confirm/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/payment_intents/:intent/confirm/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/payment\_methods
> <p>Returns a list of PaymentMethods for a given Customer</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/payment_methods/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/payment_methods/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/payment_methods/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/payment_methods/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/payment\_methods
> <p>Creates a PaymentMethod object. Read the <a href="/docs/stripe-js/reference#stripe-create-payment-method">Stripe.js reference</a> to learn how to create PaymentMethods via Stripe.js.</p>
>
> <p>Instead of creating a PaymentMethod directly, we recommend using the <a href="/docs/payments/accept-a-payment">PaymentIntents</a> API to accept a payment immediately or the <a href="/docs/payments/save-and-reuse">SetupIntent</a> API to collect payment method details ahead of a future payment.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/payment_methods/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/payment_methods/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/payment_methods/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/payment_methods/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/payment\_methods/:payment\_method
> <p>Retrieves a PaymentMethod object.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/payment_methods/:payment_method/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/payment_methods/:payment_method/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/payment_methods/:payment_method/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/payment_methods/:payment_method/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/payment\_methods/:payment\_method
> <p>Updates a PaymentMethod object. A PaymentMethod must be attached a customer to be updated.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/payment_methods/:payment_method/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/payment_methods/:payment_method/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/payment_methods/:payment_method/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/payment_methods/:payment_method/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/payment\_methods/:payment\_method/attach
> <p>Attaches a PaymentMethod object to a Customer.</p>
>
> <p>To attach a new PaymentMethod to a customer for future payments, we recommend you use a <a href="/docs/api/setup_intents">SetupIntent</a>
> or a PaymentIntent with <a href="/docs/api/payment_intents/create#create_payment_intent-setup_future_usage">setup_future_usage</a>.
> These approaches will perform any necessary steps to ensure that the PaymentMethod can be used in a future payment. Using the
> <code>/v1/payment_methods/:id/attach</code> endpoint does not ensure that future payments can be made with the attached PaymentMethod.
> See <a href="/docs/payments/payment-intents#future-usage">Optimizing cards for future payments</a> for more information about setting up future payments.</p>
>
> <p>To use this PaymentMethod as the default for invoice or subscription payments,
> set <a href="/docs/api/customers/update#update_customer-invoice_settings-default_payment_method"><code>invoice_settings.default_payment_method</code></a>,
> on the Customer to the PaymentMethod’s ID.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/payment_methods/:payment_method/attach/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/payment_methods/:payment_method/attach/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/payment_methods/:payment_method/attach/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/payment_methods/:payment_method/attach/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/payment\_methods/:payment\_method/detach
> <p>Detaches a PaymentMethod object from a Customer.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/payment_methods/:payment_method/detach/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/payment_methods/:payment_method/detach/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/payment_methods/:payment_method/detach/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/payment_methods/:payment_method/detach/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/payouts
> <p>Returns a list of existing payouts sent to third-party bank accounts or that Stripe has sent you. The payouts are returned in sorted order, with the most recently created payouts appearing first.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/payouts/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/payouts/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/payouts/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/payouts/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/payouts
> <p>To send funds to your own bank account, you create a new payout object. Your <a href="#balance">Stripe balance</a> must be able to cover the payout amount, or you’ll receive an “Insufficient Funds” error.</p>
>
> <p>If your API key is in test mode, money won’t actually be sent, though everything else will occur as if in live mode.</p>
>
> <p>If you are creating a manual payout on a Stripe account that uses multiple payment source types, you’ll need to specify the source type balance that the payout should draw from. The <a href="#balance_object">balance object</a> details available and pending amounts by source type.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/payouts/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/payouts/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/payouts/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/payouts/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/payouts/:payout
> <p>Retrieves the details of an existing payout. Supply the unique payout ID from either a payout creation request or the payout list, and Stripe will return the corresponding payout information.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/payouts/:payout/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/payouts/:payout/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/payouts/:payout/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/payouts/:payout/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/payouts/:payout
> <p>Updates the specified payout by setting the values of the parameters passed. Any parameters not provided will be left unchanged. This request accepts only the metadata as arguments.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/payouts/:payout/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/payouts/:payout/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/payouts/:payout/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/payouts/:payout/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/payouts/:payout/cancel
> <p>A previously created payout can be canceled if it has not yet been paid out. Funds will be refunded to your available balance. You may not cancel automatic Stripe payouts.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/payouts/:payout/cancel/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/payouts/:payout/cancel/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/payouts/:payout/cancel/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/payouts/:payout/cancel/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/payouts/:payout/reverse
> <p>Reverses a payout by debiting the destination bank account. Only payouts for connected accounts to US bank accounts may be reversed at this time. If the payout is in the <code>pending</code> status, <code>/v1/payouts/:id/cancel</code> should be used instead.</p>
>
> <p>By requesting a reversal via <code>/v1/payouts/:id/reverse</code>, you confirm that the authorized signatory of the selected bank account has authorized the debit on the bank account and that no other authorization is required.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/payouts/:payout/reverse/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/payouts/:payout/reverse/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/payouts/:payout/reverse/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/payouts/:payout/reverse/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/plans
> <p>Returns a list of your plans.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/plans/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/plans/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/plans/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/plans/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/plans
> <p>You can now model subscriptions more flexibly using the <a href="#prices">Prices API</a>. It replaces the Plans API and is backwards compatible to simplify your migration.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/plans/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/plans/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/plans/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/plans/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## DELETE /v1/plans/:plan
> <p>Deleting plans means new subscribers can’t be added. Existing subscribers aren’t affected.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/plans/:plan/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[delete]/v1/plans/:plan/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/plans/:plan/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[delete]/v1/plans/:plan/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/plans/:plan
> <p>Retrieves the plan with the given ID.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/plans/:plan/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/plans/:plan/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/plans/:plan/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/plans/:plan/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/plans/:plan
> <p>Updates the specified plan by setting the values of the parameters passed. Any parameters not provided are left unchanged. By design, you cannot change a plan’s ID, amount, currency, or billing cycle.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/plans/:plan/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/plans/:plan/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/plans/:plan/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/plans/:plan/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/prices
> <p>Returns a list of your prices.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/prices/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/prices/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/prices/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/prices/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/prices
> <p>Creates a new price for an existing product. The price can be recurring or one-time.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/prices/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/prices/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/prices/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/prices/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/prices/:price
> <p>Retrieves the price with the given ID.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/prices/:price/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/prices/:price/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/prices/:price/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/prices/:price/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/prices/:price
> <p>Updates the specified price by setting the values of the parameters passed. Any parameters not provided are left unchanged.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/prices/:price/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/prices/:price/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/prices/:price/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/prices/:price/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/products
> <p>Returns a list of your products. The products are returned sorted by creation date, with the most recently created products appearing first.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/products/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/products/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/products/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/products/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/products
> <p>Creates a new product object.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/products/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/products/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/products/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/products/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## DELETE /v1/products/:id
> <p>Delete a product. Deleting a product is only possible if it has no prices associated with it. Additionally, deleting a product with <code>type=good</code> is only possible if it has no SKUs associated with it.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/products/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[delete]/v1/products/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/products/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[delete]/v1/products/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/products/:id
> <p>Retrieves the details of an existing product. Supply the unique product ID from either a product creation request or the product list, and Stripe will return the corresponding product information.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/products/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/products/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/products/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/products/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/products/:id
> <p>Updates the specific product by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/products/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/products/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/products/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/products/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/promotion\_codes
> <p>Returns a list of your promotion codes.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/promotion_codes/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/promotion_codes/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/promotion_codes/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/promotion_codes/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/promotion\_codes
> <p>A promotion code points to a coupon. You can optionally restrict the code to a specific customer, redemption limit, and expiration date.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/promotion_codes/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/promotion_codes/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/promotion_codes/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/promotion_codes/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/promotion\_codes/:promotion\_code
> <p>Retrieves the promotion code with the given ID.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/promotion_codes/:promotion_code/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/promotion_codes/:promotion_code/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/promotion_codes/:promotion_code/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/promotion_codes/:promotion_code/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/promotion\_codes/:promotion\_code
> <p>Updates the specified promotion code by setting the values of the parameters passed. Most fields are, by design, not editable.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/promotion_codes/:promotion_code/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/promotion_codes/:promotion_code/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/promotion_codes/:promotion_code/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/promotion_codes/:promotion_code/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/quotes
> <p>Returns a list of your quotes.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/quotes/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/quotes/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/quotes/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/quotes/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/quotes
> <p>A quote models prices and services for a customer. Default options for <code>header</code>, <code>description</code>, <code>footer</code>, and <code>expires_at</code> can be set in the dashboard via the <a href="https://dashboard.stripe.com/settings/billing/quote">quote template</a>.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/quotes/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/quotes/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/quotes/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/quotes/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/quotes/:quote
> <p>Retrieves the quote with the given ID.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/quotes/:quote/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/quotes/:quote/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/quotes/:quote/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/quotes/:quote/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/quotes/:quote
> <p>A quote models prices and services for a customer.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/quotes/:quote/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/quotes/:quote/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/quotes/:quote/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/quotes/:quote/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/quotes/:quote/accept
> <p>Accepts the specified quote.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/quotes/:quote/accept/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/quotes/:quote/accept/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/quotes/:quote/accept/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/quotes/:quote/accept/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/quotes/:quote/cancel
> <p>Cancels the quote.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/quotes/:quote/cancel/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/quotes/:quote/cancel/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/quotes/:quote/cancel/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/quotes/:quote/cancel/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/quotes/:quote/computed\_upfront\_line\_items
> <p>When retrieving a quote, there is an includable <a href="https://stripe.com/docs/api/quotes/object#quote_object-computed-upfront-line_items"><strong>computed.upfront.line_items</strong></a> property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of upfront line items.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/quotes/:quote/computed_upfront_line_items/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/quotes/:quote/computed_upfront_line_items/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/quotes/:quote/computed_upfront_line_items/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/quotes/:quote/computed_upfront_line_items/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/quotes/:quote/finalize
> <p>Finalizes the quote.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/quotes/:quote/finalize/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/quotes/:quote/finalize/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/quotes/:quote/finalize/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/quotes/:quote/finalize/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/quotes/:quote/line\_items
> <p>When retrieving a quote, there is an includable <strong>line_items</strong> property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/quotes/:quote/line_items/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/quotes/:quote/line_items/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/quotes/:quote/line_items/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/quotes/:quote/line_items/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/quotes/:quote/pdf
> <p>Download the PDF for a finalized quote</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/quotes/:quote/pdf/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/quotes/:quote/pdf/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/quotes/:quote/pdf/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/quotes/:quote/pdf/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/radar/early\_fraud\_warnings
> <p>Returns a list of early fraud warnings.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/radar/early_fraud_warnings/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/radar/early_fraud_warnings/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/radar/early_fraud_warnings/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/radar/early_fraud_warnings/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/radar/early\_fraud\_warnings/:early\_fraud\_warning
> <p>Retrieves the details of an early fraud warning that has previously been created. </p>
>
> <p>Please refer to the <a href="#early_fraud_warning_object">early fraud warning</a> object reference for more details.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/radar/early_fraud_warnings/:early_fraud_warning/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/radar/early_fraud_warnings/:early_fraud_warning/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/radar/early_fraud_warnings/:early_fraud_warning/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/radar/early_fraud_warnings/:early_fraud_warning/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/radar/value\_list\_items
> <p>Returns a list of <code>ValueListItem</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/radar/value_list_items/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/radar/value_list_items/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/radar/value_list_items/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/radar/value_list_items/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/radar/value\_list\_items
> <p>Creates a new <code>ValueListItem</code> object, which is added to the specified parent value list.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/radar/value_list_items/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/radar/value_list_items/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/radar/value_list_items/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/radar/value_list_items/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## DELETE /v1/radar/value\_list\_items/:item
> <p>Deletes a <code>ValueListItem</code> object, removing it from its parent value list.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/radar/value_list_items/:item/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[delete]/v1/radar/value_list_items/:item/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/radar/value_list_items/:item/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[delete]/v1/radar/value_list_items/:item/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/radar/value\_list\_items/:item
> <p>Retrieves a <code>ValueListItem</code> object.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/radar/value_list_items/:item/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/radar/value_list_items/:item/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/radar/value_list_items/:item/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/radar/value_list_items/:item/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/radar/value\_lists
> <p>Returns a list of <code>ValueList</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/radar/value_lists/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/radar/value_lists/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/radar/value_lists/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/radar/value_lists/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/radar/value\_lists
> <p>Creates a new <code>ValueList</code> object, which can then be referenced in rules.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/radar/value_lists/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/radar/value_lists/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/radar/value_lists/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/radar/value_lists/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## DELETE /v1/radar/value\_lists/:value\_list
> <p>Deletes a <code>ValueList</code> object, also deleting any items contained within the value list. To be deleted, a value list must not be referenced in any rules.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/radar/value_lists/:value_list/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[delete]/v1/radar/value_lists/:value_list/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/radar/value_lists/:value_list/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[delete]/v1/radar/value_lists/:value_list/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/radar/value\_lists/:value\_list
> <p>Retrieves a <code>ValueList</code> object.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/radar/value_lists/:value_list/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/radar/value_lists/:value_list/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/radar/value_lists/:value_list/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/radar/value_lists/:value_list/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/radar/value\_lists/:value\_list
> <p>Updates a <code>ValueList</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Note that <code>item_type</code> is immutable.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/radar/value_lists/:value_list/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/radar/value_lists/:value_list/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/radar/value_lists/:value_list/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/radar/value_lists/:value_list/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/recipients
> <p>Returns a list of your recipients. The recipients are returned sorted by creation date, with the most recently created recipients appearing first.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/recipients/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/recipients/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/recipients/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/recipients/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/recipients
> <p>Creates a new <code>Recipient</code> object and verifies the recipient’s identity.
> Also verifies the recipient’s bank account information or debit card, if either is provided.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/recipients/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/recipients/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/recipients/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/recipients/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## DELETE /v1/recipients/:id
> <p>Permanently deletes a recipient. It cannot be undone.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/recipients/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[delete]/v1/recipients/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/recipients/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[delete]/v1/recipients/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/recipients/:id
> <p>Retrieves the details of an existing recipient. You need only supply the unique recipient identifier that was returned upon recipient creation.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/recipients/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/recipients/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/recipients/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/recipients/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/recipients/:id
> <p>Updates the specified recipient by setting the values of the parameters passed.
> Any parameters not provided will be left unchanged.</p>
>
> <p>If you update the name or tax ID, the identity verification will automatically be rerun.
> If you update the bank account, the bank account validation will automatically be rerun.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/recipients/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/recipients/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/recipients/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/recipients/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/refunds
> <p>Returns a list of all refunds you’ve previously created. The refunds are returned in sorted order, with the most recent refunds appearing first. For convenience, the 10 most recent refunds are always available by default on the charge object.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/refunds/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/refunds/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/refunds/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/refunds/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/refunds
> <p>Create a refund.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/refunds/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/refunds/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/refunds/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/refunds/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/refunds/:refund
> <p>Retrieves the details of an existing refund.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/refunds/:refund/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/refunds/:refund/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/refunds/:refund/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/refunds/:refund/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/refunds/:refund
> <p>Updates the specified refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
>
> <p>This request only accepts <code>metadata</code> as an argument.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/refunds/:refund/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/refunds/:refund/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/refunds/:refund/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/refunds/:refund/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/reporting/report\_runs
> <p>Returns a list of Report Runs, with the most recent appearing first.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/reporting/report_runs/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/reporting/report_runs/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/reporting/report_runs/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/reporting/report_runs/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/reporting/report\_runs
> <p>Creates a new object and begin running the report. (Certain report types require a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API key</a>.)</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/reporting/report_runs/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/reporting/report_runs/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/reporting/report_runs/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/reporting/report_runs/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/reporting/report\_runs/:report\_run
> <p>Retrieves the details of an existing Report Run.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/reporting/report_runs/:report_run/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/reporting/report_runs/:report_run/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/reporting/report_runs/:report_run/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/reporting/report_runs/:report_run/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/reporting/report\_types
> <p>Returns a full list of Report Types.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/reporting/report_types/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/reporting/report_types/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/reporting/report_types/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/reporting/report_types/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/reporting/report\_types/:report\_type
> <p>Retrieves the details of a Report Type. (Certain report types require a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API key</a>.)</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/reporting/report_types/:report_type/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/reporting/report_types/:report_type/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/reporting/report_types/:report_type/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/reporting/report_types/:report_type/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/reviews
> <p>Returns a list of <code>Review</code> objects that have <code>open</code> set to <code>true</code>. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/reviews/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/reviews/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/reviews/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/reviews/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/reviews/:review
> <p>Retrieves a <code>Review</code> object.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/reviews/:review/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/reviews/:review/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/reviews/:review/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/reviews/:review/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/reviews/:review/approve
> <p>Approves a <code>Review</code> object, closing it and removing it from the list of reviews.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/reviews/:review/approve/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/reviews/:review/approve/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/reviews/:review/approve/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/reviews/:review/approve/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/setup\_attempts
> <p>Returns a list of SetupAttempts associated with a provided SetupIntent.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/setup_attempts/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/setup_attempts/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/setup_attempts/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/setup_attempts/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/setup\_intents
> <p>Returns a list of SetupIntents.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/setup_intents/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/setup_intents/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/setup_intents/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/setup_intents/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/setup\_intents
> <p>Creates a SetupIntent object.</p>
>
> <p>After the SetupIntent is created, attach a payment method and <a href="/docs/api/setup_intents/confirm">confirm</a>
> to collect any required permissions to charge the payment method later.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/setup_intents/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/setup_intents/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/setup_intents/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/setup_intents/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/setup\_intents/:intent
> <p>Retrieves the details of a SetupIntent that has previously been created. </p>
>
> <p>Client-side retrieval using a publishable key is allowed when the <code>client_secret</code> is provided in the query string. </p>
>
> <p>When retrieved with a publishable key, only a subset of properties will be returned. Please refer to the <a href="#setup_intent_object">SetupIntent</a> object reference for more details.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/setup_intents/:intent/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/setup_intents/:intent/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/setup_intents/:intent/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/setup_intents/:intent/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/setup\_intents/:intent
> <p>Updates a SetupIntent object.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/setup_intents/:intent/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/setup_intents/:intent/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/setup_intents/:intent/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/setup_intents/:intent/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/setup\_intents/:intent/cancel
> <p>A SetupIntent object can be canceled when it is in one of these statuses: <code>requires_payment_method</code>, <code>requires_confirmation</code>, or <code>requires_action</code>. </p>
>
> <p>Once canceled, setup is abandoned and any operations on the SetupIntent will fail with an error.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/setup_intents/:intent/cancel/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/setup_intents/:intent/cancel/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/setup_intents/:intent/cancel/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/setup_intents/:intent/cancel/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/setup\_intents/:intent/confirm
> <p>Confirm that your customer intends to set up the current or
> provided payment method. For example, you would confirm a SetupIntent
> when a customer hits the “Save” button on a payment method management
> page on your website.</p>
>
> <p>If the selected payment method does not require any additional
> steps from the customer, the SetupIntent will transition to the
> <code>succeeded</code> status.</p>
>
> <p>Otherwise, it will transition to the <code>requires_action</code> status and
> suggest additional actions via <code>next_action</code>. If setup fails,
> the SetupIntent will transition to the
> <code>requires_payment_method</code> status.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/setup_intents/:intent/confirm/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/setup_intents/:intent/confirm/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/setup_intents/:intent/confirm/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/setup_intents/:intent/confirm/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/sigma/scheduled\_query\_runs
> <p>Returns a list of scheduled query runs.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/sigma/scheduled_query_runs/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/sigma/scheduled_query_runs/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/sigma/scheduled_query_runs/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/sigma/scheduled_query_runs/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/sigma/scheduled\_query\_runs/:scheduled\_query\_run
> <p>Retrieves the details of an scheduled query run.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/sigma/scheduled_query_runs/:scheduled_query_run/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/sigma/scheduled_query_runs/:scheduled_query_run/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/sigma/scheduled_query_runs/:scheduled_query_run/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/sigma/scheduled_query_runs/:scheduled_query_run/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/skus
> <p>Returns a list of your SKUs. The SKUs are returned sorted by creation date, with the most recently created SKUs appearing first.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/skus/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/skus/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/skus/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/skus/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/skus
> <p>Creates a new SKU associated with a product.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/skus/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/skus/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/skus/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/skus/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## DELETE /v1/skus/:id
> <p>Delete a SKU. Deleting a SKU is only possible until it has been used in an order.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/skus/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[delete]/v1/skus/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/skus/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[delete]/v1/skus/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/skus/:id
> <p>Retrieves the details of an existing SKU. Supply the unique SKU identifier from either a SKU creation request or from the product, and Stripe will return the corresponding SKU information.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/skus/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/skus/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/skus/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/skus/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/skus/:id
> <p>Updates the specific SKU by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
>
> <p>Note that a SKU’s <code>attributes</code> are not editable. Instead, you would need to deactivate the existing SKU and create a new one with the new attribute values.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/skus/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/skus/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/skus/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/skus/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/sources
> <p>Creates a new source object.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/sources/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/sources/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/sources/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/sources/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/sources/:source
> <p>Retrieves an existing source object. Supply the unique source ID from a source creation request and Stripe will return the corresponding up-to-date source object information.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/sources/:source/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/sources/:source/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/sources/:source/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/sources/:source/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/sources/:source
> <p>Updates the specified source by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
>
> <p>This request accepts the <code>metadata</code> and <code>owner</code> as arguments. It is also possible to update type specific information for selected payment methods. Please refer to our <a href="/docs/sources">payment method guides</a> for more detail.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/sources/:source/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/sources/:source/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/sources/:source/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/sources/:source/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/sources/:source/mandate\_notifications/:mandate\_notification
> <p>Retrieves a new Source MandateNotification.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/sources/:source/mandate_notifications/:mandate_notification/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/sources/:source/mandate_notifications/:mandate_notification/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/sources/:source/mandate_notifications/:mandate_notification/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/sources/:source/mandate_notifications/:mandate_notification/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/sources/:source/source\_transactions
> <p>List source transactions for a given source.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/sources/:source/source_transactions/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/sources/:source/source_transactions/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/sources/:source/source_transactions/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/sources/:source/source_transactions/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/sources/:source/source\_transactions/:source\_transaction
> <p>Retrieve an existing source transaction object. Supply the unique source ID from a source creation request and the source transaction ID and Stripe will return the corresponding up-to-date source object information.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/sources/:source/source_transactions/:source_transaction/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/sources/:source/source_transactions/:source_transaction/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/sources/:source/source_transactions/:source_transaction/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/sources/:source/source_transactions/:source_transaction/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/sources/:source/verify
> <p>Verify a given source.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/sources/:source/verify/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/sources/:source/verify/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/sources/:source/verify/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/sources/:source/verify/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/subscription\_items
> <p>Returns a list of your subscription items for a given subscription.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/subscription_items/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/subscription_items/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/subscription_items/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/subscription_items/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/subscription\_items
> <p>Adds a new item to an existing subscription. No existing items will be changed or replaced.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/subscription_items/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/subscription_items/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/subscription_items/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/subscription_items/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## DELETE /v1/subscription\_items/:item
> <p>Deletes an item from the subscription. Removing a subscription item from a subscription will not cancel the subscription.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/subscription_items/:item/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[delete]/v1/subscription_items/:item/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/subscription_items/:item/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[delete]/v1/subscription_items/:item/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/subscription\_items/:item
> <p>Retrieves the subscription item with the given ID.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/subscription_items/:item/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/subscription_items/:item/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/subscription_items/:item/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/subscription_items/:item/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/subscription\_items/:item
> <p>Updates the plan or quantity of an item on a current subscription.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/subscription_items/:item/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/subscription_items/:item/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/subscription_items/:item/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/subscription_items/:item/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/subscription\_items/:subscription\_item/usage\_record\_summaries
> <p>For the specified subscription item, returns a list of summary objects. Each object in the list provides usage information that’s been summarized from multiple usage records and over a subscription billing period (e.g., 15 usage records in the month of September).</p>
>
> <p>The list is sorted in reverse-chronological order (newest first). The first list item represents the most current usage period that hasn’t ended yet. Since new usage records can still be added, the returned summary information for the subscription item’s ID should be seen as unstable until the subscription billing period ends.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/subscription_items/:subscription_item/usage_record_summaries/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/subscription_items/:subscription_item/usage_record_summaries/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/subscription_items/:subscription_item/usage_record_summaries/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/subscription_items/:subscription_item/usage_record_summaries/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/subscription\_items/:subscription\_item/usage\_records
> <p>Creates a usage record for a specified subscription item and date, and fills it with a quantity.</p>
>
> <p>Usage records provide <code>quantity</code> information that Stripe uses to track how much a customer is using your service. With usage information and the pricing model set up by the <a href="https://stripe.com/docs/billing/subscriptions/metered-billing">metered billing</a> plan, Stripe helps you send accurate invoices to your customers.</p>
>
> <p>The default calculation for usage is to add up all the <code>quantity</code> values of the usage records within a billing period. You can change this default behavior with the billing plan’s <code>aggregate_usage</code> <a href="/docs/api/plans/create#create_plan-aggregate_usage">parameter</a>. When there is more than one usage record with the same timestamp, Stripe adds the <code>quantity</code> values together. In most cases, this is the desired resolution, however, you can change this behavior with the <code>action</code> parameter.</p>
>
> <p>The default pricing model for metered billing is <a href="/docs/api/plans/object#plan_object-billing_scheme">per-unit pricing</a>. For finer granularity, you can configure metered billing to have a <a href="https://stripe.com/docs/billing/subscriptions/tiers">tiered pricing</a> model.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/subscription_items/:subscription_item/usage_records/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/subscription_items/:subscription_item/usage_records/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/subscription_items/:subscription_item/usage_records/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/subscription_items/:subscription_item/usage_records/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/subscription\_schedules
> <p>Retrieves the list of your subscription schedules.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/subscription_schedules/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/subscription_schedules/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/subscription_schedules/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/subscription_schedules/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/subscription\_schedules
> <p>Creates a new subscription schedule object. Each customer can have up to 500 active or scheduled subscriptions.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/subscription_schedules/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/subscription_schedules/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/subscription_schedules/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/subscription_schedules/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/subscription\_schedules/:schedule
> <p>Retrieves the details of an existing subscription schedule. You only need to supply the unique subscription schedule identifier that was returned upon subscription schedule creation.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/subscription_schedules/:schedule/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/subscription_schedules/:schedule/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/subscription_schedules/:schedule/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/subscription_schedules/:schedule/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/subscription\_schedules/:schedule
> <p>Updates an existing subscription schedule.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/subscription_schedules/:schedule/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/subscription_schedules/:schedule/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/subscription_schedules/:schedule/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/subscription_schedules/:schedule/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/subscription\_schedules/:schedule/cancel
> <p>Cancels a subscription schedule and its associated subscription immediately (if the subscription schedule has an active subscription). A subscription schedule can only be canceled if its status is <code>not_started</code> or <code>active</code>.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/subscription_schedules/:schedule/cancel/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/subscription_schedules/:schedule/cancel/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/subscription_schedules/:schedule/cancel/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/subscription_schedules/:schedule/cancel/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/subscription\_schedules/:schedule/release
> <p>Releases the subscription schedule immediately, which will stop scheduling of its phases, but leave any existing subscription in place. A schedule can only be released if its status is <code>not_started</code> or <code>active</code>. If the subscription schedule is currently associated with a subscription, releasing it will remove its <code>subscription</code> property and set the subscription’s ID to the <code>released_subscription</code> property.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/subscription_schedules/:schedule/release/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/subscription_schedules/:schedule/release/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/subscription_schedules/:schedule/release/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/subscription_schedules/:schedule/release/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/subscriptions
> <p>By default, returns a list of subscriptions that have not been canceled. In order to list canceled subscriptions, specify <code>status=canceled</code>.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/subscriptions/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/subscriptions/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/subscriptions/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/subscriptions/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/subscriptions
> <p>Creates a new subscription on an existing customer. Each customer can have up to 500 active or scheduled subscriptions.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/subscriptions/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/subscriptions/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/subscriptions/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/subscriptions/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## DELETE /v1/subscriptions/:subscription\_exposed\_id
> <p>Cancels a customer’s subscription immediately. The customer will not be charged again for the subscription.</p>
>
> <p>Note, however, that any pending invoice items that you’ve created will still be charged for at the end of the period, unless manually <a href="#delete_invoiceitem">deleted</a>. If you’ve set the subscription to cancel at the end of the period, any pending prorations will also be left in place and collected at the end of the period. But if the subscription is set to cancel immediately, pending prorations will be removed.</p>
>
> <p>By default, upon subscription cancellation, Stripe will stop automatic collection of all finalized invoices for the customer. This is intended to prevent unexpected payment attempts after the customer has canceled a subscription. However, you can resume automatic collection of the invoices manually after subscription cancellation to have us proceed. Or, you could check for unpaid invoices before allowing the customer to cancel the subscription at all.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/subscriptions/:subscription_exposed_id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[delete]/v1/subscriptions/:subscription_exposed_id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/subscriptions/:subscription_exposed_id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[delete]/v1/subscriptions/:subscription_exposed_id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/subscriptions/:subscription\_exposed\_id
> <p>Retrieves the subscription with the given ID.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/subscriptions/:subscription_exposed_id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/subscriptions/:subscription_exposed_id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/subscriptions/:subscription_exposed_id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/subscriptions/:subscription_exposed_id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/subscriptions/:subscription\_exposed\_id
> <p>Updates an existing subscription on a customer to match the specified parameters. When changing plans or quantities, we will optionally prorate the price we charge next month to make up for any price changes. To preview how the proration will be calculated, use the <a href="#upcoming_invoice">upcoming invoice</a> endpoint.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/subscriptions/:subscription_exposed_id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/subscriptions/:subscription_exposed_id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/subscriptions/:subscription_exposed_id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/subscriptions/:subscription_exposed_id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## DELETE /v1/subscriptions/:subscription\_exposed\_id/discount
> <p>Removes the currently applied discount on a subscription.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/subscriptions/:subscription_exposed_id/discount/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[delete]/v1/subscriptions/:subscription_exposed_id/discount/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/subscriptions/:subscription_exposed_id/discount/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[delete]/v1/subscriptions/:subscription_exposed_id/discount/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/tax\_codes
> <p>A list of <a href="https://stripe.com/docs/tax/tax-codes">all tax codes available</a> to add to Products in order to allow specific tax calculations.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/tax_codes/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/tax_codes/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/tax_codes/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/tax_codes/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/tax\_codes/:id
> <p>Retrieves the details of an existing tax code. Supply the unique tax code ID and Stripe will return the corresponding tax code information.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/tax_codes/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/tax_codes/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/tax_codes/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/tax_codes/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/tax\_rates
> <p>Returns a list of your tax rates. Tax rates are returned sorted by creation date, with the most recently created tax rates appearing first.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/tax_rates/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/tax_rates/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/tax_rates/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/tax_rates/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/tax\_rates
> <p>Creates a new tax rate.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/tax_rates/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/tax_rates/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/tax_rates/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/tax_rates/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/tax\_rates/:tax\_rate
> <p>Retrieves a tax rate with the given ID</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/tax_rates/:tax_rate/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/tax_rates/:tax_rate/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/tax_rates/:tax_rate/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/tax_rates/:tax_rate/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/tax\_rates/:tax\_rate
> <p>Updates an existing tax rate.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/tax_rates/:tax_rate/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/tax_rates/:tax_rate/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/tax_rates/:tax_rate/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/tax_rates/:tax_rate/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/terminal/connection\_tokens
> <p>To connect to a reader the Stripe Terminal SDK needs to retrieve a short-lived connection token from Stripe, proxied through your server. On your backend, add an endpoint that creates and returns a connection token.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/terminal/connection_tokens/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/terminal/connection_tokens/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/terminal/connection_tokens/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/terminal/connection_tokens/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/terminal/locations
> <p>Returns a list of <code>Location</code> objects.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/terminal/locations/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/terminal/locations/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/terminal/locations/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/terminal/locations/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/terminal/locations
> <p>Creates a new <code>Location</code> object.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/terminal/locations/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/terminal/locations/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/terminal/locations/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/terminal/locations/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## DELETE /v1/terminal/locations/:location
> <p>Deletes a <code>Location</code> object.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/terminal/locations/:location/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[delete]/v1/terminal/locations/:location/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/terminal/locations/:location/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[delete]/v1/terminal/locations/:location/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/terminal/locations/:location
> <p>Retrieves a <code>Location</code> object.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/terminal/locations/:location/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/terminal/locations/:location/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/terminal/locations/:location/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/terminal/locations/:location/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/terminal/locations/:location
> <p>Updates a <code>Location</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/terminal/locations/:location/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/terminal/locations/:location/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/terminal/locations/:location/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/terminal/locations/:location/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/terminal/readers
> <p>Returns a list of <code>Reader</code> objects.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/terminal/readers/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/terminal/readers/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/terminal/readers/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/terminal/readers/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/terminal/readers
> <p>Creates a new <code>Reader</code> object.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/terminal/readers/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/terminal/readers/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/terminal/readers/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/terminal/readers/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## DELETE /v1/terminal/readers/:reader
> <p>Deletes a <code>Reader</code> object.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/terminal/readers/:reader/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[delete]/v1/terminal/readers/:reader/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/terminal/readers/:reader/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[delete]/v1/terminal/readers/:reader/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/terminal/readers/:reader
> <p>Retrieves a <code>Reader</code> object.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/terminal/readers/:reader/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/terminal/readers/:reader/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/terminal/readers/:reader/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/terminal/readers/:reader/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/terminal/readers/:reader
> <p>Updates a <code>Reader</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/terminal/readers/:reader/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/terminal/readers/:reader/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/terminal/readers/:reader/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/terminal/readers/:reader/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/tokens
> <p>Creates a single-use token that represents a bank account’s details.
> This token can be used with any API method in place of a bank account dictionary. This token can be used only once, by attaching it to a <a href="#accounts">Custom account</a>.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/tokens/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/tokens/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/tokens/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/tokens/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/tokens/:token
> <p>Retrieves the token with the given ID.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/tokens/:token/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/tokens/:token/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/tokens/:token/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/tokens/:token/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/topups
> <p>Returns a list of top-ups.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/topups/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/topups/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/topups/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/topups/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/topups
> <p>Top up the balance of an account</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/topups/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/topups/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/topups/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/topups/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/topups/:topup
> <p>Retrieves the details of a top-up that has previously been created. Supply the unique top-up ID that was returned from your previous request, and Stripe will return the corresponding top-up information.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/topups/:topup/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/topups/:topup/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/topups/:topup/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/topups/:topup/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/topups/:topup
> <p>Updates the metadata of a top-up. Other top-up details are not editable by design.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/topups/:topup/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/topups/:topup/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/topups/:topup/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/topups/:topup/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/topups/:topup/cancel
> <p>Cancels a top-up. Only pending top-ups can be canceled.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/topups/:topup/cancel/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/topups/:topup/cancel/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/topups/:topup/cancel/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/topups/:topup/cancel/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/transfers
> <p>Returns a list of existing transfers sent to connected accounts. The transfers are returned in sorted order, with the most recently created transfers appearing first.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/transfers/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/transfers/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/transfers/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/transfers/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/transfers
> <p>To send funds from your Stripe account to a connected account, you create a new transfer object. Your <a href="#balance">Stripe balance</a> must be able to cover the transfer amount, or you’ll receive an “Insufficient Funds” error.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/transfers/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/transfers/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/transfers/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/transfers/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/transfers/:id/reversals
> <p>You can see a list of the reversals belonging to a specific transfer. Note that the 10 most recent reversals are always available by default on the transfer object. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional reversals.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/transfers/:id/reversals/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/transfers/:id/reversals/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/transfers/:id/reversals/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/transfers/:id/reversals/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/transfers/:id/reversals
> <p>When you create a new reversal, you must specify a transfer to create it on.</p>
>
> <p>When reversing transfers, you can optionally reverse part of the transfer. You can do so as many times as you wish until the entire transfer has been reversed.</p>
>
> <p>Once entirely reversed, a transfer can’t be reversed again. This method will return an error when called on an already-reversed transfer, or when trying to reverse more money than is left on a transfer.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/transfers/:id/reversals/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/transfers/:id/reversals/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/transfers/:id/reversals/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/transfers/:id/reversals/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/transfers/:transfer
> <p>Retrieves the details of an existing transfer. Supply the unique transfer ID from either a transfer creation request or the transfer list, and Stripe will return the corresponding transfer information.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/transfers/:transfer/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/transfers/:transfer/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/transfers/:transfer/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/transfers/:transfer/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/transfers/:transfer
> <p>Updates the specified transfer by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
>
> <p>This request accepts only metadata as an argument.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/transfers/:transfer/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/transfers/:transfer/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/transfers/:transfer/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/transfers/:transfer/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/transfers/:transfer/reversals/:id
> <p>By default, you can see the 10 most recent reversals stored directly on the transfer object, but you can also retrieve details about a specific reversal stored on the transfer.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/transfers/:transfer/reversals/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/transfers/:transfer/reversals/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/transfers/:transfer/reversals/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/transfers/:transfer/reversals/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/transfers/:transfer/reversals/:id
> <p>Updates the specified reversal by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
>
> <p>This request only accepts metadata and description as arguments.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/transfers/:transfer/reversals/:id/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/transfers/:transfer/reversals/:id/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/transfers/:transfer/reversals/:id/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/transfers/:transfer/reversals/:id/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/webhook\_endpoints
> <p>Returns a list of your webhook endpoints.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/webhook_endpoints/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/webhook_endpoints/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/webhook_endpoints/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/webhook_endpoints/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/webhook\_endpoints
> <p>A webhook endpoint must have a <code>url</code> and a list of <code>enabled_events</code>. You may optionally specify the Boolean <code>connect</code> parameter. If set to true, then a Connect webhook endpoint that notifies the specified <code>url</code> about events from all connected accounts is created; otherwise an account webhook endpoint that notifies the specified <code>url</code> only about events from your account is created. You can also create webhook endpoints in the <a href="https://dashboard.stripe.com/account/webhooks">webhooks settings</a> section of the Dashboard.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/webhook_endpoints/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/webhook_endpoints/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/webhook_endpoints/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/webhook_endpoints/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## DELETE /v1/webhook\_endpoints/:webhook\_endpoint
> <p>You can also delete webhook endpoints via the <a href="https://dashboard.stripe.com/account/webhooks">webhook endpoint management</a> page of the Stripe dashboard.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/webhook_endpoints/:webhook_endpoint/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[delete]/v1/webhook_endpoints/:webhook_endpoint/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[delete]/v1/webhook_endpoints/:webhook_endpoint/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[delete]/v1/webhook_endpoints/:webhook_endpoint/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## GET /v1/webhook\_endpoints/:webhook\_endpoint
> <p>Retrieves the webhook endpoint with the given ID.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/webhook_endpoints/:webhook_endpoint/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[get]/v1/webhook_endpoints/:webhook_endpoint/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[get]/v1/webhook_endpoints/:webhook_endpoint/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[get]/v1/webhook_endpoints/:webhook_endpoint/___::[responses]/200/1--error_response/body/index.hbs "See body  ")



## POST /v1/webhook\_endpoints/:webhook\_endpoint
> <p>Updates the webhook endpoint. You may edit the <code>url</code>, the list of <code>enabled_events</code>, and the status of your endpoint.</p>

### 200
> Successful response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/webhook_endpoints/:webhook_endpoint/___::[responses]/200/0--successful_response "See details  ")
[See body  ](./___::[post]/v1/webhook_endpoints/:webhook_endpoint/___::[responses]/200/0--successful_response/body/index.hbs "See body  ")

### 200
> Error response.

#### Rules
```
[]
```

[See details  ](./___::[post]/v1/webhook_endpoints/:webhook_endpoint/___::[responses]/200/1--error_response "See details  ")
[See body  ](./___::[post]/v1/webhook_endpoints/:webhook_endpoint/___::[responses]/200/1--error_response/body/index.hbs "See body  ")
