# React library for OpenBlog

![OpenBlog logo](https://openblog.app/openblog-logo.svg)

react-openblog is a react library to integrate OpenBlog in minutes in your app.

You need an account from [openblog.app](openblog.app) to use this library.

## Install

```bash
npm install --save @openblog/react-openblog
```

## Usage

```jsx
import React from 'react'
import { OpenBlog } from '@openblog/react-openblog'

const Blog = () => {
  return <OpenBlog blogId='ce432938-1d15-4375-ad7a-2091322f5b74'></OpenBlog>
}

export default Blog
```

## Router configuration

This library require a catch-all page to intercept all pages requests.

First create a /blog ( or any other name ) directory in your react project.

Then configure the react router to intercept all requests in this directory and send them to the Blog component.

```jsx
<BrowserRouter>
  <Routes>
    ...
    <Route path='/blog'>
      <Route path='' element={<Navigate to='/blog/index' />} />
      <Route path='*' element={<Blog />} />
    </Route>
  </Routes>
</BrowserRouter>
```
