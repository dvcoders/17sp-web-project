# Yakker

A simple blogging website which requires frontend, backend, and database. We’ll be using JavaScript for the project.

Basically a Twitter/YikYak clone.


# Week 1

[http://getskeleton.com/#grid](http://getskeleton.com/#grid)

[https://github.com/dhg/Skeleton/blob/master/css/skeleton.css#L81](https://github.com/dhg/Skeleton/blob/master/css/skeleton.css#L81)

To use the grid by Skeleton, we first need an element with class `container`.

```html
<div class="container">
  <!-- Content here -->
</div>
```

Then we create rows inside that by using the `row` class.

```html
<div class="row">
  <!-- Content here -->
</div>
```

Within rows we can make columns that then hold the actual content, use `column` or `columns` class.

```html
<div class="columns">
  <!-- Content here -->
</div>
```

So yes, all total we have at least three levels of `div`s

```html
<div class="container">
  <div class="row">
    <div class="columns">
      <!-- Content here -->
    </div>
  </div>

  <!-- Rows can be next to each other -->
  <div class="row">
    <div class="columns">
      <!-- Content here -->
    </div>

    <!-- And so can columns -->
    <div class="columns">
      <!-- Content here -->
    </div>
  </div>
</div>
```

Check out the websites above for how to choose sizes for the columns and how to offset them.
