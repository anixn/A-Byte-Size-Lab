---
title: Customizing 'Hugo' site with shortcodes - callouts, collapsable, and more
author: 'Dr. Ankit Deshmukh'
date: '2025-01-04'
slug: []
categories: ["hugo"]
tags: ["config", "utility"]
toc: true
draft: false
---

### What is Hugo's shortcode?
- A Hugo shortcode is a reusable and customizable template-like feature
- Shortcodes are written using Hugo's templating language (based on Go templates). They are placed in the layouts/shortcodes directory of your Hugo project.
- Create a Shortcode File
    - Save this as `layouts/shortcodes/your_shortcode.html`

```txt
your-site/
├── archetypes/
│   └── default.md
├── assets/
├── content/
├── data/
├── i18n/
├── layouts/
├── └── shortcodes/    <-- your_shortcode.html
├── static/
├── themes/
└── hugo.yaml
```

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

### Shortcode for collapse section
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

### Callouts on my site

I also, found out and edited the [osbidian](https://obsidian.md/) style callout. Currently it supports only `important`, `tip`, `warning`, and `info`.

```txt
{{</* box important  */>}}
**This is a bold line**

Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, omnis aliquam...
{{</* /box */>}}
```

This is the output you will get:
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

### YouTube shortcode
We can embed YouTube videos with the inbuilt YouTube shortcode


{{</* youtube video_id */>}}

The YouTube Video ID is the string of characters that appears after `v=` in the URL. See the video ID from the following URL

```
  https://www.youtube.com/watch?v=pp6NX5lyx54
  {{</* youtube pp6NX5lyx54 */>}}
```

{{< youtube pp6NX5lyx54 >}}


### Add quotes with Hugo

```html
<blockquote class="custom-quote">
    <p>{{ .Inner }}</p>
    {{ if .Get "author" }}
        <footer>— {{ .Get "author" }}</footer>
    {{ end }}
</blockquote>

<style>
    .custom-quote {
        font-style: italic;
        border-left: 4px solid #ccc;
        padding-left: 1em;
        margin: 1.5em 0;
        color: #555;
    }
    .custom-quote footer {
        margin-top: 0.5em;
        font-size: 0.9em;
        color: #888;
    }
</style>
```

To use the `quote` shortcode do the following.

```txt
{{</* quote author="Albert Einstein" */>}}
Imagination is more important than knowledge.
{{</* /quote */>}}
```

{{< quote author="Albert Einstein" >}}
Imagination is more important than knowledge.
{{< /quote >}}


---

I will keep updating new shortcodes and tips ...
