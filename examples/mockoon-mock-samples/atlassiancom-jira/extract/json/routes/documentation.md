# Routes



## GET /rest/api/3/app/field/:fieldIdOrKey/context/configuration
> Get custom field configurations

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/app/field/fieldidorkey/context/configuration/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/app/field/fieldidorkey/context/configuration/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/app/field/fieldidorkey/context/configuration/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/app/field/fieldidorkey/context/configuration/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/app/field/fieldidorkey/context/configuration/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/app/field/fieldidorkey/context/configuration/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user is not a Jira admin or the request is not authenticated as from the app that provided the field.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/app/field/fieldidorkey/context/configuration/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/app/field/fieldidorkey/context/configuration/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the custom field is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/app/field/fieldidorkey/context/configuration/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/app/field/fieldidorkey/context/configuration/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/app/field/:fieldIdOrKey/context/configuration
> Update custom field configurations

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/app/field/fieldidorkey/context/configuration/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/app/field/fieldidorkey/context/configuration/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/app/field/fieldidorkey/context/configuration/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/app/field/fieldidorkey/context/configuration/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/app/field/fieldidorkey/context/configuration/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/app/field/fieldidorkey/context/configuration/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user is not a Jira admin or the request is not authenticated as from the app that provided the field.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/app/field/fieldidorkey/context/configuration/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/app/field/fieldidorkey/context/configuration/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the custom field is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/app/field/fieldidorkey/context/configuration/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/app/field/fieldidorkey/context/configuration/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/app/field/:fieldIdOrKey/value
> Update custom field value

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/app/field/fieldidorkey/value/___responses/204 "See details  ")
[See body  ](./___put/rest/api/3/app/field/fieldidorkey/value/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/app/field/fieldidorkey/value/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/app/field/fieldidorkey/value/___responses/400/body/index.hbs "See body  ")

### 403
> Returned if the request is not authenticated as the app that provided the field.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/app/field/fieldidorkey/value/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/app/field/fieldidorkey/value/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the field is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/app/field/fieldidorkey/value/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/app/field/fieldidorkey/value/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/application-properties
> Get application property

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/application-properties/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/application-properties/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/application-properties/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/application-properties/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the application property is not found or the user does not have permission to view it.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/application-properties/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/application-properties/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/application-properties/advanced-settings
> Get advanced settings

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/application-properties/advanced-settings/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/application-properties/advanced-settings/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/application-properties/advanced-settings/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/application-properties/advanced-settings/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user is not an administrator.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/application-properties/advanced-settings/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/application-properties/advanced-settings/___responses/403/body/index.hbs "See body  ")



## PUT /rest/api/3/application-properties/:id
> Set application property

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/application-properties/id/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/application-properties/id/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the data type of the `value` does not match the application property's data type. For example, a string is provided instead of an integer.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/application-properties/id/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/application-properties/id/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/application-properties/id/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/application-properties/id/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have permission to edit the property.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/application-properties/id/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/application-properties/id/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the property is not found or the user does not have permission to view it.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/application-properties/id/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/application-properties/id/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/applicationrole
> Get all application roles

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/applicationrole/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/applicationrole/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/applicationrole/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/applicationrole/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user is not an administrator.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/applicationrole/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/applicationrole/___responses/403/body/index.hbs "See body  ")



## GET /rest/api/3/applicationrole/:key
> Get application role

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/applicationrole/key/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/applicationrole/key/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/applicationrole/key/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/applicationrole/key/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user is not an administrator.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/applicationrole/key/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/applicationrole/key/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the role is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/applicationrole/key/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/applicationrole/key/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/attachment/meta
> Get Jira attachment settings

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/attachment/meta/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/attachment/meta/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/attachment/meta/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/attachment/meta/___responses/401/body/index.hbs "See body  ")



## DELETE /rest/api/3/attachment/:id
> Delete attachment

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/attachment/id/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/attachment/id/___responses/204/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/attachment/id/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/attachment/id/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the attachment is not found.
>  *  attachments are disabled in the Jira settings.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/attachment/id/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/attachment/id/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/attachment/:id
> Get attachment metadata

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/attachment/id/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/attachment/id/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/attachment/id/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/attachment/id/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/attachment/id/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/attachment/id/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the attachment is not found.
>  *  attachments are disabled in the Jira settings.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/attachment/id/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/attachment/id/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/attachment/:id/expand/human
> Get all metadata for an expanded attachment

### 200  (default)
> Returned if the request is successful. If an empty list is returned in the response, the attachment is empty, corrupt, or not an archive.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/attachment/id/expand/human/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/attachment/id/expand/human/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/attachment/id/expand/human/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/attachment/id/expand/human/___responses/401/body/index.hbs "See body  ")

### 403
> The user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/attachment/id/expand/human/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/attachment/id/expand/human/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the attachment is not found.
>  *  attachments are disabled in the Jira settings.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/attachment/id/expand/human/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/attachment/id/expand/human/___responses/404/body/index.hbs "See body  ")

### 409
> Returned if the attachment is an archive, but not a supported archive format.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/attachment/id/expand/human/___responses/409 "See details  ")
[See body  ](./___get/rest/api/3/attachment/id/expand/human/___responses/409/body/index.hbs "See body  ")



## GET /rest/api/3/attachment/:id/expand/raw
> Get contents metadata for an expanded attachment

### 200  (default)
> Returned if the request is successful. If an empty list is returned in the response, the attachment is empty, corrupt, or not an archive.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/attachment/id/expand/raw/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/attachment/id/expand/raw/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/attachment/id/expand/raw/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/attachment/id/expand/raw/___responses/401/body/index.hbs "See body  ")

### 403
> The user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/attachment/id/expand/raw/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/attachment/id/expand/raw/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the attachment is not found.
>  *  attachments are disabled in the Jira settings.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/attachment/id/expand/raw/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/attachment/id/expand/raw/___responses/404/body/index.hbs "See body  ")

### 409
> Returned if the attachment is an archive, but not a supported archive format.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/attachment/id/expand/raw/___responses/409 "See details  ")
[See body  ](./___get/rest/api/3/attachment/id/expand/raw/___responses/409/body/index.hbs "See body  ")



## GET /rest/api/3/auditing/record
> Get audit records

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/auditing/record/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/auditing/record/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/auditing/record/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/auditing/record/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if:
>
>  *  the user does not have the required permissions.
>  *  all Jira products are on free plans. Audit logs are available when at least one Jira product is on a paid plan.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/auditing/record/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/auditing/record/___responses/403/body/index.hbs "See body  ")



## GET /rest/api/3/avatar/:type/system
> Get system avatars by type

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/avatar/type/system/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/avatar/type/system/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/avatar/type/system/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/avatar/type/system/___responses/401/body/index.hbs "See body  ")

### 500
> Returned if an error occurs while retrieving the list of avatars.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/avatar/type/system/___responses/500 "See details  ")
[See body  ](./___get/rest/api/3/avatar/type/system/___responses/500/body/index.hbs "See body  ")



## POST /rest/api/3/comment/list
> Get comments by IDs

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/comment/list/___responses/200 "See details  ")
[See body  ](./___post/rest/api/3/comment/list/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request contains more than 1000 IDs or is empty.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/comment/list/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/comment/list/___responses/400/body/index.hbs "See body  ")



## GET /rest/api/3/comment/:commentId/properties
> Get comment property keys

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/comment/commentid/properties/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/comment/commentid/properties/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the comment ID is invalid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/comment/commentid/properties/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/comment/commentid/properties/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/comment/commentid/properties/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/comment/commentid/properties/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/comment/commentid/properties/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/comment/commentid/properties/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the comment is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/comment/commentid/properties/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/comment/commentid/properties/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/comment/:commentId/properties/:propertyKey
> Delete comment property

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/comment/commentid/properties/propertykey/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/comment/commentid/properties/propertykey/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/comment/commentid/properties/propertykey/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/comment/commentid/properties/propertykey/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/comment/commentid/properties/propertykey/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/comment/commentid/properties/propertykey/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/comment/commentid/properties/propertykey/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/comment/commentid/properties/propertykey/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the comment or the property is not found or the user has the necessary project permissions but isn't a member of the role or group visibility of the comment is restricted to.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/comment/commentid/properties/propertykey/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/comment/commentid/properties/propertykey/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/comment/:commentId/properties/:propertyKey
> Get comment property

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/comment/commentid/properties/propertykey/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/comment/commentid/properties/propertykey/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/comment/commentid/properties/propertykey/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/comment/commentid/properties/propertykey/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/comment/commentid/properties/propertykey/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/comment/commentid/properties/propertykey/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/comment/commentid/properties/propertykey/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/comment/commentid/properties/propertykey/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the comment or the property is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/comment/commentid/properties/propertykey/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/comment/commentid/properties/propertykey/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/comment/:commentId/properties/:propertyKey
> Set comment property

### 200  (default)
> Returned if the comment property is updated.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/comment/commentid/properties/propertykey/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/comment/commentid/properties/propertykey/___responses/200/body/index.hbs "See body  ")

### 201
> Returned if the comment property is created.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/comment/commentid/properties/propertykey/___responses/201 "See details  ")
[See body  ](./___put/rest/api/3/comment/commentid/properties/propertykey/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/comment/commentid/properties/propertykey/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/comment/commentid/properties/propertykey/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/comment/commentid/properties/propertykey/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/comment/commentid/properties/propertykey/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/comment/commentid/properties/propertykey/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/comment/commentid/properties/propertykey/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the comment is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/comment/commentid/properties/propertykey/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/comment/commentid/properties/propertykey/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/component
> Create component

### 201  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/component/___responses/201 "See details  ")
[See body  ](./___post/rest/api/3/component/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  the user is not found.
>  *  `name` is not provided.
>  *  `name` is over 255 characters in length.
>  *  `projectId` is not provided.
>  *  `assigneeType` is an invalid value.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/component/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/component/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/component/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/component/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have permission to manage the project containing the component or does not have permission to administer Jira.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/component/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/component/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the project is not found or the user does not have permission to browse the project containing the component.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/component/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/component/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/component/:id
> Delete component

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/component/id/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/component/id/___responses/204/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/component/id/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/component/id/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have permission to manage the project containing the component or does not have permission to administer Jira.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/component/id/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/component/id/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the component is not found.
>  *  the replacement component is not found.
>  *  the user does not have permission to browse the project containing the component.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/component/id/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/component/id/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/component/:id
> Get component

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/component/id/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/component/id/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/component/id/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/component/id/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the component is not found or the user does not have permission to browse the project containing the component.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/component/id/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/component/id/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/component/:id
> Update component

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/component/id/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/component/id/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  the user is not found.
>  *  `assigneeType` is an invalid value.
>  *  `name` is over 255 characters in length.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/component/id/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/component/id/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/component/id/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/component/id/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have permission to manage the project containing the component or does not have permission to administer Jira.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/component/id/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/component/id/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the component is not found or the user does not have permission to browse the project containing the component.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/component/id/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/component/id/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/component/:id/relatedIssueCounts
> Get component issues count

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/component/id/relatedissuecounts/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/component/id/relatedissuecounts/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/component/id/relatedissuecounts/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/component/id/relatedissuecounts/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the component is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/component/id/relatedissuecounts/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/component/id/relatedissuecounts/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/configuration
> Get global settings

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/configuration/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/configuration/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/configuration/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/configuration/___responses/401/body/index.hbs "See body  ")



## GET /rest/api/3/configuration/timetracking
> Get selected time tracking provider

### 200  (default)
> Returned if the request is successful and time tracking is enabled.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/configuration/timetracking/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/configuration/timetracking/___responses/200/body/index.hbs "See body  ")

### 204
> Returned if the request is successful but time tracking is disabled.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/configuration/timetracking/___responses/204 "See details  ")
[See body  ](./___get/rest/api/3/configuration/timetracking/___responses/204/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/configuration/timetracking/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/configuration/timetracking/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/configuration/timetracking/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/configuration/timetracking/___responses/403/body/index.hbs "See body  ")



## PUT /rest/api/3/configuration/timetracking
> Select time tracking provider

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/configuration/timetracking/___responses/204 "See details  ")
[See body  ](./___put/rest/api/3/configuration/timetracking/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the time tracking provider is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/configuration/timetracking/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/configuration/timetracking/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/configuration/timetracking/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/configuration/timetracking/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/configuration/timetracking/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/configuration/timetracking/___responses/403/body/index.hbs "See body  ")



## GET /rest/api/3/configuration/timetracking/list
> Get all time tracking providers

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/configuration/timetracking/list/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/configuration/timetracking/list/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/configuration/timetracking/list/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/configuration/timetracking/list/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/configuration/timetracking/list/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/configuration/timetracking/list/___responses/403/body/index.hbs "See body  ")



## GET /rest/api/3/configuration/timetracking/options
> Get time tracking settings

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/configuration/timetracking/options/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/configuration/timetracking/options/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/configuration/timetracking/options/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/configuration/timetracking/options/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/configuration/timetracking/options/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/configuration/timetracking/options/___responses/403/body/index.hbs "See body  ")



## PUT /rest/api/3/configuration/timetracking/options
> Set time tracking settings

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/configuration/timetracking/options/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/configuration/timetracking/options/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request object is invalid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/configuration/timetracking/options/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/configuration/timetracking/options/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/configuration/timetracking/options/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/configuration/timetracking/options/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/configuration/timetracking/options/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/configuration/timetracking/options/___responses/403/body/index.hbs "See body  ")



## GET /rest/api/3/customFieldOption/:id
> Get custom field option

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/customfieldoption/id/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/customfieldoption/id/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/customfieldoption/id/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/customfieldoption/id/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the custom field option is not found.
>  *  the user does not have permission to view the custom field.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/customfieldoption/id/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/customfieldoption/id/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/dashboard
> Get all dashboards

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/dashboard/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/dashboard/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/dashboard/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/dashboard/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/dashboard/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/dashboard/___responses/401/body/index.hbs "See body  ")



## POST /rest/api/3/dashboard
> Create dashboard

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/dashboard/___responses/200 "See details  ")
[See body  ](./___post/rest/api/3/dashboard/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/dashboard/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/dashboard/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/dashboard/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/dashboard/___responses/401/body/index.hbs "See body  ")



## GET /rest/api/3/dashboard/search
> Search for dashboards

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/dashboard/search/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/dashboard/search/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  `orderBy` is invalid.
>  *  `expand` includes an invalid value.
>  *  `accountId` and `owner` are provided.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/dashboard/search/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/dashboard/search/___responses/400/body/index.hbs "See body  ")

### 401
> 401 response

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/dashboard/search/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/dashboard/search/___responses/401/body/index.hbs "See body  ")



## GET /rest/api/3/dashboard/:dashboardId/items/:itemId/properties
> Get dashboard item property keys

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/dashboard/dashboardid/items/itemid/properties/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/dashboard/dashboardid/items/itemid/properties/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/dashboard/dashboardid/items/itemid/properties/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/dashboard/dashboardid/items/itemid/properties/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the dashboard or dashboard item is not found, or the dashboard is not owned by or shared with the user.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/dashboard/dashboardid/items/itemid/properties/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/dashboard/dashboardid/items/itemid/properties/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/dashboard/:dashboardId/items/:itemId/properties/:propertyKey
> Delete dashboard item property

### 204  (default)
> Returned if the dashboard item property is deleted.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/dashboard/dashboardid/items/itemid/properties/propertykey/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/dashboard/dashboardid/items/itemid/properties/propertykey/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the dashboard or dashboard item ID is invalid.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/dashboard/dashboardid/items/itemid/properties/propertykey/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/dashboard/dashboardid/items/itemid/properties/propertykey/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/dashboard/dashboardid/items/itemid/properties/propertykey/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/dashboard/dashboardid/items/itemid/properties/propertykey/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user is not the owner of the dashboard.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/dashboard/dashboardid/items/itemid/properties/propertykey/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/dashboard/dashboardid/items/itemid/properties/propertykey/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the dashboard item is not found or the dashboard is not shared with the user.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/dashboard/dashboardid/items/itemid/properties/propertykey/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/dashboard/dashboardid/items/itemid/properties/propertykey/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/dashboard/:dashboardId/items/:itemId/properties/:propertyKey
> Get dashboard item property

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/dashboard/dashboardid/items/itemid/properties/propertykey/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/dashboard/dashboardid/items/itemid/properties/propertykey/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/dashboard/dashboardid/items/itemid/properties/propertykey/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/dashboard/dashboardid/items/itemid/properties/propertykey/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the dashboard, the dashboard item, or dashboard item property is not found, or the dashboard is not owned by or shared with the user.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/dashboard/dashboardid/items/itemid/properties/propertykey/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/dashboard/dashboardid/items/itemid/properties/propertykey/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/dashboard/:dashboardId/items/:itemId/properties/:propertyKey
> Set dashboard item property

### 200  (default)
> Returned if the dashboard item property is updated.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/dashboard/dashboardid/items/itemid/properties/propertykey/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/dashboard/dashboardid/items/itemid/properties/propertykey/___responses/200/body/index.hbs "See body  ")

### 201
> Returned if the dashboard item property is created.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/dashboard/dashboardid/items/itemid/properties/propertykey/___responses/201 "See details  ")
[See body  ](./___put/rest/api/3/dashboard/dashboardid/items/itemid/properties/propertykey/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/dashboard/dashboardid/items/itemid/properties/propertykey/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/dashboard/dashboardid/items/itemid/properties/propertykey/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/dashboard/dashboardid/items/itemid/properties/propertykey/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/dashboard/dashboardid/items/itemid/properties/propertykey/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user is not the owner of the dashboard.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/dashboard/dashboardid/items/itemid/properties/propertykey/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/dashboard/dashboardid/items/itemid/properties/propertykey/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the dashboard item is not found or the dashboard is not shared with the user.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/dashboard/dashboardid/items/itemid/properties/propertykey/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/dashboard/dashboardid/items/itemid/properties/propertykey/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/dashboard/:id
> Delete dashboard

### 204  (default)
> Returned if the dashboard is deleted.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/dashboard/id/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/dashboard/id/___responses/204/body/index.hbs "See body  ")

### 400
> 400 response

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/dashboard/id/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/dashboard/id/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/dashboard/id/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/dashboard/id/___responses/401/body/index.hbs "See body  ")



## GET /rest/api/3/dashboard/:id
> Get dashboard

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/dashboard/id/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/dashboard/id/___responses/200/body/index.hbs "See body  ")

### 400
> 400 response

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/dashboard/id/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/dashboard/id/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/dashboard/id/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/dashboard/id/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the dashboard is not found or the dashboard is not owned by or shared with the user.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/dashboard/id/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/dashboard/id/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/dashboard/:id
> Update dashboard

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/dashboard/id/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/dashboard/id/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/dashboard/id/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/dashboard/id/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/dashboard/id/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/dashboard/id/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the dashboard is not found or the dashboard is not owned by the user.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/dashboard/id/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/dashboard/id/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/dashboard/:id/copy
> Copy dashboard

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/dashboard/id/copy/___responses/200 "See details  ")
[See body  ](./___post/rest/api/3/dashboard/id/copy/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/dashboard/id/copy/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/dashboard/id/copy/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/dashboard/id/copy/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/dashboard/id/copy/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the dashboard is not found or the dashboard is not owned by or shared with the user.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/dashboard/id/copy/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/dashboard/id/copy/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/expression/analyse
> Analyse Jira expression

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/expression/analyse/___responses/200 "See details  ")
[See body  ](./___post/rest/api/3/expression/analyse/___responses/200/body/index.hbs "See body  ")

### 400
> 400 response

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/expression/analyse/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/expression/analyse/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/expression/analyse/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/expression/analyse/___responses/401/body/index.hbs "See body  ")

### 404
> 404 response

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/expression/analyse/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/expression/analyse/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/expression/eval
> Evaluate Jira expression

### 200  (default)
> Returned if the evaluation results in a value. The result is a JSON primitive value, list, or object.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/expression/eval/___responses/200 "See details  ")
[See body  ](./___post/rest/api/3/expression/eval/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  the request is invalid, that is:
>     
>      *  invalid data is provided, such as a request including issue ID and key.
>      *  the expression is invalid and can not be parsed.
>  *  evaluation fails at runtime. This may happen for various reasons. For example, accessing a property on a null object (such as the expression `issue.id` where `issue` is `null`). In this case an error message is provided.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/expression/eval/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/expression/eval/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/expression/eval/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/expression/eval/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if any object provided in the request context is not found or the user does not have permission to view it.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/expression/eval/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/expression/eval/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/field
> Get fields

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/field/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/field/___responses/401/body/index.hbs "See body  ")



## POST /rest/api/3/field
> Create custom field

### 201  (default)
> Returned if the custom field is created.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/field/___responses/201 "See details  ")
[See body  ](./___post/rest/api/3/field/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  the user does not have permission to create custom fields.
>  *  any of the request object properties have invalid or missing values.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/field/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/field/___responses/400/body/index.hbs "See body  ")



## GET /rest/api/3/field/search
> Get fields paginated

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/search/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/field/search/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/search/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/field/search/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/search/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/field/search/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/search/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/field/search/___responses/403/body/index.hbs "See body  ")



## PUT /rest/api/3/field/:fieldId
> Update custom field

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/___responses/204 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the custom field is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/field/:fieldId/context
> Get custom field contexts

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldid/context/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldid/context/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldid/context/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldid/context/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldid/context/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldid/context/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the custom field was not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldid/context/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldid/context/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/field/:fieldId/context
> Create custom field context

### 201  (default)
> Returned if the custom field context is created.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/field/fieldid/context/___responses/201 "See details  ")
[See body  ](./___post/rest/api/3/field/fieldid/context/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/field/fieldid/context/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/field/fieldid/context/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/field/fieldid/context/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/field/fieldid/context/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the field, project, or issue type is not found.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/field/fieldid/context/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/field/fieldid/context/___responses/404/body/index.hbs "See body  ")

### 409
> Returned if the issue type is a sub-task, but sub-tasks are disabled in Jira settings.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/field/fieldid/context/___responses/409 "See details  ")
[See body  ](./___post/rest/api/3/field/fieldid/context/___responses/409/body/index.hbs "See body  ")



## GET /rest/api/3/field/:fieldId/context/defaultValue
> Get custom field contexts default values

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldid/context/defaultvalue/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldid/context/defaultvalue/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldid/context/defaultvalue/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldid/context/defaultvalue/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldid/context/defaultvalue/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldid/context/defaultvalue/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the custom field is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldid/context/defaultvalue/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldid/context/defaultvalue/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/field/:fieldId/context/defaultValue
> Set custom field contexts default values

### 204  (default)
> Returned if operation is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/context/defaultvalue/___responses/204 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/context/defaultvalue/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/context/defaultvalue/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/context/defaultvalue/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/context/defaultvalue/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/context/defaultvalue/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/context/defaultvalue/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/context/defaultvalue/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the custom field, a context, an option, or a cascading option is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/context/defaultvalue/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/context/defaultvalue/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/field/:fieldId/context/issuetypemapping
> Get issue types for custom field context

### 200  (default)
> Returned if operation is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldid/context/issuetypemapping/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldid/context/issuetypemapping/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldid/context/issuetypemapping/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldid/context/issuetypemapping/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldid/context/issuetypemapping/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldid/context/issuetypemapping/___responses/403/body/index.hbs "See body  ")



## POST /rest/api/3/field/:fieldId/context/mapping
> Get custom field contexts for projects and issue types

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/field/fieldid/context/mapping/___responses/200 "See details  ")
[See body  ](./___post/rest/api/3/field/fieldid/context/mapping/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/field/fieldid/context/mapping/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/field/fieldid/context/mapping/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/field/fieldid/context/mapping/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/field/fieldid/context/mapping/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/field/fieldid/context/mapping/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/field/fieldid/context/mapping/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the custom field, project, or issue type is not found.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/field/fieldid/context/mapping/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/field/fieldid/context/mapping/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/field/:fieldId/context/projectmapping
> Get project mappings for custom field context

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldid/context/projectmapping/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldid/context/projectmapping/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldid/context/projectmapping/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldid/context/projectmapping/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldid/context/projectmapping/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldid/context/projectmapping/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the custom field is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldid/context/projectmapping/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldid/context/projectmapping/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/field/:fieldId/context/:contextId
> Delete custom field context

### 204  (default)
> Returned if the context is deleted.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/field/fieldid/context/contextid/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/field/fieldid/context/contextid/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/field/fieldid/context/contextid/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/field/fieldid/context/contextid/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/field/fieldid/context/contextid/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/field/fieldid/context/contextid/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/field/fieldid/context/contextid/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/field/fieldid/context/contextid/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the custom field or the context is not found.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/field/fieldid/context/contextid/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/field/fieldid/context/contextid/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/field/:fieldId/context/:contextId
> Update custom field context

### 204  (default)
> Returned if the context is updated.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/context/contextid/___responses/204 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/context/contextid/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/context/contextid/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/context/contextid/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/context/contextid/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/context/contextid/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/context/contextid/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/context/contextid/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the custom field or the context is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/context/contextid/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/context/contextid/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/field/:fieldId/context/:contextId/issuetype
> Add issue types to context

### 204  (default)
> Returned if operation is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/context/contextid/issuetype/___responses/204 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/context/contextid/issuetype/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/context/contextid/issuetype/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/context/contextid/issuetype/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/context/contextid/issuetype/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/context/contextid/issuetype/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/context/contextid/issuetype/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/context/contextid/issuetype/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the custom field, context, or one or more issue types are not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/context/contextid/issuetype/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/context/contextid/issuetype/___responses/404/body/index.hbs "See body  ")

### 409
> Returned if the issue type is a sub-task, but sub-tasks are disabled in Jira settings.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/context/contextid/issuetype/___responses/409 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/context/contextid/issuetype/___responses/409/body/index.hbs "See body  ")



## POST /rest/api/3/field/:fieldId/context/:contextId/issuetype/remove
> Remove issue types from context

### 204  (default)
> Returned if operation is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/field/fieldid/context/contextid/issuetype/remove/___responses/204 "See details  ")
[See body  ](./___post/rest/api/3/field/fieldid/context/contextid/issuetype/remove/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/field/fieldid/context/contextid/issuetype/remove/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/field/fieldid/context/contextid/issuetype/remove/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/field/fieldid/context/contextid/issuetype/remove/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/field/fieldid/context/contextid/issuetype/remove/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/field/fieldid/context/contextid/issuetype/remove/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/field/fieldid/context/contextid/issuetype/remove/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the custom field, context, or one or more issue types are not found.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/field/fieldid/context/contextid/issuetype/remove/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/field/fieldid/context/contextid/issuetype/remove/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/field/:fieldId/context/:contextId/option
> Get custom field options (context)

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldid/context/contextid/option/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldid/context/contextid/option/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldid/context/contextid/option/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldid/context/contextid/option/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldid/context/contextid/option/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldid/context/contextid/option/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldid/context/contextid/option/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldid/context/contextid/option/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the custom field is not found or the context doesn't match the custom field.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldid/context/contextid/option/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldid/context/contextid/option/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/field/:fieldId/context/:contextId/option
> Create custom field options (context)

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/field/fieldid/context/contextid/option/___responses/200 "See details  ")
[See body  ](./___post/rest/api/3/field/fieldid/context/contextid/option/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/field/fieldid/context/contextid/option/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/field/fieldid/context/contextid/option/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/field/fieldid/context/contextid/option/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/field/fieldid/context/contextid/option/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/field/fieldid/context/contextid/option/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/field/fieldid/context/contextid/option/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the custom field is not found or the context doesn't match the custom field.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/field/fieldid/context/contextid/option/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/field/fieldid/context/contextid/option/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/field/:fieldId/context/:contextId/option
> Update custom field options (context)

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/context/contextid/option/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/context/contextid/option/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/context/contextid/option/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/context/contextid/option/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/context/contextid/option/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/context/contextid/option/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/context/contextid/option/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/context/contextid/option/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the field, context, or one or more options is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/context/contextid/option/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/context/contextid/option/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/field/:fieldId/context/:contextId/option/move
> Reorder custom field options (context)

### 204  (default)
> Returned if options are reordered.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/context/contextid/option/move/___responses/204 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/context/contextid/option/move/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/context/contextid/option/move/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/context/contextid/option/move/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/context/contextid/option/move/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/context/contextid/option/move/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/context/contextid/option/move/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/context/contextid/option/move/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the field, the context, or one or more of the options is not found..

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/context/contextid/option/move/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/context/contextid/option/move/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/field/:fieldId/context/:contextId/option/:optionId
> Delete custom field options (context)

### 204  (default)
> Returned if the option is deleted.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/field/fieldid/context/contextid/option/optionid/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/field/fieldid/context/contextid/option/optionid/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/field/fieldid/context/contextid/option/optionid/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/field/fieldid/context/contextid/option/optionid/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/field/fieldid/context/contextid/option/optionid/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/field/fieldid/context/contextid/option/optionid/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/field/fieldid/context/contextid/option/optionid/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/field/fieldid/context/contextid/option/optionid/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the field, the context, or the option is not found.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/field/fieldid/context/contextid/option/optionid/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/field/fieldid/context/contextid/option/optionid/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/field/:fieldId/context/:contextId/project
> Assign custom field context to projects

### 204  (default)
> Returned if operation is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/context/contextid/project/___responses/204 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/context/contextid/project/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/context/contextid/project/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/context/contextid/project/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/context/contextid/project/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/context/contextid/project/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/context/contextid/project/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/context/contextid/project/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the custom field, context, or project is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldid/context/contextid/project/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldid/context/contextid/project/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/field/:fieldId/context/:contextId/project/remove
> Remove custom field context from projects

### 204  (default)
> Returned if the custom field context is removed from the projects.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/field/fieldid/context/contextid/project/remove/___responses/204 "See details  ")
[See body  ](./___post/rest/api/3/field/fieldid/context/contextid/project/remove/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/field/fieldid/context/contextid/project/remove/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/field/fieldid/context/contextid/project/remove/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/field/fieldid/context/contextid/project/remove/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/field/fieldid/context/contextid/project/remove/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/field/fieldid/context/contextid/project/remove/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/field/fieldid/context/contextid/project/remove/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the custom field, context, or one or more projects are not found.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/field/fieldid/context/contextid/project/remove/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/field/fieldid/context/contextid/project/remove/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/field/:fieldId/contexts
> Get contexts for a field

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldid/contexts/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldid/contexts/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldid/contexts/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldid/contexts/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldid/contexts/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldid/contexts/___responses/403/body/index.hbs "See body  ")



## GET /rest/api/3/field/:fieldId/screens
> Get screens for a field

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldid/screens/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldid/screens/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldid/screens/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldid/screens/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldid/screens/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldid/screens/___responses/403/body/index.hbs "See body  ")



## GET /rest/api/3/field/:fieldKey/option
> Get all issue field options

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldkey/option/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldkey/option/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the field is not found or does not support options.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldkey/option/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldkey/option/___responses/400/body/index.hbs "See body  ")

### 403
> Returned if the request is not authenticated as a Jira administrator or the app that provided the field.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldkey/option/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldkey/option/___responses/403/body/index.hbs "See body  ")



## POST /rest/api/3/field/:fieldKey/option
> Create issue field option

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/field/fieldkey/option/___responses/200 "See details  ")
[See body  ](./___post/rest/api/3/field/fieldkey/option/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the option is invalid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/field/fieldkey/option/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/field/fieldkey/option/___responses/400/body/index.hbs "See body  ")

### 403
> Returned if the request is not authenticated as a Jira administrator or the app that provided the field.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/field/fieldkey/option/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/field/fieldkey/option/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the field is not found or does not support options.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/field/fieldkey/option/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/field/fieldkey/option/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/field/:fieldKey/option/suggestions/edit
> Get selectable issue field options

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldkey/option/suggestions/edit/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldkey/option/suggestions/edit/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldkey/option/suggestions/edit/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldkey/option/suggestions/edit/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the field is not found or does not support options.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldkey/option/suggestions/edit/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldkey/option/suggestions/edit/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/field/:fieldKey/option/suggestions/search
> Get visible issue field options

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldkey/option/suggestions/search/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldkey/option/suggestions/search/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldkey/option/suggestions/search/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldkey/option/suggestions/search/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the field is not found or does not support options.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldkey/option/suggestions/search/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldkey/option/suggestions/search/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/field/:fieldKey/option/:optionId
> Delete issue field option

### 204  (default)
> Returned if the field option is deleted.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/field/fieldkey/option/optionid/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/field/fieldkey/option/optionid/___responses/204/body/index.hbs "See body  ")

### 403
> Returned if the request is not authenticated as a Jira administrator or the app that provided the field.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/field/fieldkey/option/optionid/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/field/fieldkey/option/optionid/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the field or option is not found.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/field/fieldkey/option/optionid/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/field/fieldkey/option/optionid/___responses/404/body/index.hbs "See body  ")

### 409
> Returned if the option is selected for the field in any issue.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/field/fieldkey/option/optionid/___responses/409 "See details  ")
[See body  ](./___delete/rest/api/3/field/fieldkey/option/optionid/___responses/409/body/index.hbs "See body  ")



## GET /rest/api/3/field/:fieldKey/option/:optionId
> Get issue field option

### 200  (default)
> Returned if the requested option is returned.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldkey/option/optionid/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldkey/option/optionid/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the field is not found or does not support options.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldkey/option/optionid/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldkey/option/optionid/___responses/400/body/index.hbs "See body  ")

### 403
> Returned if the request is not authenticated as a Jira administrator or the app that provided the field.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldkey/option/optionid/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldkey/option/optionid/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the option is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/field/fieldkey/option/optionid/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/field/fieldkey/option/optionid/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/field/:fieldKey/option/:optionId
> Update issue field option

### 200  (default)
> Returned if the option is updated or created.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldkey/option/optionid/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldkey/option/optionid/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the option is invalid, or the *ID* in the request object does not match the *optionId* parameter.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldkey/option/optionid/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldkey/option/optionid/___responses/400/body/index.hbs "See body  ")

### 403
> Returned if the request is not authenticated as a Jira administrator or the app that provided the field.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldkey/option/optionid/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldkey/option/optionid/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if field is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/field/fieldkey/option/optionid/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/field/fieldkey/option/optionid/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/field/:fieldKey/option/:optionId/issue
> Replace issue field option

### 303  (default)
> Returned if the long-running task to deselect the option is started.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/field/fieldkey/option/optionid/issue/___responses/303 "See details  ")
[See body  ](./___delete/rest/api/3/field/fieldkey/option/optionid/issue/___responses/303/body/index.hbs "See body  ")

### 400
> Returned if the JQL query is invalid.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/field/fieldkey/option/optionid/issue/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/field/fieldkey/option/optionid/issue/___responses/400/body/index.hbs "See body  ")

### 404
> Returned if the field is not found or does not support options, or the options to be replaced are not found.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/field/fieldkey/option/optionid/issue/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/field/fieldkey/option/optionid/issue/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/fieldconfiguration
> Get all field configurations

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/fieldconfiguration/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/fieldconfiguration/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/fieldconfiguration/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/fieldconfiguration/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/fieldconfiguration/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/fieldconfiguration/___responses/403/body/index.hbs "See body  ")



## GET /rest/api/3/fieldconfiguration/:id/fields
> Get field configuration items

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/fieldconfiguration/id/fields/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/fieldconfiguration/id/fields/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/fieldconfiguration/id/fields/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/fieldconfiguration/id/fields/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/fieldconfiguration/id/fields/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/fieldconfiguration/id/fields/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the field configuration is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/fieldconfiguration/id/fields/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/fieldconfiguration/id/fields/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/fieldconfigurationscheme
> Get all field configuration schemes

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/fieldconfigurationscheme/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/fieldconfigurationscheme/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/fieldconfigurationscheme/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/fieldconfigurationscheme/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/fieldconfigurationscheme/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/fieldconfigurationscheme/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/fieldconfigurationscheme/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/fieldconfigurationscheme/___responses/403/body/index.hbs "See body  ")



## GET /rest/api/3/fieldconfigurationscheme/mapping
> Get field configuration issue type items

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/fieldconfigurationscheme/mapping/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/fieldconfigurationscheme/mapping/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/fieldconfigurationscheme/mapping/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/fieldconfigurationscheme/mapping/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/fieldconfigurationscheme/mapping/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/fieldconfigurationscheme/mapping/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/fieldconfigurationscheme/mapping/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/fieldconfigurationscheme/mapping/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if no field configuration schemes are found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/fieldconfigurationscheme/mapping/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/fieldconfigurationscheme/mapping/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/fieldconfigurationscheme/project
> Get field configuration schemes for projects

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/fieldconfigurationscheme/project/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/fieldconfigurationscheme/project/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/fieldconfigurationscheme/project/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/fieldconfigurationscheme/project/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/fieldconfigurationscheme/project/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/fieldconfigurationscheme/project/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/fieldconfigurationscheme/project/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/fieldconfigurationscheme/project/___responses/403/body/index.hbs "See body  ")



## PUT /rest/api/3/fieldconfigurationscheme/project
> Assign field configuration scheme to project

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/fieldconfigurationscheme/project/___responses/204 "See details  ")
[See body  ](./___put/rest/api/3/fieldconfigurationscheme/project/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the project is not a classic project.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/fieldconfigurationscheme/project/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/fieldconfigurationscheme/project/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/fieldconfigurationscheme/project/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/fieldconfigurationscheme/project/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/fieldconfigurationscheme/project/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/fieldconfigurationscheme/project/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the project is missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/fieldconfigurationscheme/project/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/fieldconfigurationscheme/project/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/filter
> Get filters

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/filter/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/filter/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/filter/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/filter/___responses/401/body/index.hbs "See body  ")



## POST /rest/api/3/filter
> Create filter

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/filter/___responses/200 "See details  ")
[See body  ](./___post/rest/api/3/filter/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request object is invalid. For example, the `name` is not unique or the project ID is not specified for a project role share permission.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/filter/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/filter/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/filter/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/filter/___responses/401/body/index.hbs "See body  ")



## GET /rest/api/3/filter/defaultShareScope
> Get default share scope

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/filter/defaultsharescope/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/filter/defaultsharescope/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/filter/defaultsharescope/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/filter/defaultsharescope/___responses/401/body/index.hbs "See body  ")



## PUT /rest/api/3/filter/defaultShareScope
> Set default share scope

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/filter/defaultsharescope/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/filter/defaultsharescope/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if an invalid scope is set.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/filter/defaultsharescope/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/filter/defaultsharescope/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/filter/defaultsharescope/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/filter/defaultsharescope/___responses/401/body/index.hbs "See body  ")



## GET /rest/api/3/filter/favourite
> Get favorite filters

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/filter/favourite/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/filter/favourite/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/filter/favourite/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/filter/favourite/___responses/401/body/index.hbs "See body  ")



## GET /rest/api/3/filter/my
> Get my filters

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/filter/my/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/filter/my/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/filter/my/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/filter/my/___responses/401/body/index.hbs "See body  ")



## GET /rest/api/3/filter/search
> Search for filters

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/filter/search/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/filter/search/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  `owner` and `accountId` are provided.
>  *  `expand` includes an invalid value.
>  *  `orderBy` is invalid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/filter/search/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/filter/search/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/filter/search/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/filter/search/___responses/401/body/index.hbs "See body  ")



## DELETE /rest/api/3/filter/:id
> Delete filter

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/filter/id/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/filter/id/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the filter is not found.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/filter/id/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/filter/id/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the user does not have permission to delete the filter.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/filter/id/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/filter/id/___responses/401/body/index.hbs "See body  ")



## GET /rest/api/3/filter/:id
> Get filter

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/filter/id/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/filter/id/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the filter is not found or the user does not have permission to view it.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/filter/id/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/filter/id/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/filter/id/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/filter/id/___responses/401/body/index.hbs "See body  ")



## PUT /rest/api/3/filter/:id
> Update filter

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/filter/id/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/filter/id/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request object is invalid. For example, the `name` is not unique or the project ID is not specified for a project role share permission.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/filter/id/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/filter/id/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/filter/id/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/filter/id/___responses/401/body/index.hbs "See body  ")



## DELETE /rest/api/3/filter/:id/columns
> Reset columns

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/filter/id/columns/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/filter/id/columns/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  the filter is not found.
>  *  the user does not have permission to view the filter.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/filter/id/columns/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/filter/id/columns/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/filter/id/columns/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/filter/id/columns/___responses/401/body/index.hbs "See body  ")



## GET /rest/api/3/filter/:id/columns
> Get columns

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/filter/id/columns/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/filter/id/columns/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the user does not have permission to view the filter.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/filter/id/columns/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/filter/id/columns/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/filter/id/columns/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/filter/id/columns/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if a column configuration is not set for the filter.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/filter/id/columns/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/filter/id/columns/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/filter/:id/columns
> Set columns

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/filter/id/columns/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/filter/id/columns/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  a non-navigable field is set as a column.
>  *  the user does not have permission to view the filter.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/filter/id/columns/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/filter/id/columns/___responses/400/body/index.hbs "See body  ")



## DELETE /rest/api/3/filter/:id/favourite
> Remove filter as favorite

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/filter/id/favourite/___responses/200 "See details  ")
[See body  ](./___delete/rest/api/3/filter/id/favourite/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  the filter is not found.
>  *  the user does not have permission to view the filter.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/filter/id/favourite/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/filter/id/favourite/___responses/400/body/index.hbs "See body  ")



## PUT /rest/api/3/filter/:id/favourite
> Add filter as favorite

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/filter/id/favourite/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/filter/id/favourite/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  the filter is not found.
>  *  the user does not have permission to favorite the filter.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/filter/id/favourite/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/filter/id/favourite/___responses/400/body/index.hbs "See body  ")



## GET /rest/api/3/filter/:id/permission
> Get share permissions

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/filter/id/permission/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/filter/id/permission/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/filter/id/permission/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/filter/id/permission/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the filter is not found.
>  *  the user does not have permission to view the filter.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/filter/id/permission/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/filter/id/permission/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/filter/:id/permission
> Add share permission

### 201  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/filter/id/permission/___responses/201 "See details  ")
[See body  ](./___post/rest/api/3/filter/id/permission/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  the request object is invalid. For example, it contains an invalid type, the ID does not match the type, or the project or group is not found.
>  *  the user does not own the filter.
>  *  the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/filter/id/permission/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/filter/id/permission/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/filter/id/permission/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/filter/id/permission/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the filter is not found.
>  *  the user does not have permission to view the filter.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/filter/id/permission/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/filter/id/permission/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/filter/:id/permission/:permissionId
> Delete share permission

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/filter/id/permission/permissionid/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/filter/id/permission/permissionid/___responses/204/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/filter/id/permission/permissionid/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/filter/id/permission/permissionid/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the filter is not found.
>  *  the user does not own the filter.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/filter/id/permission/permissionid/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/filter/id/permission/permissionid/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/filter/:id/permission/:permissionId
> Get share permission

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/filter/id/permission/permissionid/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/filter/id/permission/permissionid/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/filter/id/permission/permissionid/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/filter/id/permission/permissionid/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the filter is not found.
>  *  the permission is not found.
>  *  the user does not have permission to view the filter.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/filter/id/permission/permissionid/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/filter/id/permission/permissionid/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/group
> Remove group

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/group/___responses/200 "See details  ")
[See body  ](./___delete/rest/api/3/group/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the group name is not specified.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/group/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/group/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing from the request.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/group/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/group/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/group/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/group/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the group is not found.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/group/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/group/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/group
> Get group

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/group/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/group/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the group name is not specified.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/group/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/group/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/group/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/group/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the calling user does not have the Administer Jira global permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/group/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/group/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the group is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/group/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/group/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/group
> Create group

### 201  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/group/___responses/201 "See details  ")
[See body  ](./___post/rest/api/3/group/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if group name is not specified or the group name is in use.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/group/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/group/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/group/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/group/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/group/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/group/___responses/403/body/index.hbs "See body  ")



## GET /rest/api/3/group/bulk
> Bulk get groups

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/group/bulk/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/group/bulk/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/group/bulk/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/group/bulk/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/group/bulk/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/group/bulk/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/group/bulk/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/group/bulk/___responses/403/body/index.hbs "See body  ")



## GET /rest/api/3/group/member
> Get users from group

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/group/member/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/group/member/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the group name is not specified.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/group/member/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/group/member/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/group/member/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/group/member/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the calling user does not have the Administer Jira global permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/group/member/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/group/member/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the group is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/group/member/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/group/member/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/group/user
> Remove user from group

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/group/user/___responses/200 "See details  ")
[See body  ](./___delete/rest/api/3/group/user/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  `groupName` is missing.
>  *  `accountId` is missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/group/user/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/group/user/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing from the request.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/group/user/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/group/user/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/group/user/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/group/user/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the group or user are not found.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/group/user/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/group/user/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/group/user
> Add user to group

### 201  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/group/user/___responses/201 "See details  ")
[See body  ](./___post/rest/api/3/group/user/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  `groupname` is not provided.
>  *  `accountId` is missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/group/user/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/group/user/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing from the request.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/group/user/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/group/user/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the calling user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/group/user/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/group/user/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the group or user are not found.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/group/user/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/group/user/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/groups/picker
> Find groups

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/groups/picker/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/groups/picker/___responses/200/body/index.hbs "See body  ")



## GET /rest/api/3/groupuserpicker
> Find users and groups

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/groupuserpicker/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/groupuserpicker/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the query parameter is not provided.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/groupuserpicker/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/groupuserpicker/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/groupuserpicker/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/groupuserpicker/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/groupuserpicker/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/groupuserpicker/___responses/403/body/index.hbs "See body  ")



## GET /rest/api/3/instance/license
> Get license

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/instance/license/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/instance/license/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/instance/license/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/instance/license/___responses/401/body/index.hbs "See body  ")



## POST /rest/api/3/issue
> Create issue

### 201  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/___responses/201 "See details  ")
[See body  ](./___post/rest/api/3/issue/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if the request:
>
>  *  is missing required fields.
>  *  contains invalid field values.
>  *  contains fields that cannot be set for the issue type.
>  *  is by a user who does not have the necessary permission.
>  *  is to create a subtype in a project different that of the parent issue.
>  *  is for a subtask when the option to create subtasks is disabled.
>  *  is invalid for any other reason.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/issue/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/issue/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/issue/___responses/403/body/index.hbs "See body  ")



## POST /rest/api/3/issue/bulk
> Bulk create issue

### 201  (default)
> Returned if any of the issue or subtask creation requests were successful. A request may be unsuccessful when it:
>
>  *  is missing required fields.
>  *  contains invalid field values.
>  *  contains fields that cannot be set for the issue type.
>  *  is by a user who does not have the necessary permission.
>  *  is to create a subtype in a project different that of the parent issue.
>  *  is for a subtask when the option to create subtasks is disabled.
>  *  is invalid for any other reason.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/bulk/___responses/201 "See details  ")
[See body  ](./___post/rest/api/3/issue/bulk/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if all requests are invalid. Requests may be unsuccessful when they:
>
>  *  are missing required fields.
>  *  contain invalid field values.
>  *  contain fields that cannot be set for the issue type.
>  *  are by a user who does not have the necessary permission.
>  *  are to create a subtype in a project different that of the parent issue.
>  *  is for a subtask when the option to create subtasks is disabled.
>  *  are invalid for any other reason.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/bulk/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/issue/bulk/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/bulk/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/issue/bulk/___responses/401/body/index.hbs "See body  ")



## GET /rest/api/3/issue/createmeta
> Get create issue metadata

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/createmeta/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issue/createmeta/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/createmeta/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/issue/createmeta/___responses/401/body/index.hbs "See body  ")



## GET /rest/api/3/issue/picker
> Get issue picker suggestions

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/picker/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issue/picker/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/picker/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/issue/picker/___responses/401/body/index.hbs "See body  ")



## POST /rest/api/3/issue/properties
> Bulk set issues properties

### 303  (default)
> Returned if the operation is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/properties/___responses/303 "See details  ")
[See body  ](./___post/rest/api/3/issue/properties/___responses/303/body/index.hbs "See body  ")

### 400
> Return if the request is invalid or the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/properties/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/issue/properties/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/properties/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/issue/properties/___responses/401/body/index.hbs "See body  ")



## DELETE /rest/api/3/issue/properties/:propertyKey
> Bulk delete issue property

### 303  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/properties/propertykey/___responses/303 "See details  ")
[See body  ](./___delete/rest/api/3/issue/properties/propertykey/___responses/303/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/properties/propertykey/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/issue/properties/propertykey/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/properties/propertykey/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/issue/properties/propertykey/___responses/401/body/index.hbs "See body  ")



## PUT /rest/api/3/issue/properties/:propertyKey
> Bulk set issue property

### 303  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/properties/propertykey/___responses/303 "See details  ")
[See body  ](./___put/rest/api/3/issue/properties/propertykey/___responses/303/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/properties/propertykey/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/issue/properties/propertykey/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/properties/propertykey/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/issue/properties/propertykey/___responses/401/body/index.hbs "See body  ")



## DELETE /rest/api/3/issue/:issueIdOrKey
> Delete issue

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the issue has subtasks and `deleteSubtasks` is not set to *true*.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have permission to delete the issue.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the issue is not found or the user does not have permission to view the issue.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/issue/:issueIdOrKey
> Get issue

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the issue is not found or the user does not have permission to view it.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/issue/:issueIdOrKey
> Edit issue

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/issueidorkey/___responses/204 "See details  ")
[See body  ](./___put/rest/api/3/issue/issueidorkey/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  the request body is missing.
>  *  the user does not have the necessary permission to edit one or more fields.
>  *  the request includes one or more fields that are not found or are not associated with the issue's edit screen.
>  *  the request includes an invalid transition.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/issueidorkey/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/issue/issueidorkey/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/issueidorkey/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/issue/issueidorkey/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user uses `overrideScreenSecurity` or `overrideEditableFlag` but doesn't have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/issueidorkey/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/issue/issueidorkey/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the issue is not found or the user does not have permission to view it.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/issueidorkey/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/issue/issueidorkey/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/issue/:issueIdOrKey/assignee
> Assign issue

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/issueidorkey/assignee/___responses/204 "See details  ")
[See body  ](./___put/rest/api/3/issue/issueidorkey/assignee/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  the user is not found.
>  *  `name`, `key`, or `accountId` is missing.
>  *  more than one of `name`, `key`, and `accountId` are provided.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/issueidorkey/assignee/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/issue/issueidorkey/assignee/___responses/400/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/issueidorkey/assignee/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/issue/issueidorkey/assignee/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the issue is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/issueidorkey/assignee/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/issue/issueidorkey/assignee/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/issue/:issueIdOrKey/attachments
> Add attachment

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/attachments/___responses/200 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/attachments/___responses/200/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/attachments/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/attachments/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if any of the following is true:
>
>  *  the issue is not found.
>  *  the user does not have permission to view the issue.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/attachments/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/attachments/___responses/404/body/index.hbs "See body  ")

### 413
> The attachments exceed the maximum attachment size for issues. See [Configuring file attachments](https://confluence.atlassian.com/x/wIXKM) for details.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/attachments/___responses/413 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/attachments/___responses/413/body/index.hbs "See body  ")



## GET /rest/api/3/issue/:issueIdOrKey/changelog
> Get changelogs

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/changelog/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/changelog/___responses/200/body/index.hbs "See body  ")

### 404
> Returned if the issue is not found or the user does not have permission to view it.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/changelog/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/changelog/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/issue/:issueIdOrKey/changelog/list
> Get changelogs by IDs

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/changelog/list/___responses/200 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/changelog/list/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/changelog/list/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/changelog/list/___responses/400/body/index.hbs "See body  ")

### 404
> Returned if the issue is not found or the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/changelog/list/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/changelog/list/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/issue/:issueIdOrKey/comment
> Get comments

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/comment/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/comment/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if `orderBy` is set to a value other than *created*.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/comment/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/comment/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/comment/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/comment/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the issue is not found or the user does not have permission to view it.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/comment/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/comment/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/issue/:issueIdOrKey/comment
> Add comment

### 201  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/comment/___responses/201 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/comment/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/comment/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/comment/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/comment/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/comment/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the issue is not found or the user does not have permission to view it.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/comment/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/comment/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/issue/:issueIdOrKey/comment/:id
> Delete comment

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/comment/id/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/comment/id/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the user does not have permission to delete the comment.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/comment/id/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/comment/id/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/comment/id/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/comment/id/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the issue or comment is not found or the user does not have permission to view the issue or comment.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/comment/id/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/comment/id/___responses/404/body/index.hbs "See body  ")

### 405
> Returned if an anonymous call is made to the operation.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/comment/id/___responses/405 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/comment/id/___responses/405/body/index.hbs "See body  ")



## GET /rest/api/3/issue/:issueIdOrKey/comment/:id
> Get comment

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/comment/id/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/comment/id/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/comment/id/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/comment/id/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the issue or comment is not found or the user does not have permission to view the issue or comment.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/comment/id/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/comment/id/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/issue/:issueIdOrKey/comment/:id
> Update comment

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/issueidorkey/comment/id/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/issue/issueidorkey/comment/id/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the user does not have permission to edit the comment or the request is invalid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/issueidorkey/comment/id/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/issue/issueidorkey/comment/id/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/issueidorkey/comment/id/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/issue/issueidorkey/comment/id/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the issue or comment is not found or the user does not have permission to view the issue or comment.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/issueidorkey/comment/id/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/issue/issueidorkey/comment/id/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/issue/:issueIdOrKey/editmeta
> Get edit issue metadata

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/editmeta/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/editmeta/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/editmeta/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/editmeta/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user uses an override parameter but doesn't have permission to do so.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/editmeta/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/editmeta/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the issue is not found or the user does not have permission to view it.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/editmeta/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/editmeta/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/issue/:issueIdOrKey/notify
> Send notification for issue

### 204  (default)
> Returned if the email is queued for sending.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/notify/___responses/204 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/notify/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  the recipient is the same as the calling user.
>  *  the recipient is invalid. For example, the recipient is set to the assignee, but the issue is unassigned.
>  *  the request is invalid. For example, required fields are missing or have invalid values.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/notify/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/notify/___responses/400/body/index.hbs "See body  ")

### 403
> Returned if:
>
>  *  outgoing emails are disabled.
>  *  no SMTP server is configured.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/notify/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/notify/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the issue is not found.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/notify/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/notify/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/issue/:issueIdOrKey/properties
> Get issue property keys

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/properties/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/properties/___responses/200/body/index.hbs "See body  ")

### 404
> Returned if the issue is not found or the user does not have permissions to view the issue.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/properties/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/properties/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/issue/:issueIdOrKey/properties/:propertyKey
> Delete issue property

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/properties/propertykey/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/properties/propertykey/___responses/204/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/properties/propertykey/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/properties/propertykey/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the issue or property is not found, or the user does not have permission to edit the issue.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/properties/propertykey/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/properties/propertykey/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/issue/:issueIdOrKey/properties/:propertyKey
> Get issue property

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/properties/propertykey/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/properties/propertykey/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/properties/propertykey/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/properties/propertykey/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the issue or property is not found or the user does not have permission to see the issue.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/properties/propertykey/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/properties/propertykey/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/issue/:issueIdOrKey/properties/:propertyKey
> Set issue property

### 200  (default)
> Returned if the issue property is updated.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/issueidorkey/properties/propertykey/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/issue/issueidorkey/properties/propertykey/___responses/200/body/index.hbs "See body  ")

### 201
> Returned if the issue property is created.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/issueidorkey/properties/propertykey/___responses/201 "See details  ")
[See body  ](./___put/rest/api/3/issue/issueidorkey/properties/propertykey/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/issueidorkey/properties/propertykey/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/issue/issueidorkey/properties/propertykey/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/issueidorkey/properties/propertykey/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/issue/issueidorkey/properties/propertykey/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have permission to edit the issue.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/issueidorkey/properties/propertykey/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/issue/issueidorkey/properties/propertykey/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the issue is not found or the user does not have permission to view the issue.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/issueidorkey/properties/propertykey/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/issue/issueidorkey/properties/propertykey/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/issue/:issueIdOrKey/remotelink
> Delete remote issue link by global ID

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/remotelink/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/remotelink/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if a global ID isn't provided.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/remotelink/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/remotelink/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/remotelink/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/remotelink/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have permission to link issues.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/remotelink/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/remotelink/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the issue or remote issue link is not found or the user does not have permission to view the issue.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/remotelink/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/remotelink/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/issue/:issueIdOrKey/remotelink
> Get remote issue links

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/remotelink/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/remotelink/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/remotelink/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/remotelink/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/remotelink/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/remotelink/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if issue linking is disabled.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/remotelink/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/remotelink/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the issue or remote issue link is not found or the user does not have permission to view the issue.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/remotelink/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/remotelink/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/issue/:issueIdOrKey/remotelink
> Create or update remote issue link

### 200  (default)
> Returned if the remote issue link is updated.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/remotelink/___responses/200 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/remotelink/___responses/200/body/index.hbs "See body  ")

### 201
> Returned if the remote issue link is created.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/remotelink/___responses/201 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/remotelink/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/remotelink/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/remotelink/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/remotelink/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/remotelink/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have permission to link issues.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/remotelink/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/remotelink/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the issue is not found or the user does not have permission to view the issue.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/remotelink/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/remotelink/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/issue/:issueIdOrKey/remotelink/:linkId
> Delete remote issue link by ID

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/remotelink/linkid/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/remotelink/linkid/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the link ID is invalid or the remote issue link does not belong to the issue.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/remotelink/linkid/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/remotelink/linkid/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/remotelink/linkid/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/remotelink/linkid/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have permission to link issues.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/remotelink/linkid/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/remotelink/linkid/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the issue or remote issue link is not found or the user does not have permission to view the issue.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/remotelink/linkid/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/remotelink/linkid/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/issue/:issueIdOrKey/remotelink/:linkId
> Get remote issue link by ID

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/remotelink/linkid/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/remotelink/linkid/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the link ID is invalid or the remote issue link does not belong to the issue.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/remotelink/linkid/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/remotelink/linkid/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/remotelink/linkid/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/remotelink/linkid/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if issue linking is disabled.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/remotelink/linkid/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/remotelink/linkid/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the issue or remote issue link is not found or the user does not have permission to view the issue.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/remotelink/linkid/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/remotelink/linkid/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/issue/:issueIdOrKey/remotelink/:linkId
> Update remote issue link by ID

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/issueidorkey/remotelink/linkid/___responses/204 "See details  ")
[See body  ](./___put/rest/api/3/issue/issueidorkey/remotelink/linkid/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  the link ID is invalid.
>  *  the remote issue link does not belong to the issue.
>  *  the request body is invalid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/issueidorkey/remotelink/linkid/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/issue/issueidorkey/remotelink/linkid/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/issueidorkey/remotelink/linkid/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/issue/issueidorkey/remotelink/linkid/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have permission to link issues.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/issueidorkey/remotelink/linkid/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/issue/issueidorkey/remotelink/linkid/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the issue or remote issue link is not found or the user does not have permission to view the issue.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/issueidorkey/remotelink/linkid/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/issue/issueidorkey/remotelink/linkid/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/issue/:issueIdOrKey/transitions
> Get transitions

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/transitions/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/transitions/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/transitions/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/transitions/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the issue is not found or the user does not have permission to view it.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/transitions/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/transitions/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/issue/:issueIdOrKey/transitions
> Transition issue

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/transitions/___responses/204 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/transitions/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  no transition is specified.
>  *  the user does not have permission to transition the issue.
>  *  a field that isn't included on the transition screen is defined in `fields` or `update`.
>  *  a field is specified in both `fields` and `update`.
>  *  the request is invalid for any other reason.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/transitions/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/transitions/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/transitions/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/transitions/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the issue is not found or the user does not have permission to view it.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/transitions/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/transitions/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/issue/:issueIdOrKey/votes
> Delete vote

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/votes/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/votes/___responses/204/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/votes/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/votes/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  voting is disabled.
>  *  the user has not voted on the issue.
>  *  the issue is not found.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/votes/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/votes/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/issue/:issueIdOrKey/votes
> Get votes

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/votes/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/votes/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/votes/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/votes/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  voting is disabled.
>  *  the user does not have permission to view the issue.
>  *  the issue is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/votes/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/votes/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/issue/:issueIdOrKey/votes
> Add vote

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/votes/___responses/204 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/votes/___responses/204/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/votes/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/votes/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  voting is disabled.
>  *  the issue is not found.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/votes/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/votes/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/issue/:issueIdOrKey/watchers
> Delete watcher

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/watchers/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/watchers/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if `accountId` is not supplied.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/watchers/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/watchers/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/watchers/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/watchers/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the permission to manage the watcher list.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/watchers/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/watchers/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the issue or the user is not found or the user does not have permission to view the issue.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/watchers/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/watchers/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/issue/:issueIdOrKey/watchers
> Get issue watchers

### 200  (default)
> Returned if the request is successful

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/watchers/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/watchers/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/watchers/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/watchers/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the issue is not found or the user does not have permission to view it.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/watchers/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/watchers/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/issue/:issueIdOrKey/watchers
> Add watcher

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/watchers/___responses/204 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/watchers/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/watchers/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/watchers/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/watchers/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/watchers/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the permission to manage the watcher list.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/watchers/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/watchers/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the issue or the user is not found or the user does not have permission to view the issue.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/watchers/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/watchers/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/issue/:issueIdOrKey/worklog
> Get issue worklogs

### 200  (default)
> Returned if the request is successful

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/worklog/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/worklog/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/worklog/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/worklog/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the issue is not found or the user does not have permission to view the issue.
>  *  `startAt` or `maxResults` has non-numeric values.
>  *  time tracking is disabled.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/worklog/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/worklog/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/issue/:issueIdOrKey/worklog
> Add worklog

### 201  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/worklog/___responses/201 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/worklog/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  `adjustEstimate` is set to `new` but `newEstimate` is not provided or is invalid.
>  *  `adjustEstimate` is set to `manual` but `reduceBy` is not provided or is invalid.
>  *  the user does not have permission to add the worklog.
>  *  the request JSON is malformed.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/worklog/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/worklog/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/worklog/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/worklog/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the issue is not found or the user does not have permission to view it.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issue/issueidorkey/worklog/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/issue/issueidorkey/worklog/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/issue/:issueIdOrKey/worklog/:id
> Delete worklog

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/worklog/id/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/worklog/id/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  `adjustEstimate` is set to `new` but `newEstimate` is not provided or is invalid.
>  *  `adjustEstimate` is set to `manual` but `reduceBy` is not provided or is invalid.
>  *  the user does not have permission to delete the worklog.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/worklog/id/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/worklog/id/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/worklog/id/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/worklog/id/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the issue is not found or user does not have permission to view the issue.
>  *  the worklog is not found or the user does not have permission to view it.
>  *  time tracking is disabled.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/worklog/id/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/worklog/id/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/issue/:issueIdOrKey/worklog/:id
> Get worklog

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/worklog/id/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/worklog/id/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/worklog/id/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/worklog/id/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the issue is not found or the user does not have permission to view it.
>  *  the worklog is not found or the user does not have permission to view it.
>  *  time tracking is disabled.
>
> .

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/worklog/id/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/worklog/id/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/issue/:issueIdOrKey/worklog/:id
> Update worklog

### 200  (default)
> Returned if the request is successful

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/issueidorkey/worklog/id/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/issue/issueidorkey/worklog/id/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  `adjustEstimate` is set to `new` but `newEstimate` is not provided or is invalid.
>  *  the user does not have permission to update the worklog.
>  *  the request JSON is malformed.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/issueidorkey/worklog/id/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/issue/issueidorkey/worklog/id/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/issueidorkey/worklog/id/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/issue/issueidorkey/worklog/id/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the issue is not found or user does not have permission to view the issue.
>  *  the worklog is not found or the user does not have permission to view it.
>  *  time tracking is disabled.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/issueidorkey/worklog/id/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/issue/issueidorkey/worklog/id/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/issue/:issueIdOrKey/worklog/:worklogId/properties
> Get worklog property keys

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the worklog ID is invalid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the issue or worklog is not found.
>  *  the user does not have permission to view the issue or worklog.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/issue/:issueIdOrKey/worklog/:worklogId/properties/:propertyKey
> Delete worklog property

### 204  (default)
> Returned if the worklog property is removed.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/propertykey/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/propertykey/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the worklog key or id is invalid.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/propertykey/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/propertykey/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/propertykey/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/propertykey/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have permission to edit the worklog.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/propertykey/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/propertykey/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the issue, worklog, or property is not found.
>  *  the user does not have permission to view the issue or worklog.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/propertykey/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/propertykey/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/issue/:issueIdOrKey/worklog/:worklogId/properties/:propertyKey
> Get worklog property

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/propertykey/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/propertykey/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the worklog ID is invalid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/propertykey/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/propertykey/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/propertykey/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/propertykey/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the issue, worklog, or property is not found.
>  *  the user does not have permission to view the issue or worklog.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/propertykey/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/propertykey/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/issue/:issueIdOrKey/worklog/:worklogId/properties/:propertyKey
> Set worklog property

### 200  (default)
> Returned if the worklog property is updated.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/propertykey/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/propertykey/___responses/200/body/index.hbs "See body  ")

### 201
> Returned if the worklog property is created.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/propertykey/___responses/201 "See details  ")
[See body  ](./___put/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/propertykey/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if the worklog ID is invalid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/propertykey/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/propertykey/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/propertykey/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/propertykey/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have permission to edit the worklog.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/propertykey/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/propertykey/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the issue or worklog is not found.
>  *  the user does not have permission to view the issue or worklog.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/propertykey/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/issue/issueidorkey/worklog/worklogid/properties/propertykey/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/issueLink
> Create issue link

### 201  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issuelink/___responses/201 "See details  ")
[See body  ](./___post/rest/api/3/issuelink/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if the comment is not created. The response contains an error message indicating why the comment wasn't created. The issue link is also not created.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issuelink/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/issuelink/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issuelink/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/issuelink/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  issue linking is disabled.
>  *  the user cannot view one or both of the issues. For example, the user doesn't have *Browse project* project permission for a project containing one of the issues.
>  *  the user does not have *link issues* project permission.
>  *  either of the link issues are not found.
>  *  the issue link type is not found.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issuelink/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/issuelink/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/issueLink/:linkId
> Delete issue link

### 200  (default)
> 200 response

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issuelink/linkid/___responses/200 "See details  ")
[See body  ](./___delete/rest/api/3/issuelink/linkid/___responses/200/body/index.hbs "See body  ")

### 204
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issuelink/linkid/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/issuelink/linkid/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the issue link ID is invalid.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issuelink/linkid/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/issuelink/linkid/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issuelink/linkid/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/issuelink/linkid/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  issue linking is disabled.
>  *  the issue link is not found.
>  *  the user doesn't have the required permissions.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issuelink/linkid/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/issuelink/linkid/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/issueLink/:linkId
> Get issue link

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuelink/linkid/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issuelink/linkid/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the issue link ID is invalid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuelink/linkid/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/issuelink/linkid/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuelink/linkid/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/issuelink/linkid/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  issue linking is disabled.
>  *  the issue link is not found.
>  *  the user doesn't have the required permissions.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuelink/linkid/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/issuelink/linkid/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/issueLinkType
> Get issue link types

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuelinktype/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issuelinktype/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuelinktype/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/issuelinktype/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if issue linking is disabled.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuelinktype/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/issuelinktype/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/issueLinkType
> Create issue link type

### 201  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issuelinktype/___responses/201 "See details  ")
[See body  ](./___post/rest/api/3/issuelinktype/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issuelinktype/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/issuelinktype/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issuelinktype/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/issuelinktype/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  issue linking is disabled.
>  *  the issue link type name is in use.
>  *  the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issuelinktype/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/issuelinktype/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/issueLinkType/:issueLinkTypeId
> Delete issue link type

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issuelinktype/issuelinktypeid/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/issuelinktype/issuelinktypeid/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the issue link type ID is invalid.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issuelinktype/issuelinktypeid/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/issuelinktype/issuelinktypeid/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issuelinktype/issuelinktypeid/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/issuelinktype/issuelinktypeid/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  issue linking is disabled.
>  *  the issue link type is not found.
>  *  the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issuelinktype/issuelinktypeid/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/issuelinktype/issuelinktypeid/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/issueLinkType/:issueLinkTypeId
> Get issue link type

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuelinktype/issuelinktypeid/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issuelinktype/issuelinktypeid/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the issue link type ID is invalid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuelinktype/issuelinktypeid/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/issuelinktype/issuelinktypeid/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuelinktype/issuelinktypeid/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/issuelinktype/issuelinktypeid/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  issue linking is disabled.
>  *  the issue link type is not found.
>  *  the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuelinktype/issuelinktypeid/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/issuelinktype/issuelinktypeid/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/issueLinkType/:issueLinkTypeId
> Update issue link type

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuelinktype/issuelinktypeid/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/issuelinktype/issuelinktypeid/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the issue link type ID or the request body are invalid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuelinktype/issuelinktypeid/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/issuelinktype/issuelinktypeid/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuelinktype/issuelinktypeid/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/issuelinktype/issuelinktypeid/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  issue linking is disabled.
>  *  the issue link type is not found.
>  *  the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuelinktype/issuelinktypeid/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/issuelinktype/issuelinktypeid/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/issuesecurityschemes
> Get issue security schemes

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuesecurityschemes/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issuesecurityschemes/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuesecurityschemes/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/issuesecurityschemes/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have permission to administer issue security schemes.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuesecurityschemes/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/issuesecurityschemes/___responses/403/body/index.hbs "See body  ")



## GET /rest/api/3/issuesecurityschemes/:id
> Get issue security scheme

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuesecurityschemes/id/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issuesecurityschemes/id/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuesecurityschemes/id/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/issuesecurityschemes/id/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the administrator permission and the scheme is not used in any project where the user has administrative permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuesecurityschemes/id/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/issuesecurityschemes/id/___responses/403/body/index.hbs "See body  ")



## GET /rest/api/3/issuesecurityschemes/:issueSecuritySchemeId/members
> Get issue security level members

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuesecurityschemes/issuesecurityschemeid/members/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issuesecurityschemes/issuesecurityschemeid/members/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuesecurityschemes/issuesecurityschemeid/members/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/issuesecurityschemes/issuesecurityschemeid/members/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuesecurityschemes/issuesecurityschemeid/members/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/issuesecurityschemes/issuesecurityschemeid/members/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuesecurityschemes/issuesecurityschemeid/members/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/issuesecurityschemes/issuesecurityschemeid/members/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if no issue security level members are found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuesecurityschemes/issuesecurityschemeid/members/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/issuesecurityschemes/issuesecurityschemeid/members/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/issuetype
> Get all issue types for user

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetype/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issuetype/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetype/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/issuetype/___responses/401/body/index.hbs "See body  ")



## POST /rest/api/3/issuetype
> Create issue type

### 201  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issuetype/___responses/201 "See details  ")
[See body  ](./___post/rest/api/3/issuetype/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid because:
>
>  *  no content is sent.
>  *  the issue type name exceeds 60 characters.
>  *  a subtask issue type is requested on an instance where subtasks are disabled.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issuetype/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/issuetype/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issuetype/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/issuetype/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issuetype/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/issuetype/___responses/403/body/index.hbs "See body  ")

### 409
> Returned if the issue type name is in use.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issuetype/___responses/409 "See details  ")
[See body  ](./___post/rest/api/3/issuetype/___responses/409/body/index.hbs "See body  ")



## GET /rest/api/3/issuetype/project
> Get issue types for project

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetype/project/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issuetype/project/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetype/project/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/issuetype/project/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetype/project/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/issuetype/project/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the project is not found.
>  *  the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetype/project/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/issuetype/project/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/issuetype/:id
> Delete issue type

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issuetype/id/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/issuetype/id/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if any issues cannot be updated with the alternative issue type.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issuetype/id/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/issuetype/id/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issuetype/id/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/issuetype/id/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issuetype/id/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/issuetype/id/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the issue type is in use and an alternative issue type is not specified.
>  *  the issue type or alternative issue type is not found.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issuetype/id/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/issuetype/id/___responses/404/body/index.hbs "See body  ")

### 409
> Returned if the issue type is in use and:
>
>  *  also specified as the alternative issue type.
>  *  is a *standard* issue type and the alternative issue type is a *subtask*.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issuetype/id/___responses/409 "See details  ")
[See body  ](./___delete/rest/api/3/issuetype/id/___responses/409/body/index.hbs "See body  ")



## GET /rest/api/3/issuetype/:id
> Get issue type

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetype/id/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issuetype/id/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the issue type ID is invalid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetype/id/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/issuetype/id/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetype/id/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/issuetype/id/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the issue type is not found.
>  *  the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetype/id/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/issuetype/id/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/issuetype/:id
> Update issue type

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetype/id/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/issuetype/id/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid because:
>
>  *  no content is sent.
>  *  the issue type name exceeds 60 characters.
>  *  the avatar is not associated with this issue type.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetype/id/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/issuetype/id/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetype/id/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/issuetype/id/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetype/id/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/issuetype/id/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the issue type is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetype/id/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/issuetype/id/___responses/404/body/index.hbs "See body  ")

### 409
> Returned if the issue type name is in use.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetype/id/___responses/409 "See details  ")
[See body  ](./___put/rest/api/3/issuetype/id/___responses/409/body/index.hbs "See body  ")



## GET /rest/api/3/issuetype/:id/alternatives
> Get alternative issue types

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetype/id/alternatives/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issuetype/id/alternatives/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetype/id/alternatives/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/issuetype/id/alternatives/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the issue type is not found.
>  *  the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetype/id/alternatives/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/issuetype/id/alternatives/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/issuetype/:id/avatar2
> Load issue type avatar

### 201  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issuetype/id/avatar2/___responses/201 "See details  ")
[See body  ](./___post/rest/api/3/issuetype/id/avatar2/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  an image isn't included in the request.
>  *  the image type is unsupported.
>  *  the crop parameters extend the crop area beyond the edge of the image.
>  *  `cropSize` is missing.
>  *  the issue type ID is invalid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issuetype/id/avatar2/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/issuetype/id/avatar2/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issuetype/id/avatar2/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/issuetype/id/avatar2/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issuetype/id/avatar2/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/issuetype/id/avatar2/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the issue type is not found.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issuetype/id/avatar2/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/issuetype/id/avatar2/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/issuetype/:issueTypeId/properties
> Get issue type property keys

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetype/issuetypeid/properties/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issuetype/issuetypeid/properties/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the issue type ID is invalid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetype/issuetypeid/properties/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/issuetype/issuetypeid/properties/___responses/400/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the issue type is not found.
>  *  the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetype/issuetypeid/properties/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/issuetype/issuetypeid/properties/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/issuetype/:issueTypeId/properties/:propertyKey
> Delete issue type property

### 204  (default)
> Returned if the issue type property is deleted.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issuetype/issuetypeid/properties/propertykey/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/issuetype/issuetypeid/properties/propertykey/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the issue type ID is invalid.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issuetype/issuetypeid/properties/propertykey/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/issuetype/issuetypeid/properties/propertykey/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issuetype/issuetypeid/properties/propertykey/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/issuetype/issuetypeid/properties/propertykey/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issuetype/issuetypeid/properties/propertykey/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/issuetype/issuetypeid/properties/propertykey/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the issue type or property is not found.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issuetype/issuetypeid/properties/propertykey/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/issuetype/issuetypeid/properties/propertykey/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/issuetype/:issueTypeId/properties/:propertyKey
> Get issue type property

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetype/issuetypeid/properties/propertykey/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issuetype/issuetypeid/properties/propertykey/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the issue type ID is invalid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetype/issuetypeid/properties/propertykey/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/issuetype/issuetypeid/properties/propertykey/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetype/issuetypeid/properties/propertykey/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/issuetype/issuetypeid/properties/propertykey/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the issue type or property is not found or the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetype/issuetypeid/properties/propertykey/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/issuetype/issuetypeid/properties/propertykey/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/issuetype/:issueTypeId/properties/:propertyKey
> Set issue type property

### 200  (default)
> Returned if the issue type property is updated.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetype/issuetypeid/properties/propertykey/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/issuetype/issuetypeid/properties/propertykey/___responses/200/body/index.hbs "See body  ")

### 201
> Returned if the issue type property is created.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetype/issuetypeid/properties/propertykey/___responses/201 "See details  ")
[See body  ](./___put/rest/api/3/issuetype/issuetypeid/properties/propertykey/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  the issue type ID is invalid.
>  *  a property value is not provided.
>  *  the property value JSON content is invalid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetype/issuetypeid/properties/propertykey/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/issuetype/issuetypeid/properties/propertykey/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetype/issuetypeid/properties/propertykey/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/issuetype/issuetypeid/properties/propertykey/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have permission to modify the issue type.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetype/issuetypeid/properties/propertykey/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/issuetype/issuetypeid/properties/propertykey/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the issue type is not found.
>  *  the user does not have the permission view the issue type.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetype/issuetypeid/properties/propertykey/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/issuetype/issuetypeid/properties/propertykey/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/issuetypescheme
> Get all issue type schemes

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetypescheme/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issuetypescheme/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetypescheme/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/issuetypescheme/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetypescheme/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/issuetypescheme/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetypescheme/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/issuetypescheme/___responses/403/body/index.hbs "See body  ")



## POST /rest/api/3/issuetypescheme
> Create issue type scheme

### 201  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issuetypescheme/___responses/201 "See details  ")
[See body  ](./___post/rest/api/3/issuetypescheme/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issuetypescheme/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/issuetypescheme/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issuetypescheme/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/issuetypescheme/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issuetypescheme/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/issuetypescheme/___responses/403/body/index.hbs "See body  ")

### 409
> Returned if the scheme name is used by another scheme.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issuetypescheme/___responses/409 "See details  ")
[See body  ](./___post/rest/api/3/issuetypescheme/___responses/409/body/index.hbs "See body  ")



## GET /rest/api/3/issuetypescheme/mapping
> Get issue type scheme items

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetypescheme/mapping/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issuetypescheme/mapping/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetypescheme/mapping/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/issuetypescheme/mapping/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetypescheme/mapping/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/issuetypescheme/mapping/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetypescheme/mapping/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/issuetypescheme/mapping/___responses/403/body/index.hbs "See body  ")



## GET /rest/api/3/issuetypescheme/project
> Get issue type schemes for projects

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetypescheme/project/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issuetypescheme/project/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetypescheme/project/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/issuetypescheme/project/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetypescheme/project/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/issuetypescheme/project/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetypescheme/project/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/issuetypescheme/project/___responses/403/body/index.hbs "See body  ")



## PUT /rest/api/3/issuetypescheme/project
> Assign issue type scheme to project

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescheme/project/___responses/204 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescheme/project/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescheme/project/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescheme/project/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescheme/project/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescheme/project/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescheme/project/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescheme/project/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the issue type scheme or the project is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescheme/project/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescheme/project/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/issuetypescheme/:issueTypeSchemeId
> Delete issue type scheme

### 204  (default)
> Returned if the issue type scheme is deleted.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issuetypescheme/issuetypeschemeid/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/issuetypescheme/issuetypeschemeid/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is to delete the default issue type scheme.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issuetypescheme/issuetypeschemeid/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/issuetypescheme/issuetypeschemeid/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issuetypescheme/issuetypeschemeid/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/issuetypescheme/issuetypeschemeid/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issuetypescheme/issuetypeschemeid/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/issuetypescheme/issuetypeschemeid/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the issue type scheme is not found.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issuetypescheme/issuetypeschemeid/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/issuetypescheme/issuetypeschemeid/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/issuetypescheme/:issueTypeSchemeId
> Update issue type scheme

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescheme/issuetypeschemeid/___responses/204 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescheme/issuetypeschemeid/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescheme/issuetypeschemeid/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescheme/issuetypeschemeid/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescheme/issuetypeschemeid/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescheme/issuetypeschemeid/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescheme/issuetypeschemeid/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescheme/issuetypeschemeid/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the issue type scheme is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescheme/issuetypeschemeid/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescheme/issuetypeschemeid/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/issuetypescheme/:issueTypeSchemeId/issuetype
> Add issue types to issue type scheme

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescheme/issuetypeschemeid/issuetype/___responses/204 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescheme/issuetypeschemeid/issuetype/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescheme/issuetypeschemeid/issuetype/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescheme/issuetypeschemeid/issuetype/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescheme/issuetypeschemeid/issuetype/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescheme/issuetypeschemeid/issuetype/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescheme/issuetypeschemeid/issuetype/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescheme/issuetypeschemeid/issuetype/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the issue type or the issue type scheme is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescheme/issuetypeschemeid/issuetype/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescheme/issuetypeschemeid/issuetype/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/issuetypescheme/:issueTypeSchemeId/issuetype/move
> Change order of issue types

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescheme/issuetypeschemeid/issuetype/move/___responses/204 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescheme/issuetypeschemeid/issuetype/move/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescheme/issuetypeschemeid/issuetype/move/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescheme/issuetypeschemeid/issuetype/move/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescheme/issuetypeschemeid/issuetype/move/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescheme/issuetypeschemeid/issuetype/move/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescheme/issuetypeschemeid/issuetype/move/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescheme/issuetypeschemeid/issuetype/move/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the issue type scheme is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescheme/issuetypeschemeid/issuetype/move/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescheme/issuetypeschemeid/issuetype/move/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/issuetypescheme/:issueTypeSchemeId/issuetype/:issueTypeId
> Remove issue type from issue type scheme

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issuetypescheme/issuetypeschemeid/issuetype/issuetypeid/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/issuetypescheme/issuetypeschemeid/issuetype/issuetypeid/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issuetypescheme/issuetypeschemeid/issuetype/issuetypeid/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/issuetypescheme/issuetypeschemeid/issuetype/issuetypeid/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issuetypescheme/issuetypeschemeid/issuetype/issuetypeid/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/issuetypescheme/issuetypeschemeid/issuetype/issuetypeid/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issuetypescheme/issuetypeschemeid/issuetype/issuetypeid/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/issuetypescheme/issuetypeschemeid/issuetype/issuetypeid/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the issue type scheme is missing or the issue type is not found in the issue type scheme.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issuetypescheme/issuetypeschemeid/issuetype/issuetypeid/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/issuetypescheme/issuetypeschemeid/issuetype/issuetypeid/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/issuetypescreenscheme
> Get issue type screen schemes

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetypescreenscheme/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issuetypescreenscheme/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetypescreenscheme/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/issuetypescreenscheme/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetypescreenscheme/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/issuetypescreenscheme/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetypescreenscheme/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/issuetypescreenscheme/___responses/403/body/index.hbs "See body  ")



## POST /rest/api/3/issuetypescreenscheme
> Create issue type screen scheme

### 201  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issuetypescreenscheme/___responses/201 "See details  ")
[See body  ](./___post/rest/api/3/issuetypescreenscheme/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issuetypescreenscheme/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/issuetypescreenscheme/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issuetypescreenscheme/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/issuetypescreenscheme/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issuetypescreenscheme/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/issuetypescreenscheme/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the issue type or screen scheme is not found.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issuetypescreenscheme/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/issuetypescreenscheme/___responses/404/body/index.hbs "See body  ")

### 409
> Returned if the issue type is a sub-task, but sub-tasks are disabled in Jira settings.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issuetypescreenscheme/___responses/409 "See details  ")
[See body  ](./___post/rest/api/3/issuetypescreenscheme/___responses/409/body/index.hbs "See body  ")



## GET /rest/api/3/issuetypescreenscheme/mapping
> Get issue type screen scheme items

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetypescreenscheme/mapping/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issuetypescreenscheme/mapping/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetypescreenscheme/mapping/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/issuetypescreenscheme/mapping/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetypescreenscheme/mapping/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/issuetypescreenscheme/mapping/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetypescreenscheme/mapping/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/issuetypescreenscheme/mapping/___responses/403/body/index.hbs "See body  ")



## GET /rest/api/3/issuetypescreenscheme/project
> Get issue type screen schemes for projects

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetypescreenscheme/project/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issuetypescreenscheme/project/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetypescreenscheme/project/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/issuetypescreenscheme/project/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetypescreenscheme/project/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/issuetypescreenscheme/project/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetypescreenscheme/project/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/issuetypescreenscheme/project/___responses/403/body/index.hbs "See body  ")



## PUT /rest/api/3/issuetypescreenscheme/project
> Assign issue type screen scheme to project

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescreenscheme/project/___responses/204 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescreenscheme/project/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  project is not found.
>  *  issue type screen scheme is not found.
>  *  the project is not a classic project.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescreenscheme/project/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescreenscheme/project/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescreenscheme/project/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescreenscheme/project/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescreenscheme/project/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescreenscheme/project/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the issue type screen scheme or the project are missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescreenscheme/project/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescreenscheme/project/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/issuetypescreenscheme/:issueTypeScreenSchemeId
> Delete issue type screen scheme

### 204  (default)
> Returned if the issue type screen scheme is deleted.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the issue type screen scheme is not found.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/issuetypescreenscheme/:issueTypeScreenSchemeId
> Update issue type screen scheme

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/___responses/204 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the issue type screen scheme is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/issuetypescreenscheme/:issueTypeScreenSchemeId/mapping
> Append mappings to issue type screen scheme

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/mapping/___responses/204 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/mapping/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/mapping/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/mapping/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/mapping/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/mapping/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/mapping/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/mapping/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the issue type screen scheme, issue type, or screen scheme is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/mapping/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/mapping/___responses/404/body/index.hbs "See body  ")

### 409
> Returned if the issue type is a sub-task, but sub-tasks are disabled in Jira settings.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/mapping/___responses/409 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/mapping/___responses/409/body/index.hbs "See body  ")



## PUT /rest/api/3/issuetypescreenscheme/:issueTypeScreenSchemeId/mapping/default
> Update issue type screen scheme default screen scheme

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/mapping/default/___responses/204 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/mapping/default/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/mapping/default/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/mapping/default/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/mapping/default/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/mapping/default/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/mapping/default/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/mapping/default/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the issue type screen scheme or the screen screen is not found, or the screen scheme isn't used in classic projects.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/mapping/default/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/mapping/default/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/issuetypescreenscheme/:issueTypeScreenSchemeId/mapping/remove
> Remove mappings from issue type screen scheme

### 204  (default)
> Returned if the screen scheme mappings are removed from the issue type screen scheme.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/mapping/remove/___responses/204 "See details  ")
[See body  ](./___post/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/mapping/remove/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/mapping/remove/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/mapping/remove/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/mapping/remove/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/mapping/remove/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/mapping/remove/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/mapping/remove/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the issue type screen scheme or one or more issue type mappings are not found.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/mapping/remove/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/mapping/remove/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/issuetypescreenscheme/:issueTypeScreenSchemeId/project
> Get issue type screen scheme projects

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/project/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/project/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/project/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/project/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/project/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/project/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/project/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/issuetypescreenscheme/issuetypescreenschemeid/project/___responses/403/body/index.hbs "See body  ")



## GET /rest/api/3/jql/autocompletedata
> Get field reference data (GET)

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/jql/autocompletedata/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/jql/autocompletedata/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/jql/autocompletedata/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/jql/autocompletedata/___responses/401/body/index.hbs "See body  ")



## POST /rest/api/3/jql/autocompletedata
> Get field reference data (POST)

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/jql/autocompletedata/___responses/200 "See details  ")
[See body  ](./___post/rest/api/3/jql/autocompletedata/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/jql/autocompletedata/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/jql/autocompletedata/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/jql/autocompletedata/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/jql/autocompletedata/___responses/401/body/index.hbs "See body  ")



## GET /rest/api/3/jql/autocompletedata/suggestions
> Get field auto complete suggestions

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/jql/autocompletedata/suggestions/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/jql/autocompletedata/suggestions/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if an invalid combination of parameters is passed.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/jql/autocompletedata/suggestions/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/jql/autocompletedata/suggestions/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/jql/autocompletedata/suggestions/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/jql/autocompletedata/suggestions/___responses/401/body/index.hbs "See body  ")



## POST /rest/api/3/jql/match
> Check issues against JQL

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/jql/match/___responses/200 "See details  ")
[See body  ](./___post/rest/api/3/jql/match/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if `jqls` exceeds the maximum number of JQL queries or `issueIds` exceeds the maximum number of issue IDs.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/jql/match/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/jql/match/___responses/400/body/index.hbs "See body  ")



## POST /rest/api/3/jql/parse
> Parse JQL query

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/jql/parse/___responses/200 "See details  ")
[See body  ](./___post/rest/api/3/jql/parse/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/jql/parse/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/jql/parse/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/jql/parse/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/jql/parse/___responses/401/body/index.hbs "See body  ")



## POST /rest/api/3/jql/pdcleaner
> Convert user identifiers to account IDs in JQL queries

### 200  (default)
> Returned if the request is successful. Note that the JQL queries are returned in the same order that they were passed.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/jql/pdcleaner/___responses/200 "See details  ")
[See body  ](./___post/rest/api/3/jql/pdcleaner/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if at least one of the queries cannot be converted. For example, the JQL has invalid operators or invalid keywords, or the users in the query cannot be found.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/jql/pdcleaner/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/jql/pdcleaner/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/jql/pdcleaner/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/jql/pdcleaner/___responses/401/body/index.hbs "See body  ")



## GET /rest/api/3/label
> Get all labels

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/label/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/label/___responses/200/body/index.hbs "See body  ")



## GET /rest/api/3/mypermissions
> Get my permissions

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/mypermissions/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/mypermissions/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if `permissions` is empty or the permission key it contains is not found or deprecated.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/mypermissions/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/mypermissions/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/mypermissions/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/mypermissions/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the project or issue is not found or the user does not have permission to view the project or issue.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/mypermissions/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/mypermissions/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/mypreferences
> Delete preference

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/mypreferences/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/mypreferences/___responses/204/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/mypreferences/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/mypreferences/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the key is not provided or not found.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/mypreferences/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/mypreferences/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/mypreferences
> Get preference

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/mypreferences/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/mypreferences/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/mypreferences/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/mypreferences/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the key is not provided or not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/mypreferences/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/mypreferences/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/mypreferences
> Set preference

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/mypreferences/___responses/204 "See details  ")
[See body  ](./___put/rest/api/3/mypreferences/___responses/204/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/mypreferences/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/mypreferences/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the key or value is not provided or invalid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/mypreferences/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/mypreferences/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/mypreferences/locale
> Delete locale

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/mypreferences/locale/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/mypreferences/locale/___responses/204/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/mypreferences/locale/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/mypreferences/locale/___responses/401/body/index.hbs "See body  ")



## GET /rest/api/3/mypreferences/locale
> Get locale

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/mypreferences/locale/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/mypreferences/locale/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/mypreferences/locale/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/mypreferences/locale/___responses/401/body/index.hbs "See body  ")



## PUT /rest/api/3/mypreferences/locale
> Set locale

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/mypreferences/locale/___responses/204 "See details  ")
[See body  ](./___put/rest/api/3/mypreferences/locale/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if request is invalid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/mypreferences/locale/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/mypreferences/locale/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/mypreferences/locale/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/mypreferences/locale/___responses/401/body/index.hbs "See body  ")



## GET /rest/api/3/myself
> Get current user

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/myself/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/myself/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/myself/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/myself/___responses/401/body/index.hbs "See body  ")



## GET /rest/api/3/notificationscheme
> Get notification schemes paginated

### 200  (default)
> Returned if the request is successful. Only returns notification schemes that the user has permission to access. An empty list is returned if the user lacks permission to access all notification schemes.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/notificationscheme/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/notificationscheme/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/notificationscheme/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/notificationscheme/___responses/401/body/index.hbs "See body  ")



## GET /rest/api/3/notificationscheme/:id
> Get notification scheme

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/notificationscheme/id/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/notificationscheme/id/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/notificationscheme/id/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/notificationscheme/id/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/notificationscheme/id/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/notificationscheme/id/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the notification scheme is not found or the user does not have permission to view it.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/notificationscheme/id/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/notificationscheme/id/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/permissions
> Get all permissions

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/permissions/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/permissions/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/permissions/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/permissions/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/permissions/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/permissions/___responses/403/body/index.hbs "See body  ")



## POST /rest/api/3/permissions/check
> Get bulk permissions

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/permissions/check/___responses/200 "See details  ")
[See body  ](./___post/rest/api/3/permissions/check/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  `projectPermissions` is provided without at least one project permission being provided.
>  *  an invalid global permission is provided in the global permissions list.
>  *  an invalid project permission is provided in the project permissions list.
>  *  more than 1000 valid project IDs or more than 1000 valid issue IDs are provided.
>  *  an invalid account ID is provided.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/permissions/check/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/permissions/check/___responses/400/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/permissions/check/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/permissions/check/___responses/403/body/index.hbs "See body  ")



## POST /rest/api/3/permissions/project
> Get permitted projects

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/permissions/project/___responses/200 "See details  ")
[See body  ](./___post/rest/api/3/permissions/project/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if a project permission is not found.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/permissions/project/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/permissions/project/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/permissions/project/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/permissions/project/___responses/401/body/index.hbs "See body  ")



## GET /rest/api/3/permissionscheme
> Get all permission schemes

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/permissionscheme/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/permissionscheme/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/permissionscheme/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/permissionscheme/___responses/401/body/index.hbs "See body  ")



## POST /rest/api/3/permissionscheme
> Create permission scheme

### 201  (default)
> Returned if the permission scheme is created.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/permissionscheme/___responses/201 "See details  ")
[See body  ](./___post/rest/api/3/permissionscheme/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/permissionscheme/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/permissionscheme/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/permissionscheme/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/permissionscheme/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission or the feature is not available in the Jira plan.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/permissionscheme/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/permissionscheme/___responses/403/body/index.hbs "See body  ")



## DELETE /rest/api/3/permissionscheme/:schemeId
> Delete permission scheme

### 204  (default)
> Returned if the permission scheme is deleted.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/permissionscheme/schemeid/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/permissionscheme/schemeid/___responses/204/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/permissionscheme/schemeid/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/permissionscheme/schemeid/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/permissionscheme/schemeid/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/permissionscheme/schemeid/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the permission scheme is not found.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/permissionscheme/schemeid/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/permissionscheme/schemeid/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/permissionscheme/:schemeId
> Get permission scheme

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/permissionscheme/schemeid/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/permissionscheme/schemeid/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/permissionscheme/schemeid/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/permissionscheme/schemeid/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the permission scheme is not found or the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/permissionscheme/schemeid/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/permissionscheme/schemeid/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/permissionscheme/:schemeId
> Update permission scheme

### 200  (default)
> Returned if the scheme is updated.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/permissionscheme/schemeid/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/permissionscheme/schemeid/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/permissionscheme/schemeid/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/permissionscheme/schemeid/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if:
>
>  *  the user does not have the necessary permission to update permission schemes.
>  *  the Jira instance is Jira Core Free or Jira Software Free. Permission schemes cannot be updated on free plans.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/permissionscheme/schemeid/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/permissionscheme/schemeid/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the permission scheme is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/permissionscheme/schemeid/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/permissionscheme/schemeid/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/permissionscheme/:schemeId/permission
> Get permission scheme grants

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/permissionscheme/schemeid/permission/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/permissionscheme/schemeid/permission/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/permissionscheme/schemeid/permission/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/permissionscheme/schemeid/permission/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the permission schemes is not found or the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/permissionscheme/schemeid/permission/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/permissionscheme/schemeid/permission/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/permissionscheme/:schemeId/permission
> Create permission grant

### 201  (default)
> Returned if the scheme permission is created.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/permissionscheme/schemeid/permission/___responses/201 "See details  ")
[See body  ](./___post/rest/api/3/permissionscheme/schemeid/permission/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if the value for expand is invalid or the same permission grant is present.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/permissionscheme/schemeid/permission/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/permissionscheme/schemeid/permission/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/permissionscheme/schemeid/permission/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/permissionscheme/schemeid/permission/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/permissionscheme/schemeid/permission/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/permissionscheme/schemeid/permission/___responses/403/body/index.hbs "See body  ")



## DELETE /rest/api/3/permissionscheme/:schemeId/permission/:permissionId
> Delete permission scheme grant

### 204  (default)
> Returned if the permission grant is deleted.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/permissionscheme/schemeid/permission/permissionid/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/permissionscheme/schemeid/permission/permissionid/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if permission grant with the provided ID is not found.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/permissionscheme/schemeid/permission/permissionid/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/permissionscheme/schemeid/permission/permissionid/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/permissionscheme/schemeid/permission/permissionid/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/permissionscheme/schemeid/permission/permissionid/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/permissionscheme/schemeid/permission/permissionid/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/permissionscheme/schemeid/permission/permissionid/___responses/403/body/index.hbs "See body  ")



## GET /rest/api/3/permissionscheme/:schemeId/permission/:permissionId
> Get permission scheme grant

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/permissionscheme/schemeid/permission/permissionid/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/permissionscheme/schemeid/permission/permissionid/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/permissionscheme/schemeid/permission/permissionid/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/permissionscheme/schemeid/permission/permissionid/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the permission scheme or permission grant is not found or the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/permissionscheme/schemeid/permission/permissionid/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/permissionscheme/schemeid/permission/permissionid/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/priority
> Get priorities

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/priority/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/priority/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/priority/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/priority/___responses/401/body/index.hbs "See body  ")



## GET /rest/api/3/priority/:id
> Get priority

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/priority/id/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/priority/id/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/priority/id/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/priority/id/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the issue priority is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/priority/id/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/priority/id/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/project
> Get all projects

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/project/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/project/___responses/401/body/index.hbs "See body  ")



## POST /rest/api/3/project
> Create project

### 201  (default)
> Returned if the project is created.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/project/___responses/201 "See details  ")
[See body  ](./___post/rest/api/3/project/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid and the project could not be created.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/project/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/project/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/project/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/project/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have permission to create projects.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/project/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/project/___responses/403/body/index.hbs "See body  ")



## GET /rest/api/3/project/search
> Get projects paginated

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/search/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/project/search/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/search/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/project/search/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/search/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/project/search/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if no projects matching the search criteria are found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/search/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/project/search/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/project/type
> Get all project types

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/type/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/project/type/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/type/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/project/type/___responses/401/body/index.hbs "See body  ")



## GET /rest/api/3/project/type/accessible
> Get licensed project types

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/type/accessible/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/project/type/accessible/___responses/200/body/index.hbs "See body  ")



## GET /rest/api/3/project/type/:projectTypeKey
> Get project type by key

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/type/projecttypekey/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/project/type/projecttypekey/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/type/projecttypekey/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/project/type/projecttypekey/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the project type is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/type/projecttypekey/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/project/type/projecttypekey/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/project/type/:projectTypeKey/accessible
> Get accessible project type by key

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/type/projecttypekey/accessible/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/project/type/projecttypekey/accessible/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/type/projecttypekey/accessible/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/project/type/projecttypekey/accessible/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the project type is not accessible to the user.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/type/projecttypekey/accessible/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/project/type/projecttypekey/accessible/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/project/:projectIdOrKey
> Delete project

### 204  (default)
> Returned if the project is deleted.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/project/projectidorkey/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/project/projectidorkey/___responses/204/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/project/projectidorkey/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/project/projectidorkey/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the project is not found or the user does not have permission to delete it.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/project/projectidorkey/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/project/projectidorkey/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/project/:projectIdOrKey
> Get project

### 200  (default)
> Returned if successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the project is not found or the user does not have permission to view it.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/project/:projectIdOrKey
> Update project

### 200  (default)
> Returned if the project is updated.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/project/projectidorkey/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/project/projectidorkey/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/project/projectidorkey/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/project/projectidorkey/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/project/projectidorkey/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/project/projectidorkey/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if:
>
>  *  the user does not have the necessary permission to update project details.
>  *  the permission scheme is being changed and the Jira instance is Jira Core Free or Jira Software Free. Permission schemes cannot be changed on free plans.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/project/projectidorkey/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/project/projectidorkey/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the project is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/project/projectidorkey/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/project/projectidorkey/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/project/:projectIdOrKey/archive
> Archive project

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/project/projectidorkey/archive/___responses/204 "See details  ")
[See body  ](./___post/rest/api/3/project/projectidorkey/archive/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/project/projectidorkey/archive/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/project/projectidorkey/archive/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/project/projectidorkey/archive/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/project/projectidorkey/archive/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permissions.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/project/projectidorkey/archive/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/project/projectidorkey/archive/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the project is not found.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/project/projectidorkey/archive/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/project/projectidorkey/archive/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/project/:projectIdOrKey/avatar
> Set project avatar

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/project/projectidorkey/avatar/___responses/204 "See details  ")
[See body  ](./___put/rest/api/3/project/projectidorkey/avatar/___responses/204/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/project/projectidorkey/avatar/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/project/projectidorkey/avatar/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have permission to administer the project.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/project/projectidorkey/avatar/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/project/projectidorkey/avatar/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the project or avatar is not found or the user does not have permission to view the project.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/project/projectidorkey/avatar/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/project/projectidorkey/avatar/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/project/:projectIdOrKey/avatar/:id
> Delete project avatar

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/project/projectidorkey/avatar/id/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/project/projectidorkey/avatar/id/___responses/204/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/project/projectidorkey/avatar/id/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/project/projectidorkey/avatar/id/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the avatar is a system avatar or the user does not have permission to administer the project.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/project/projectidorkey/avatar/id/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/project/projectidorkey/avatar/id/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the project or avatar is not found or the user does not have permission to view the project.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/project/projectidorkey/avatar/id/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/project/projectidorkey/avatar/id/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/project/:projectIdOrKey/avatar2
> Load project avatar

### 201  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/project/projectidorkey/avatar2/___responses/201 "See details  ")
[See body  ](./___post/rest/api/3/project/projectidorkey/avatar2/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  an image isn't included in the request.
>  *  the image type is unsupported.
>  *  the crop parameters extend the crop area beyond the edge of the image.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/project/projectidorkey/avatar2/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/project/projectidorkey/avatar2/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/project/projectidorkey/avatar2/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/project/projectidorkey/avatar2/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have permission to administer the project or an anonymous call is made to the operation.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/project/projectidorkey/avatar2/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/project/projectidorkey/avatar2/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the project is not found or the user does not have permission to view the project.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/project/projectidorkey/avatar2/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/project/projectidorkey/avatar2/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/project/:projectIdOrKey/avatars
> Get all project avatars

### 200  (default)
> Returned if request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/avatars/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/avatars/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/avatars/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/avatars/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the project is not found or the user does not have permission to view the project.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/avatars/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/avatars/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/project/:projectIdOrKey/component
> Get project components paginated

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/component/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/component/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/component/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/component/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the project is not found or the user does not have permission to view it.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/component/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/component/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/project/:projectIdOrKey/components
> Get project components

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/components/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/components/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/components/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/components/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the project is not found or the user does not have permission to view it.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/components/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/components/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/project/:projectIdOrKey/delete
> Delete project asynchronously

### 303  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/project/projectidorkey/delete/___responses/303 "See details  ")
[See body  ](./___post/rest/api/3/project/projectidorkey/delete/___responses/303/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/project/projectidorkey/delete/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/project/projectidorkey/delete/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/project/projectidorkey/delete/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/project/projectidorkey/delete/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the project is not found or the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/project/projectidorkey/delete/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/project/projectidorkey/delete/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/project/:projectIdOrKey/properties
> Get project property keys

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/properties/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/properties/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/properties/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/properties/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/properties/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/properties/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have permission to view the project.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/properties/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/properties/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the project is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/properties/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/properties/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/project/:projectIdOrKey/properties/:propertyKey
> Delete project property

### 204  (default)
> Returned if the project property is deleted.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/project/projectidorkey/properties/propertykey/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/project/projectidorkey/properties/propertykey/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/project/projectidorkey/properties/propertykey/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/project/projectidorkey/properties/propertykey/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/project/projectidorkey/properties/propertykey/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/project/projectidorkey/properties/propertykey/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have permission to administer the project.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/project/projectidorkey/properties/propertykey/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/project/projectidorkey/properties/propertykey/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the project or property is not found.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/project/projectidorkey/properties/propertykey/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/project/projectidorkey/properties/propertykey/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/project/:projectIdOrKey/properties/:propertyKey
> Get project property

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/properties/propertykey/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/properties/propertykey/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/properties/propertykey/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/properties/propertykey/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/properties/propertykey/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/properties/propertykey/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have permission to view the project.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/properties/propertykey/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/properties/propertykey/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the project or property is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/properties/propertykey/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/properties/propertykey/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/project/:projectIdOrKey/properties/:propertyKey
> Set project property

### 200  (default)
> Returned if the project property is updated.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/project/projectidorkey/properties/propertykey/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/project/projectidorkey/properties/propertykey/___responses/200/body/index.hbs "See body  ")

### 201
> Returned if the project property is created.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/project/projectidorkey/properties/propertykey/___responses/201 "See details  ")
[See body  ](./___put/rest/api/3/project/projectidorkey/properties/propertykey/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if the project key or id is invalid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/project/projectidorkey/properties/propertykey/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/project/projectidorkey/properties/propertykey/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/project/projectidorkey/properties/propertykey/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/project/projectidorkey/properties/propertykey/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have permission to administer the project.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/project/projectidorkey/properties/propertykey/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/project/projectidorkey/properties/propertykey/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the project is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/project/projectidorkey/properties/propertykey/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/project/projectidorkey/properties/propertykey/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/project/:projectIdOrKey/restore
> Restore deleted project

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/project/projectidorkey/restore/___responses/200 "See details  ")
[See body  ](./___post/rest/api/3/project/projectidorkey/restore/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/project/projectidorkey/restore/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/project/projectidorkey/restore/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/project/projectidorkey/restore/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/project/projectidorkey/restore/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the project is not found or the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/project/projectidorkey/restore/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/project/projectidorkey/restore/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/project/:projectIdOrKey/role
> Get project roles for project

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/role/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/role/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing or if the user lacks administrative permissions for the project.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/role/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/role/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the project is not found or or if the user does not have administrative permissions for the project.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/role/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/role/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/project/:projectIdOrKey/role/:id
> Delete actors from project role

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/project/projectidorkey/role/id/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/project/projectidorkey/role/id/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/project/projectidorkey/role/id/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/project/projectidorkey/role/id/___responses/400/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the project or project role is not found.
>  *  the calling user does not have administrative permission.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/project/projectidorkey/role/id/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/project/projectidorkey/role/id/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/project/:projectIdOrKey/role/:id
> Get project role for project

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/role/id/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/role/id/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/role/id/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/role/id/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/role/id/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/role/id/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the project or project role is not found.
>  *  the user does not have administrative permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/role/id/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/role/id/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/project/:projectIdOrKey/role/:id
> Add actors to project role

### 200  (default)
> Returned if the request is successful. The complete list of actors for the project is returned.
>
> For example, the cURL request above adds a group, *jira-developers*. For the response below to be returned as a result of that request, the user *Mia Krystof* would have previously been added as a `user` actor for this project.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/project/projectidorkey/role/id/___responses/200 "See details  ")
[See body  ](./___post/rest/api/3/project/projectidorkey/role/id/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/project/projectidorkey/role/id/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/project/projectidorkey/role/id/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing or if the calling user lacks administrative permissions for the project.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/project/projectidorkey/role/id/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/project/projectidorkey/role/id/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the project is not found.
>  *  the user or group is not found.
>  *  the group or user is not active.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/project/projectidorkey/role/id/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/project/projectidorkey/role/id/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/project/:projectIdOrKey/role/:id
> Set actors for project role

### 200  (default)
> Returned if the request is successful. The complete list of actors for the project is returned.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/project/projectidorkey/role/id/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/project/projectidorkey/role/id/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/project/projectidorkey/role/id/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/project/projectidorkey/role/id/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing or if the calling user lacks administrative permissions for the project.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/project/projectidorkey/role/id/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/project/projectidorkey/role/id/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the project is not found.
>  *  a user or group is not found.
>  *  a group or user is not active.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/project/projectidorkey/role/id/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/project/projectidorkey/role/id/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/project/:projectIdOrKey/roledetails
> Get project role details

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/roledetails/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/roledetails/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/roledetails/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/roledetails/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the project is not found or if the user does not have the necessary permissions for the project.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/roledetails/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/roledetails/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/project/:projectIdOrKey/statuses
> Get all statuses for project

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/statuses/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/statuses/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/statuses/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/statuses/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the project is not found or the user does not have permission to view it.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/statuses/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/statuses/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/project/:projectIdOrKey/type/:newProjectTypeKey
> Update project type

### 200  (default)
> Returned if the project type is updated.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/project/projectidorkey/type/newprojecttypekey/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/project/projectidorkey/type/newprojecttypekey/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/project/projectidorkey/type/newprojecttypekey/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/project/projectidorkey/type/newprojecttypekey/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/project/projectidorkey/type/newprojecttypekey/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/project/projectidorkey/type/newprojecttypekey/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the project is not found or the user does not have permission to view it.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/project/projectidorkey/type/newprojecttypekey/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/project/projectidorkey/type/newprojecttypekey/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/project/:projectIdOrKey/version
> Get project versions paginated

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/version/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/version/___responses/200/body/index.hbs "See body  ")

### 404
> Returned if the project is not found or the user does not have permission to view it.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/version/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/version/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/project/:projectIdOrKey/versions
> Get project versions

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/versions/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/versions/___responses/200/body/index.hbs "See body  ")

### 404
> Returned if the project is not found or the user does not have permission to view it.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectidorkey/versions/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/project/projectidorkey/versions/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/project/:projectId/email
> Get project's sender email

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectid/email/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/project/projectid/email/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectid/email/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/project/projectid/email/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have permission to read project.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectid/email/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/project/projectid/email/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the project or project's sender email address is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectid/email/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/project/projectid/email/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/project/:projectId/email
> Set project's sender email

### 204  (default)
> Returned if the project's sender email address is successfully set.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/project/projectid/email/___responses/204 "See details  ")
[See body  ](./___put/rest/api/3/project/projectid/email/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid, if the email address is not valid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/project/projectid/email/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/project/projectid/email/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/project/projectid/email/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/project/projectid/email/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have permission to read project.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/project/projectid/email/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/project/projectid/email/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the project is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/project/projectid/email/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/project/projectid/email/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/project/:projectId/hierarchy
> Get project issue type hierarchy

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectid/hierarchy/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/project/projectid/hierarchy/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectid/hierarchy/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/project/projectid/hierarchy/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectid/hierarchy/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/project/projectid/hierarchy/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the project is not found or the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectid/hierarchy/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/project/projectid/hierarchy/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/project/:projectKeyOrId/issuesecuritylevelscheme
> Get project issue security scheme

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectkeyorid/issuesecuritylevelscheme/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/project/projectkeyorid/issuesecuritylevelscheme/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectkeyorid/issuesecuritylevelscheme/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/project/projectkeyorid/issuesecuritylevelscheme/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectkeyorid/issuesecuritylevelscheme/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/project/projectkeyorid/issuesecuritylevelscheme/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the project is visible to the user but the user doesn't have administrative permissions.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectkeyorid/issuesecuritylevelscheme/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/project/projectkeyorid/issuesecuritylevelscheme/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the project is not found or the user does not have permission to view it.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectkeyorid/issuesecuritylevelscheme/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/project/projectkeyorid/issuesecuritylevelscheme/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/project/:projectKeyOrId/notificationscheme
> Get project notification scheme

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectkeyorid/notificationscheme/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/project/projectkeyorid/notificationscheme/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectkeyorid/notificationscheme/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/project/projectkeyorid/notificationscheme/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectkeyorid/notificationscheme/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/project/projectkeyorid/notificationscheme/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the project is not found or the user is not an administrator.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectkeyorid/notificationscheme/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/project/projectkeyorid/notificationscheme/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/project/:projectKeyOrId/permissionscheme
> Get assigned permission scheme

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectkeyorid/permissionscheme/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/project/projectkeyorid/permissionscheme/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectkeyorid/permissionscheme/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/project/projectkeyorid/permissionscheme/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have permission to view the project's configuration.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectkeyorid/permissionscheme/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/project/projectkeyorid/permissionscheme/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the project is not found or the user does not have permission to view the project.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectkeyorid/permissionscheme/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/project/projectkeyorid/permissionscheme/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/project/:projectKeyOrId/permissionscheme
> Assign permission scheme

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/project/projectkeyorid/permissionscheme/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/project/projectkeyorid/permissionscheme/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/project/projectkeyorid/permissionscheme/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/project/projectkeyorid/permissionscheme/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if:
>
>  *  the user does not have the necessary permission to edit the project's configuration.
>  *  the Jira instance is Jira Core Free or Jira Software Free. Permission schemes cannot be assigned to projects on free plans.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/project/projectkeyorid/permissionscheme/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/project/projectkeyorid/permissionscheme/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the project or permission scheme is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/project/projectkeyorid/permissionscheme/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/project/projectkeyorid/permissionscheme/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/project/:projectKeyOrId/securitylevel
> Get project issue security levels

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectkeyorid/securitylevel/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/project/projectkeyorid/securitylevel/___responses/200/body/index.hbs "See body  ")

### 404
> Returned if the project is not found or the user does not have permission to view it.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/project/projectkeyorid/securitylevel/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/project/projectkeyorid/securitylevel/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/projectCategory
> Get all project categories

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/projectcategory/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/projectcategory/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/projectcategory/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/projectcategory/___responses/401/body/index.hbs "See body  ")



## POST /rest/api/3/projectCategory
> Create project category

### 201  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/projectcategory/___responses/201 "See details  ")
[See body  ](./___post/rest/api/3/projectcategory/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  `name` is not provided or exceeds 255 characters.
>  *  `description` exceeds 1000 characters.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/projectcategory/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/projectcategory/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/projectcategory/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/projectcategory/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/projectcategory/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/projectcategory/___responses/403/body/index.hbs "See body  ")

### 409
> Returned if the project category name is in use.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/projectcategory/___responses/409 "See details  ")
[See body  ](./___post/rest/api/3/projectcategory/___responses/409/body/index.hbs "See body  ")



## DELETE /rest/api/3/projectCategory/:id
> Delete project category

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/projectcategory/id/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/projectcategory/id/___responses/204/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/projectcategory/id/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/projectcategory/id/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/projectcategory/id/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/projectcategory/id/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the project category is not found.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/projectcategory/id/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/projectcategory/id/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/projectCategory/:id
> Get project category by ID

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/projectcategory/id/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/projectcategory/id/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/projectcategory/id/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/projectcategory/id/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the project category is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/projectcategory/id/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/projectcategory/id/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/projectCategory/:id
> Update project category

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/projectcategory/id/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/projectcategory/id/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  `name` has been modified and exceeds 255 characters.
>  *  `description` has been modified and exceeds 1000 characters.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/projectcategory/id/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/projectcategory/id/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/projectcategory/id/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/projectcategory/id/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/projectcategory/id/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/projectcategory/id/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the project category is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/projectcategory/id/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/projectcategory/id/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/projectvalidate/key
> Validate project key

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/projectvalidate/key/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/projectvalidate/key/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/projectvalidate/key/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/projectvalidate/key/___responses/401/body/index.hbs "See body  ")



## GET /rest/api/3/projectvalidate/validProjectKey
> Get valid project key

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/projectvalidate/validprojectkey/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/projectvalidate/validprojectkey/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/projectvalidate/validprojectkey/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/projectvalidate/validprojectkey/___responses/401/body/index.hbs "See body  ")



## GET /rest/api/3/projectvalidate/validProjectName
> Get valid project name

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/projectvalidate/validprojectname/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/projectvalidate/validprojectname/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/projectvalidate/validprojectname/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/projectvalidate/validprojectname/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/projectvalidate/validprojectname/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/projectvalidate/validprojectname/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if a valid project name cannot be generated.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/projectvalidate/validprojectname/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/projectvalidate/validprojectname/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/resolution
> Get resolutions

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/resolution/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/resolution/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/resolution/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/resolution/___responses/401/body/index.hbs "See body  ")



## GET /rest/api/3/resolution/:id
> Get resolution

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/resolution/id/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/resolution/id/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/resolution/id/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/resolution/id/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the issue resolution value is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/resolution/id/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/resolution/id/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/role
> Get all project roles

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/role/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/role/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/role/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/role/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have administrative permissions.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/role/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/role/___responses/403/body/index.hbs "See body  ")



## POST /rest/api/3/role
> Create project role

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/role/___responses/200 "See details  ")
[See body  ](./___post/rest/api/3/role/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid. The `name` cannot be empty or start or end with whitespace.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/role/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/role/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/role/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/role/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have administrative permissions.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/role/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/role/___responses/403/body/index.hbs "See body  ")

### 409
> Returned if a project role with the provided name already exists.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/role/___responses/409 "See details  ")
[See body  ](./___post/rest/api/3/role/___responses/409/body/index.hbs "See body  ")



## DELETE /rest/api/3/role/:id
> Delete project role

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/role/id/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/role/id/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid or if the replacement project role is not found.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/role/id/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/role/id/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/role/id/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/role/id/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have administrative permissions.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/role/id/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/role/id/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the project role being deleted is not found.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/role/id/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/role/id/___responses/404/body/index.hbs "See body  ")

### 409
> Returned if the project role being deleted is in use and a replacement project role is not specified in the request.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/role/id/___responses/409 "See details  ")
[See body  ](./___delete/rest/api/3/role/id/___responses/409/body/index.hbs "See body  ")



## GET /rest/api/3/role/:id
> Get project role by ID

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/role/id/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/role/id/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/role/id/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/role/id/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have administrative permissions.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/role/id/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/role/id/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the project role is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/role/id/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/role/id/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/role/:id
> Partial update project role

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/role/id/___responses/200 "See details  ")
[See body  ](./___post/rest/api/3/role/id/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/role/id/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/role/id/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/role/id/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/role/id/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have administrative permissions.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/role/id/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/role/id/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the project role is not found.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/role/id/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/role/id/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/role/:id
> Fully update project role

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/role/id/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/role/id/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid. The `name` cannot be empty or start or end with whitespace.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/role/id/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/role/id/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/role/id/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/role/id/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have administrative permissions.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/role/id/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/role/id/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the project role is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/role/id/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/role/id/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/role/:id/actors
> Delete default actors from project role

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/role/id/actors/___responses/200 "See details  ")
[See body  ](./___delete/rest/api/3/role/id/actors/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/role/id/actors/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/role/id/actors/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/role/id/actors/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/role/id/actors/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have administrative permissions.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/role/id/actors/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/role/id/actors/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the project role is not found.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/role/id/actors/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/role/id/actors/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/role/:id/actors
> Get default actors for project role

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/role/id/actors/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/role/id/actors/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/role/id/actors/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/role/id/actors/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/role/id/actors/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/role/id/actors/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have administrative permissions.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/role/id/actors/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/role/id/actors/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the project role is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/role/id/actors/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/role/id/actors/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/role/:id/actors
> Add default actors to project role

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/role/id/actors/___responses/200 "See details  ")
[See body  ](./___post/rest/api/3/role/id/actors/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/role/id/actors/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/role/id/actors/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/role/id/actors/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/role/id/actors/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have administrative permissions.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/role/id/actors/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/role/id/actors/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the project role is not found.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/role/id/actors/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/role/id/actors/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/screens
> Get screens

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/screens/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/screens/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/screens/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/screens/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/screens/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/screens/___responses/403/body/index.hbs "See body  ")



## POST /rest/api/3/screens
> Create screen

### 201  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/screens/___responses/201 "See details  ")
[See body  ](./___post/rest/api/3/screens/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/screens/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/screens/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/screens/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/screens/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/screens/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/screens/___responses/403/body/index.hbs "See body  ")



## POST /rest/api/3/screens/addToDefault/:fieldId
> Add field to default screen

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/screens/addtodefault/fieldid/___responses/200 "See details  ")
[See body  ](./___post/rest/api/3/screens/addtodefault/fieldid/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/screens/addtodefault/fieldid/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/screens/addtodefault/fieldid/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/screens/addtodefault/fieldid/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/screens/addtodefault/fieldid/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the field it not found or the field is already present.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/screens/addtodefault/fieldid/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/screens/addtodefault/fieldid/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/screens/:screenId
> Delete screen

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/screens/screenid/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/screens/screenid/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/screens/screenid/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/screens/screenid/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/screens/screenid/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/screens/screenid/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/screens/screenid/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/screens/screenid/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the screen is not found.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/screens/screenid/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/screens/screenid/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/screens/:screenId
> Update screen

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/screens/screenid/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/screens/screenid/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/screens/screenid/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/screens/screenid/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/screens/screenid/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/screens/screenid/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/screens/screenid/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/screens/screenid/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the screen is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/screens/screenid/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/screens/screenid/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/screens/:screenId/availableFields
> Get available screen fields

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/screens/screenid/availablefields/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/screens/screenid/availablefields/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/screens/screenid/availablefields/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/screens/screenid/availablefields/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/screens/screenid/availablefields/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/screens/screenid/availablefields/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the screen is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/screens/screenid/availablefields/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/screens/screenid/availablefields/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/screens/:screenId/tabs
> Get all screen tabs

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/screens/screenid/tabs/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/screens/screenid/tabs/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the screen ID is invalid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/screens/screenid/tabs/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/screens/screenid/tabs/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/screens/screenid/tabs/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/screens/screenid/tabs/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/screens/screenid/tabs/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/screens/screenid/tabs/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the screen is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/screens/screenid/tabs/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/screens/screenid/tabs/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/screens/:screenId/tabs
> Create screen tab

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/screens/screenid/tabs/___responses/200 "See details  ")
[See body  ](./___post/rest/api/3/screens/screenid/tabs/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/screens/screenid/tabs/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/screens/screenid/tabs/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/screens/screenid/tabs/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/screens/screenid/tabs/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/screens/screenid/tabs/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/screens/screenid/tabs/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the screen is not found.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/screens/screenid/tabs/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/screens/screenid/tabs/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/screens/:screenId/tabs/:tabId
> Delete screen tab

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/screens/screenid/tabs/tabid/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/screens/screenid/tabs/tabid/___responses/204/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/screens/screenid/tabs/tabid/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/screens/screenid/tabs/tabid/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/screens/screenid/tabs/tabid/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/screens/screenid/tabs/tabid/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the screen or screen tab is not found.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/screens/screenid/tabs/tabid/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/screens/screenid/tabs/tabid/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/screens/:screenId/tabs/:tabId
> Update screen tab

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/screens/screenid/tabs/tabid/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/screens/screenid/tabs/tabid/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/screens/screenid/tabs/tabid/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/screens/screenid/tabs/tabid/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/screens/screenid/tabs/tabid/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/screens/screenid/tabs/tabid/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/screens/screenid/tabs/tabid/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/screens/screenid/tabs/tabid/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the screen or screen tab is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/screens/screenid/tabs/tabid/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/screens/screenid/tabs/tabid/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/screens/:screenId/tabs/:tabId/fields
> Get all screen tab fields

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/screens/screenid/tabs/tabid/fields/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/screens/screenid/tabs/tabid/fields/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/screens/screenid/tabs/tabid/fields/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/screens/screenid/tabs/tabid/fields/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/screens/screenid/tabs/tabid/fields/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/screens/screenid/tabs/tabid/fields/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the screen or screen tab is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/screens/screenid/tabs/tabid/fields/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/screens/screenid/tabs/tabid/fields/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/screens/:screenId/tabs/:tabId/fields
> Add screen tab field

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/screens/screenid/tabs/tabid/fields/___responses/200 "See details  ")
[See body  ](./___post/rest/api/3/screens/screenid/tabs/tabid/fields/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/screens/screenid/tabs/tabid/fields/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/screens/screenid/tabs/tabid/fields/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/screens/screenid/tabs/tabid/fields/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/screens/screenid/tabs/tabid/fields/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/screens/screenid/tabs/tabid/fields/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/screens/screenid/tabs/tabid/fields/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the screen, screen tab, or field is not found.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/screens/screenid/tabs/tabid/fields/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/screens/screenid/tabs/tabid/fields/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/screens/:screenId/tabs/:tabId/fields/:id
> Remove screen tab field

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/screens/screenid/tabs/tabid/fields/id/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/screens/screenid/tabs/tabid/fields/id/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/screens/screenid/tabs/tabid/fields/id/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/screens/screenid/tabs/tabid/fields/id/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/screens/screenid/tabs/tabid/fields/id/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/screens/screenid/tabs/tabid/fields/id/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/screens/screenid/tabs/tabid/fields/id/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/screens/screenid/tabs/tabid/fields/id/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the screen, screen tab, or field is not found.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/screens/screenid/tabs/tabid/fields/id/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/screens/screenid/tabs/tabid/fields/id/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/screens/:screenId/tabs/:tabId/fields/:id/move
> Move screen tab field

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/screens/screenid/tabs/tabid/fields/id/move/___responses/204 "See details  ")
[See body  ](./___post/rest/api/3/screens/screenid/tabs/tabid/fields/id/move/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/screens/screenid/tabs/tabid/fields/id/move/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/screens/screenid/tabs/tabid/fields/id/move/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/screens/screenid/tabs/tabid/fields/id/move/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/screens/screenid/tabs/tabid/fields/id/move/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/screens/screenid/tabs/tabid/fields/id/move/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/screens/screenid/tabs/tabid/fields/id/move/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the screen, screen tab, or field is not found or the field can't be moved to the requested position.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/screens/screenid/tabs/tabid/fields/id/move/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/screens/screenid/tabs/tabid/fields/id/move/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/screens/:screenId/tabs/:tabId/move/:pos
> Move screen tab

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/screens/screenid/tabs/tabid/move/pos/___responses/204 "See details  ")
[See body  ](./___post/rest/api/3/screens/screenid/tabs/tabid/move/pos/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/screens/screenid/tabs/tabid/move/pos/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/screens/screenid/tabs/tabid/move/pos/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/screens/screenid/tabs/tabid/move/pos/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/screens/screenid/tabs/tabid/move/pos/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/screens/screenid/tabs/tabid/move/pos/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/screens/screenid/tabs/tabid/move/pos/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the screen or screen tab is not found or the position is invalid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/screens/screenid/tabs/tabid/move/pos/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/screens/screenid/tabs/tabid/move/pos/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/screenscheme
> Get screen schemes

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/screenscheme/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/screenscheme/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/screenscheme/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/screenscheme/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/screenscheme/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/screenscheme/___responses/403/body/index.hbs "See body  ")



## POST /rest/api/3/screenscheme
> Create screen scheme

### 201  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/screenscheme/___responses/201 "See details  ")
[See body  ](./___post/rest/api/3/screenscheme/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/screenscheme/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/screenscheme/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/screenscheme/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/screenscheme/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/screenscheme/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/screenscheme/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if a screen used as one of the screen types in the screen scheme is not found.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/screenscheme/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/screenscheme/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/screenscheme/:screenSchemeId
> Delete screen scheme

### 204  (default)
> Returned if the screen scheme is deleted.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/screenscheme/screenschemeid/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/screenscheme/screenschemeid/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the screen scheme is used in an issue type screen scheme.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/screenscheme/screenschemeid/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/screenscheme/screenschemeid/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/screenscheme/screenschemeid/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/screenscheme/screenschemeid/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/screenscheme/screenschemeid/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/screenscheme/screenschemeid/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the screen scheme is not found.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/screenscheme/screenschemeid/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/screenscheme/screenschemeid/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/screenscheme/:screenSchemeId
> Update screen scheme

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/screenscheme/screenschemeid/___responses/204 "See details  ")
[See body  ](./___put/rest/api/3/screenscheme/screenschemeid/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/screenscheme/screenschemeid/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/screenscheme/screenschemeid/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/screenscheme/screenschemeid/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/screenscheme/screenschemeid/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/screenscheme/screenschemeid/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/screenscheme/screenschemeid/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the screen scheme or a screen used as one of the screen types is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/screenscheme/screenschemeid/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/screenscheme/screenschemeid/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/search
> Search for issues using JQL (GET)

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/search/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/search/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the JQL query is invalid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/search/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/search/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/search/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/search/___responses/401/body/index.hbs "See body  ")



## POST /rest/api/3/search
> Search for issues using JQL (POST)

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/search/___responses/200 "See details  ")
[See body  ](./___post/rest/api/3/search/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the JQL query is invalid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/search/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/search/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/search/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/search/___responses/401/body/index.hbs "See body  ")



## GET /rest/api/3/securitylevel/:id
> Get issue security level

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/securitylevel/id/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/securitylevel/id/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/securitylevel/id/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/securitylevel/id/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the issue security level is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/securitylevel/id/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/securitylevel/id/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/serverInfo
> Get Jira instance info

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/serverinfo/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/serverinfo/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/serverinfo/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/serverinfo/___responses/401/body/index.hbs "See body  ")



## GET /rest/api/3/settings/columns
> Get issue navigator default columns

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/settings/columns/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/settings/columns/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/settings/columns/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/settings/columns/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/settings/columns/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/settings/columns/___responses/403/body/index.hbs "See body  ")



## PUT /rest/api/3/settings/columns
> Set issue navigator default columns

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/settings/columns/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/settings/columns/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if invalid parameters are passed.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/settings/columns/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/settings/columns/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/settings/columns/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/settings/columns/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/settings/columns/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/settings/columns/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if a navigable field value is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/settings/columns/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/settings/columns/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/status
> Get all statuses

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/status/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/status/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/status/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/status/___responses/401/body/index.hbs "See body  ")



## GET /rest/api/3/status/:idOrName
> Get status

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/status/idorname/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/status/idorname/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/status/idorname/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/status/idorname/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the status is not found.
>  *  the status is not associated with a workflow.
>  *  the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/status/idorname/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/status/idorname/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/statuscategory
> Get all status categories

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/statuscategory/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/statuscategory/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/statuscategory/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/statuscategory/___responses/401/body/index.hbs "See body  ")



## GET /rest/api/3/statuscategory/:idOrKey
> Get status category

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/statuscategory/idorkey/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/statuscategory/idorkey/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/statuscategory/idorkey/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/statuscategory/idorkey/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the status category is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/statuscategory/idorkey/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/statuscategory/idorkey/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/task/:taskId
> Get task

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/task/taskid/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/task/taskid/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/task/taskid/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/task/taskid/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/task/taskid/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/task/taskid/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the task is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/task/taskid/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/task/taskid/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/task/:taskId/cancel
> Cancel task

### 202  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/task/taskid/cancel/___responses/202 "See details  ")
[See body  ](./___post/rest/api/3/task/taskid/cancel/___responses/202/body/index.hbs "See body  ")

### 400
> Returned if cancellation of the task is not possible.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/task/taskid/cancel/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/task/taskid/cancel/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/task/taskid/cancel/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/task/taskid/cancel/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/task/taskid/cancel/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/task/taskid/cancel/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the task is not found.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/task/taskid/cancel/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/task/taskid/cancel/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/universal\_avatar/type/:type/owner/:entityId
> Get avatars

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/universal_avatar/type/type/owner/entityid/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/universal_avatar/type/type/owner/entityid/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/universal_avatar/type/type/owner/entityid/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/universal_avatar/type/type/owner/entityid/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the avatar type is invalid, the associated item ID is missing, or the item is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/universal_avatar/type/type/owner/entityid/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/universal_avatar/type/type/owner/entityid/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/universal\_avatar/type/:type/owner/:entityId
> Load avatar

### 201  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/universal_avatar/type/type/owner/entityid/___responses/201 "See details  ")
[See body  ](./___post/rest/api/3/universal_avatar/type/type/owner/entityid/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  an image isn't included in the request.
>  *  the image type is unsupported.
>  *  the crop parameters extend the crop area beyond the edge of the image.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/universal_avatar/type/type/owner/entityid/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/universal_avatar/type/type/owner/entityid/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/universal_avatar/type/type/owner/entityid/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/universal_avatar/type/type/owner/entityid/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permissions.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/universal_avatar/type/type/owner/entityid/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/universal_avatar/type/type/owner/entityid/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the avatar type is invalid, the associated item ID is missing, or the item is not found.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/universal_avatar/type/type/owner/entityid/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/universal_avatar/type/type/owner/entityid/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/universal\_avatar/type/:type/owner/:owningObjectId/avatar/:id
> Delete avatar

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/universal_avatar/type/type/owner/owningobjectid/avatar/id/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/universal_avatar/type/type/owner/owningobjectid/avatar/id/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/universal_avatar/type/type/owner/owningobjectid/avatar/id/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/universal_avatar/type/type/owner/owningobjectid/avatar/id/___responses/400/body/index.hbs "See body  ")

### 403
> Returned if the user does not have permission to delete the avatar, the avatar is not deletable.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/universal_avatar/type/type/owner/owningobjectid/avatar/id/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/universal_avatar/type/type/owner/owningobjectid/avatar/id/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the avatar type, associated item ID, or avatar ID is invalid.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/universal_avatar/type/type/owner/owningobjectid/avatar/id/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/universal_avatar/type/type/owner/owningobjectid/avatar/id/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/user
> Delete user

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/user/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/user/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the user cannot be removed.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/user/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/user/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/user/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/user/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/user/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/user/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  `accountId` is missing.
>  *  the user is not found.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/user/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/user/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/user
> Get user

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/user/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/user/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the calling user does not have the *Browse users and groups* global permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/user/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  `accountId` is missing.
>  *  the user is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/user/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/user
> Create user

### 201  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/user/___responses/201 "See details  ")
[See body  ](./___post/rest/api/3/user/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid or the number of licensed users is exceeded.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/user/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/user/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/user/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/user/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/user/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/user/___responses/403/body/index.hbs "See body  ")



## GET /rest/api/3/user/assignable/multiProjectSearch
> Find users assignable to projects

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/assignable/multiprojectsearch/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/user/assignable/multiprojectsearch/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  `projectKeys` is missing.
>  *  `query` or `accountId` is missing.
>  *  `query` and `accountId` are provided.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/assignable/multiprojectsearch/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/user/assignable/multiprojectsearch/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/assignable/multiprojectsearch/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/user/assignable/multiprojectsearch/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if one or more of the projects is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/assignable/multiprojectsearch/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/user/assignable/multiprojectsearch/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/user/assignable/search
> Find users assignable to issues

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/assignable/search/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/user/assignable/search/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  `issueKey` or `project` is missing.
>  *  `query` or `accountId` is missing.
>  *  `query` and `accountId` are provided.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/assignable/search/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/user/assignable/search/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/assignable/search/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/user/assignable/search/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the project, issue, or transition is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/assignable/search/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/user/assignable/search/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/user/bulk
> Bulk get users

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/bulk/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/user/bulk/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if `accountID` is missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/bulk/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/user/bulk/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/bulk/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/user/bulk/___responses/401/body/index.hbs "See body  ")



## GET /rest/api/3/user/bulk/migration
> Get account IDs for users

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/bulk/migration/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/user/bulk/migration/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if `key` or `username`

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/bulk/migration/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/user/bulk/migration/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/bulk/migration/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/user/bulk/migration/___responses/401/body/index.hbs "See body  ")



## DELETE /rest/api/3/user/columns
> Reset user default columns

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/user/columns/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/user/columns/___responses/204/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/user/columns/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/user/columns/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission or is not accessing their user record.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/user/columns/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/user/columns/___responses/403/body/index.hbs "See body  ")



## GET /rest/api/3/user/columns
> Get user default columns

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/columns/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/user/columns/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/columns/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/user/columns/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission or is not accessing their user record.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/columns/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/user/columns/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the requested user is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/columns/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/user/columns/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/user/columns
> Set user default columns

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/user/columns/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/user/columns/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/user/columns/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/user/columns/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission or is not accessing their user record.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/user/columns/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/user/columns/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the requested user is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/user/columns/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/user/columns/___responses/404/body/index.hbs "See body  ")

### 500
> Returned if an invalid issue table column ID is sent.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/user/columns/___responses/500 "See details  ")
[See body  ](./___put/rest/api/3/user/columns/___responses/500/body/index.hbs "See body  ")



## GET /rest/api/3/user/email
> Get user email

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/email/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/user/email/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the calling app is not approved to use this API.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/email/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/user/email/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing from the request (for example if a user is trying to access this API).

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/email/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/user/email/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if a user with the given `accountId` doesn't exist

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/email/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/user/email/___responses/404/body/index.hbs "See body  ")

### 503
> Indicates the API is not currently enabled

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/email/___responses/503 "See details  ")
[See body  ](./___get/rest/api/3/user/email/___responses/503/body/index.hbs "See body  ")



## GET /rest/api/3/user/email/bulk
> Get user email bulk

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/email/bulk/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/user/email/bulk/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the calling app is not approved to use this API.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/email/bulk/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/user/email/bulk/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect, or missing from the request (for example if a user is trying to access this API).

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/email/bulk/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/user/email/bulk/___responses/401/body/index.hbs "See body  ")

### 503
> Indicates the API is not currently enabled.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/email/bulk/___responses/503 "See details  ")
[See body  ](./___get/rest/api/3/user/email/bulk/___responses/503/body/index.hbs "See body  ")



## GET /rest/api/3/user/groups
> Get user groups

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/groups/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/user/groups/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/groups/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/user/groups/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the calling user does not have the *Browse users and groups* global permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/groups/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/user/groups/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  `accountId` is missing.
>  *  the user is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/groups/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/user/groups/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/user/permission/search
> Find users with permissions

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/permission/search/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/user/permission/search/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  `issueKey` or `projectKey` is missing.
>  *  `query` or `accountId` is missing.
>  *  `query` and `accountId` are provided.
>  *  `permissions` is empty or contains an invalid entry.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/permission/search/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/user/permission/search/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/permission/search/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/user/permission/search/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/permission/search/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/user/permission/search/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the issue or project is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/permission/search/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/user/permission/search/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/user/picker
> Find users for picker

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/picker/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/user/picker/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if `exclude` and `excludeAccountIds` are provided.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/picker/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/user/picker/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/picker/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/user/picker/___responses/401/body/index.hbs "See body  ")



## GET /rest/api/3/user/properties
> Get user property keys

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/properties/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/user/properties/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if `accountId` is missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/properties/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/user/properties/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/properties/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/user/properties/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission or is not accessing their user record.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/properties/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/user/properties/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the user is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/properties/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/user/properties/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/user/properties/:propertyKey
> Delete user property

### 204  (default)
> Returned if the user property is deleted.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/user/properties/propertykey/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/user/properties/propertykey/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if `accountId` is missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/user/properties/propertykey/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/user/properties/propertykey/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/user/properties/propertykey/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/user/properties/propertykey/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission or is not accessing their user record.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/user/properties/propertykey/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/user/properties/propertykey/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the user or the property is not found.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/user/properties/propertykey/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/user/properties/propertykey/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/user/properties/:propertyKey
> Get user property

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/properties/propertykey/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/user/properties/propertykey/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if `accountId` is missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/properties/propertykey/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/user/properties/propertykey/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/properties/propertykey/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/user/properties/propertykey/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission or is not accessing their user record.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/properties/propertykey/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/user/properties/propertykey/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the user is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/properties/propertykey/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/user/properties/propertykey/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/user/properties/:propertyKey
> Set user property

### 200  (default)
> Returned if the user property is updated.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/user/properties/propertykey/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/user/properties/propertykey/___responses/200/body/index.hbs "See body  ")

### 201
> Returned if the user property is created.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/user/properties/propertykey/___responses/201 "See details  ")
[See body  ](./___put/rest/api/3/user/properties/propertykey/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if `accountId` is missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/user/properties/propertykey/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/user/properties/propertykey/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/user/properties/propertykey/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/user/properties/propertykey/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission or is not accessing their user record.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/user/properties/propertykey/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/user/properties/propertykey/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the user is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/user/properties/propertykey/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/user/properties/propertykey/___responses/404/body/index.hbs "See body  ")

### 405
> Returned if the property key is not specified.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/user/properties/propertykey/___responses/405 "See details  ")
[See body  ](./___put/rest/api/3/user/properties/propertykey/___responses/405/body/index.hbs "See body  ")



## GET /rest/api/3/user/search
> Find users

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/search/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/user/search/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  `accountId`, `query` or `property` is missing.
>  *  `query` and `accountId` are provided.
>  *  `property` parameter is not valid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/search/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/user/search/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/search/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/user/search/___responses/401/body/index.hbs "See body  ")



## GET /rest/api/3/user/search/query
> Find users by query

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/search/query/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/user/search/query/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the query is invalid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/search/query/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/user/search/query/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/search/query/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/user/search/query/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/search/query/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/user/search/query/___responses/403/body/index.hbs "See body  ")

### 408
> Returned if the search is timed out.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/search/query/___responses/408 "See details  ")
[See body  ](./___get/rest/api/3/user/search/query/___responses/408/body/index.hbs "See body  ")



## GET /rest/api/3/user/search/query/key
> Find user keys by query

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/search/query/key/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/user/search/query/key/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the query is invalid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/search/query/key/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/user/search/query/key/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/search/query/key/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/user/search/query/key/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/search/query/key/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/user/search/query/key/___responses/403/body/index.hbs "See body  ")

### 408
> Returned if the search is timed out.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/search/query/key/___responses/408 "See details  ")
[See body  ](./___get/rest/api/3/user/search/query/key/___responses/408/body/index.hbs "See body  ")



## GET /rest/api/3/user/viewissue/search
> Find users with browse permission

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/viewissue/search/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/user/viewissue/search/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  `issueKey` or `projectKey` is missing.
>  *  `query` or `accountId` is missing.
>  *  `query` and `accountId` are provided.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/viewissue/search/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/user/viewissue/search/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/viewissue/search/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/user/viewissue/search/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the issue or project is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/user/viewissue/search/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/user/viewissue/search/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/users
> Get all users default

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/users/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/users/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/users/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/users/___responses/400/body/index.hbs "See body  ")

### 403
> Returned if the user doesn't have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/users/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/users/___responses/403/body/index.hbs "See body  ")

### 409
> Returned if the request takes longer than 10 seconds or is interrupted.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/users/___responses/409 "See details  ")
[See body  ](./___get/rest/api/3/users/___responses/409/body/index.hbs "See body  ")



## GET /rest/api/3/users/search
> Get all users

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/users/search/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/users/search/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/users/search/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/users/search/___responses/400/body/index.hbs "See body  ")

### 403
> Returned if the user doesn't have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/users/search/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/users/search/___responses/403/body/index.hbs "See body  ")

### 409
> Returned if the request takes longer than 10 seconds or is interrupted.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/users/search/___responses/409 "See details  ")
[See body  ](./___get/rest/api/3/users/search/___responses/409/body/index.hbs "See body  ")



## POST /rest/api/3/version
> Create version

### 201  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/version/___responses/201 "See details  ")
[See body  ](./___post/rest/api/3/version/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/version/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/version/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/version/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/version/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the project is not found.
>  *  the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/version/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/version/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/version/:id
> Delete version

### 204  (default)
> Returned if the version is deleted.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/version/id/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/version/id/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/version/id/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/version/id/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if:
>
>  *  the authentication credentials are incorrect.
>  *  the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/version/id/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/version/id/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the version is not found.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/version/id/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/version/id/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/version/:id
> Get version

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/version/id/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/version/id/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/version/id/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/version/id/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the version is not found or the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/version/id/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/version/id/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/version/:id
> Update version

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/version/id/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/version/id/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  the request is invalid.
>  *  the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/version/id/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/version/id/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/version/id/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/version/id/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the version is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/version/id/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/version/id/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/version/:id/mergeto/:moveIssuesTo
> Merge versions

### 204  (default)
> Returned if the version is deleted.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/version/id/mergeto/moveissuesto/___responses/204 "See details  ")
[See body  ](./___put/rest/api/3/version/id/mergeto/moveissuesto/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/version/id/mergeto/moveissuesto/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/version/id/mergeto/moveissuesto/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if:
>
>  *  the authentication credentials are incorrect or missing.
>  *  the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/version/id/mergeto/moveissuesto/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/version/id/mergeto/moveissuesto/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the version to be deleted or the version to merge to are not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/version/id/mergeto/moveissuesto/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/version/id/mergeto/moveissuesto/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/version/:id/move
> Move version

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/version/id/move/___responses/200 "See details  ")
[See body  ](./___post/rest/api/3/version/id/move/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if:
>
>  *  no body parameters are provided.
>  *  `after` and `position` are provided.
>  *  `position` is invalid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/version/id/move/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/version/id/move/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if:
>
>  *  the authentication credentials are incorrect or missing
>  *  the user does not have the required commissions.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/version/id/move/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/version/id/move/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the version or move after version are not found.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/version/id/move/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/version/id/move/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/version/:id/relatedIssueCounts
> Get version's related issues count

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/version/id/relatedissuecounts/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/version/id/relatedissuecounts/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/version/id/relatedissuecounts/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/version/id/relatedissuecounts/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the version is not found.
>  *  the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/version/id/relatedissuecounts/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/version/id/relatedissuecounts/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/version/:id/removeAndSwap
> Delete and replace version

### 204  (default)
> Returned if the version is deleted.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/version/id/removeandswap/___responses/204 "See details  ")
[See body  ](./___post/rest/api/3/version/id/removeandswap/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/version/id/removeandswap/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/version/id/removeandswap/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/version/id/removeandswap/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/version/id/removeandswap/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the version to delete is not found.
>  *  the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/version/id/removeandswap/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/version/id/removeandswap/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/version/:id/unresolvedIssueCount
> Get version's unresolved issues count

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/version/id/unresolvedissuecount/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/version/id/unresolvedissuecount/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/version/id/unresolvedissuecount/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/version/id/unresolvedissuecount/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the version is not found.
>  *  the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/version/id/unresolvedissuecount/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/version/id/unresolvedissuecount/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/webhook
> Delete webhooks by ID

### 202  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/webhook/___responses/202 "See details  ")
[See body  ](./___delete/rest/api/3/webhook/___responses/202/body/index.hbs "See body  ")

### 400
> Returned if the list of webhook IDs is missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/webhook/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/webhook/___responses/400/body/index.hbs "See body  ")

### 403
> Returned if the caller is not an app.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/webhook/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/webhook/___responses/403/body/index.hbs "See body  ")



## GET /rest/api/3/webhook
> Get dynamic webhooks for app

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/webhook/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/webhook/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/webhook/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/webhook/___responses/400/body/index.hbs "See body  ")

### 403
> Returned if the caller is not an app.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/webhook/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/webhook/___responses/403/body/index.hbs "See body  ")



## POST /rest/api/3/webhook
> Register dynamic webhooks

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/webhook/___responses/200 "See details  ")
[See body  ](./___post/rest/api/3/webhook/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/webhook/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/webhook/___responses/400/body/index.hbs "See body  ")

### 403
> Returned if the caller is not an app.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/webhook/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/webhook/___responses/403/body/index.hbs "See body  ")



## GET /rest/api/3/webhook/failed
> Get failed webhooks

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/webhook/failed/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/webhook/failed/___responses/200/body/index.hbs "See body  ")

### 400
> 400 response

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/webhook/failed/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/webhook/failed/___responses/400/body/index.hbs "See body  ")

### 403
> Returned if the caller is not a Connect app.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/webhook/failed/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/webhook/failed/___responses/403/body/index.hbs "See body  ")



## PUT /rest/api/3/webhook/refresh
> Extend webhook life

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/webhook/refresh/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/webhook/refresh/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/webhook/refresh/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/webhook/refresh/___responses/400/body/index.hbs "See body  ")

### 403
> Returned if the caller is not an app.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/webhook/refresh/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/webhook/refresh/___responses/403/body/index.hbs "See body  ")



## GET /rest/api/3/workflow
> Get all workflows

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflow/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/workflow/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflow/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/workflow/___responses/401/body/index.hbs "See body  ")



## POST /rest/api/3/workflow
> Create workflow

### 201  (default)
> Returned if the workflow is created.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/workflow/___responses/201 "See details  ")
[See body  ](./___post/rest/api/3/workflow/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/workflow/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/workflow/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/workflow/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/workflow/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/workflow/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/workflow/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if one or more statuses is not found.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/workflow/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/workflow/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/workflow/rule/config
> Get workflow transition rule configurations

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflow/rule/config/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/workflow/rule/config/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflow/rule/config/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/workflow/rule/config/___responses/400/body/index.hbs "See body  ")

### 403
> Returned if the caller is not a Connect app.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflow/rule/config/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/workflow/rule/config/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the any transition rule type is not supported.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflow/rule/config/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/workflow/rule/config/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/workflow/rule/config
> Update workflow transition rule configurations

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflow/rule/config/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/workflow/rule/config/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflow/rule/config/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/workflow/rule/config/___responses/400/body/index.hbs "See body  ")

### 403
> Returned if the caller is not a Connect app.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflow/rule/config/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/workflow/rule/config/___responses/403/body/index.hbs "See body  ")



## PUT /rest/api/3/workflow/rule/config/delete
> Delete workflow transition rule configurations

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflow/rule/config/delete/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/workflow/rule/config/delete/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflow/rule/config/delete/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/workflow/rule/config/delete/___responses/400/body/index.hbs "See body  ")

### 403
> Returned if the caller is not a Connect app.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflow/rule/config/delete/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/workflow/rule/config/delete/___responses/403/body/index.hbs "See body  ")



## GET /rest/api/3/workflow/search
> Get workflows paginated

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflow/search/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/workflow/search/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflow/search/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/workflow/search/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflow/search/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/workflow/search/___responses/403/body/index.hbs "See body  ")



## DELETE /rest/api/3/workflow/transitions/:transitionId/properties
> Delete workflow transition property

### 200  (default)
> 200 response

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflow/transitions/transitionid/properties/___responses/200 "See details  ")
[See body  ](./___delete/rest/api/3/workflow/transitions/transitionid/properties/___responses/200/body/index.hbs "See body  ")

### 304
> Returned if no changes were made by the request. For example, trying to delete a property that cannot be found.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflow/transitions/transitionid/properties/___responses/304 "See details  ")
[See body  ](./___delete/rest/api/3/workflow/transitions/transitionid/properties/___responses/304/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflow/transitions/transitionid/properties/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/workflow/transitions/transitionid/properties/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflow/transitions/transitionid/properties/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/workflow/transitions/transitionid/properties/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflow/transitions/transitionid/properties/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/workflow/transitions/transitionid/properties/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the workflow transition is not found.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflow/transitions/transitionid/properties/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/workflow/transitions/transitionid/properties/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/workflow/transitions/:transitionId/properties
> Get workflow transition properties

### 200  (default)
> 200 response

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflow/transitions/transitionid/properties/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/workflow/transitions/transitionid/properties/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflow/transitions/transitionid/properties/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/workflow/transitions/transitionid/properties/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflow/transitions/transitionid/properties/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/workflow/transitions/transitionid/properties/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have admin permission

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflow/transitions/transitionid/properties/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/workflow/transitions/transitionid/properties/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the workflow transition or property is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflow/transitions/transitionid/properties/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/workflow/transitions/transitionid/properties/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/workflow/transitions/:transitionId/properties
> Create workflow transition property

### 200  (default)
> 200 response

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/workflow/transitions/transitionid/properties/___responses/200 "See details  ")
[See body  ](./___post/rest/api/3/workflow/transitions/transitionid/properties/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if a workflow property with the same key is present on the transition.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/workflow/transitions/transitionid/properties/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/workflow/transitions/transitionid/properties/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/workflow/transitions/transitionid/properties/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/workflow/transitions/transitionid/properties/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/workflow/transitions/transitionid/properties/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/workflow/transitions/transitionid/properties/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the workflow transition is not found.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/workflow/transitions/transitionid/properties/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/workflow/transitions/transitionid/properties/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/workflow/transitions/:transitionId/properties
> Update workflow transition property

### 200  (default)
> 200 response

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflow/transitions/transitionid/properties/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/workflow/transitions/transitionid/properties/___responses/200/body/index.hbs "See body  ")

### 304
> Returned if no changes were made by the request. For example, attempting to update a property with its current value.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflow/transitions/transitionid/properties/___responses/304 "See details  ")
[See body  ](./___put/rest/api/3/workflow/transitions/transitionid/properties/___responses/304/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflow/transitions/transitionid/properties/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/workflow/transitions/transitionid/properties/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflow/transitions/transitionid/properties/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/workflow/transitions/transitionid/properties/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflow/transitions/transitionid/properties/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/workflow/transitions/transitionid/properties/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the workflow transition is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflow/transitions/transitionid/properties/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/workflow/transitions/transitionid/properties/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/workflow/:entityId
> Delete inactive workflow

### 204  (default)
> Returned if the workflow is deleted.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflow/entityid/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/workflow/entityid/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflow/entityid/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/workflow/entityid/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflow/entityid/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/workflow/entityid/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflow/entityid/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/workflow/entityid/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the workflow is not found.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflow/entityid/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/workflow/entityid/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/workflowscheme
> Get all workflow schemes

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/___responses/403/body/index.hbs "See body  ")



## POST /rest/api/3/workflowscheme
> Create workflow scheme

### 201  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/workflowscheme/___responses/201 "See details  ")
[See body  ](./___post/rest/api/3/workflowscheme/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/workflowscheme/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/workflowscheme/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/workflowscheme/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/workflowscheme/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/workflowscheme/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/workflowscheme/___responses/403/body/index.hbs "See body  ")



## GET /rest/api/3/workflowscheme/project
> Get workflow scheme project associations

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/project/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/project/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/project/___responses/400 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/project/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/project/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/project/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/project/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/project/___responses/403/body/index.hbs "See body  ")



## PUT /rest/api/3/workflowscheme/project
> Assign workflow scheme to project

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/project/___responses/204 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/project/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/project/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/project/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/project/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/project/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the required permissions.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/project/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/project/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the workflow scheme or the project are not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/project/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/project/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/workflowscheme/:id
> Delete workflow scheme

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the scheme is active.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the workflow scheme is not found.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/workflowscheme/:id
> Get workflow scheme

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/id/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/id/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/id/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/id/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/id/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/id/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the workflow scheme is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/id/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/id/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/workflowscheme/:id
> Update workflow scheme

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the workflow scheme is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/workflowscheme/:id/createdraft
> Create draft workflow scheme

### 201  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/workflowscheme/id/createdraft/___responses/201 "See details  ")
[See body  ](./___post/rest/api/3/workflowscheme/id/createdraft/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/workflowscheme/id/createdraft/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/workflowscheme/id/createdraft/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/workflowscheme/id/createdraft/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/workflowscheme/id/createdraft/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/workflowscheme/id/createdraft/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/workflowscheme/id/createdraft/___responses/403/body/index.hbs "See body  ")



## DELETE /rest/api/3/workflowscheme/:id/default
> Delete default workflow

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/default/___responses/200 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/default/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the workflow scheme cannot be edited and `updateDraftIfNeeded` is not `true`.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/default/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/default/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/default/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/default/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/default/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/default/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the workflow scheme is not found.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/default/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/default/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/workflowscheme/:id/default
> Get default workflow

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/id/default/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/id/default/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/id/default/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/id/default/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/id/default/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/id/default/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the workflow scheme is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/id/default/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/id/default/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/workflowscheme/:id/default
> Update default workflow

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/default/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/default/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the workflow scheme cannot be edited and `updateDraftIfNeeded` is not `true`.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/default/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/default/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/default/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/default/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/default/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/default/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the workflow scheme is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/default/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/default/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/workflowscheme/:id/draft
> Delete draft workflow scheme

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/draft/___responses/204 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/draft/___responses/204/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/draft/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/draft/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission..

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/draft/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/draft/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the original active workflow scheme is not found.
>  *  the original active workflow scheme does not have a draft.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/draft/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/draft/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/workflowscheme/:id/draft
> Get draft workflow scheme

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/id/draft/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/id/draft/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/id/draft/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/id/draft/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/id/draft/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/id/draft/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the original active workflow scheme is not found.
>  *  the original active workflow scheme does not have a draft.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/id/draft/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/id/draft/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/workflowscheme/:id/draft
> Update draft workflow scheme

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/draft/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/draft/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/draft/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/draft/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/draft/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/draft/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/draft/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/draft/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if:
>
>  *  the original active workflow scheme is not found.
>  *  the original active workflow scheme does not have a draft.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/draft/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/draft/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/workflowscheme/:id/draft/default
> Delete draft default workflow

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/draft/default/___responses/200 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/draft/default/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/draft/default/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/draft/default/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/draft/default/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/draft/default/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if any of the following is true:
>
>  *  The workflow scheme is not found.
>  *  The workflow scheme does not have a draft.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/draft/default/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/draft/default/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/workflowscheme/:id/draft/default
> Get draft default workflow

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/id/draft/default/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/id/draft/default/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/id/draft/default/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/id/draft/default/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission..

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/id/draft/default/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/id/draft/default/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if any of the following is true:
>
>  *  The workflow scheme is not found.
>  *  The workflow scheme does not have a draft.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/id/draft/default/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/id/draft/default/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/workflowscheme/:id/draft/default
> Update draft default workflow

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/draft/default/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/draft/default/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/draft/default/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/draft/default/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/draft/default/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/draft/default/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/draft/default/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/draft/default/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if any of the following is true:
>
>  *  The workflow scheme is not found.
>  *  The workflow scheme does not have a draft.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/draft/default/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/draft/default/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/workflowscheme/:id/draft/issuetype/:issueType
> Delete workflow for issue type in draft workflow scheme

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/draft/issuetype/issuetype/___responses/200 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/draft/issuetype/issuetype/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/draft/issuetype/issuetype/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/draft/issuetype/issuetype/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/draft/issuetype/issuetype/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/draft/issuetype/issuetype/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the workflow scheme or issue type is not found.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/draft/issuetype/issuetype/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/draft/issuetype/issuetype/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/workflowscheme/:id/draft/issuetype/:issueType
> Get workflow for issue type in draft workflow scheme

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/id/draft/issuetype/issuetype/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/id/draft/issuetype/issuetype/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/id/draft/issuetype/issuetype/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/id/draft/issuetype/issuetype/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/id/draft/issuetype/issuetype/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/id/draft/issuetype/issuetype/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the workflow scheme or issue type is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/id/draft/issuetype/issuetype/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/id/draft/issuetype/issuetype/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/workflowscheme/:id/draft/issuetype/:issueType
> Set workflow for issue type in draft workflow scheme

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/draft/issuetype/issuetype/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/draft/issuetype/issuetype/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/draft/issuetype/issuetype/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/draft/issuetype/issuetype/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/draft/issuetype/issuetype/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/draft/issuetype/issuetype/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/draft/issuetype/issuetype/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/draft/issuetype/issuetype/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the workflow scheme or issue type is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/draft/issuetype/issuetype/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/draft/issuetype/issuetype/___responses/404/body/index.hbs "See body  ")



## POST /rest/api/3/workflowscheme/:id/draft/publish
> Publish draft workflow scheme

### 204  (default)
> Returned if the request is only for validation and is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/workflowscheme/id/draft/publish/___responses/204 "See details  ")
[See body  ](./___post/rest/api/3/workflowscheme/id/draft/publish/___responses/204/body/index.hbs "See body  ")

### 303
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/workflowscheme/id/draft/publish/___responses/303 "See details  ")
[See body  ](./___post/rest/api/3/workflowscheme/id/draft/publish/___responses/303/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/workflowscheme/id/draft/publish/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/workflowscheme/id/draft/publish/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/workflowscheme/id/draft/publish/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/workflowscheme/id/draft/publish/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/workflowscheme/id/draft/publish/___responses/403 "See details  ")
[See body  ](./___post/rest/api/3/workflowscheme/id/draft/publish/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if any of these are true:
>
>  *  The workflow scheme is not found.
>  *  The workflow scheme does not have a draft.
>  *  A new status in the draft workflow scheme is not found.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/workflowscheme/id/draft/publish/___responses/404 "See details  ")
[See body  ](./___post/rest/api/3/workflowscheme/id/draft/publish/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/workflowscheme/:id/draft/workflow
> Delete issue types for workflow in draft workflow scheme

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/draft/workflow/___responses/200 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/draft/workflow/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/draft/workflow/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/draft/workflow/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/draft/workflow/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/draft/workflow/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if any of the following is true:
>
>  *  The workflow scheme is not found.
>  *  The workflow scheme does not have a draft.
>  *  The workflow is not found.
>  *  The workflow is not specified.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/draft/workflow/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/draft/workflow/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/workflowscheme/:id/draft/workflow
> Get issue types for workflows in draft workflow scheme

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/id/draft/workflow/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/id/draft/workflow/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/id/draft/workflow/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/id/draft/workflow/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/id/draft/workflow/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/id/draft/workflow/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if either the workflow scheme or workflow (if specified) is not found. session.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/id/draft/workflow/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/id/draft/workflow/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/workflowscheme/:id/draft/workflow
> Set issue types for workflow in workflow scheme

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/draft/workflow/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/draft/workflow/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/draft/workflow/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/draft/workflow/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/draft/workflow/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/draft/workflow/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/draft/workflow/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/draft/workflow/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if any of the following is true:
>
>  *  The workflow scheme is not found.
>  *  The workflow scheme does not have a draft.
>  *  The workflow is not found.
>  *  The workflow is not specified.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/draft/workflow/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/draft/workflow/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/workflowscheme/:id/issuetype/:issueType
> Delete workflow for issue type in workflow scheme

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/issuetype/issuetype/___responses/200 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/issuetype/issuetype/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the workflow cannot be edited and `updateDraftIfNeeded` is false.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/issuetype/issuetype/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/issuetype/issuetype/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/issuetype/issuetype/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/issuetype/issuetype/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/issuetype/issuetype/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/issuetype/issuetype/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the workflow scheme or issue type is not found.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/issuetype/issuetype/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/issuetype/issuetype/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/workflowscheme/:id/issuetype/:issueType
> Get workflow for issue type in workflow scheme

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/id/issuetype/issuetype/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/id/issuetype/issuetype/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/id/issuetype/issuetype/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/id/issuetype/issuetype/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/id/issuetype/issuetype/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/id/issuetype/issuetype/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the workflow scheme or issue type is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/id/issuetype/issuetype/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/id/issuetype/issuetype/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/workflowscheme/:id/issuetype/:issueType
> Set workflow for issue type in workflow scheme

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/issuetype/issuetype/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/issuetype/issuetype/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the workflow cannot be edited and `updateDraftIfNeeded` is false.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/issuetype/issuetype/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/issuetype/issuetype/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/issuetype/issuetype/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/issuetype/issuetype/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/issuetype/issuetype/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/issuetype/issuetype/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if the workflow scheme or issue type is not found.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/issuetype/issuetype/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/issuetype/issuetype/___responses/404/body/index.hbs "See body  ")



## DELETE /rest/api/3/workflowscheme/:id/workflow
> Delete issue types for workflow in workflow scheme

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/workflow/___responses/200 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/workflow/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the workflow cannot be edited and `updateDraftIfNeeded` is not true.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/workflow/___responses/400 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/workflow/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/workflow/___responses/401 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/workflow/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/workflow/___responses/403 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/workflow/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if any of the following is true:
>
>  *  The workflow scheme is not found.
>  *  The workflow is not found.
>  *  The workflow is not specified.

#### Rules
```
[]
```

[See details  ](./___delete/rest/api/3/workflowscheme/id/workflow/___responses/404 "See details  ")
[See body  ](./___delete/rest/api/3/workflowscheme/id/workflow/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/workflowscheme/:id/workflow
> Get issue types for workflows in workflow scheme

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/id/workflow/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/id/workflow/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/id/workflow/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/id/workflow/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/id/workflow/___responses/403 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/id/workflow/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if either the workflow scheme or workflow is not found.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/workflowscheme/id/workflow/___responses/404 "See details  ")
[See body  ](./___get/rest/api/3/workflowscheme/id/workflow/___responses/404/body/index.hbs "See body  ")



## PUT /rest/api/3/workflowscheme/:id/workflow
> Set issue types for workflow in workflow scheme

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/workflow/___responses/200 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/workflow/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/workflow/___responses/400 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/workflow/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/workflow/___responses/401 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/workflow/___responses/401/body/index.hbs "See body  ")

### 403
> Returned if the user does not have the necessary permission.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/workflow/___responses/403 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/workflow/___responses/403/body/index.hbs "See body  ")

### 404
> Returned if any of the following is true:
>
>  *  The workflow scheme is not found.
>  *  The workflow is not found.
>  *  The workflow is not specified.

#### Rules
```
[]
```

[See details  ](./___put/rest/api/3/workflowscheme/id/workflow/___responses/404 "See details  ")
[See body  ](./___put/rest/api/3/workflowscheme/id/workflow/___responses/404/body/index.hbs "See body  ")



## GET /rest/api/3/worklog/deleted
> Get IDs of deleted worklogs

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/worklog/deleted/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/worklog/deleted/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/worklog/deleted/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/worklog/deleted/___responses/401/body/index.hbs "See body  ")



## POST /rest/api/3/worklog/list
> Get worklogs

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/worklog/list/___responses/200 "See details  ")
[See body  ](./___post/rest/api/3/worklog/list/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request contains more than 1000 worklog IDs or is empty.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/worklog/list/___responses/400 "See details  ")
[See body  ](./___post/rest/api/3/worklog/list/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/api/3/worklog/list/___responses/401 "See details  ")
[See body  ](./___post/rest/api/3/worklog/list/___responses/401/body/index.hbs "See body  ")



## GET /rest/api/3/worklog/updated
> Get IDs of updated worklogs

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/worklog/updated/___responses/200 "See details  ")
[See body  ](./___get/rest/api/3/worklog/updated/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/api/3/worklog/updated/___responses/401 "See details  ")
[See body  ](./___get/rest/api/3/worklog/updated/___responses/401/body/index.hbs "See body  ")



## GET /rest/atlassian-connect/1/addons/:addonKey/properties
> Get app properties

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/atlassian-connect/1/addons/addonkey/properties/___responses/200 "See details  ")
[See body  ](./___get/rest/atlassian-connect/1/addons/addonkey/properties/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/atlassian-connect/1/addons/addonkey/properties/___responses/401 "See details  ")
[See body  ](./___get/rest/atlassian-connect/1/addons/addonkey/properties/___responses/401/body/index.hbs "See body  ")



## DELETE /rest/atlassian-connect/1/addons/:addonKey/properties/:propertyKey
> Delete app property

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/atlassian-connect/1/addons/addonkey/properties/propertykey/___responses/204 "See details  ")
[See body  ](./___delete/rest/atlassian-connect/1/addons/addonkey/properties/propertykey/___responses/204/body/index.hbs "See body  ")

### 400
> Returned if the property key is longer than 127 characters.

#### Rules
```
[]
```

[See details  ](./___delete/rest/atlassian-connect/1/addons/addonkey/properties/propertykey/___responses/400 "See details  ")
[See body  ](./___delete/rest/atlassian-connect/1/addons/addonkey/properties/propertykey/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___delete/rest/atlassian-connect/1/addons/addonkey/properties/propertykey/___responses/401 "See details  ")
[See body  ](./___delete/rest/atlassian-connect/1/addons/addonkey/properties/propertykey/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the property is not found or doesn't belong to the app.

#### Rules
```
[]
```

[See details  ](./___delete/rest/atlassian-connect/1/addons/addonkey/properties/propertykey/___responses/404 "See details  ")
[See body  ](./___delete/rest/atlassian-connect/1/addons/addonkey/properties/propertykey/___responses/404/body/index.hbs "See body  ")



## GET /rest/atlassian-connect/1/addons/:addonKey/properties/:propertyKey
> Get app property

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/atlassian-connect/1/addons/addonkey/properties/propertykey/___responses/200 "See details  ")
[See body  ](./___get/rest/atlassian-connect/1/addons/addonkey/properties/propertykey/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the property key is longer than 127 characters.

#### Rules
```
[]
```

[See details  ](./___get/rest/atlassian-connect/1/addons/addonkey/properties/propertykey/___responses/400 "See details  ")
[See body  ](./___get/rest/atlassian-connect/1/addons/addonkey/properties/propertykey/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___get/rest/atlassian-connect/1/addons/addonkey/properties/propertykey/___responses/401 "See details  ")
[See body  ](./___get/rest/atlassian-connect/1/addons/addonkey/properties/propertykey/___responses/401/body/index.hbs "See body  ")

### 404
> Returned if the property is not found or doesn't belong to the app.

#### Rules
```
[]
```

[See details  ](./___get/rest/atlassian-connect/1/addons/addonkey/properties/propertykey/___responses/404 "See details  ")
[See body  ](./___get/rest/atlassian-connect/1/addons/addonkey/properties/propertykey/___responses/404/body/index.hbs "See body  ")



## PUT /rest/atlassian-connect/1/addons/:addonKey/properties/:propertyKey
> Set app property

### 200  (default)
> Returned if the property is updated.

#### Rules
```
[]
```

[See details  ](./___put/rest/atlassian-connect/1/addons/addonkey/properties/propertykey/___responses/200 "See details  ")
[See body  ](./___put/rest/atlassian-connect/1/addons/addonkey/properties/propertykey/___responses/200/body/index.hbs "See body  ")

### 201
> Returned is the property is created.

#### Rules
```
[]
```

[See details  ](./___put/rest/atlassian-connect/1/addons/addonkey/properties/propertykey/___responses/201 "See details  ")
[See body  ](./___put/rest/atlassian-connect/1/addons/addonkey/properties/propertykey/___responses/201/body/index.hbs "See body  ")

### 400
> Returned if:
>   * the property key is longer than 127 characters.
>   * the value is not valid JSON.
>   * the value is longer than 32768 characters.

#### Rules
```
[]
```

[See details  ](./___put/rest/atlassian-connect/1/addons/addonkey/properties/propertykey/___responses/400 "See details  ")
[See body  ](./___put/rest/atlassian-connect/1/addons/addonkey/properties/propertykey/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the authentication credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/atlassian-connect/1/addons/addonkey/properties/propertykey/___responses/401 "See details  ")
[See body  ](./___put/rest/atlassian-connect/1/addons/addonkey/properties/propertykey/___responses/401/body/index.hbs "See body  ")



## DELETE /rest/atlassian-connect/1/app/module/dynamic
> Remove modules

### 204  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___delete/rest/atlassian-connect/1/app/module/dynamic/___responses/204 "See details  ")
[See body  ](./___delete/rest/atlassian-connect/1/app/module/dynamic/___responses/204/body/index.hbs "See body  ")

### 401
> Returned if the call is not from a Connect app.

#### Rules
```
[]
```

[See details  ](./___delete/rest/atlassian-connect/1/app/module/dynamic/___responses/401 "See details  ")
[See body  ](./___delete/rest/atlassian-connect/1/app/module/dynamic/___responses/401/body/index.hbs "See body  ")



## GET /rest/atlassian-connect/1/app/module/dynamic
> Get modules

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___get/rest/atlassian-connect/1/app/module/dynamic/___responses/200 "See details  ")
[See body  ](./___get/rest/atlassian-connect/1/app/module/dynamic/___responses/200/body/index.hbs "See body  ")

### 401
> Returned if the call is not from a Connect app.

#### Rules
```
[]
```

[See details  ](./___get/rest/atlassian-connect/1/app/module/dynamic/___responses/401 "See details  ")
[See body  ](./___get/rest/atlassian-connect/1/app/module/dynamic/___responses/401/body/index.hbs "See body  ")



## POST /rest/atlassian-connect/1/app/module/dynamic
> Register modules

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/atlassian-connect/1/app/module/dynamic/___responses/200 "See details  ")
[See body  ](./___post/rest/atlassian-connect/1/app/module/dynamic/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if:
> * any of the provided modules is invalid. For example, required properties are missing.
> * any of the modules conflict with registered dynamic modules or modules defined in the app descriptor. For example, there are duplicate keys.
>
> Details of the issues encountered are included in the error message.

#### Rules
```
[]
```

[See details  ](./___post/rest/atlassian-connect/1/app/module/dynamic/___responses/400 "See details  ")
[See body  ](./___post/rest/atlassian-connect/1/app/module/dynamic/___responses/400/body/index.hbs "See body  ")

### 401
> Returned if the call is not from a Connect app.

#### Rules
```
[]
```

[See details  ](./___post/rest/atlassian-connect/1/app/module/dynamic/___responses/401 "See details  ")
[See body  ](./___post/rest/atlassian-connect/1/app/module/dynamic/___responses/401/body/index.hbs "See body  ")



## PUT /rest/atlassian-connect/1/migration/field
> Bulk update custom field value

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/atlassian-connect/1/migration/field/___responses/200 "See details  ")
[See body  ](./___put/rest/atlassian-connect/1/migration/field/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is invalid.

#### Rules
```
[]
```

[See details  ](./___put/rest/atlassian-connect/1/migration/field/___responses/400 "See details  ")
[See body  ](./___put/rest/atlassian-connect/1/migration/field/___responses/400/body/index.hbs "See body  ")

### 403
> Returned if:
> * the transfer ID is not found.
> * the authorisation credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/atlassian-connect/1/migration/field/___responses/403 "See details  ")
[See body  ](./___put/rest/atlassian-connect/1/migration/field/___responses/403/body/index.hbs "See body  ")



## PUT /rest/atlassian-connect/1/migration/properties/:entityType
> Bulk update entity properties

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___put/rest/atlassian-connect/1/migration/properties/entitytype/___responses/200 "See details  ")
[See body  ](./___put/rest/atlassian-connect/1/migration/properties/entitytype/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___put/rest/atlassian-connect/1/migration/properties/entitytype/___responses/400 "See details  ")
[See body  ](./___put/rest/atlassian-connect/1/migration/properties/entitytype/___responses/400/body/index.hbs "See body  ")

### 403
> Returned if the authorisation credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___put/rest/atlassian-connect/1/migration/properties/entitytype/___responses/403 "See details  ")
[See body  ](./___put/rest/atlassian-connect/1/migration/properties/entitytype/___responses/403/body/index.hbs "See body  ")



## POST /rest/atlassian-connect/1/migration/workflow/rule/search
> Get workflow transition rule configurations

### 200  (default)
> Returned if the request is successful.

#### Rules
```
[]
```

[See details  ](./___post/rest/atlassian-connect/1/migration/workflow/rule/search/___responses/200 "See details  ")
[See body  ](./___post/rest/atlassian-connect/1/migration/workflow/rule/search/___responses/200/body/index.hbs "See body  ")

### 400
> Returned if the request is not valid.

#### Rules
```
[]
```

[See details  ](./___post/rest/atlassian-connect/1/migration/workflow/rule/search/___responses/400 "See details  ")
[See body  ](./___post/rest/atlassian-connect/1/migration/workflow/rule/search/___responses/400/body/index.hbs "See body  ")

### 403
> Returned if the authorisation credentials are incorrect or missing.

#### Rules
```
[]
```

[See details  ](./___post/rest/atlassian-connect/1/migration/workflow/rule/search/___responses/403 "See details  ")
[See body  ](./___post/rest/atlassian-connect/1/migration/workflow/rule/search/___responses/403/body/index.hbs "See body  ")
