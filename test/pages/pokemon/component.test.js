
// Unit Test Code with CodeGPT
import React from 'react';
import { shallow } from 'enzyme';
/* import Layout from "../../components/layout";
import Head from "next/head";
import Movements from "../../components/movements"; */
import Pokemon from '../../components/pokemon';

describe('Pokemon component', () => {

  let props;

  beforeEach(() => {
    props = { 
      pokemon: { 
        name: 'pikachu', 
        stats: [{ stat: { name: 'hp' }, base_stat: 100 }], 
        sprites: { other: { home: { front_default: '' } } }, 
        abilities: [] 
      } 
    };

    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({ json: () => Promise.resolve(props.pokemon) }));    

    Pokemon.getInitialProps = jest.fn().mockImplementation(() => Promise.resolve({ pokemon : props.pokemon }));    

    const wrapper = shallow(<Pokemon />);

    expect(wrapper).toMatchSnapshot();  

    expect(wrapper).toBeDefined();  

    expect(wrapper).toBeInstanceOf(Object);  

    expect(wrapper).toHaveLength(1);  

    expect(wrapper.find('Layout')).toHaveLength(1);  

    expect(wrapper.find('Head')).toHaveLength(1);  

    expect(wrapper.find('Movements')).toHaveLength(1);  

    const instance = wrapper.instance();    

    expect (instance).toBeInstanceOf (Pokemon);    

    const titleElement = wrapper.find('title');    

    expect (titleElement).toHaveLength (1);    

    expect (titleElement.text()).toEqual ('PIKACHU');    

  });  																	                                                                           });