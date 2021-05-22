import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';

import Intro from './Intro';
import Form from './Form';
import ShortenedUrl from './ShortenedUrl';
import Features from './Features/Features';
import Outro from './Outro';


export default class Main extends Component {
  constructor(props) {
    super(props);
    if (!localStorage.getItem('urls')) {
      localStorage.setItem('urls', '[]');
    }

    this.state = {
      urls: JSON.parse(localStorage.getItem('urls')).map(item => ({ ...item, copied: false })),
      inputValue: '',
      inputError: '',
      loading: false
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        this.setState(prevState => ({ urls: prevState.urls.map(item => ({ ...item, visible: false })) }));
        setTimeout(() => {
          this.setState({ urls: [] });
          updateLocalStorage('urls', '[]');
        }, 400);
      }
    });
  }

  onClick = () => {
    if (!this.state.inputValue) {
      this.setState({ inputError: 'empty' });
    } else {
      this.setState({ loading: true });
      getShortenedUrl(this.state.inputValue).then(data => {
        if (typeof data === 'object') {
          this.setState({ inputError: 'invalid', loading: false });
        } else {
          this.setState(prevState => {
            return {
              urls: [...prevState.urls, { url: prevState.inputValue, shortenedUrl: data, copied: false, visible: true }],
              inputValue: '',
              loading: false
            };
          });
          updateLocalStorage('urls', JSON.stringify(this.state.urls));
        }
      });
    }
  }

  copy = index => {
    navigator.clipboard.writeText(this.state.urls[index].shortenedUrl).then(
      () => {
        this.setState(prevState => ({
          urls: prevState.urls.map(
            (item, i) => i === index ? { ...item, copied: true } : { ...item, copied: false })
        }))
      }
    ).catch(err => console.log('Error while copying: ', err));
  }

  render() {
    return (
      <Container>
        <Intro />
        <Form
          onChange={e => this.setState({ inputValue: e.target.value })}
          onFocus={() => this.setState({ inputError: '' })}
          value={this.state.inputValue}
          onClick={this.onClick}
          inputError={this.state.inputError}
          loading={this.state.loading}
        />
        <ShortUrlsContainer>
          {this.state.urls.map((item, index) => (
            <ShortenedUrl
              key={item.shortenedUrl}
              onClick={() => this.copy(index)}
              fullLink={item.url}
              shortLink={item.shortenedUrl}
              copied={item.copied}
              visible={item.visible}
              width={this.props.width}
            />)
          )}
        </ShortUrlsContainer>
        <Features />
        <Outro />
      </Container>
    );
  }
}


function updateLocalStorage(key, val) {
  localStorage.setItem(key, val);
}

async function getShortenedUrl(url) {
  let response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
  if (!response.ok) {
    return new Error('This is not a valid url!');
  }

  let data = await response.json();
  return data.result.full_short_link2;
}

const Container = styled.main`
  overflow-x: hidden;
`;

const ShortUrlsContainer = styled.div`
  background-color: ${colors['main-bg']};
`;
