Comment Parser Specification
===================

```
comment             := single-comment (single-comment)*
single-comment      := description
                    | @tag ('-' description | Parameter)
                    | markdown

Parameter           := Identifier (?)

```


```
comment             := single-comment (single-comment)*
single-comment      := description
                    | @tag ('-' description | declaration)
                    | markdown
declaration         := id (type-declaration | initializer)

type-declaration    := (':' type | '?' ':' optional-type)
initializer         := '=' init

type                := any-type (initializer)
                    | '(' any-type (, any-type)* ')' (arrow-function)
optional-type       := any-type
                    | '(' any-type (, any-type)* ')' (arrow-function)

any-type            := any (terminal) (union-type | intersect-type)
union-type          := any-type '|' any-type
intersect-type      := any-type '&' any-type
arrow-function      := '=''>' any-type

```