# 1.Headers

```
# This is an <h1> tag
## This is an <h2> tag
###### This is an <h6> tag
```
# This is an <h1> tag
## This is an <h2> tag
###### This is an <h6> tag

# 2.Emphasis
```
*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can** combine them_
```
*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can** combine them_


# 3.Lists
## a.Unordered
```
* Item 1
* Item 2
  * Item 2a
  * Item 2b
```
* Item 1
* Item 2
  * Item 2a
  * Item 2b

## b.Ordered
```
1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b
```
1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b

# 3.Images
```
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
```
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)

# 4.Blockquotes
```
As Kanye West said:

> We're living the future so
> the present is our past.
```
As Kanye West said:

> We're living the future so
> the present is our past.

# 5.Inline Code

```
I think you should use an
`<addr>` element here instead.
```
I think you should use an
`<addr>` element here instead.

# 6.Syntax highlighting

dengan backtics
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```

dengan 4 whitespaces

    function fancyAlert(arg) {
      if(arg) {
        $.facebox({div:'#foo'})
      }
    }

# 7.Task List
- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

# 8.Tables
First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column

# 9.SHA References

16c999e8c71134401a78d4d46435517b2271d6ac

mojombo@16c999e8c71134401a78d4d46435517b2271d6ac

mojombo/github-flavored-markdown@16c999e8c71134401a78d4d46435517b2271d6ac

# 10.Issue references within a repository

#1

mojombo#1

mojombo/github-flavored-markdown#1

# 11.Username @mentions
@castrix

# 12.Automatic linking for URLs
http://www.github.com/

# 13.Strikethrough
Any word wrapped with two tildes (like ~~this~~) will appear crossed out.