import React from 'react'

export default class OpenBlog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      content: ''
    }
  }

  updateContent = async (url) => {
    const response = await fetch(url)
    const content = await response.json()
    console.log(content)
    this.setState({ content: content })
  }

  componentDidMount() {
    const currentPagePath = window.location.pathname
    const currentPageName = currentPagePath.split('/').filter(Boolean).pop()
    const basePageUrl =
      window.location.origin +
      currentPagePath.replace('/' + currentPageName, '')

    const url =
      'https://openblog.app/api/get_embedded_page?blog_id=' +
      this.props.blogId +
      '&page_handle=' +
      currentPageName +
      '&externalUrl=' +
      basePageUrl

    this.updateContent(url)
  }

  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
      </div>
    )
  }
}
