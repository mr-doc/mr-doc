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
<comments>                 → <comment> ( <comment> )*
<comment>                  → description | markdown | <tag>
<tag>                      → <simple-tag> | <optional-tag> | <assigned-tag>
<simple-tag>               → tag
<optional-tag>             → tag '?' ( ':' <type> )
<assigned-tag>             → tag (':' <type>) '=' initializer

<type>                     → <intersection-type>
<intersection-type>        → <union-type> ( ( '&' ) <type> )*
<union-type>               → <primary-type> ( ( '|' ) <type> )
<primary-type>             → any | '(' <type> ')'

```