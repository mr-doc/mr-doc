Comment Grammar
===================

```ebnf
<comment>             := <single-comment> (<single-comment>)*
<single-comment>      := description
                      | tag ('-' description | <formal-parameter> ('-' description))
                      | markdown

<formal-parameter>    := <parameter> | <optional-parameter>

<parameter>           := identifier ('=' initializer | <type-declaration>)
<optional-parameter>  := identifier '?' (<type-declaration>)

<type-declaration>    := ':' <type> | ':' '(' <type> ')'

<type>                := any (<union-type> | <intersection-type>) | <arrow-function-type>

<union-type>          := '|' <type> (<union-type>)*

<intersection-type>   := '&' <type> (<intersection-type)*

<arrow-function-type> := '(' ( <parameter> (, <parameter>)* | <optional-parameter> (, <optional-parameter>)* ) ') => <type>

```