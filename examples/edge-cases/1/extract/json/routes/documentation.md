# Routes



## GET /

### 200  (default)

#### Rules
```
[]
```

[See details  ](./___::[get]/___::[responses]/200 "See details  ")
[See body  ](./___::[get]/___::[responses]/200/body/index.hbs "See body  ")



## GET /some-route
> some-route-doc

### 200  (default)
> response-doc

#### Rules
```
[]
```

[See details  ](./___::[get]/some-route/0--some-route-doc/___::[responses]/200/0--response-doc "See details  ")
[See body  ](./___::[get]/some-route/0--some-route-doc/___::[responses]/200/0--response-doc/body/index.hbs "See body  ")

### 200
> fallback

#### Rules
```
[]
```

[See details  ](./___::[get]/some-route/0--some-route-doc/___::[responses]/200/1--fallback "See details  ")
[See body  ](./___::[get]/some-route/0--some-route-doc/___::[responses]/200/1--fallback/body/index.hbs "See body  ")

### 200
> not default

#### Rules
```
[]
```

[See details  ](./___::[get]/some-route/0--some-route-doc/___::[responses]/200/2--not_default "See details  ")
[See body  ](./___::[get]/some-route/0--some-route-doc/___::[responses]/200/2--not_default/body/index.hbs "See body  ")



## GET /special-chars/v1-%(\*!&@^#%&\*!&@#^$%^&!\*(+\_\_!@#":>?>~!@#@
> spec-chars-get

### 200  (default)

#### Rules
```
[]
```

[See details  ](./___::[get]/special-chars/v1-%\(_!&@^#%&_!&@#^$%^&!_\(+__!@#_:___~!@#@/___::[responses]/200 "See details  ")
[See body  ](./___::[get]/special-chars/v1-%\(_!&@^#%&_!&@#^$%^&!_\(+__!@#_:___~!@#@/___::[responses]/200/body/index.hbs "See body  ")



## POST /special-chars/v2-%(\*!&@^#%&\*!&@#^$%^&!\*(+\_\_!@#":>?>~!@#@
> spec-chars-post

### 200  (default)

#### Rules
```
[]
```

[See details  ](./___::[post]/special-chars/v2-%\(_!&@^#%&_!&@#^$%^&!_\(+__!@#_:___~!@#@/0--spec-chars-post/___::[responses]/200 "See details  ")
[See body  ](./___::[post]/special-chars/v2-%\(_!&@^#%&_!&@#^$%^&!_\(+__!@#_:___~!@#@/0--spec-chars-post/___::[responses]/200/body/index.hbs "See body  ")



## POST /special-chars/v2-%(\*!&@^#%&\*!&@#^$%^&!\*(+\_\_!@#":>?>~!@#@
> spec-chars-get-duplicated

### 200  (default)

#### Rules
```
[]
```

[See details  ](./___::[post]/special-chars/v2-%\(_!&@^#%&_!&@#^$%^&!_\(+__!@#_:___~!@#@/1--spec-chars-get-duplicated/___::[responses]/200 "See details  ")
[See body  ](./___::[post]/special-chars/v2-%\(_!&@^#%&_!&@#^$%^&!_\(+__!@#_:___~!@#@/1--spec-chars-get-duplicated/___::[responses]/200/body/index.hbs "See body  ")



## GET /some-route
> route duplicated-doc

### 200  (default)
> desponse-duplicated-doc

#### Rules
```
[]
```

[See details  ](./___::[get]/some-route/1--route_duplicated-doc/___::[responses]/200/0--desponse-duplicated-doc "See details  ")
[See body  ](./___::[get]/some-route/1--route_duplicated-doc/___::[responses]/200/0--desponse-duplicated-doc/body/index.hbs "See body  ")

### 200
> fallback

#### Rules
```
[]
```

[See details  ](./___::[get]/some-route/1--route_duplicated-doc/___::[responses]/200/1--fallback "See details  ")
[See body  ](./___::[get]/some-route/1--route_duplicated-doc/___::[responses]/200/1--fallback/body/index.hbs "See body  ")

### 200
> not default

#### Rules
```
[]
```

[See details  ](./___::[get]/some-route/1--route_duplicated-doc/___::[responses]/200/2--not_default "See details  ")
[See body  ](./___::[get]/some-route/1--route_duplicated-doc/___::[responses]/200/2--not_default/body/index.hbs "See body  ")



## GET /super-long-route/name-GHJHGF&^&\*!^YHHV&^%!\*(@#^%!@#\*(!@^#^%\*!(@#^TG}{{}:":OKJNJHBNJASDHGH&\*^!(@#^!^@\*(#^!@\*#^!@#\*!@\&#^!\*@#%\*!@^#(!@\&#(!@^#&(!@\&#!@\&#^!@\*#%&\*!@#%^&!\*@#\*(!^@\*#(^!@\*#^!(@\*#%&\*(\*HJKAHGDJKHADHGASKJDAHSDkjhgahjkdhghaskdahsdhahsdGHJHKSDGHAJSDHGASJDGASDHJHADHGASGJDGASDJAGSDJGAGSDJAGD

### 200  (default)

#### Rules
```
[]
```

[See details  ](./___::[get]/super-long-route/name-ghjhgf&^&_!^yhhv&^%!_\(@#^%!@#_\(!@^#^%_!\(@#^tg}{{}:_:okjnjhbnjasdhgh&_^!\(@#^!^@_\(#^!@_#^!@#_!@&#^!_@#%_!@^#\(!@&#\(!@^#&\(!@&#!@&#^!@_#%&_!@#%^&!_@#_\(!/045fb3f4-553a-494a-96e3-939ca8f289ee/___::[responses]/200/0 "See details  ")
[See body  ](./___::[get]/super-long-route/name-ghjhgf&^&_!^yhhv&^%!_\(@#^%!@#_\(!@^#^%_!\(@#^tg}{{}:_:okjnjhbnjasdhgh&_^!\(@#^!^@_\(#^!@_#^!@#_!@&#^!_@#%_!@^#\(!@&#\(!@^#&\(!@&#!@&#^!@_#%&_!@#%^&!_@#_\(!/045fb3f4-553a-494a-96e3-939ca8f289ee/___::[responses]/200/0/body/index.hbs "See body  ")

### 200
> resp 2

#### Rules
```
[]
```

[See details  ](./___::[get]/super-long-route/name-ghjhgf&^&_!^yhhv&^%!_\(@#^%!@#_\(!@^#^%_!\(@#^tg}{{}:_:okjnjhbnjasdhgh&_^!\(@#^!^@_\(#^!@_#^!@#_!@&#^!_@#%_!@^#\(!@&#\(!@^#&\(!@&#!@&#^!@_#%&_!@#%^&!_@#_\(!/045fb3f4-553a-494a-96e3-939ca8f289ee/___::[responses]/200/1--resp_2 "See details  ")
[See body  ](./___::[get]/super-long-route/name-ghjhgf&^&_!^yhhv&^%!_\(@#^%!@#_\(!@^#^%_!\(@#^tg}{{}:_:okjnjhbnjasdhgh&_^!\(@#^!^@_\(#^!@_#^!@#_!@&#^!_@#%_!@^#\(!@&#\(!@^#&\(!@&#!@&#^!@_#%&_!@#%^&!_@#_\(!/045fb3f4-553a-494a-96e3-939ca8f289ee/___::[responses]/200/1--resp_2/body/index.hbs "See body  ")



## GET /super-long-route/name-?>\<GHJHGF&^&\*!^YHHV&^%!\*(@#^%!@#\*(!@^#^%\*!(@#^TG}{{}:":OKJNJHBNJASDHGH&\*^!(@#^!^@\*(#^!@\*#^!@#\*!@\&#^!\*@#%\*!@^#(!@\&#(!@^#&(!@\&#!@\&#^!@\*#%&\*!@#%^&!\*@#\*(!^@\*#(^!@\*#^!(@\*#%&\*(\*HJKAHGDJKHADHGASKJDAHSDkjhgahjkdhghaskdahsdhahsdGHJHKSDGHAJSDHGASJDGASDHJHADHGASGJDGASDJAGSDJGAGSDJAGD

### 200  (default)

#### Rules
```
[]
```

[See details  ](./___::[get]/super-long-route/name-___ghjhgf&^&_!^yhhv&^%!_\(@#^%!@#_\(!@^#^%_!\(@#^tg}{{}:_:okjnjhbnjasdhgh&_^!\(@#^!^@_\(#^!@_#^!@#_!@&#^!_@#%_!@^#\(!@&#\(!@^#&\(!@&#!@&#^!@_#%&_!@#%^&!_@#/df0f57ed-a7ae-45e0-bfe1-b72ec83efd0e/___::[responses]/200 "See details  ")
[See body  ](./___::[get]/super-long-route/name-___ghjhgf&^&_!^yhhv&^%!_\(@#^%!@#_\(!@^#^%_!\(@#^tg}{{}:_:okjnjhbnjasdhgh&_^!\(@#^!^@_\(#^!@_#^!@#_!@&#^!_@#%_!@^#\(!@&#\(!@^#&\(!@&#!@&#^!@_#%&_!@#%^&!_@#/df0f57ed-a7ae-45e0-bfe1-b72ec83efd0e/___::[responses]/200/body/index.hbs "See body  ")



## GET /super-long-route/name-?>\<GHJHGF&^&\*!^YHHV&^%!\*(@#^%!@#\*(!@^#^%\*!(@#^TG}{{}:":OKJNJHBNJASDHGH&\*^!(@#^!^@\*(#^!@\*#^!@#\*!@\&#^!\*@#%\*!@^#(!@\&#(!@^#&(!@\&#!@\&#^!@\*#%&\*!@#%^&!\*@#\*(!^@\*#(^!@\*#^!(@\*#%&\*(\*HJKAHGDJKHADHGASKJDAHSDkjhgahjkdhghaskdahsdhahsdGHJHKSDGHAJSDHGASJDGASDHJHADHGASGJDGASDJAGSDJGAGSDJAGD
> super long name duplicated

### 200  (default)

#### Rules
```
[]
```

[See details  ](./___::[get]/super-long-route/name-___ghjhgf&^&_!^yhhv&^%!_\(@#^%!@#_\(!@^#^%_!\(@#^tg}{{}:_:okjnjhbnjasdhgh&_^!\(@#^!^@_\(#^!@_#^!@#_!@&#^!_@#%_!@^#\(!@&#\(!@^#&\(!@&#!@&#^!@_#%&_!@#%^&!_@#/19b1184a-f51b-446f-88d4-5f579465634c/___::[responses]/200 "See details  ")
[See body  ](./___::[get]/super-long-route/name-___ghjhgf&^&_!^yhhv&^%!_\(@#^%!@#_\(!@^#^%_!\(@#^tg}{{}:_:okjnjhbnjasdhgh&_^!\(@#^!^@_\(#^!@_#^!@#_!@&#^!_@#%_!@^#\(!@&#\(!@^#&\(!@&#!@&#^!@_#%&_!@#%^&!_@#/19b1184a-f51b-446f-88d4-5f579465634c/___::[responses]/200/body/index.hbs "See body  ")



## GET /double-slash//
> double-slash origin

### 200  (default)

#### Rules
```
[]
```

[See details  ](./___::[get]/double-slash/0/___::[responses]/200 "See details  ")
[See body  ](./___::[get]/double-slash/0/___::[responses]/200/body/index.hbs "See body  ")



## GET /double-slash/
> double-slash origin copy

### 200  (default)

#### Rules
```
[]
```

[See details  ](./___::[get]/double-slash/1/___::[responses]/200 "See details  ")
[See body  ](./___::[get]/double-slash/1/___::[responses]/200/body/index.hbs "See body  ")
