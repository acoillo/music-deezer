import React, { Component } from 'react';
import { Select, Row, Col } from 'antd';
import deezer from '../../services/api/deezer.js';
import './styles.scss';

const { Option } = Select;

class Buscar extends Component {
  state = {
    data: [],
    index: null,
    seleccionado: false,
    index_copia: null,
    data_copia: []
  };

  handleSearch = value => {
    if (value) {
      this.setState({
        index: null
      });
      deezer.getBuscarCancion(value).then(item => this.setState({
        data: item
      }))
    } else {
      if (this.state.seleccionado) {
        this.setState({
          index: this.state.index_copia,
          data: this.state.data_copia,
        });
      }
      else {
        this.setState({ data: [] });
      }
    }
  };

  handleChange = index => {
    this.setState({
      index,
      index_copia: index,
      data_copia: this.state.data,
      seleccionado: true
    });

    const nuevo_dato = {
      id: this.state.data[index].id,
      title: this.state.data[index].title,
      preview: this.state.data[index].preview,
      link: this.state.data[index].link,
      artist: {
        id: this.state.data[index].artist.id,
        name: this.state.data[index].artist.name,
        link: this.state.data[index].artist.link,
        picture_big: this.state.data[index].artist.picture_big
      },
      album: {
        id: this.state.data[index].album.id,
        title: this.state.data[index].album.title,
        cover_big: this.state.data[index].album.cover_big
      }
    };
    this.props.onSelectCancion(nuevo_dato, this.state.data);
  };

  render() {
    const canciones = this.state.data.map((data, index) => <Option key={index}>{data.title} - {data.artist.name}</Option>);
    return (
      <div className='contenedor__header--buscar'>
        <Select
          showSearch
          value={this.state.index}
          placeholder={
            <Row justify="space-between">
              <Col span={6} style={{ textAlign: 'left' }}><span>Buscar</span></Col>
              <Col span={6} style={{ textAlign: 'right' }}><i class="fas fa-search" ></i></Col>
            </Row>
          }
          style={this.props.style}
          defaultActiveFirstOption={false}
          showArrow={false}
          filterOption={false}
          onSearch={this.handleSearch}
          onChange={this.handleChange}
          notFoundContent={null}
        >
          {canciones}
        </Select>
      </div>
    );
  }
}

export default Buscar;

