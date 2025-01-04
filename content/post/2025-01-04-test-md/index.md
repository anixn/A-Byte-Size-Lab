---
title: Adding callouts and collapsable secation in 'Hugo'
author: 'Dr. Ankit Deshmukh'
date: '2025-01-04'
slug: []
categories: ["edit"]
tags: ["config"]
toc: true
draft: false
---

### What is Hugo shortcode?
- A Hugo shortcode is a reusable and customizable template-like feature
- Shortcodes are written using Hugo's templating language (based on Go templates). They are placed in the layouts/shortcodes directory of your Hugo project.
- Create a Shortcode File
    - Save this as layouts/shortcodes/your_shortcode.html

- A sample shortcode is here:
```html
<details style="border: 1px solid #666; border-radius: 4px; padding: 10px; margin: 10px 0; box-shadow: 3px 3px 5px #8989e420;">
    <summary style="font-weight: normal; cursor: pointer; margin-bottom: 5px;">
        {{ .Get "title" | default "Click to expand" | markdownify }}
    </summary>
    <div style="margin-top: 10px;">
        {{ .Inner | markdownify }}
    </div>
</details>

```
Now let's use the shortcode `details`

```txt
{{</* details title="Sample Text *Learn More...*" */>}}
> Collapsed text
{{</* /details */>}}
```
will produce the collapsable field

{{< details title="Sample Text *Learn More...*" >}}
> Collapsed text
{{< /details >}}

### Callouts in my site

I also, found out and edited the [osbidian](https://obsidian.md/) style callout. Currently it supports only `important`, `tip`, `warning`, and `info`.

```txt
{{</* box important  */>}}
**This is a bold line**

Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, omnis aliquam...
{{</* /box */>}}
```

this is the output you will get:
{{< box important  >}}
**This is a bold line**

Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, omnis aliquam...
{{< /box >}}

Similarly, you can create for others.

{{< box tip  >}}
**This is a bold line**

Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, omnis aliquam...
{{< /box >}}

{{< box warning  >}}
**This is a bold line**

Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, omnis aliquam...
{{< /box >}}


{{< box info >}}
**This is a bold line**

Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, omnis aliquam...
{{< /box >}}

I will update other usefull tips soon...
