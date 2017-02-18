Comment Specification
===================

```
comment             := single-comment (single-comment)*
single-comment      := description | declaration (- description)* | markdown
declaration         := @tag (single-declaration)
                    | @tag id
                    | @tag id: any
                    | @tag id: any | any
                    | @tag id: function-type
                    | @tag (: any)
single-declaration  := id (: type)
                    | id (= type)
                    | optional-declaration

type                := any
function-type:=

```