# Routes



## GET /

### 200  (default)

#### Rules
```
[]
```

[See details  ](./___get/___responses/200 "See details  ")
[See body  ](./___get/___responses/200/body/index.hbs "See body  ")



## GET /some-route
> some-route-doc

### 200  (default)
> response-doc

#### Rules
```
[]
```

[See details  ](./___get/some-route/0--some-route-doc/___responses/200/0--response-doc "See details  ")
[See body  ](./___get/some-route/0--some-route-doc/___responses/200/0--response-doc/body/index.hbs "See body  ")

### 200
> fallback

#### Rules
```
[]
```

[See details  ](./___get/some-route/0--some-route-doc/___responses/200/1--fallback "See details  ")
[See body  ](./___get/some-route/0--some-route-doc/___responses/200/1--fallback/body/index.hbs "See body  ")

### 200
> not default

#### Rules
```
[]
```

[See details  ](./___get/some-route/0--some-route-doc/___responses/200/2--not_default "See details  ")
[See body  ](./___get/some-route/0--some-route-doc/___responses/200/2--not_default/body/index.hbs "See body  ")



## GET /special-chars/v1-%(\*!&@^#%&\*!&@#^$%^&!\*(+\_\_!@#":>?>~!@#@
> spec-chars-get

### 200  (default)

#### Rules
```
[]
```

[See details  ](./___get/special-chars/v1-\(^^^\(__/___responses/200 "See details  ")
[See body  ](./___get/special-chars/v1-\(^^^\(__/___responses/200/body/index.hbs "See body  ")



## POST /special-chars/v2-%(\*!&@^#%&\*!&@#^$%^&!\*(+\_\_!@#":>?>~!@#@
> spec-chars-post

### 200  (default)

#### Rules
```
[]
```

[See details  ](./___post/special-chars/v2-\(^^^\(__/0--spec-chars-post/___responses/200 "See details  ")
[See body  ](./___post/special-chars/v2-\(^^^\(__/0--spec-chars-post/___responses/200/body/index.hbs "See body  ")



## POST /special-chars/v2-%(\*!&@^#%&\*!&@#^$%^&!\*(+\_\_!@#":>?>~!@#@
> spec-chars-get-duplicated

### 200  (default)

#### Rules
```
[]
```

[See details  ](./___post/special-chars/v2-\(^^^\(__/1--spec-chars-get-duplicated/___responses/200 "See details  ")
[See body  ](./___post/special-chars/v2-\(^^^\(__/1--spec-chars-get-duplicated/___responses/200/body/index.hbs "See body  ")



## GET /some-route
> route duplicated-doc

### 200  (default)
> desponse-duplicated-doc

#### Rules
```
[]
```

[See details  ](./___get/some-route/1--route_duplicated-doc/___responses/200/0--desponse-duplicated-doc "See details  ")
[See body  ](./___get/some-route/1--route_duplicated-doc/___responses/200/0--desponse-duplicated-doc/body/index.hbs "See body  ")

### 200
> fallback

#### Rules
```
[]
```

[See details  ](./___get/some-route/1--route_duplicated-doc/___responses/200/1--fallback "See details  ")
[See body  ](./___get/some-route/1--route_duplicated-doc/___responses/200/1--fallback/body/index.hbs "See body  ")

### 200
> not default

#### Rules
```
[]
```

[See details  ](./___get/some-route/1--route_duplicated-doc/___responses/200/2--not_default "See details  ")
[See body  ](./___get/some-route/1--route_duplicated-doc/___responses/200/2--not_default/body/index.hbs "See body  ")



## GET /super-long-route/name-GHJHGF&^&\*!^YHHV&^%!\*(@#^%!@#\*(!@^#^%\*!(@#^TG}{{}:":OKJNJHBNJASDHGH&\*^!(@#^!^@\*(#^!@\*#^!@#\*!@\&#^!\*@#%\*!@^#(!@\&#(!@^#&(!@\&#!@\&#^!@\*#%&\*!@#%^&!\*@#\*(!^@\*#(^!@\*#^!(@\*#%&\*(\*HJKAHGDJKHADHGASKJDAHSDkjhgahjkdhghaskdahsdhahsdGHJHKSDGHAJSDHGASJDGASDHJHADHGASGJDGASDJAGSDJGAGSDJAGD

### 200  (default)

#### Rules
```
[]
```

[See details  ](./___get/super-long-route/name-ghjhgf^^yhhv^\(^\(^^\(^tgokjnjhbnjasdhgh^\(^^\(^^^^\(\(^\(^^\(^\(^^\(\(hjkahgdjkhadhgaskjdahsdkjhgahjkdhghaskdahsdhahsdghjhksdghajsdhgasjdgasdhjhadhgasgjdgasdjagsdjgagsdjagd/0/___responses/200/0 "See details  ")
[See body  ](./___get/super-long-route/name-ghjhgf^^yhhv^\(^\(^^\(^tgokjnjhbnjasdhgh^\(^^\(^^^^\(\(^\(^^\(^\(^^\(\(hjkahgdjkhadhgaskjdahsdkjhgahjkdhghaskdahsdhahsdghjhksdghajsdhgasjdgasdhjhadhgasgjdgasdjagsdjgagsdjagd/0/___responses/200/0/body/index.hbs "See body  ")

### 200
> resp 2

#### Rules
```
[]
```

[See details  ](./___get/super-long-route/name-ghjhgf^^yhhv^\(^\(^^\(^tgokjnjhbnjasdhgh^\(^^\(^^^^\(\(^\(^^\(^\(^^\(\(hjkahgdjkhadhgaskjdahsdkjhgahjkdhghaskdahsdhahsdghjhksdghajsdhgasjdgasdhjhadhgasgjdgasdjagsdjgagsdjagd/0/___responses/200/1--resp_2 "See details  ")
[See body  ](./___get/super-long-route/name-ghjhgf^^yhhv^\(^\(^^\(^tgokjnjhbnjasdhgh^\(^^\(^^^^\(\(^\(^^\(^\(^^\(\(hjkahgdjkhadhgaskjdahsdkjhgahjkdhghaskdahsdhahsdghjhksdghajsdhgasjdgasdhjhadhgasgjdgasdjagsdjgagsdjagd/0/___responses/200/1--resp_2/body/index.hbs "See body  ")



## GET /super-long-route/name-?>\<GHJHGF&^&\*!^YHHV&^%!\*(@#^%!@#\*(!@^#^%\*!(@#^TG}{{}:":OKJNJHBNJASDHGH&\*^!(@#^!^@\*(#^!@\*#^!@#\*!@\&#^!\*@#%\*!@^#(!@\&#(!@^#&(!@\&#!@\&#^!@\*#%&\*!@#%^&!\*@#\*(!^@\*#(^!@\*#^!(@\*#%&\*(\*HJKAHGDJKHADHGASKJDAHSDkjhgahjkdhghaskdahsdhahsdGHJHKSDGHAJSDHGASJDGASDHJHADHGASGJDGASDJAGSDJGAGSDJAGD

### 200  (default)

#### Rules
```
[]
```

[See details  ](./___get/super-long-route/name-ghjhgf^^yhhv^\(^\(^^\(^tgokjnjhbnjasdhgh^\(^^\(^^^^\(\(^\(^^\(^\(^^\(\(hjkahgdjkhadhgaskjdahsdkjhgahjkdhghaskdahsdhahsdghjhksdghajsdhgasjdgasdhjhadhgasgjdgasdjagsdjgagsdjagd/1/___responses/200 "See details  ")
[See body  ](./___get/super-long-route/name-ghjhgf^^yhhv^\(^\(^^\(^tgokjnjhbnjasdhgh^\(^^\(^^^^\(\(^\(^^\(^\(^^\(\(hjkahgdjkhadhgaskjdahsdkjhgahjkdhghaskdahsdhahsdghjhksdghajsdhgasjdgasdhjhadhgasgjdgasdjagsdjgagsdjagd/1/___responses/200/body/index.hbs "See body  ")



## GET /super-long-route/name-?>\<GHJHGF&^&\*!^YHHV&^%!\*(@#^%!@#\*(!@^#^%\*!(@#^TG}{{}:":OKJNJHBNJASDHGH&\*^!(@#^!^@\*(#^!@\*#^!@#\*!@\&#^!\*@#%\*!@^#(!@\&#(!@^#&(!@\&#!@\&#^!@\*#%&\*!@#%^&!\*@#\*(!^@\*#(^!@\*#^!(@\*#%&\*(\*HJKAHGDJKHADHGASKJDAHSDkjhgahjkdhghaskdahsdhahsdGHJHKSDGHAJSDHGASJDGASDHJHADHGASGJDGASDJAGSDJGAGSDJAGD
> super long name duplicated

### 200  (default)

#### Rules
```
[]
```

[See details  ](./___get/super-long-route/name-ghjhgf^^yhhv^\(^\(^^\(^tgokjnjhbnjasdhgh^\(^^\(^^^^\(\(^\(^^\(^\(^^\(\(hjkahgdjkhadhgaskjdahsdkjhgahjkdhghaskdahsdhahsdghjhksdghajsdhgasjdgasdhjhadhgasgjdgasdjagsdjgagsdjagd/2--super_/19b1184a-f51b-446f-88d4-5f579465634c/___responses/200 "See details  ")
[See body  ](./___get/super-long-route/name-ghjhgf^^yhhv^\(^\(^^\(^tgokjnjhbnjasdhgh^\(^^\(^^^^\(\(^\(^^\(^\(^^\(\(hjkahgdjkhadhgaskjdahsdkjhgahjkdhghaskdahsdhahsdghjhksdghajsdhgasjdgasdhjhadhgasgjdgasdjagsdjgagsdjagd/2--super_/19b1184a-f51b-446f-88d4-5f579465634c/___responses/200/body/index.hbs "See body  ")



## GET /double-slash//
> double-slash origin

### 200  (default)

#### Rules
```
[]
```

[See details  ](./___get/double-slash/0--double-slash_origin/___responses/200 "See details  ")
[See body  ](./___get/double-slash/0--double-slash_origin/___responses/200/body/index.hbs "See body  ")



## GET /double-slash/
> double-slash origin copy

### 200  (default)

#### Rules
```
[]
```

[See details  ](./___get/double-slash/1--double-slash_origin_copy/___responses/200 "See details  ")
[See body  ](./___get/double-slash/1--double-slash_origin_copy/___responses/200/body/index.hbs "See body  ")



## GET /com1

### 200  (default)

#### Rules
```
[]
```

[See details  ](./___get/_com1_/___responses/200 "See details  ")
[See body  ](./___get/_com1_/___responses/200/body/index.hbs "See body  ")



## GET /a/b/c/com1

### 200  (default)

#### Rules
```
[]
```

[See details  ](./___get/a/b/c/_com1_/___responses/200 "See details  ")
[See body  ](./___get/a/b/c/_com1_/___responses/200/body/index.hbs "See body  ")



## GET /a/b/com1/b

### 200  (default)

#### Rules
```
[]
```

[See details  ](./___get/a/b/_com1_/b/___responses/200 "See details  ")
[See body  ](./___get/a/b/_com1_/b/___responses/200/body/index.hbs "See body  ")



## GET /.

### 200  (default)

#### Rules
```
[]
```

[See details  ](./___get/0/___responses/200 "See details  ")
[See body  ](./___get/0/___responses/200/body/index.hbs "See body  ")



## GET /..

### 200  (default)

#### Rules
```
[]
```

[See details  ](./___get/_.._/___responses/200 "See details  ")
[See body  ](./___get/_.._/___responses/200/body/index.hbs "See body  ")



## GET /../../../inject-path
> inject-parent-path-test

### 200  (default)

#### Rules
```
[]
```

[See details  ](./___get/_.._/_.._/_.._/inject-path/___responses/200 "See details  ")
[See body  ](./___get/_.._/_.._/_.._/inject-path/___responses/200/body/index.hbs "See body  ")



## GET /only-spec/{{{###%%%>>>$
> only-special-chars-route

### 200  (default)

#### Rules
```
[]
```

[See details  ](./___get/only-spec/_/___responses/200 "See details  ")
[See body  ](./___get/only-spec/_/___responses/200/body/index.hbs "See body  ")



## GET /.................

### 200  (default)

#### Rules
```
[]
```

[See details  ](./___get/1/___responses/200 "See details  ")
[See body  ](./___get/1/___responses/200/body/index.hbs "See body  ")



## GET /only-spec/{{{###%%%>>>$/normal-uri
> only-special-chars-route-nested

### 200  (default)

#### Rules
```
[]
```

[See details  ](./___get/only-spec/_/normal-uri/___responses/200 "See details  ")
[See body  ](./___get/only-spec/_/normal-uri/___responses/200/body/index.hbs "See body  ")
