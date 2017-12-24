Comment Grammar
===================

### Grammar Map

```
<comments>      → statements
<comment>       → statement
<tag>           → tag-statement
<description>   → description-statement
<markdown>      → markdown-statement
<type>          → expression

initializer     → literal-expresssion
any             → literal-expresssion

```

### Grammar

```
<comments>                        → <comment> ( <comment> )*
<comment>                         → description | markdown | <tag>
<tag>                             → <simple-tag> | <optional-tag> | <assigned-tag>
<simple-tag>                      → tag ( identifier )
<optional-tag>                    → tag identifier '?' ( ':' <type> )
<assigned-tag>                    → tag identifier (':' <type>) '=' initializer

<type>                            → <union-and-intersection-type> ( <union-and-intersection-type> )*
<union-and-intersection-type>     → <union-type> | <intersection-type>
<intersection-type>               → <primary-type> ( ( '&' ) <type> )*
<union-type>                      → <primary-type> ( ( '|' ) <type> )*
<primary-type>                    → any | '(' <type> ')'

```