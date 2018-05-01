import React, { Component } from 'react'
import Container from '../assets/Container'
import _link from '../dom/_link'
import _h1 from '../dom/_h1'

class HOME extends Component {

  render() {

    return (

      <Container>
        <_h1 content="HOME" />
        <_link url="/404" content="Go to 404" />
      </Container>

    )

  }

}

export default HOME;
