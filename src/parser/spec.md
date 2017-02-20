Comment Parser Specification
===================

```ebnf
<comment>             := <single-comment> (<single-comment>)*
<single-comment>      := description
                      | tag ('-' description | <parameters> ('-' description))
                      | markdown

<parameters>          := <formal-parameter> (, <formal-parameter>)*
<formal-parameter>    := <parameter> | <optional-parameter>

<parameter>           := identifier ('=' initializer | <type-denoter>)
<optional-parameter>  := identifier '?' (<type-denoter>)

<type-denoter>        := ':' <type> | ':' '(' <type> ')' | <arrow-function-type>

<type>                := any (<union-type> | <intersection-type>) | <arrow-function-type>

<union-type>          := '|' <type> (<union-type>)*

<intersection-type>   := '&' <type> (<intersection-type)*

<arrow-function-type> := '(' ( <parameter> (, <parameter>)* | <optional-parameter> (, <optional-parameter>)* ) ') => <type>

```