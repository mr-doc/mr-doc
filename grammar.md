Comment Grammar
===================

```ebnf
<comment>                                    ::= <single-comment> ( <single-comment> )*
<single-comment>                             ::= description
                                             | tag ( '-' description | <formal-parameter> ('-' description) )
                                             | markdown

<formal-parameter>                           ::= <parameter> | <optional-parameter>

<parameter>                                  ::= identifier ( '=' initializer | <type-declaration> )
<optional-parameter>                         ::= identifier '?' ( <type-declaration> )

<type-declaration>                           ::= ':' <type>

<type>                                       ::= <parenthesized-type-or-arrow-function-type> ( <union-or-intersection-type> )
<type>                                       ::= <union-or-intersection-or-primary-type>

<parenthesized-type-or-arrow-function-type>  ::= <arrow-function-type> | '(' <type> ')'

<union-or-intersection-or-primary>           ::= any ( <union-or-intersection-type> )

<union-or-intersection-type>                 ::= '|' <type>
<union-or-intersection-type>                 ::= '&' <type>

<arrow-function-type>                        ::= '(' <formal-parameter-list> ')' '=>' <type>

<formal-parameter-list>                      ::= <formal-parameter> (',' <formal-parameter> )

```