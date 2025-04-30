# Installing Webfonts
Follow these simple Steps.

## 1.
Put `dancing-script/` Folder into a Folder called `fonts/`.

## 2.
Put `dancing-script.css` into your `css/` Folder.

## 3. (Optional)
You may adapt the `url('path')` in `dancing-script.css` depends on your Website Filesystem.

## 4.
Import `dancing-script.css` at the top of you main Stylesheet.

```
@import url('dancing-script.css');
```

## 5.
You are now ready to use the following Rules in your CSS to specify each Font Style:
```
font-family: DancingScript-Regular;
font-family: DancingScript-Bold;
font-family: DancingScript-Variable;

```
## 6. (Optional)
Use `font-variation-settings` rule to controll axes of variable fonts:
wght 400.0

Available axes:
'wght' (range from 400.0 to 700.0

