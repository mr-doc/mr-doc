Comment Grammar
===================

```ebnf
<comment>                         ::= <single-comment> (<single-comment>)*
<single-comment>                  ::= description
                                  | tag ('-' description | <formal-parameter> ('-' description))
                                  | markdown

<formal-parameter>                ::= <parameter> | <optional-parameter>

<parameter>                       ::= identifier ('=' initializer | <type-declaration>)
<optional-parameter>              ::= identifier '?' (<type-declaration>)

<type-declaration>                ::= ':' <type>

<type>                            ::= <union-or-intersection-type> | <function-type>

<union-or-intersection-type>      ::= <union-type> | <intersection-or-primary-type>

<intersection-or-primary-type>    ::= <intersection-type> | <primary-type>

<primary-type>                    ::= any | <parenthesized-type>

<parenthesized-type>              ::= '(' <type> ')'

<union-type>                      ::= <union-or-intersection-or-primary-type> '|' <intersection-or-primary-type>

<intersection>                    ::= <intersection-or-primary-type> '&' <primary-type>

<function-type>                   ::= '(' <formal-parameter-list> ') => <type>

<formal-parameter-list>           ::= <formal-parameter> <formal-parameters>

<formal-parameters>               ::= ',' <formal-parameter>


```